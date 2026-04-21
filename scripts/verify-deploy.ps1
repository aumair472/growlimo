# Frontend Deployment Verification Script (PowerShell)
# Verifies that the frontend can correctly communicate with the API

$ErrorActionPreference = "Stop"

# Configuration
$API_URL = if ($env:VITE_API_URL) { $env:VITE_API_URL } else { "https://api.growlimo.com" }
$FRONTEND_URL = if ($env:VITE_SITE_URL) { $env:VITE_SITE_URL } else { "https://growlimo.com" }

Write-Host "=========================================" -ForegroundColor Cyan
Write-Host "Frontend Deployment Verification" -ForegroundColor Cyan
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "API URL: $API_URL"
Write-Host "Frontend URL: $FRONTEND_URL"
Write-Host ""

$PASSED = 0
$FAILED = 0

# Test 1: Check API is reachable
Write-Host "1. Testing API connectivity..." -ForegroundColor Yellow
try {
    $response = Invoke-WebRequest -Uri $API_URL -Method Head -TimeoutSec 10 -UseBasicParsing -ErrorAction Stop
    Write-Host "✓ API is reachable at $API_URL" -ForegroundColor Green
    $PASSED++
} catch {
    Write-Host "✗ API is not reachable at $API_URL" -ForegroundColor Red
    Write-Host "   Check: DNS, firewall, or API server status" -ForegroundColor Yellow
    $FAILED++
}
Write-Host ""

# Test 2: Health endpoint
Write-Host "2. Testing /api/health endpoint..." -ForegroundColor Yellow
try {
    $response = Invoke-RestMethod -Uri "$API_URL/api/health" -Method Get -TimeoutSec 10 -ErrorAction Stop
    if ($response.status -eq "OK" -or $response.message) {
        Write-Host "✓ Health endpoint responded" -ForegroundColor Green
        Write-Host "   Response: $($response | ConvertTo-Json -Compress)" -ForegroundColor Gray
        $PASSED++
    } else {
        Write-Host "✗ Health endpoint returned unexpected response" -ForegroundColor Red
        $FAILED++
    }
} catch {
    Write-Host "✗ Health endpoint failed: $($_.Exception.Message)" -ForegroundColor Red
    $FAILED++
}
Write-Host ""

# Test 3: Blog listing endpoint
Write-Host "3. Testing /api/blog endpoint..." -ForegroundColor Yellow
try {
    $response = Invoke-RestMethod -Uri "$API_URL/api/blog?limit=5" -Method Get -TimeoutSec 10 -ErrorAction Stop
    if ($response.success -or $response.data) {
        Write-Host "✓ Blog endpoint responded" -ForegroundColor Green
        $blogCount = if ($response.data) { $response.data.Count } else { 0 }
        Write-Host "   Found $blogCount blog posts" -ForegroundColor Gray
        $PASSED++
    } else {
        Write-Host "✗ Blog endpoint returned unexpected response" -ForegroundColor Red
        $FAILED++
    }
} catch {
    Write-Host "✗ Blog endpoint failed: $($_.Exception.Message)" -ForegroundColor Red
    $FAILED++
}
Write-Host ""

# Test 4: CORS headers
Write-Host "4. Testing CORS configuration..." -ForegroundColor Yellow
try {
    $headers = @{
        "Origin" = $FRONTEND_URL
        "Access-Control-Request-Method" = "GET"
    }
    $response = Invoke-WebRequest -Uri "$API_URL/api/blog" -Method Options -Headers $headers -TimeoutSec 10 -UseBasicParsing -ErrorAction Stop
    $corsHeaders = $response.Headers | Where-Object { $_ -like "*access-control*" }
    if ($corsHeaders) {
        Write-Host "✓ CORS headers present" -ForegroundColor Green
        Write-Host "   Headers: $corsHeaders" -ForegroundColor Gray
        $PASSED++
    } else {
        Write-Host "⚠ CORS headers not found" -ForegroundColor Yellow
    }
} catch {
    Write-Host "⚠ CORS test inconclusive: $($_.Exception.Message)" -ForegroundColor Yellow
}
Write-Host ""

# Test 5: API response format
Write-Host "5. Testing API response format..." -ForegroundColor Yellow
try {
    $response = Invoke-RestMethod -Uri "$API_URL/api/blog?limit=1" -Method Get -TimeoutSec 10 -ErrorAction Stop
    if ($response.success -or $response.data) {
        Write-Host "✓ API returns expected JSON format" -ForegroundColor Green
        $PASSED++
    } else {
        Write-Host "⚠ API response format may be unexpected" -ForegroundColor Yellow
    }
} catch {
    Write-Host "⚠ Could not verify response format" -ForegroundColor Yellow
}
Write-Host ""

# Test 6: SSL/TLS certificate
Write-Host "6. Testing SSL/TLS certificate..." -ForegroundColor Yellow
if ($API_URL -like "https://*") {
    try {
        $uri = [System.Uri]$API_URL
        $tcpClient = New-Object System.Net.Sockets.TcpClient($uri.Host, 443)
        $sslStream = New-Object System.Net.Security.SslStream($tcpClient.GetStream())
        $sslStream.AuthenticateAsClient($uri.Host)
        $cert = $sslStream.RemoteCertificate
        $sslStream.Close()
        $tcpClient.Close()
        Write-Host "✓ SSL certificate is valid" -ForegroundColor Green
        $PASSED++
    } catch {
        Write-Host "⚠ SSL certificate check failed: $($_.Exception.Message)" -ForegroundColor Yellow
    }
} else {
    Write-Host "⚠ API URL is not using HTTPS" -ForegroundColor Yellow
}
Write-Host ""

# Test 7: Response time
Write-Host "7. Testing API response time..." -ForegroundColor Yellow
try {
    $stopwatch = [System.Diagnostics.Stopwatch]::StartNew()
    $response = Invoke-RestMethod -Uri "$API_URL/api/health" -Method Get -TimeoutSec 10 -ErrorAction Stop
    $stopwatch.Stop()
    $responseTime = $stopwatch.Elapsed.TotalSeconds
    if ($responseTime -lt 2.0) {
        Write-Host "✓ API response time is acceptable ($([math]::Round($responseTime, 2))s)" -ForegroundColor Green
        $PASSED++
    } else {
        Write-Host "⚠ API response time is slow ($([math]::Round($responseTime, 2))s)" -ForegroundColor Yellow
    }
} catch {
    Write-Host "⚠ Could not measure response time" -ForegroundColor Yellow
}
Write-Host ""

# Test 8: Frontend URL accessibility
Write-Host "8. Testing frontend URL accessibility..." -ForegroundColor Yellow
try {
    $response = Invoke-WebRequest -Uri $FRONTEND_URL -Method Head -TimeoutSec 10 -UseBasicParsing -ErrorAction Stop
    Write-Host "✓ Frontend is reachable at $FRONTEND_URL" -ForegroundColor Green
    $PASSED++
} catch {
    Write-Host "⚠ Frontend is not reachable at $FRONTEND_URL" -ForegroundColor Yellow
    Write-Host "   This may be expected if not yet deployed" -ForegroundColor Gray
}
Write-Host ""

# Summary
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host "Verification Summary" -ForegroundColor Cyan
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host "Passed: $PASSED" -ForegroundColor Green
Write-Host "Failed: $FAILED" -ForegroundColor Red
Write-Host ""

if ($FAILED -eq 0) {
    Write-Host "✓ All critical tests passed!" -ForegroundColor Green
    exit 0
} else {
    Write-Host "✗ Some tests failed. Please review the errors above." -ForegroundColor Red
    exit 1
}

