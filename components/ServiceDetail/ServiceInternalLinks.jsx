import Link from 'next/link';

export default function ServiceInternalLinks({ internalLinks }) {
  if (!internalLinks || internalLinks.length === 0) return null;

  return (
    <section className="bg-[#05080F] py-[64px] border-t border-[rgba(255,255,255,0.06)] relative z-10 text-left">
      <div className="container mx-auto px-4 md:px-10 max-w-[1100px]">
        <div className="max-w-[860px] mx-auto">
          
          {/* Section heading */}
          <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[1.5px] mb-4 block font-sans">
            RELATED REGIONAL SERVICES
          </span>

          {/* Columns Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-1">
            {internalLinks.map((link, index) => (
              <Link
                key={index}
                href={link.to}
                className="font-sans text-[13px] text-[#4A6080] hover:text-[#F0F4FF] transition-colors duration-200 ease-in-out py-1 block mb-2.5 leading-snug"
              >
                {link.anchor}
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
