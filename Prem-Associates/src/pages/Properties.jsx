import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Seo from '../seo/Seo'
import { propertiesSchema } from '../utils/schema'
import MiniHero from '../components/MiniHero/MiniHero'
import PropertyCard from '../components/PropertyCard/PropertyCard'
import { HiSearch, HiFilter, HiX } from 'react-icons/hi'
import { allProperties } from '../utils/propertiesData'
import { useSearchParams } from 'react-router-dom'

const types = ['All', 'Apartment', 'Builder Floor', 'Residential Plot', 'Commercial Plot']
const builders = ['All', 'Godrej', 'Gaur', 'ATS', 'Ace', 'Prateek', 'Builder Floor', 'Others']
const purposes = ['All', 'Sale', 'Rent']

export default function Properties() {
  const [searchParams] = useSearchParams()
  const queryParam = searchParams.get('q') || ''

  const [activeType, setActiveType] = useState('All')
  const [activeBuilder, setActiveBuilder] = useState('All')
  const [activePurpose, setActivePurpose] = useState('All')
  const [search, setSearch] = useState(queryParam)
  const [showMobileFilters, setShowMobileFilters] = useState(false)

  // Sync search state when URL query parameters change
  useEffect(() => {
    setSearch(queryParam)
  }, [queryParam])

  const filtered = allProperties.filter(p => {
    const typeMatch = activeType === 'All' || p.type === activeType
    const builderMatch = activeBuilder === 'All' || p.builder === activeBuilder
    const purposeMatch = activePurpose === 'All' || p.purpose === activePurpose
    const searchMatch =
      !search ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.location.toLowerCase().includes(search.toLowerCase()) ||
      (p.builder && p.builder.toLowerCase().includes(search.toLowerCase()))
    return typeMatch && builderMatch && purposeMatch && searchMatch
  })

  const resetFilters = () => {
    setSearch('')
    setActiveType('All')
    setActiveBuilder('All')
    setActivePurpose('All')
  }

  return (
    <>
      <Seo
        title="Properties in Faridabad | Residential, Commercial & Builder Floors"
        description="Browse premium residential & commercial plots, apartments by Godrej, Gaur, ATS, Ace, Prateek and luxury builder floors in Faridabad."
        canonical="https://premassociates.in/properties"
        schema={propertiesSchema}
      />

      <MiniHero
        subtitle="Our Premium Listings"
        title="Properties Catalog"
        breadcrumb={['Home', 'Properties']}
        bgImage="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1400&q=80"
      />

      <section className="section-padding bg-dark-900 min-h-screen">
        <div className="container-custom">
          {/* Main search and desktop filter bar layout */}
          <div className="grid lg:grid-cols-4 gap-8">
            
            {/* ─── Desktop Filter Sidebar ─── */}
            <aside className="hidden lg:block space-y-6">
              <div className="card-glass p-6 sticky top-28 border border-white/5">
                <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-6">
                  <h3 className="font-display text-lg text-white font-semibold flex items-center gap-2">
                    <HiFilter className="text-primary-500" /> Filters
                  </h3>
                  <button 
                    onClick={resetFilters}
                    className="text-xs text-primary-400 hover:text-primary-300 font-medium transition-colors"
                  >
                    Clear All
                  </button>
                </div>

                {/* Purpose Filter */}
                <div className="mb-6">
                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Listing Status</h4>
                  <div className="flex gap-2">
                    {purposes.map(p => (
                      <button
                        key={p}
                        onClick={() => setActivePurpose(p)}
                        className={`flex-1 py-2 text-xs font-medium rounded-xl border transition-all duration-300 ${
                          activePurpose === p
                            ? 'bg-primary-600 border-primary-600 text-white shadow-md shadow-primary-600/20'
                            : 'bg-dark-800 border-white/5 text-gray-400 hover:text-white hover:bg-dark-700'
                        }`}
                      >
                        {p === 'All' ? 'All' : p === 'Sale' ? 'For Sale' : 'For Rent'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Property Type Filter */}
                <div className="mb-6">
                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Property Type</h4>
                  <div className="flex flex-col gap-1.5">
                    {types.map(t => (
                      <button
                        key={t}
                        onClick={() => setActiveType(t)}
                        className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-medium border transition-all duration-300 ${
                          activeType === t
                            ? 'bg-primary-600/10 border-primary-500/30 text-primary-400 font-semibold'
                            : 'bg-transparent border-transparent text-gray-400 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {t === 'All' ? 'All Types' : t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Builder / Brands Filter */}
                <div>
                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Builder & Projects</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {builders.map(b => (
                      <button
                        key={b}
                        onClick={() => setActiveBuilder(b)}
                        className={`px-3 py-2 rounded-xl text-xs font-medium border transition-all duration-300 ${
                          activeBuilder === b
                            ? 'bg-primary-600 border-primary-600 text-white shadow-md shadow-primary-600/20'
                            : 'bg-dark-800 border-white/5 text-gray-400 hover:text-white hover:bg-dark-700'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* ─── Listings Column ─── */}
            <div className="lg:col-span-3 space-y-6">
              
              {/* Search Bar & Mobile Filter Trigger */}
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <div className="relative flex-1 w-full">
                  <HiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg" />
                  <input
                    type="text"
                    placeholder="Search properties, projects, locations (e.g. Godrej, Sector 85)..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    className="input-field pl-11 py-3.5 bg-dark-800 border-white/5 rounded-2xl w-full text-sm"
                  />
                  {search && (
                    <button 
                      onClick={() => setSearch('')}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                    >
                      <HiX />
                    </button>
                  )}
                </div>

                <button
                  onClick={() => setShowMobileFilters(true)}
                  className="lg:hidden flex items-center justify-center gap-2 bg-dark-800 border border-white/5 text-gray-300 px-5 py-3.5 rounded-2xl w-full sm:w-auto text-sm font-medium hover:text-white transition-colors"
                >
                  <HiFilter className="text-primary-500" /> Filters
                </button>
              </div>

              {/* Active Badges */}
              <div className="flex flex-wrap gap-2 items-center">
                {activePurpose !== 'All' && (
                  <span className="inline-flex items-center gap-1.5 bg-primary-600/10 border border-primary-500/20 text-primary-400 text-xs font-medium px-3 py-1.5 rounded-xl">
                    Status: {activePurpose === 'Sale' ? 'For Sale' : 'For Rent'}
                    <button onClick={() => setActivePurpose('All')} className="hover:text-white"><HiX /></button>
                  </span>
                )}
                {activeType !== 'All' && (
                  <span className="inline-flex items-center gap-1.5 bg-primary-600/10 border border-primary-500/20 text-primary-400 text-xs font-medium px-3 py-1.5 rounded-xl">
                    Type: {activeType}
                    <button onClick={() => setActiveType('All')} className="hover:text-white"><HiX /></button>
                  </span>
                )}
                {activeBuilder !== 'All' && (
                  <span className="inline-flex items-center gap-1.5 bg-primary-600/10 border border-primary-500/20 text-primary-400 text-xs font-medium px-3 py-1.5 rounded-xl">
                    Builder: {activeBuilder}
                    <button onClick={() => setActiveBuilder('All')} className="hover:text-white"><HiX /></button>
                  </span>
                )}
                {(activePurpose !== 'All' || activeType !== 'All' || activeBuilder !== 'All' || search) && (
                  <button 
                    onClick={resetFilters} 
                    className="text-xs text-gray-400 hover:text-primary-400 transition-colors ml-1 font-medium"
                  >
                    Clear Filters
                  </button>
                )}
              </div>

              {/* Results Count */}
              <motion.p
                key={`${filtered.length}-${activeType}-${activeBuilder}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-gray-500 text-xs font-medium"
              >
                Showing <span className="text-primary-400 font-bold">{filtered.length}</span> verified properties in Faridabad
              </motion.p>

              {/* Grid */}
              {filtered.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {filtered.map((property, i) => (
                    <PropertyCard key={property.id} property={property} index={i} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-24 card-glass border border-white/5 rounded-3xl">
                  <p className="text-5xl mb-4">🏘️</p>
                  <h3 className="font-display text-xl text-white mb-2">No Matching Properties</h3>
                  <p className="text-gray-400 text-sm max-w-md mx-auto">
                    We couldn't find any listings matching your current search criteria. Try removing filters or search term.
                  </p>
                  <button
                    onClick={resetFilters}
                    className="btn-primary mt-6 text-sm px-6 py-2.5"
                  >
                    Reset All Filters
                  </button>
                </div>
              )}

            </div>
          </div>
        </div>
      </section>

      {/* ─── Mobile Filters Drawer ─── */}
      <AnimatePresence>
        {showMobileFilters && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowMobileFilters(false)}
              className="fixed inset-0 bg-black z-[200]"
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-dark-800 border-l border-white/10 z-[201] p-6 overflow-y-auto"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <h3 className="font-display text-lg text-white font-semibold flex items-center gap-2">
                  <HiFilter className="text-primary-500" /> Filters
                </h3>
                <button
                  onClick={() => setShowMobileFilters(false)}
                  className="w-8 h-8 rounded-full bg-white/5 text-gray-300 hover:text-white flex items-center justify-center"
                >
                  <HiX />
                </button>
              </div>

              {/* Purpose Filter */}
              <div className="mb-6">
                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Listing Status</h4>
                <div className="flex gap-2">
                  {purposes.map(p => (
                    <button
                      key={p}
                      onClick={() => setActivePurpose(p)}
                      className={`flex-1 py-2 text-xs font-medium rounded-xl border transition-all duration-300 ${
                        activePurpose === p
                          ? 'bg-primary-600 border-primary-600 text-white'
                          : 'bg-dark-900 border-white/5 text-gray-400'
                      }`}
                    >
                      {p === 'All' ? 'All' : p === 'Sale' ? 'Buy' : 'Rent'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Property Type Filter */}
              <div className="mb-6">
                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Property Type</h4>
                <div className="flex flex-col gap-1.5">
                  {types.map(t => (
                    <button
                      key={t}
                      onClick={() => setActiveType(t)}
                      className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-medium border transition-all duration-300 ${
                        activeType === t
                          ? 'bg-primary-600/10 border-primary-500/30 text-primary-400 font-semibold'
                          : 'bg-transparent border-transparent text-gray-400'
                      }`}
                    >
                      {t === 'All' ? 'All Types' : t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Builder / Brands Filter */}
              <div className="mb-8">
                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Builder & Projects</h4>
                <div className="flex flex-wrap gap-1.5">
                  {builders.map(b => (
                    <button
                      key={b}
                      onClick={() => setActiveBuilder(b)}
                      className={`px-3 py-2 rounded-xl text-xs font-medium border transition-all duration-300 ${
                        activeBuilder === b
                          ? 'bg-primary-600 border-primary-600 text-white'
                          : 'bg-dark-900 border-white/5 text-gray-400'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setShowMobileFilters(false)}
                className="btn-primary w-full text-center py-3 text-sm justify-center rounded-xl"
              >
                Apply Filters
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
