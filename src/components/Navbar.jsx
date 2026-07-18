import React from 'react'
import { MdLogout, MdMenu } from 'react-icons/md'

export default function Navbar({ onLogout, onMenuClick }) {
  return (
    <header className="flex items-center justify-between gap-2 px-4 md:px-6 py-4 bg-gray-900 border-b border-gray-800">
      <div className="flex items-center gap-3 min-w-0">
        {onMenuClick && (
          <button
            onClick={onMenuClick}
            className="md:hidden text-gray-300 hover:text-white"
            aria-label="Open menu"
          >
            <MdMenu className="text-2xl" />
          </button>
        )}
        <h1 className="text-lg font-semibold text-gray-100">Signatures</h1>
      </div>

      {onLogout && (
        <button
          onClick={onLogout}
          className="flex items-center gap-2 px-3 md:px-4 py-2 text-sm font-medium text-gray-200 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer"
        >
          <MdLogout className="text-lg" />
          <span className="hidden sm:inline">Logout</span>
        </button>
      )}
    </header>
  )
}
