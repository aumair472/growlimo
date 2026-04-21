let blogIndexPromise;

export const BLOG_CACHE_INDEX_URL = '/blog-cache/index.json';
export const BLOG_CACHE_POSTS_BASE_URL = '/blog-cache/posts';
export const BLOG_FALLBACK_PAGE_SIZE = 10;

function sortPostsByDate(posts = []) {
  return [...posts].sort((a, b) => {
    const aDate = new Date(a.updatedAt || a.publishedAt || a.createdAt || 0).getTime();
    const bDate = new Date(b.updatedAt || b.publishedAt || b.createdAt || 0).getTime();
    return bDate - aDate;
  });
}

export async function getBlogCacheIndex() {
  if (!blogIndexPromise) {
    blogIndexPromise = fetch(BLOG_CACHE_INDEX_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to load blog cache index: ${response.status}`);
        }

        return response.json();
      })
      .then((entries) => sortPostsByDate(Array.isArray(entries) ? entries : []))
      .catch((error) => {
        console.error(error);
        return [];
      });
  }

  return blogIndexPromise;
}

export async function getBlogPostFromCache(slug) {
  if (!slug) return null;

  try {
    const response = await fetch(
      `${BLOG_CACHE_POSTS_BASE_URL}/${encodeURIComponent(slug)}.json`
    );

    if (!response.ok) {
      throw new Error(`Failed to load cached post ${slug}: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getRelatedPostsFromCache(tags = [], currentSlug, limit = 3) {
  const entries = await getBlogCacheIndex();

  return entries
    .filter((post) => post.slug !== currentSlug)
    .filter((post) =>
      Array.isArray(post.tags) ? post.tags.some((tag) => tags.includes(tag)) : false
    )
    .slice(0, limit);
}

export async function getPaginatedBlogPostsFromCache(
  page = 1,
  pageSize = BLOG_FALLBACK_PAGE_SIZE
) {
  const entries = await getBlogCacheIndex();
  const totalPages = Math.max(1, Math.ceil(entries.length / pageSize));
  const start = (page - 1) * pageSize;

  return {
    posts: entries.slice(start, start + pageSize),
    totalPages,
  };
}
