# Verification Commands for SEO Fix

## Instructions for Developer

Run these cURL commands to verify that the X-Robots-Tag headers are correctly set for all pages.

### Command Format
```bash
curl -I -L https://growlimo.com/[URL]
```

**Flags explained:**
- `-I`: Fetch only HTTP headers (not page content)
- `-L`: Follow redirects to see final destination headers

---

## ✅ Public Pages - Should Show: `x-robots-tag: index, follow`

### Main Static Pages
```bash
# Homepage
curl -I -L https://growlimo.com/

# Contact Page
curl -I -L https://growlimo.com/contact

# About Page
curl -I -L https://growlimo.com/about

# Services Overview
curl -I -L https://growlimo.com/services

# Blog Listing
curl -I -L https://growlimo.com/blog

# Case Studies Overview
curl -I -L https://growlimo.com/case-studies

# Privacy Policy
curl -I -L https://growlimo.com/privacy-policy

# Terms and Conditions
curl -I -L https://growlimo.com/terms-and-conditions
```

### Service Detail Pages
```bash
# Service: Paid Advertising
curl -I -L https://growlimo.com/services/paid-advertising

# Service: SEO Content
curl -I -L https://growlimo.com/services/seo-content

# Service: Social Media
curl -I -L https://growlimo.com/services/social-media

# Service: Google Business
curl -I -L https://growlimo.com/services/google-business
```

### Blog Posts (Dynamic)
```bash
# Blog Post Example
curl -I -L https://growlimo.com/blog/google-ads-for-limousine-companies-usa

# Test with any blog post slug
curl -I -L https://growlimo.com/blog/[any-blog-slug]
```

### Case Studies (Dynamic)
```bash
# Case Study: Bottle Buss
curl -I -L https://growlimo.com/case-studies/bottle-buss

# Case Study: Capital City Buses
curl -I -L https://growlimo.com/case-studies/capital-city-buses

# Test with any case study slug
curl -I -L https://growlimo.com/case-studies/[any-case-study-slug]
```

### City Landing Pages
```bash
# Miami
curl -I -L https://growlimo.com/limo-marketing-miami-fl

# New York
curl -I -L https://growlimo.com/limo-marketing-new-york-ny

# Los Angeles
curl -I -L https://growlimo.com/limo-marketing-los-angeles-ca

# Chicago
curl -I -L https://growlimo.com/limo-marketing-chicago-il

# Houston
curl -I -L https://growlimo.com/limo-marketing-houston-tx

# Las Vegas
curl -I -L https://growlimo.com/limo-marketing-las-vegas-nv

# Atlanta
curl -I -L https://growlimo.com/limo-marketing-atlanta-ga
```

### State Landing Pages
```bash
# California
curl -I -L https://growlimo.com/limo-marketing-california

# Texas
curl -I -L https://growlimo.com/limo-marketing-texas

# Florida
curl -I -L https://growlimo.com/car-rental-marketing-florida

# New York State
curl -I -L https://growlimo.com/party-bus-marketing-new-york

# Nevada
curl -I -L https://growlimo.com/limo-marketing-nevada

# Illinois
curl -I -L https://growlimo.com/limo-marketing-illinois

# Pennsylvania
curl -I -L https://growlimo.com/limo-marketing-pennsylvania
```

---

## ❌ Admin Pages - Should Show: `x-robots-tag: noindex, nofollow`

```bash
# Admin Dashboard
curl -I -L https://growlimo.com/admin

# Admin Login
curl -I -L https://growlimo.com/admin/login

# Admin Blog Management
curl -I -L https://growlimo.com/admin/blog
```

---

## 🔍 What to Look For in the Output

### ✅ CORRECT Output for Public Pages:
```
HTTP/2 200
date: [Date]
content-type: text/html; charset=UTF-8
...
x-robots-tag: index, follow    <-- CORRECT: This allows indexing
...
```

### ✅ CORRECT Output for Admin Pages:
```
HTTP/2 200
date: [Date]
content-type: text/html; charset=UTF-8
...
x-robots-tag: noindex, nofollow    <-- CORRECT: This blocks indexing
...
```

### ❌ INCORRECT Output (Issue):
```
HTTP/2 200
date: [Date]
content-type: text/html; charset=UTF-8
...
x-robots-tag: noindex    <-- PROBLEM: Public page should show "index, follow"
...
```

---

## Quick Verification Script

You can also create a simple bash script to test multiple pages at once:

```bash
#!/bin/bash

echo "Testing Public Pages (should show 'index, follow'):"
echo "=================================================="

pages=(
  "/"
  "/contact"
  "/about"
  "/services"
  "/blog"
  "/case-studies"
  "/privacy-policy"
  "/terms-and-conditions"
  "/services/paid-advertising"
  "/blog/google-ads-for-limousine-companies-usa"
  "/case-studies/bottle-buss"
  "/limo-marketing-miami-fl"
  "/limo-marketing-california"
)

for page in "${pages[@]}"; do
  echo -n "Testing: $page ... "
  header=$(curl -sI -L "https://growlimo.com$page" | grep -i "x-robots-tag")
  if echo "$header" | grep -qi "index, follow"; then
    echo "✅ PASS"
  else
    echo "❌ FAIL - Found: $header"
  fi
done

echo ""
echo "Testing Admin Pages (should show 'noindex, nofollow'):"
echo "======================================================"

admin_pages=(
  "/admin"
  "/admin/login"
  "/admin/blog"
)

for page in "${admin_pages[@]}"; do
  echo -n "Testing: $page ... "
  header=$(curl -sI -L "https://growlimo.com$page" | grep -i "x-robots-tag")
  if echo "$header" | grep -qi "noindex, nofollow"; then
    echo "✅ PASS"
  else
    echo "❌ FAIL - Found: $header"
  fi
done
```

---

## Expected Results After Fix

1. **All public pages** should return: `x-robots-tag: index, follow`
2. **All admin pages** should return: `x-robots-tag: noindex, nofollow`
3. **No pages** should return: `x-robots-tag: noindex` (unless it's an admin page)

---

## If Issues Persist

If any public page still shows `x-robots-tag: noindex`:

1. **Check .htaccess file** - Ensure it's uploaded to the server root
2. **Verify Apache mod_headers is enabled:**
   ```bash
   apache2ctl -M | grep headers
   ```
3. **Check for conflicting rules** in parent directories or server config
4. **Clear server/CDN cache** after uploading .htaccess
5. **Restart Apache** if needed:
   ```bash
   sudo systemctl restart apache2
   # or
   sudo service apache2 restart
   ```

---

## Notes

- These commands test the **HTTP headers** sent by the server
- The headers are set in `.htaccess` file (Apache) or server config
- React components also set HTML meta tags, but HTTP headers take precedence
- After fixing, wait 5-10 minutes for server changes to propagate before testing
