import { useState } from 'react'
import { HiSearch } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'

export default function SearchBar({ className = '' }) {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    if (query.trim()) {
      navigate(`/properties?q=${encodeURIComponent(query.trim())}`)
    } else {
      navigate('/properties')
    }
  }

  return (
    <form
      onSubmit={handleSearch}
      className={`relative flex items-center bg-dark-700/80 backdrop-blur-md border border-white/10 p-1.5 rounded-2xl md:rounded-full shadow-lg shadow-black/35 w-full max-w-2xl mx-auto ${className}`}
    >
      <div className="relative flex-grow flex items-center pl-3 sm:pl-4">
        <HiSearch className="text-primary-500 text-lg md:text-xl mr-2 sm:mr-3 shrink-0" />
        <input
          type="text"
          placeholder="Search by builder, BHK, plots, rent..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="bg-transparent border-none outline-none text-white text-xs sm:text-sm md:text-base placeholder-gray-400 w-full py-2.5 pr-2"
        />
      </div>
      <button
        type="submit"
        className="btn-primary py-2 sm:py-2.5 px-4 sm:px-6 md:px-8 text-xs sm:text-sm font-semibold rounded-xl md:rounded-full shadow-md shrink-0 flex items-center gap-1.5"
      >
        <span>Search</span>
      </button>
    </form>
  )
}
