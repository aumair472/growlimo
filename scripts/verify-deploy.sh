#!/bin/bash
# Frontend Deployment Verification Script
# Verifies that the frontend can correctly communicate with the API

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
API_URL="${VITE_API_URL:-https://api.growlimo.com}"
FRONTEND_URL="${VITE_SITE_URL:-https://www.growlimo.com}"

echo "========================================="
echo "Frontend Deployment Verification"
echo "========================================="
echo ""
echo "API URL: $API_URL"
echo "Frontend URL: $FRONTEND_URL"
echo ""

# Track results
PASSED=0
FAILED=0

# Function to print success
print_success() {
    echo -e "${GREEN}✓${NC} $1"
    ((PASSED++))
}

# Function to print failure
print_failure() {
    echo -e "${RED}✗${NC} $1"
    ((FAILED++))
}

# Function to print warning
print_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

# Test 1: Check API is reachable
echo "1. Testing API connectivity..."
if curl -s --max-time 10 --head "$API_URL" > /dev/null 2>&1; then
    print_success "API is reachable at $API_URL"
else
    print_failure "API is not reachable at $API_URL"
    echo "   Check: DNS, firewall, or API server status"
fi
echo ""

# Test 2: Health endpoint
echo "2. Testing /api/health endpoint..."
HEALTH_RESPONSE=$(curl -s --max-time 10 "$API_URL/api/health" 2>&1)
if echo "$HEALTH_RESPONSE" | grep -q "OK\|status"; then
    print_success "Health endpoint responded"
    echo "   Response: $HEALTH_RESPONSE"
else
    print_failure "Health endpoint failed or returned unexpected response"
    echo "   Response: $HEALTH_RESPONSE"
fi
echo ""

# Test 3: Blog listing endpoint
echo "3. Testing /api/blog endpoint..."
BLOG_RESPONSE=$(curl -s --max-time 10 "$API_URL/api/blog?limit=5" 2>&1)
if echo "$BLOG_RESPONSE" | grep -q "success\|data"; then
    print_success "Blog endpoint responded"
    BLOG_COUNT=$(echo "$BLOG_RESPONSE" | grep -o '"id"' | wc -l || echo "0")
    echo "   Found $BLOG_COUNT blog posts"
else
    print_failure "Blog endpoint failed or returned unexpected response"
    echo "   Response: ${BLOG_RESPONSE:0:200}..."
fi
echo ""

# Test 4: CORS headers
echo "4. Testing CORS configuration..."
CORS_HEADERS=$(curl -s --max-time 10 -H "Origin: $FRONTEND_URL" \
    -H "Access-Control-Request-Method: GET" \
    -X OPTIONS "$API_URL/api/blog" \
    -I 2>&1 | grep -i "access-control" || echo "")

if echo "$CORS_HEADERS" | grep -qi "access-control-allow-origin"; then
    print_success "CORS headers present"
    echo "   Headers: $CORS_HEADERS"
else
    print_warning "CORS headers not found or not configured"
    echo "   This may cause issues if frontend and API are on different domains"
fi
echo ""

# Test 5: API response format
echo "5. Testing API response format..."
if echo "$BLOG_RESPONSE" | grep -q '"success"'; then
    print_success "API returns expected JSON format"
else
    print_warning "API response format may be unexpected"
fi
echo ""

# Test 6: SSL/TLS certificate
echo "6. Testing SSL/TLS certificate..."
if echo "$API_URL" | grep -q "^https://"; then
    CERT_CHECK=$(echo | openssl s_client -connect $(echo $API_URL | sed 's|https\?://||' | cut -d/ -f1):443 -servername $(echo $API_URL | sed 's|https\?://||' | cut -d/ -f1) 2>&1 | grep -i "verify return code" || echo "")
    if echo "$CERT_CHECK" | grep -q "0 (ok)"; then
        print_success "SSL certificate is valid"
    else
        print_warning "SSL certificate check failed or certificate may be invalid"
        echo "   Check: $CERT_CHECK"
    fi
else
    print_warning "API URL is not using HTTPS"
fi
echo ""

# Test 7: Response time
echo "7. Testing API response time..."
RESPONSE_TIME=$(curl -s --max-time 10 -o /dev/null -w "%{time_total}" "$API_URL/api/health" 2>&1 || echo "999")
if (( $(echo "$RESPONSE_TIME < 2.0" | bc -l 2>/dev/null || echo 0) )); then
    print_success "API response time is acceptable (${RESPONSE_TIME}s)"
else
    print_warning "API response time is slow (${RESPONSE_TIME}s)"
fi
echo ""

# Test 8: Frontend URL accessibility
echo "8. Testing frontend URL accessibility..."
if curl -s --max-time 10 --head "$FRONTEND_URL" > /dev/null 2>&1; then
    print_success "Frontend is reachable at $FRONTEND_URL"
else
    print_warning "Frontend is not reachable at $FRONTEND_URL"
    echo "   This may be expected if not yet deployed"
fi
echo ""

# Summary
echo "========================================="
echo "Verification Summary"
echo "========================================="
echo -e "${GREEN}Passed: $PASSED${NC}"
echo -e "${RED}Failed: $FAILED${NC}"
echo ""

if [ $FAILED -eq 0 ]; then
    echo -e "${GREEN}✓ All critical tests passed!${NC}"
    exit 0
else
    echo -e "${RED}✗ Some tests failed. Please review the errors above.${NC}"
    exit 1
fi

