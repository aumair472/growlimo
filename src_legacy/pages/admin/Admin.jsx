import SEO from '../../components/seo/SEO'

function Admin() {
  return (
    <>
      <SEO
        title="Admin - GrowLimo"
        description="Admin panel - GrowLimo"
        robots="noindex, nofollow"
      />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">Admin Panel</h1>
        <p className="text-lg text-slate-300">Admin panel content coming soon...</p>
      </div>
    </>
  )
}

export default Admin
