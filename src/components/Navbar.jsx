import React from 'react'
import { MdLogout } from 'react-icons/md'

export default function Navbar({ onLogout }) {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-gray-900 border-b border-gray-800">
      <h1 className="text-lg font-semibold text-gray-100">Signatures</h1>
      {onLogout && (
        <button
          onClick={onLogout}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-200 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer"
        >
          <MdLogout className="text-lg" />
          Logout
        </button>
      )}
    </header>
  )
}
