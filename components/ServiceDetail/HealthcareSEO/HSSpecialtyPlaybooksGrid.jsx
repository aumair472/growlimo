export default function HSSpecialtyPlaybooksGrid() {
  const specialties = [
    { name: 'Dental Practices & DSOs', desc: 'Local map pack dominance, treatment-specific page optimization (implants, Invisalign, veneers, emergency dental), insurance keyword targeting, and multi-location architecture for dental service organizations across California.' },
    { name: 'Medical Spas & Cosmetic Practices', desc: 'Treatment page SEO (Botox, fillers, body contouring, laser treatments), before/after content strategy, aesthetic-specific schema, and Healthgrades/Yelp review optimization.' },
    { name: 'Orthopedic & Sports Medicine Practices', desc: 'Condition and procedure page depth (ACL, rotator cuff, joint replacement), sports injury symptom content, and physician authority building with research citations and hospital affiliations.' },
    { name: 'Mental Health & Behavioral Health Practices', desc: 'Sensitive YMYL content strategy for therapy, psychiatry, and counseling services — accurate, compassionate, and E-E-A-T-compliant without clinical overclaiming.' },
    { name: 'Urgent Care & Primary Care Centers', desc: '"Near me" and "open now" local SEO dominance, wait time and insurance keyword targeting, and GBP management built for walk-in patient acquisition.' },
    { name: 'Chiropractors', desc: 'Condition-to-treatment content (back pain, sciatica, neck pain, headaches), local map pack optimization, insurance-specific keyword targeting, and patient testimonial content.' },
    { name: 'Plastic Surgeons', desc: 'High-competition cosmetic procedure keywords (rhinoplasty, breast augmentation, liposuction), surgeon authority building, before/after gallery SEO, and comprehensive YMYL content standards.' },
    { name: 'Physical Therapy Practices', desc: 'Injury-specific content strategy, referral source optimization for physician network discovery, and insurance-based local SEO targeting.' },
    { name: 'Optometrists & Ophthalmologists', desc: 'Eye condition content SEO, LASIK and specialty lens procedure pages, insurance-based local search, and GBP management for vision care appointment acquisition.' },
    { name: 'Multi-Location Hospital Networks & Health Systems', desc: 'Enterprise healthcare SEO strategy — department-level content architecture, physician finder optimization, and individual location SEO management at scale.' }
  ];

  return (
    <section className="bg-[#080D18] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
      <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

        <div className="text-left max-w-[860px] mb-14">
          <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
            SPECIALTY PLAYBOOKS
          </span>
          <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
            SEO Services for Healthcare — Specialty Playbooks
          </h2>
          <p className="font-sans text-[15px] sm:text-[16px] text-[#8FA8C8]">
            SEO services for healthcare aren't one-size-fits-all — patient acquisition dynamics, content requirements, and local SEO patterns differ meaningfully by specialty:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {specialties.map((spec, idx) => (
            <div
              key={idx}
              className="bg-[#0C1220] border border-[rgba(255,255,255,0.08)] rounded-[18px] p-5 text-left transition-all duration-300 hover:border-[#00C68A]/40 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="w-9 h-9 rounded-xl bg-[rgba(0,198,138,0.12)] border border-[rgba(0,198,138,0.25)] flex items-center justify-center text-[#00C68A] mb-3">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-sora font-bold text-[15.5px] text-[#F0F4FF] mb-2 leading-snug">
                  {spec.name}
                </h3>
                <p className="font-sans text-[12.5px] leading-relaxed text-[#8FA8C8]">
                  {spec.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
