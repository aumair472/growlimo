import Link from 'next/link';

export default function ServiceInternalLinks({ internalLinks }) {
  if (!internalLinks || internalLinks.length === 0) return null;

  return (
    <section className="bg-slate-900/50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-slate-400 mb-4 text-sm font-medium uppercase tracking-wider">
            Related Services
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {internalLinks.map((link, index) => (
              <Link
                key={index}
                href={link.to}
                className="inline-flex items-center text-primary hover:text-white border border-primary/30 hover:border-primary hover:bg-primary/10 px-5 py-2.5 rounded-lg transition-all duration-300 text-sm font-medium"
              >
                {link.anchor}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
