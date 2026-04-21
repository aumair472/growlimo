import { Link } from 'react-router-dom'

function CaseStudyCard({ caseStudy }) {
  return (
    <Link
      to={`/case-studies/${caseStudy.slug}`}
      className="block glass-card overflow-hidden hover:scale-[1.02] transition-all duration-300 h-full group"
      aria-label={`View case study: ${caseStudy.title}`}
    >
      {/* Hero Image */}
      {caseStudy.image && (
        <div className="aspect-video overflow-hidden bg-slate-800">
          <img
            src={caseStudy.image}
            alt={caseStudy.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
      )}

      <div className="p-6">
        {/* Meta */}
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-400 mb-3">
          <span>{caseStudy.industry}</span>
          <span>{caseStudy.location}</span>
          <span>{caseStudy.timeline}</span>
        </div>

        {/* Title */}
        <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {caseStudy.title}
        </h3>

        {/* Client */}
        <p className="text-sm text-primary font-semibold mb-3">
          {caseStudy.client}
        </p>

        {/* Summary */}
        <p className="text-slate-300 text-sm mb-6 line-clamp-3 leading-relaxed">
          {caseStudy.summary}
        </p>

        {/* Stats Badges */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {caseStudy.stats.map((stat, index) => (
            <div
              key={index}
              className="bg-slate-800 border border-slate-700 rounded-lg p-3 text-center"
            >
              <div className="text-lg font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-slate-400 leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Read More */}
        <span className="inline-flex items-center text-sm font-semibold text-primary group-hover:text-accent transition-colors">
          Read Full Case Study
          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  )
}

export default CaseStudyCard
