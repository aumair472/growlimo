export default function DMCertificationsBlock() {
  const certifications = [
    { title: 'Google Partner Agency', detail: 'Search, Display, Shopping, and Video certified' },
    { title: 'HubSpot Content Marketing', detail: 'Certified Inbound Content Strategy' },
    { title: 'HubSpot Email Marketing', detail: 'Certified Automation & Lifecycle Marketing' },
    { title: 'Klaviyo Product Certification', detail: 'Certified E-Commerce Lifecycle & Flows' },
    { title: 'Google Analytics 4 (GA4)', detail: 'Certified Server-Side Tracking & Events' },
    { title: 'SEMrush SEO Toolkit', detail: 'Certified Technical & On-Page SEO' },
    { title: 'Meta Blueprint Certified', detail: 'Certified Facebook & Instagram Buying' }
  ];

  return (
    <section className="bg-[#0C1220] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
      <div className="container mx-auto px-4 md:px-10 max-w-[1100px]">

        <div className="bg-[#162035] border border-[rgba(255,255,255,0.08)] rounded-[20px] p-8 md:p-10 text-left">
          <div className="inline-flex items-center gap-2 bg-[rgba(66,133,244,0.12)] border border-[rgba(66,133,244,0.30)] text-[#4285F4] text-[11px] font-extrabold uppercase tracking-[2.5px] rounded-full py-[4px] px-[14px] mb-4">
            CERTIFIED AGENCY EXPERTISE
          </div>

          <h2 className="text-[26px] sm:text-[32px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
            Why GrowLimo Has the Expertise to Grow California Businesses Online
          </h2>

          <p className="font-sans text-[15px] leading-[1.8] text-[#8FA8C8] mb-6">
            GrowLimo was built from the ground up as a performance digital marketing agency — every team member is a specialist in their channel, and every recommendation is backed by GrowLimo's own California client results or verified industry benchmarks. Our core team holds the following certifications:
          </p>

          {/* 7-Item Certification Badge Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="bg-[#0C1220] border border-[rgba(255,255,255,0.08)] rounded-xl p-4 flex items-center gap-3"
              >
                <span className="w-8 h-8 rounded-lg bg-[rgba(0,198,138,0.12)] border border-[rgba(0,198,138,0.25)] text-[#00C68A] font-bold flex items-center justify-center shrink-0 text-[14px]">
                  ✓
                </span>
                <div>
                  <span className="font-sora font-bold text-[14px] text-[#F0F4FF] block leading-snug">
                    {cert.title}
                  </span>
                  <span className="font-sans text-[11.5px] text-[#8FA8C8] block leading-tight">
                    {cert.detail}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="font-sans text-[15px] leading-[1.8] text-[#8FA8C8] mb-8">
            Our team has personally managed campaigns in over 20 California cities, across 12 distinct industries, with client budgets ranging from $1,000 to $50,000/month.
          </p>

          {/* Editorial Info Component */}
          <div className="bg-[#0C1220] border border-[rgba(0,198,138,0.2)] rounded-[16px] p-6 space-y-3 font-sans text-[14px]">
            <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 text-[#F0F4FF]">
              <strong className="text-[#00C68A] font-sora">Reviewed by:</strong>
              <span>
                <a
                  href="https://www.linkedin.com/in/leadgeneration-google-ads-expert/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00C68A] font-semibold underline hover:text-[#0FB786] transition-colors cursor-pointer"
                >
                  Muhammad Usman
                </a>
                , Senior Digital Strategist at GrowLimo — 7+ years in digital marketing, Google Partner & Meta Blueprint certified.
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 text-[#8FA8C8] border-t border-[rgba(255,255,255,0.06)] pt-3">
              <strong className="text-[#00C68A] font-sora">Last updated:</strong>
              <span>August 2026 — Updated with latest California client benchmarks & channel frameworks.</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
