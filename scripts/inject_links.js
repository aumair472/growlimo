import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const SERVICES_DIR = path.join(process.cwd(), 'content/services');
const BLOG_DIR = path.join(process.cwd(), 'content/blog');

// Helper to get arguments
const args = process.argv.slice(2);
const phaseArg = args.find(arg => arg.startsWith('--phase='));
const phase = phaseArg ? parseInt(phaseArg.split('=')[1], 10) : 1;

console.log(`Executing Internal Linking Audit Script - Phase ${phase}`);

// Service keywords mapping for contextual relevance scoring & anchor text matching
const serviceKeywordsMap = [
  {
    slugPart: 'dentist-seo-services',
    keywords: ['dentist seo', 'dental seo', 'dental seo services', 'seo for dentists', 'seo for dentist', 'dental search engine optimization']
  },
  {
    slugPart: 'healthcare-seo-services',
    keywords: ['healthcare seo', 'medical seo', 'healthcare seo services', 'seo for doctors', 'medical practice seo', 'medical clinic seo']
  },
  {
    slugPart: 'dentist-google-ads',
    keywords: ['dentist google ads', 'dental google ads', 'google ads for dentists', 'dental pay-per-click', 'dental ppc']
  },
  {
    slugPart: 'healthcare-google-ads',
    keywords: ['healthcare google ads', 'medical google ads', 'google ads for doctors', 'medical ads', 'google ads for clinics']
  },
  {
    slugPart: 'dentist-facebook-ads',
    keywords: ['dentist facebook ads', 'dental facebook ads', 'facebook ads for dentists', 'dental social ads']
  },
  {
    slugPart: 'healthcare-facebook-ads',
    keywords: ['healthcare facebook ads', 'medical facebook ads', 'facebook ads for clinics', 'medical practice facebook ads']
  },
  {
    slugPart: 'dentist-meta-ads',
    keywords: ['dentist meta ads', 'dental meta ads', 'meta ads for dentists', 'dental instagram ads']
  },
  {
    slugPart: 'healthcare-meta-ads',
    keywords: ['healthcare meta ads', 'medical meta ads', 'meta ads for clinics', 'medical meta ads']
  },
  {
    slugPart: 'dentist-ppc-services',
    keywords: ['dentist ppc services', 'dental ppc services', 'dental pay per click', 'ppc for dentists']
  },
  {
    slugPart: 'healthcare-ppc-services',
    keywords: ['healthcare ppc services', 'medical ppc services', 'healthcare pay per click', 'medical pay per click']
  },
  {
    slugPart: 'dentist-digital-marketing',
    keywords: ['dentist digital marketing', 'dental marketing agency', 'dental digital marketing', 'marketing for dental practices', 'dental practices and dsos']
  },
  {
    slugPart: 'healthcare-digital-marketing',
    keywords: ['healthcare digital marketing', 'medical digital marketing', 'healthcare digital marketing agency', 'healthcare marketing agency', 'medical marketing agency']
  },
  {
    slugPart: 'seo-services',
    keywords: ['seo services', 'search engine optimization', 'local seo services', 'seo strategy', 'seo campaigns', 'organic search rankings']
  },
  {
    slugPart: 'google-ads-management',
    keywords: ['google ads management', 'google ads campaign', 'google adwords', 'google ads optimization', 'paid search campaigns']
  },
  {
    slugPart: 'facebook-ads-management',
    keywords: ['facebook ads management', 'facebook advertising', 'facebook ad campaigns', 'facebook lead generation', 'facebook ads']
  },
  {
    slugPart: 'meta-ads-agency',
    keywords: ['meta ads agency', 'meta ads management', 'instagram advertising', 'instagram ads', 'meta ads']
  },
  {
    slugPart: 'ppc-services',
    keywords: ['ppc services', 'ppc advertising', 'pay-per-click', 'ppc campaigns', 'ppc services']
  },
  {
    slugPart: 'social-media-marketing',
    keywords: ['social media marketing', 'social media strategy', 'social media branding', 'instagram marketing', 'social media presence']
  },
  {
    slugPart: 'email-marketing-services',
    keywords: ['email marketing', 'email marketing services', 'email automation', 'marketing automation', 'patient retention', 'email campaigns']
  },
  {
    slugPart: 'web-design-services',
    keywords: ['web design services', 'website design', 'web designer', 'website redesign', 'page speed', 'conversion rate optimization', 'web design']
  },
  {
    slugPart: 'web-developer',
    keywords: ['web development', 'web developer', 'website development', 'coding websites', 'web development services']
  },
  {
    slugPart: 'digital-marketing-agency',
    keywords: ['digital marketing agency', 'digital marketing services', 'online marketing agency', 'internet marketing']
  }
];

// Helper to count substring occurrences
function countOccurrences(text, keyword) {
  if (!keyword) return 0;
  const regex = new RegExp(`\\b${escapeRegExp(keyword)}\\b`, 'gi');
  const matches = text.match(regex);
  return matches ? matches.length : 0;
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Stop words for title overlap check
const stopWords = new Set(['and', 'the', 'a', 'an', 'for', 'to', 'in', 'on', 'at', 'with', 'by', 'of', 'about', 'how', 'why', 'your', 'is', 'are', 'what', 'us', 'today', '2026', 'guide', 'tips', 'best', 'new']);

// Build keywords from blog titles and tags
function getBlogKeywords(blog) {
  const keywords = new Set();
  
  if (blog.tags) {
    blog.tags.forEach(tag => keywords.add(tag.toLowerCase()));
  }
  
  const titleWords = blog.title.toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .split(/\s+/)
    .filter(w => w.length > 3 && !stopWords.has(w));
  
  if (titleWords.length > 0) {
    keywords.add(titleWords.join(' '));
    for (let i = 0; i < titleWords.length - 1; i++) {
      keywords.add(`${titleWords[i]} ${titleWords[i+1]}`);
    }
  }

  return Array.from(keywords);
}

// Helper to classify blog niches with stricter checks
function getBlogNiche(blogTextLower, tags, titleLower) {
  const dentalTerms = ['dentist', 'dental', 'orthodont', 'teeth', 'smile', 'veneer', 'implant'];
  const healthcareTerms = ['health', 'medic', 'clinic', 'patient', 'doctor', 'hospital', 'physio', 'chiro', 'pediatr', 'rehab', 'clinics', 'hospitals'];

  const tagMatchDental = tags.some(t => dentalTerms.some(term => t.toLowerCase().includes(term)));
  const titleMatchDental = dentalTerms.some(term => titleLower.includes(term));
  const contentCountDental = dentalTerms.reduce((sum, term) => sum + countOccurrences(blogTextLower, term), 0);

  const tagMatchHealthcare = tags.some(t => healthcareTerms.some(term => t.toLowerCase().includes(term)));
  const titleMatchHealthcare = healthcareTerms.some(term => titleLower.includes(term));
  const contentCountHealthcare = healthcareTerms.reduce((sum, term) => sum + countOccurrences(blogTextLower, term), 0);

  if (tagMatchDental || titleMatchDental || contentCountDental >= 5) {
    return 'dental';
  }

  if (tagMatchHealthcare || titleMatchHealthcare || contentCountHealthcare >= 5) {
    return 'healthcare';
  }

  return 'general';
}

// Global Discovery Cache
let cachedServices = [];
let cachedBlogs = [];

function loadDiscoveryData() {
  if (fs.existsSync(path.join(process.cwd(), 'scripts/discovery_index.json'))) {
    const rawIndex = fs.readFileSync(path.join(process.cwd(), 'scripts/discovery_index.json'), 'utf-8');
    const data = JSON.parse(rawIndex);
    cachedServices = data.services;
    
    const blogFiles = fs.readdirSync(BLOG_DIR).filter(file => file.endsWith('.mdx'));
    cachedBlogs = blogFiles.map(file => {
      const filePath = path.join(BLOG_DIR, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data: frontmatter, content } = matter(fileContent);
      const slug = frontmatter.slug || file.replace('.mdx', '');
      
      return {
        filename: file,
        slug: `/blog/${slug}`,
        title: frontmatter.title || frontmatter.h1 || slug,
        tags: frontmatter.tags || [],
        content: content,
        wordCount: content.split(/\s+/).length
      };
    });
  } else {
    console.error('Error: discovery_index.json not found. Run Phase 1 first.');
    process.exit(1);
  }
}

// --- PHASE 1: DISCOVERY ---
function executePhase1() {
  console.log('\n==================================================');
  console.log('PHASE 1: DISCOVERY');
  console.log('==================================================');

  const serviceFiles = fs.readdirSync(SERVICES_DIR).filter(file => file.endsWith('.json'));
  const services = serviceFiles.map(file => {
    const slug = file.replace('.json', '');
    const filePath = path.join(SERVICES_DIR, file);
    const serviceData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    
    let inferredTopic = slug
      .replace(/-/g, ' ')
      .replace('california', '')
      .replace('texas', '')
      .trim();
    
    return {
      filename: file,
      slug: `/${slug}`,
      title: serviceData.h1 || serviceData.metaTitle || slug,
      inferredTopic: inferredTopic,
      geo: slug.endsWith('-california') ? 'California' : (slug.endsWith('-texas') ? 'Texas' : 'General')
    };
  });

  const blogFiles = fs.readdirSync(BLOG_DIR).filter(file => file.endsWith('.mdx'));
  const blogs = blogFiles.map(file => {
    const filePath = path.join(BLOG_DIR, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data: frontmatter, content } = matter(fileContent);
    const slug = frontmatter.slug || file.replace('.mdx', '');
    
    return {
      filename: file,
      slug: `/blog/${slug}`,
      title: frontmatter.title || frontmatter.h1 || slug,
      tags: frontmatter.tags || [],
      content: content,
      wordCount: content.split(/\s+/).length
    };
  });

  const indexData = { services, blogs: blogs.map(b => ({ filename: b.filename, slug: b.slug, title: b.title, tags: b.tags, wordCount: b.wordCount })) };
  fs.writeFileSync(path.join(process.cwd(), 'scripts/discovery_index.json'), JSON.stringify(indexData, null, 2));

  console.log('\n--- SERVICE SLUGS FOUND ---');
  services.forEach((s, idx) => {
    console.log(`${idx + 1}. [${s.geo}] ${s.slug} -> Topic: "${s.inferredTopic}" | Title: "${s.title.substring(0, 50)}..."`);
  });

  console.log('\n--- BLOG SLUGS FOUND ---');
  blogs.forEach((b, idx) => {
    console.log(`${idx + 1}. ${b.slug} -> Title: "${b.title}" | Words: ${b.wordCount}`);
  });

  console.log('\n==================================================');
  console.log(`Summary: Discovered ${services.length} services and ${blogs.length} blog posts.`);
  console.log('Index written to scripts/discovery_index.json');
  console.log('==================================================\n');
}

// --- PHASE 2 & 3: RELEVANCE MAPPING & LINK SELECTION ---
function executePhase2And3() {
  console.log('\n==================================================');
  console.log('PHASE 2 & 3: RELEVANCE MAPPING & LINK SELECTION');
  console.log('==================================================');

  loadDiscoveryData();

  const globalUsage = {};
  cachedServices.forEach(s => { globalUsage[s.slug] = 0; });
  cachedBlogs.forEach(b => { globalUsage[b.slug] = 0; });

  const mappingResults = [];

  // Sort blogs by word count descending so we map longer blogs first (helps distribute usage)
  const sortedBlogs = [...cachedBlogs].sort((a, b) => b.wordCount - a.wordCount);

  for (const blog of sortedBlogs) {
    const blogTextLower = blog.content.toLowerCase();
    
    // Detect Niche using tags and title
    const niche = getBlogNiche(blogTextLower, blog.tags, blog.title.toLowerCase());

    // Detect Geo Mention
    const hasCalifornia = countOccurrences(blogTextLower, 'california') > 0 || countOccurrences(blogTextLower, ' ca ') > 0 || countOccurrences(blogTextLower, ' los angeles ') > 0 || countOccurrences(blogTextLower, ' san diego ') > 0 || countOccurrences(blogTextLower, ' san francisco ') > 0 || countOccurrences(blogTextLower, ' sacramento ') > 0;
    const hasTexas = countOccurrences(blogTextLower, 'texas') > 0 || countOccurrences(blogTextLower, ' tx ') > 0 || countOccurrences(blogTextLower, ' dallas ') > 0 || countOccurrences(blogTextLower, ' houston ') > 0 || countOccurrences(blogTextLower, ' austin ') > 0 || countOccurrences(blogTextLower, ' san antonio ') > 0;
    const geoPriority = hasCalifornia ? 'California' : (hasTexas ? 'Texas' : 'General');

    // 1. Score Services
    const serviceScores = cachedServices.map(service => {
      let score = 0;

      // STRICT NICHE FILTERING
      const isServiceDentist = service.slug.includes('dentist');
      const isServiceHealthcare = service.slug.includes('healthcare');

      if (niche === 'general') {
        if (isServiceDentist || isServiceHealthcare) {
          return { service, score: -9999 };
        }
      } else if (niche === 'healthcare') {
        if (isServiceDentist) {
          return { service, score: -9999 };
        }
        if (isServiceHealthcare) {
          score += 15;
        }
      } else if (niche === 'dental') {
        if (isServiceDentist) {
          score += 25;
        }
      }

      // Geo Match Priority
      if (geoPriority === 'California') {
        if (service.geo === 'California') score += 15;
        else if (service.geo === 'Texas') score -= 15;
      } else if (geoPriority === 'Texas') {
        if (service.geo === 'Texas') score += 15;
        else if (service.geo === 'California') score -= 15;
      } else {
        if (service.geo === 'General') score += 5;
      }

      // Keyword match scoring
      let matchedKeywordCount = 0;
      const mapping = serviceKeywordsMap.find(m => service.slug.includes(m.slugPart));
      if (mapping) {
        mapping.keywords.forEach(kw => {
          const count = countOccurrences(blogTextLower, kw);
          matchedKeywordCount += count;
        });
      }
      score += matchedKeywordCount * 8;

      return { service, score };
    });

    // 2. Score Blogs
    const blogScores = cachedBlogs.map(otherBlog => {
      if (otherBlog.slug === blog.slug) {
        return { otherBlog, score: -9999 };
      }

      let score = 0;

      // Niche matching boost
      const otherBlogTextLower = otherBlog.content.toLowerCase();
      const otherNiche = getBlogNiche(otherBlogTextLower, otherBlog.tags, otherBlog.title.toLowerCase());
      if (niche === otherNiche) {
        score += 15;
      } else if ((niche === 'general' && otherNiche !== 'general') || (niche !== 'general' && otherNiche === 'general')) {
        score -= 10;
      }

      // Tag overlap scoring
      const sharedTags = blog.tags.filter(t => otherBlog.tags.includes(t));
      score += sharedTags.length * 12;

      // Title word overlap scoring
      const blogTitleWords = blog.title.toLowerCase().split(/\s+/).filter(w => w.length > 3 && !stopWords.has(w));
      const otherTitleWords = otherBlog.title.toLowerCase().split(/\s+/).filter(w => w.length > 3 && !stopWords.has(w));
      const sharedWords = blogTitleWords.filter(w => otherTitleWords.includes(w));
      score += sharedWords.length * 5;

      // Keyword occurrences of other blog in this blog's text
      const otherKeywords = getBlogKeywords(otherBlog);
      let otherKeywordMatches = 0;
      otherKeywords.forEach(kw => {
        otherKeywordMatches += countOccurrences(blogTextLower, kw);
      });
      score += otherKeywordMatches * 6;

      return { otherBlog, score };
    });

    // 3. Selection with Diversity Balancing
    const selectedServices = [];
    const selectedBlogs = [];

    let tempServiceScores = [...serviceScores];
    let tempBlogScores = [...blogScores];

    for (let i = 0; i < 7; i++) {
      const ranked = tempServiceScores.map(item => {
        const usagePenalty = (globalUsage[item.service.slug] || 0) * 5;
        return { ...item, finalScore: item.score - usagePenalty };
      }).sort((a, b) => b.finalScore - a.finalScore);

      if (ranked.length > 0 && ranked[0].finalScore > -900) {
        const selected = ranked[0].service;
        selectedServices.push(selected.slug);
        globalUsage[selected.slug] = (globalUsage[selected.slug] || 0) + 1;
        tempServiceScores = tempServiceScores.filter(item => item.service.slug !== selected.slug);
      }
    }

    for (let i = 0; i < 7; i++) {
      const ranked = tempBlogScores.map(item => {
        const usagePenalty = (globalUsage[item.otherBlog.slug] || 0) * 4;
        return { ...item, finalScore: item.score - usagePenalty };
      }).sort((a, b) => b.finalScore - a.finalScore);

      if (ranked.length > 0 && ranked[0].finalScore > -900) {
        const selected = ranked[0].otherBlog;
        selectedBlogs.push(selected.slug);
        globalUsage[selected.slug] = (globalUsage[selected.slug] || 0) + 1;
        tempBlogScores = tempBlogScores.filter(item => item.otherBlog.slug !== selected.slug);
      }
    }

    mappingResults.push({
      slug: blog.slug,
      title: blog.title,
      niche,
      geoPriority,
      wordCount: blog.wordCount,
      selectedServices,
      selectedBlogs
    });
  }

  // Save selected mappings
  fs.writeFileSync(path.join(process.cwd(), 'scripts/mapping_index.json'), JSON.stringify(mappingResults, null, 2));
  console.log(`Saved link mapping for all ${mappingResults.length} blogs to scripts/mapping_index.json`);

  const samples = [
    '/blog/website-traffic-no-leads-fix',
    '/blog/digital-marketing-budget-small-business-2026',
    '/blog/ai-search-optimization-local-businesses-2026'
  ];

  console.log('\n--- SAMPLE BLOG MAPPING RESULTS (3 BLOGS) ---');
  samples.forEach(sampleSlug => {
    const map = mappingResults.find(r => r.slug === sampleSlug);
    if (map) {
      console.log(`\nBlog Title: "${map.title}"`);
      console.log(`Slug: ${map.slug} | Niche: ${map.niche.toUpperCase()} | Geo-priority: ${map.geoPriority} | Word count: ${map.wordCount}`);
      console.log(`Selected Services (Count: ${map.selectedServices.length}):`);
      map.selectedServices.forEach((s, idx) => console.log(`  ${idx+1}. ${s}`));
      console.log(`Selected Blogs (Count: ${map.selectedBlogs.length}):`);
      map.selectedBlogs.forEach((b, idx) => console.log(`  ${idx+1}. ${b}`));
    }
  });

  const serviceStats = Object.keys(globalUsage)
    .filter(k => k.startsWith('/') && !k.startsWith('/blog'))
    .map(k => ({ slug: k, count: globalUsage[k] }))
    .sort((a, b) => b.count - a.count);

  console.log('\n--- GLOBAL SERVICE LINK DISTRIBUTION STATS (TOP & BOTTOM 5) ---');
  console.log('Top 5 most used services:');
  serviceStats.slice(0, 5).forEach(s => console.log(`  ${s.slug}: ${s.count} times`));
  console.log('Bottom 5 least used services:');
  serviceStats.slice(-5).reverse().forEach(s => console.log(`  ${s.slug}: ${s.count} times`));

  console.log('\n==================================================');
  console.log('Phases 2 & 3 completed successfully!');
  console.log('==================================================\n');
}

// --- PHASE 4 & 5 & 6: INJECTION, VALIDATION & REPORTING ---
function executePhase456() {
  console.log('\n==================================================');
  console.log('PHASE 4, 5 & 6: LINK INJECTION, VALIDATION & REPORT');
  console.log('==================================================');

  // Load discoveries & mappings
  if (!fs.existsSync(path.join(process.cwd(), 'scripts/mapping_index.json'))) {
    console.error('Error: mapping_index.json not found. Run Phase 2 first.');
    process.exit(1);
  }
  
  loadDiscoveryData();
  const mappings = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'scripts/mapping_index.json'), 'utf-8'));
  
  const auditReportRows = [];
  let totalLinksInjected = 0;
  const flaggedBlogs = [];
  
  const servicesBySlug = {};
  cachedServices.forEach(s => { servicesBySlug[s.slug] = s; });
  const blogsBySlug = {};
  cachedBlogs.forEach(b => { blogsBySlug[b.slug] = b; });

  const finalDistribution = {};
  cachedServices.forEach(s => { finalDistribution[s.slug] = 0; });
  cachedBlogs.forEach(b => { finalDistribution[b.slug] = 0; });

  // Process all blogs
  for (const mapping of mappings) {
    const blog = cachedBlogs.find(b => b.slug === mapping.slug);
    if (!blog) continue;

    console.log(`Processing injection for: "${blog.title}" (${blog.slug})`);

    // Parse the MDX file content
    const filePath = path.join(BLOG_DIR, blog.filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const parsed = matter(fileContent);
    let contentText = parsed.content;

    // Split content into paragraphs
    let paragraphs = contentText.split('\n\n');
    
    // Divide paragraphs into Zones (Intro, Body, Conclusion)
    const totalParas = paragraphs.length;
    const introThreshold = Math.min(3, Math.floor(totalParas * 0.15));
    const conclusionThreshold = Math.max(totalParas - 3, Math.floor(totalParas * 0.85));

    const injectedServices = [];
    const injectedBlogs = [];

    // Helper function to inject a relative markdown link into a sentence/paragraph
    function injectIntoZone(targetSlug, isService, zoneIndexStart, zoneIndexEnd) {
      // Get keywords for this target
      let keywords = [];
      if (isService) {
        const servObj = servicesBySlug[targetSlug];
        const mapObj = serviceKeywordsMap.find(m => targetSlug.includes(m.slugPart));
        if (mapObj) {
          keywords = [...mapObj.keywords];
        }
        if (servObj && servObj.inferredTopic) {
          keywords.unshift(servObj.inferredTopic.toLowerCase());
        }
      } else {
        const otherBlog = blogsBySlug[targetSlug];
        if (otherBlog) {
          keywords = getBlogKeywords(otherBlog);
          keywords.unshift(otherBlog.title.toLowerCase());
        }
      }

      // Clean keywords and sort by length descending to match longer phrases first
      keywords = keywords
        .map(kw => kw.replace(/[^a-z0-9\s]/gi, '').trim())
        .filter(kw => kw.length > 3)
        .sort((a, b) => b.length - a.length);

      // Attempt 1: Contextual match inside existing text
      for (let pIdx = zoneIndexStart; pIdx < zoneIndexEnd; pIdx++) {
        let para = paragraphs[pIdx];
        if (!para || para.trim().startsWith('#') || para.trim().startsWith('!') || para.trim().startsWith('*') || para.trim().startsWith('-')) {
          continue; // skip headings, lists, images
        }

        for (const kw of keywords) {
          // Verify the keyword is present as a whole word, and is not already linked
          const wordRegex = new RegExp(`\\b(${escapeRegExp(kw)})\\b`, 'i');
          const match = para.match(wordRegex);
          
          if (match) {
            const matchedText = match[1];
            // Check if this match falls inside a markdown link bracket or parentheses
            const matchIndex = match.index;
            
            // Basic safety check: ensure the paragraph doesn't contain [ or ] right around the match
            const beforeMatch = para.substring(0, matchIndex);
            const openBrackets = (beforeMatch.match(/\[/g) || []).length;
            const closeBrackets = (beforeMatch.match(/\]/g) || []).length;
            
            if (openBrackets === closeBrackets) {
              // It's outside an existing link, let's inject it!
              const replacement = `[${matchedText}](${targetSlug})`;
              paragraphs[pIdx] = para.substring(0, matchIndex) + replacement + para.substring(matchIndex + matchedText.length);
              return true;
            }
          }
        }
      }

      // Attempt 2: Organic Sentence Modification / Appending
      // If we couldn't find a direct keyword match, edit a sentence slightly to inject it
      for (let pIdx = zoneIndexStart; pIdx < zoneIndexEnd; pIdx++) {
        let para = paragraphs[pIdx];
        if (!para || para.trim().startsWith('#') || para.trim().startsWith('!') || para.trim().startsWith('*') || para.trim().startsWith('-') || para.length < 50) {
          continue; 
        }

        // Check if the paragraph has multiple sentences
        const sentences = para.split(/(?<=[.?!])\s+/);
        if (sentences.length > 1) {
          // Select the last sentence of the paragraph to append contextually
          let lastSentence = sentences[sentences.length - 1].trim();
          if (lastSentence && !lastSentence.includes('[') && lastSentence.endsWith('.')) {
            // Append a natural connecting phrase
            let appendText = '';
            const cleanKeyword = keywords[0] || (isService ? targetSlug.replace(/\//g, '').replace(/-/g, ' ') : 'related article');
            
            if (isService) {
              appendText = ` This aligns with our efforts in delivering premier [${cleanKeyword}](${targetSlug}).`;
            } else {
              const otherBlog = blogsBySlug[targetSlug];
              const displayTitle = otherBlog ? otherBlog.title : cleanKeyword;
              appendText = ` For more details on this topic, read our comprehensive guide on [${displayTitle}](${targetSlug}).`;
            }

            // Replace in the paragraph
            sentences[sentences.length - 1] = lastSentence + appendText;
            paragraphs[pIdx] = sentences.join(' ');
            return true;
          }
        }
      }

      return false; // Failed to inject in this zone
    }

    // Link Injection Budgets
    // We want exactly 6-7 services and 6-7 blogs (total 12-14) per post
    const targetServices = mapping.selectedServices;
    const targetBlogs = mapping.selectedBlogs;

    // Distribute services and blogs across three zones
    // Zone 1: Intro (Index 0 to introThreshold)
    // Zone 2: Body (Index introThreshold to conclusionThreshold)
    // Zone 3: Conclusion (Index conclusionThreshold to totalParas)

    // Link distribution plan:
    // Intro: 1 service, 1 blog (2 links)
    // Conclusion: 1 service, 1 blog (2 links)
    // Body: 5 services, 5 blogs (10 links)

    // Inject Services
    targetServices.forEach((serviceSlug, index) => {
      let injected = false;
      if (index === 0) {
        injected = injectIntoZone(serviceSlug, true, 0, introThreshold);
      } else if (index === targetServices.length - 1) {
        injected = injectIntoZone(serviceSlug, true, conclusionThreshold, totalParas);
      }
      
      // Fallback to body zone if intro/conclusion failed, or for remaining services
      if (!injected) {
        injected = injectIntoZone(serviceSlug, true, introThreshold, conclusionThreshold);
      }
      // Ultimate fallback: search the entire document
      if (!injected) {
        injected = injectIntoZone(serviceSlug, true, 0, totalParas);
      }

      if (injected) {
        injectedServices.push(serviceSlug);
        finalDistribution[serviceSlug] = (finalDistribution[serviceSlug] || 0) + 1;
        totalLinksInjected++;
      } else {
        console.log(`  Warning: Failed to inject service link: ${serviceSlug}`);
      }
    });

    // Inject Blogs
    targetBlogs.forEach((blogSlug, index) => {
      let injected = false;
      if (index === 0) {
        injected = injectIntoZone(blogSlug, false, 0, introThreshold);
      } else if (index === targetBlogs.length - 1) {
        injected = injectIntoZone(blogSlug, false, conclusionThreshold, totalParas);
      }
      
      if (!injected) {
        injected = injectIntoZone(blogSlug, false, introThreshold, conclusionThreshold);
      }
      if (!injected) {
        injected = injectIntoZone(blogSlug, false, 0, totalParas);
      }

      if (injected) {
        injectedBlogs.push(blogSlug);
        finalDistribution[blogSlug] = (finalDistribution[blogSlug] || 0) + 1;
        totalLinksInjected++;
      } else {
        console.log(`  Warning: Failed to inject blog link: ${blogSlug}`);
      }
    });

    // Join paragraphs back together
    const newContentText = paragraphs.join('\n\n');
    parsed.content = newContentText;

    // Write back to the file
    const newFileContent = matter.stringify(parsed.content, parsed.data);
    fs.writeFileSync(filePath, newFileContent, 'utf-8');

    // Validation checks for this blog
    const totalCount = injectedServices.length + injectedBlogs.length;
    if (totalCount < 12) {
      flaggedBlogs.push({
        slug: blog.slug,
        title: blog.title,
        count: totalCount,
        reason: 'Injected less than 12 links total'
      });
    }
    
    // Check for duplicate URLs within this post
    const allLinks = [...injectedServices, ...injectedBlogs];
    const uniqueLinks = new Set(allLinks);
    if (uniqueLinks.size !== allLinks.length) {
      flaggedBlogs.push({
        slug: blog.slug,
        title: blog.title,
        count: totalCount,
        reason: 'Contains duplicate link targets in same post'
      });
    }

    auditReportRows.push({
      title: blog.title,
      slug: blog.slug,
      servicesAdded: injectedServices.join(', '),
      blogsAdded: injectedBlogs.map(b => b.replace('/blog/', '')).join(', '),
      total: totalCount
    });
  }

  // --- PHASE 5: CODEBASE ROUTE EXISTENCE VALIDATION ---
  console.log('\n==================================================');
  console.log('PHASE 5: ROUTE VALIDATION PASS');
  console.log('==================================================');

  let brokenLinksCount = 0;
  const brokenLinks = [];

  // Re-read modified blogs to perform final regex link validation
  const blogFiles = fs.readdirSync(BLOG_DIR).filter(file => file.endsWith('.mdx'));
  for (const file of blogFiles) {
    const filePath = path.join(BLOG_DIR, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // Find all markdown links [text](url)
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    let match;
    while ((match = linkRegex.exec(content)) !== null) {
      const url = match[2];
      // Only validate internal relative routes
      if (url.startsWith('/')) {
        let exists = false;
        
        if (url.startsWith('/blog/')) {
          const bSlug = url.replace('/blog/', '');
          // Check if MDX file exists
          exists = fs.existsSync(path.join(BLOG_DIR, `${bSlug}.mdx`));
        } else {
          const sSlug = url.replace('/', '');
          // Check if JSON service file exists
          exists = fs.existsSync(path.join(SERVICES_DIR, `${sSlug}.json`));
        }

        if (!exists) {
          brokenLinksCount++;
          brokenLinks.push({ file, url });
          console.error(`Broken Link Found in ${file}: ${url}`);
        }
      }
    }
  }

  console.log(`Validation complete. Found ${brokenLinksCount} broken links.`);

  // --- PHASE 6: AUDIT REPORT GENERATION ---
  console.log('\n==================================================');
  console.log('PHASE 6: AUDIT REPORT GENERATION');
  console.log('==================================================');

  // Format final markdown table
  let reportMarkdown = `# SEO Internal Linking Audit Report

Generated on: ${new Date().toISOString()}
Total Links Injected: ${totalLinksInjected}
Broken Links Identified: ${brokenLinksCount}
Flagged Blogs (Failing constraints): ${flaggedBlogs.length}

## Injected Links Audit Trail

| Blog Title | Service Links Added | Blog Links Added | Total Links |
|---|---|---|---|
`;

  auditReportRows.forEach(row => {
    reportMarkdown += `| ${row.title} | ${row.servicesAdded} | ${row.blogsAdded} | ${row.total} |\n`;
  });

  if (flaggedBlogs.length > 0) {
    reportMarkdown += `\n## Flagged Blogs (Require Manual Attention)\n\n`;
    flaggedBlogs.forEach(f => {
      reportMarkdown += `- **${f.title}** (${f.slug}): Injected ${f.count} links. Reason: *${f.reason}*\n`;
    });
  }

  if (brokenLinks.length > 0) {
    reportMarkdown += `\n## Broken Links Report\n\n`;
    brokenLinks.forEach(b => {
      reportMarkdown += `- File: \`${b.file}\` -> Target: \`${b.url}\` (Does not exist)\n`;
    });
  }

  // Distribution Stats
  const finalStats = Object.keys(finalDistribution)
    .filter(k => k.startsWith('/') && !k.startsWith('/blog'))
    .map(k => ({ slug: k, count: finalDistribution[k] }))
    .sort((a, b) => b.count - a.count);

  reportMarkdown += `\n## Link Distribution Stats (Services)

| Service Slug | Times Linked |
|---|---|
`;
  finalStats.forEach(s => {
    reportMarkdown += `| ${s.slug} | ${s.count} |\n`;
  });

  // Write report to file
  const reportPath = path.join(process.cwd(), 'scripts/link_audit_report.md');
  fs.writeFileSync(reportPath, reportMarkdown, 'utf-8');

  console.log(`Audit report successfully written to ${reportPath}`);
  console.log(`Total links injected across all blogs: ${totalLinksInjected}`);
  console.log(`Flagged blogs: ${flaggedBlogs.length}`);
  console.log(`Broken links: ${brokenLinksCount}`);
  console.log('==================================================\n');
}

if (phase === 1) {
  executePhase1();
} else if (phase === 2) {
  executePhase2And3();
} else if (phase === 3) {
  executePhase456();
} else {
  console.log(`Phase ${phase} is not implemented in this version yet.`);
}
