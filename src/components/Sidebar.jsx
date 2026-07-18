import React, { useState } from 'react'
import { MdOutlineEmail, MdClose, MdExpandMore } from 'react-icons/md'

const initials = (first = '', second = '') =>
  ((first[0] ?? '') + (second[0] ?? '')).toUpperCase()

const fullName = (emp) =>
  `${emp.Firstname ?? ''} ${emp.Secondname ?? ''}`.trim()

function EmployeeButton({ emp, isActive, onSelect, nested = false }) {
  return (
    <button
      onClick={() => onSelect(emp)}
      className={`flex items-center gap-3 w-full py-2 rounded-lg text-left transition cursor-pointer ${
        nested ? 'pl-4 pr-3' : 'px-3'
      } ${isActive ? 'bg-gray-800' : 'hover:bg-gray-800/60'}`}
    >
      <span
        className={`flex items-center justify-center shrink-0 rounded-full bg-gray-700 text-white font-semibold ${
          nested ? 'w-9 h-9 text-xs' : 'w-10 h-10'
        }`}
      >
        {initials(emp.Firstname, emp.Secondname)}
      </span>

      <div className="min-w-0">
        <p className="text-sm font-medium text-white truncate">
          {fullName(emp)}
        </p>

        <p className="text-xs text-gray-400 truncate">{emp.designation}</p>
      </div>
    </button>
  )
}

export default function Sidebar({
  departments = [],
  employees = [],
  selectedEmployee,
  setSelectedEmployee,
  open = false,
  onClose,
}) {
  // All departments start expanded so the full tree is visible.
  const [expanded, setExpanded] = useState(
    () => new Set(departments.map((dept) => dept.id))
  )

  const toggleDepartment = (departmentId) => {
    setExpanded((prev) => {
      const next = new Set(prev)
      if (next.has(departmentId)) {
        next.delete(departmentId)
      } else {
        next.add(departmentId)
      }
      return next
    })
  }

  const handleSelect = (emp) => {
    setSelectedEmployee(emp)
    onClose?.()
  }

  const standaloneEmployees = employees.filter((emp) => !emp.department)

  return (
    <aside
      className={`fixed md:static inset-y-0 left-0 z-40 flex flex-col w-64 shrink-0 h-full bg-gray-900 border-r border-gray-800 py-6 transform transition-transform duration-200 md:translate-x-0 ${
        open ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="flex items-center justify-between gap-3 px-5">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-11 h-11 bg-white border border-gray-700 rounded-full">
            <MdOutlineEmail className="text-2xl text-gray-800" />
          </div>

          <h1 className="text-lg font-semibold text-gray-100">
            Email Signature
          </h1>
        </div>

        <button
          onClick={onClose}
          className="md:hidden text-gray-400 hover:text-white"
          aria-label="Close menu"
        >
          <MdClose className="text-2xl" />
        </button>
      </div>

      <hr className="my-5 border-gray-800" />

      <nav className="flex flex-col gap-1 px-3 overflow-y-auto">
        {standaloneEmployees.map((emp) => (
          <EmployeeButton
            key={emp.id}
            emp={emp}
            isActive={emp.id === selectedEmployee?.id}
            onSelect={handleSelect}
          />
        ))}

        {departments.length > 0 && (
          <>
            <p className="px-3 pt-5 pb-2 text-xs font-semibold tracking-wider text-gray-500 uppercase">
              Departments
            </p>

            {departments.map((dept) => {
              const deptEmployees = employees.filter(
                (emp) => emp.department === dept.id
              )
              const isExpanded = expanded.has(dept.id)

              return (
                <div key={dept.id} className="mb-1">
                  <button
                    onClick={() => toggleDepartment(dept.id)}
                    aria-expanded={isExpanded}
                    className="flex items-center justify-between w-full px-3 py-2 rounded-lg text-left text-sm font-semibold text-gray-100 hover:bg-gray-800/60 transition cursor-pointer"
                  >
                    <span>{dept.label}</span>
                    <span className="flex items-center gap-2">
                      <span className="text-xs font-normal text-gray-500">
                        {deptEmployees.length}
                      </span>
                      <MdExpandMore
                        className={`text-lg transition-transform ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </span>
                  </button>

                  {isExpanded && (
                    <div className="flex flex-col gap-1 mt-1">
                      {deptEmployees.length === 0 ? (
                        <p className="px-3 py-2 pl-4 text-xs text-gray-500">
                          No employees yet.
                        </p>
                      ) : (
                        deptEmployees.map((emp) => (
                          <EmployeeButton
                            key={emp.id}
                            emp={emp}
                            isActive={emp.id === selectedEmployee?.id}
                            onSelect={handleSelect}
                            nested
                          />
                        ))
                      )}
                    </div>
                  )}
                </div>
              )
            })}
          </>
        )}
      </nav>
    </aside>
  )
}
