function Card({ title, description, children, className = '' }) {
  return (
    <div className={`glass-card p-6 ${className}`}>
      {title && <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>}
      {description && <p className="text-slate-300 mb-4">{description}</p>}
      {children}
    </div>
  )
}

export default Card

