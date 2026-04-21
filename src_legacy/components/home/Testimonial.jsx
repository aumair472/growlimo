function Testimonial({ name, role, company, content }) {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg shadow-md p-6">
      <p className="text-slate-300 mb-4 italic">"{content}"</p>
      <div className="border-t border-slate-700 pt-4">
        <p className="font-semibold text-white">{name}</p>
        <p className="text-sm text-slate-400">
          {role} at {company}
        </p>
      </div>
    </div>
  )
}

export default Testimonial

