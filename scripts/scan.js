import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const SERVICES_DIR = path.join(process.cwd(), 'content/services');
const BLOG_DIR = path.join(process.cwd(), 'content/blog');

// Scan Services
console.log('--- SCANNING SERVICES ---');
const serviceFiles = fs.readdirSync(SERVICES_DIR).filter(file => file.endsWith('.json'));
const servicePages = [];

for (const file of serviceFiles) {
  const filePath = path.join(SERVICES_DIR, file);
  const content = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  const slug = file.replace('.json', '');
  
  // Extract keywords based on the filename or details
  let primaryTopic = '';
  if (slug.includes('seo')) {
    primaryTopic = 'SEO Services';
  } else if (slug.includes('google-ads')) {
    primaryTopic = 'Google Ads Management';
  } else if (slug.includes('facebook-ads') || slug.includes('meta-ads')) {
    primaryTopic = 'Meta/Facebook Ads';
  } else if (slug.includes('ppc')) {
    primaryTopic = 'PPC Services';
  } else if (slug.includes('social-media')) {
    primaryTopic = 'Social Media Marketing';
  } else if (slug.includes('email-marketing')) {
    primaryTopic = 'Email Marketing';
  } else if (slug.includes('web-design') || slug.includes('web-developer')) {
    primaryTopic = 'Web Design & Development';
  } else if (slug.includes('digital-marketing')) {
    primaryTopic = 'Digital Marketing Agency';
  } else {
    primaryTopic = 'Other Digital Marketing';
  }

  // Format region
  let region = '';
  if (slug.endsWith('-california')) {
    region = ' (California)';
  } else if (slug.endsWith('-texas')) {
    region = ' (Texas)';
  }

  servicePages.push({
    slug: `/${slug}`,
    title: content.h1 || content.metaTitle || slug,
    primaryTopic: primaryTopic + region
  });
}

// Scan Blogs
console.log('--- SCANNING BLOGS ---');
const blogFiles = fs.readdirSync(BLOG_DIR).filter(file => file.endsWith('.mdx'));
const blogPosts = [];

for (const file of blogFiles) {
  const filePath = path.join(BLOG_DIR, file);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data } = matter(fileContent);
  const slug = data.slug || file.replace('.mdx', '');
  
  blogPosts.push({
    slug: `/blog/${slug}`,
    title: data.title || data.h1 || slug,
    primaryTopic: (data.tags && data.tags.length > 0) ? data.tags[0] : 'General Healthcare Marketing'
  });
}

// Save lists to a temporary file in JSON format for the agent to read, and also print stats
const output = {
  services: servicePages,
  blogs: blogPosts
};

fs.writeFileSync(path.join(process.cwd(), 'scripts/inventory.json'), JSON.stringify(output, null, 2));
console.log(`Successfully scanned ${servicePages.length} service pages and ${blogPosts.length} blog posts.`);
