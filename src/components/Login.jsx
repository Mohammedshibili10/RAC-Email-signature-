import React, { useState } from 'react'
import { MdOutlineEmail } from 'react-icons/md'



export default function Login({ onLogin }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (username.trim() === 'admin@gmail.com' && password === 'rac@partner2026') {
      setError('')
      onLogin()
    } else {
      setError('Invalid username or password')
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm p-8 bg-gray-800 border border-gray-700 rounded-2xl shadow-xl"
      >
        <div className="flex flex-col items-center mb-6">
          <div className="flex items-center justify-center w-14 h-14 mb-3 bg-white rounded-full">
            <MdOutlineEmail className="text-3xl text-gray-800" />
          </div>
          <h1 className="text-xl font-semibold text-gray-100">Email Signature</h1>
          <p className="text-sm text-gray-400">Sign in to continue</p>
        </div>

        <label className="block mb-1 text-sm text-gray-300" htmlFor="username">
          Username
        </label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-3 py-2 mb-4 text-gray-100 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500"
          placeholder="admin"
          autoFocus
        />

        <label className="block mb-1 text-sm text-gray-300" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 mb-4 text-gray-100 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500"
          placeholder="••••••••"
        />

        {error && <p className="mb-4 text-sm text-red-500">{error}</p>}

        <button
          type="submit"
          className="w-full py-2 font-medium text-white bg-orange-500 rounded-lg hover:bg-orange-600 transition"
        >
          Sign In
        </button>
      </form>
    </div>
  )
}
