export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#3B82F611' }}>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6" style={{ color: '#3B82F6' }}>
            NextJS -2025 (main)
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Built from Figma Design
          </p>
          
          <div className="flex gap-4 justify-center mb-16">
            <button 
              className="px-8 py-3 rounded-lg font-semibold text-white transition hover:opacity-90"
              style={{ backgroundColor: '#3B82F6' }}
            >
              Get Started
            </button>
            <button 
              className="px-8 py-3 rounded-lg font-semibold border-2 transition hover:bg-gray-50"
              style={{ borderColor: '#3B82F6', color: '#3B82F6' }}
            >
              Learn More
            </button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Design System</h3>
              <p className="text-gray-600">27 colors extracted from Figma</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Pages</h3>
              <p className="text-gray-600">1 pages detected</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Components</h3>
              <p className="text-gray-600">1 frames found</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
