import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { getSEOConfig, seoDefaults } from '../../config/seoConfig';
import { buildCanonicalUrl, normalizeCanonicalUrl } from '../../utils/seo';

const HEAD_OWNER_ATTR = 'data-growlimo-seo-owner';

function setManagedElement(head, ownerId, tagName, attributes) {
  const element = document.createElement(tagName);
  element.setAttribute(HEAD_OWNER_ATTR, ownerId);

  Object.entries(attributes).forEach(([key, value]) => {
    if (value === undefined || value === null || value === '') return;
    element.setAttribute(key, String(value));
  });

  head.appendChild(element);
}

function removeManagedElements(ownerId) {
  const selector = ownerId
    ? `[${HEAD_OWNER_ATTR}="${ownerId}"]`
    : `[${HEAD_OWNER_ATTR}]`;

  document.querySelectorAll(selector).forEach((node) => node.remove());
}

function SEO({
  title,
  description,
  keywords,
  url,
  canonical,
  image,
  type,
  article,
  robots,
}) {
  const location = useLocation();
  const ownerIdRef = useRef(`seo-${Math.random().toString(36).slice(2, 10)}`);

  const cleanPathname = location.pathname.split('#')[0].split('?')[0];
  const routeConfig = getSEOConfig(cleanPathname);

  const seoTitle = title || routeConfig.title || seoDefaults.defaultTitle;
  const seoDescription =
    description || routeConfig.description || seoDefaults.defaultDescription;
  const seoKeywords = keywords || routeConfig.keywords || '';
  const seoImage = image || routeConfig.image || seoDefaults.defaultImage;
  const seoType = type || routeConfig.type || 'website';
  const seoArticle = article || routeConfig.article;
  const seoRobots = robots || 'index, follow';
  const canonicalInput = url || canonical;
  const cleanCanonical = canonicalInput
    ? normalizeCanonicalUrl(canonicalInput)
    : routeConfig.canonical
      ? normalizeCanonicalUrl(routeConfig.canonical)
      : buildCanonicalUrl(cleanPathname);
  const siteName = seoDefaults.siteName;
  const twitterHandle = seoDefaults.twitterHandle;
  const seoImageAlt = `${seoTitle}`;

  useEffect(() => {
    const ownerId = ownerIdRef.current;
    const head = document.head;

    document.title = seoTitle;
    removeManagedElements();

    setManagedElement(head, ownerId, 'meta', {
      name: 'description',
      content: seoDescription,
    });

    if (seoKeywords) {
      setManagedElement(head, ownerId, 'meta', {
        name: 'keywords',
        content: seoKeywords,
      });
    }

    setManagedElement(head, ownerId, 'meta', {
      name: 'robots',
      content: seoRobots,
    });
    setManagedElement(head, ownerId, 'link', {
      rel: 'canonical',
      href: cleanCanonical,
    });
    setManagedElement(head, ownerId, 'link', {
      rel: 'alternate',
      hreflang: 'en-us',
      href: cleanCanonical,
    });
    setManagedElement(head, ownerId, 'link', {
      rel: 'alternate',
      hreflang: 'x-default',
      href: cleanCanonical,
    });
    setManagedElement(head, ownerId, 'meta', {
      property: 'og:type',
      content: seoType,
    });
    setManagedElement(head, ownerId, 'meta', {
      property: 'og:url',
      content: cleanCanonical,
    });
    setManagedElement(head, ownerId, 'meta', {
      property: 'og:title',
      content: seoTitle,
    });
    setManagedElement(head, ownerId, 'meta', {
      property: 'og:description',
      content: seoDescription,
    });
    setManagedElement(head, ownerId, 'meta', {
      property: 'og:image',
      content: seoImage,
    });
    setManagedElement(head, ownerId, 'meta', {
      property: 'og:image:secure_url',
      content: seoImage,
    });
    setManagedElement(head, ownerId, 'meta', {
      property: 'og:image:alt',
      content: seoImageAlt,
    });
    setManagedElement(head, ownerId, 'meta', {
      property: 'og:image:width',
      content: '1200',
    });
    setManagedElement(head, ownerId, 'meta', {
      property: 'og:image:height',
      content: '630',
    });
    setManagedElement(head, ownerId, 'meta', {
      property: 'og:site_name',
      content: siteName,
    });
    setManagedElement(head, ownerId, 'meta', {
      property: 'og:locale',
      content: 'en_US',
    });

    if (seoType === 'article' && seoArticle) {
      if (seoArticle.publishedTime) {
        setManagedElement(head, ownerId, 'meta', {
          property: 'article:published_time',
          content: seoArticle.publishedTime,
        });
      }

      if (seoArticle.modifiedTime) {
        setManagedElement(head, ownerId, 'meta', {
          property: 'article:modified_time',
          content: seoArticle.modifiedTime,
        });
      }

      if (seoArticle.author) {
        setManagedElement(head, ownerId, 'meta', {
          property: 'article:author',
          content: seoArticle.author,
        });
      }

      if (Array.isArray(seoArticle.tags)) {
        seoArticle.tags.forEach((tag) => {
          setManagedElement(head, ownerId, 'meta', {
            property: 'article:tag',
            content: tag,
          });
        });
      }
    }

    setManagedElement(head, ownerId, 'meta', {
      name: 'twitter:card',
      content: 'summary_large_image',
    });
    setManagedElement(head, ownerId, 'meta', {
      name: 'twitter:url',
      content: cleanCanonical,
    });
    setManagedElement(head, ownerId, 'meta', {
      name: 'twitter:title',
      content: seoTitle,
    });
    setManagedElement(head, ownerId, 'meta', {
      name: 'twitter:description',
      content: seoDescription,
    });
    setManagedElement(head, ownerId, 'meta', {
      name: 'twitter:image',
      content: seoImage,
    });
    setManagedElement(head, ownerId, 'meta', {
      name: 'twitter:image:alt',
      content: seoImageAlt,
    });

    if (twitterHandle) {
      setManagedElement(head, ownerId, 'meta', {
        name: 'twitter:site',
        content: twitterHandle,
      });
    }

    setManagedElement(head, ownerId, 'meta', {
      name: 'author',
      content: siteName,
    });
    setManagedElement(head, ownerId, 'meta', {
      name: 'geo.region',
      content: 'US',
    });
    setManagedElement(head, ownerId, 'meta', {
      name: 'geo.placename',
      content: 'United States',
    });

    return () => {
      removeManagedElements(ownerId);
    };
  }, [
    cleanCanonical,
    seoArticle,
    seoDescription,
    seoImage,
    seoImageAlt,
    seoKeywords,
    seoRobots,
    seoTitle,
    seoType,
    siteName,
    twitterHandle,
  ]);

  return null;
}

export default SEO;
