import React from 'react'
import { MdOutlineEmail } from 'react-icons/md'

const initials = (first = '', second = '') =>
  ((first[0] ?? '') + (second[0] ?? '')).toUpperCase()

const fullName = (emp) =>
  `${emp.Firstname ?? ''} ${emp.Secondname ?? ''}`.trim()

export default function Sidebar({ employees, selectedEmployee, setSelectedEmployee }) {
  return (
    <aside className="flex flex-col w-64 shrink-0 h-full bg-gray-900 border-r border-gray-800 py-6">
      <div className="flex items-center gap-3 px-5">
        <div className="flex items-center justify-center w-11 h-11 bg-white border border-gray-700 rounded-full">
          <MdOutlineEmail className="text-2xl text-gray-800" />
        </div>

        <h1 className="text-lg font-semibold text-gray-100">
          Email Signature
        </h1>
      </div>

      <hr className="my-5 border-gray-800" />

      <nav className="flex flex-col gap-1 px-3 overflow-y-auto">
        {employees.map((emp) => {
          const isActive = emp.id === selectedEmployee.id

          return (
            <button
              key={emp.id}
              onClick={() => setSelectedEmployee(emp)}
              className={`flex items-center gap-3 w-full px-3 py-2 rounded-lg text-left transition ${
                isActive
                  ? 'bg-gray-800'
                  : 'hover:bg-gray-800/60'
              }`}
            >
              <span className="flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-gray-700 text-white font-semibold">
                {initials(emp.Firstname, emp.Secondname)}
              </span>

              <div>
                <p className="text-sm font-medium text-white">
                  {fullName(emp)}
                </p>

                <p className="text-xs text-gray-400">
                  {emp.designation}
                </p>
              </div>
            </button>
          )
        })}
      </nav>
    </aside>
  )
}