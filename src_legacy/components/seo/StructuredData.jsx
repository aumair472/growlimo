import { useEffect, useRef } from 'react';

const SCRIPT_OWNER_ATTR = 'data-growlimo-schema-owner';

function StructuredData({ data }) {
  const ownerIdRef = useRef(`schema-${Math.random().toString(36).slice(2, 10)}`);

  useEffect(() => {
    if (!data) return undefined;

    document
      .querySelectorAll(`[${SCRIPT_OWNER_ATTR}]`)
      .forEach((node) => node.remove());

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute(SCRIPT_OWNER_ATTR, ownerIdRef.current);
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, [data]);

  return null;
}

export default StructuredData;
