import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Emaillist from './components/Emaillist'
import Login from './components/Login'

const DEPARTMENTS = [
  { id: 'ip', label: 'IP Department' },
  { id: 'it', label: 'IT Department' },
]

function App() {
  // Employees without a `department` show as standalone items at the top of the
  // sidebar. Employees with a `department` are grouped under Departments.
  const employees = [
    {
      id: 1,
      Firstname: "Shibili ",
      Secondname: "Rahman K p",
      designation: "Chairman",
      phone: "+91 73064 52529",
      email: "shibilirahiman.sr@racpartners.in",
      image: "https://racstartup.com/wp-content/uploads/2026/07/Group-42-4.png",
      withoutimage: "https://racstartup.com/wp-content/uploads/2026/07/Group-44.png"
    },
    {
      id: 2,
      Firstname: "",
      Secondname: "Vipin v k",
      designation: "Head of Operations- founder's  office",
      phone: "+91 70341 68000",
      email: "vipin@racpartners.in",
      image: "https://racstartup.com/wp-content/uploads/2026/07/vipin-vk.png",
      withoutimage: "https://racstartup.com/wp-content/uploads/2026/07/Group-44.png"
    },
    {
      id: 3,
      Firstname: "",
      Secondname: "Rajath S",
      designation: "Operations Manager",
      phone: "+91 80751 97908",
      email: "rajath@racpartners.in",
      image: "https://racstartup.com/wp-content/uploads/2026/07/rejith.png",
      withoutimage: "https://racstartup.com/wp-content/uploads/2026/07/Group-44.png"
    },
    {
      id: 5,
      Firstname: "",
      Secondname: "Reshma P A",
      designation: "HR Executive",
      phone: "+91 90723 74000",
      email: "hr@racpartners.in",
      image: "https://racstartup.com/wp-content/uploads/2026/07/reshma.png",
      withoutimage: "https://racstartup.com/wp-content/uploads/2026/07/Group-44.png"
    },
    {
      id: 7,
      Firstname: "Muhammed ",
      Secondname: "Mujaddid kk",
      designation: "Legal & Documentation officer",
      phone: "+91 90615 96000",
      email: "accounts@racpartners.in",
      image: "https://racstartup.com/wp-content/uploads/2026/07/mujaddid.png",
      withoutimage: "https://racstartup.com/wp-content/uploads/2026/07/Group-44.png"
    },
    {
      id: 8,
      Firstname: "",
      Secondname: "Adarsh E M",
      designation: "Startup Intake Coordinator",
      phone: "+91 70340 23111",
      email: "adarsh@racpartners.in",
      image: "https://racstartup.com/wp-content/uploads/2026/07/rac-adarsh.png",
      withoutimage: "https://racstartup.com/wp-content/uploads/2026/07/Group-44.png"
    },
    {
      id: 9,
      Firstname: "",
      Secondname: "Admin",
      designation: "Admin",
      phone: "+91 80864 99444",
      email: "admin@racpartners.in",
      withoutimage: "https://racstartup.com/wp-content/uploads/2026/07/Group-44.png"
    },
    {
      id: 10,
      Firstname: "",
      Secondname: "Connect",
      designation: "Connect",
      phone: "+91 80864 99444",
      email: "connect@racpartners.in",
      withoutimage: "https://racstartup.com/wp-content/uploads/2026/07/Group-44.png"
    },
    {
      id: 11,
      Firstname: "",
      Secondname: "Accounts",
      designation: "Accounts",
      phone: "+91 90615 96000",
      email: "accounts@racpartners.in",
      withoutimage: "https://racstartup.com/wp-content/uploads/2026/07/Group-44.png"
    },

    // ─── IP Department ───
    {
      id: 4,
      Firstname: "Jasira",
      Secondname: "Moideen",
      designation: "Head of Sales",
      phone: "+91 964 551 2000 ",
      email: "jasira@racpartners.in",
      image: "https://racstartup.com/wp-content/uploads/2026/07/Group-42-2.png",
      withoutimage: "https://racstartup.com/wp-content/uploads/2026/07/Group-44.png",
      department: "ip"
    },
    {
      id: 12,
      Firstname: "SHARMINA C ",
      Secondname: "SALEEM",
      designation: "IP Advisor",
      phone: "+91 7034182000",
      email: "sharmina@racpartners.in",
      image: "https://racstartup.com/wp-content/uploads/2026/07/Group-45-3.png",
      withoutimage: "https://racstartup.com/wp-content/uploads/2026/07/Group-44.png",
      department: "ip"
    },
    {
      id: 13,
      Firstname: "FATHIMA ",
      Secondname: "RAHANAS K",
      designation: "IP Advisor",
      phone: "+91 8943548000",
      email: "rahnas@racpartners.in",
      image: "https://racstartup.com/wp-content/uploads/2026/07/Group-45-4.png",
      withoutimage: "https://racstartup.com/wp-content/uploads/2026/07/Group-44.png",
      department: "ip"
    },
    {
      id: 14,
      Firstname: "MUHAMMED ",
      Secondname: "AFNAS .T",
      designation: "IP Advisor",
      phone: "+91 9048731000  ",
      email: "afnas@racpartners.in",
      image: "https://racstartup.com/wp-content/uploads/2026/07/Group-45-1.png",
      withoutimage: "https://racstartup.com/wp-content/uploads/2026/07/Group-44.png",
      department: "ip"
    }, {
      id: 15,
      Firstname: "",
      Secondname: "VISMAYA T ",
      designation: "IP Advisor",
      phone: "+91 8943598000",
      email: "racvismaya@gmail.com",
       image:"https://racstartup.com/wp-content/uploads/2026/07/rac-vismaya.png",
      withoutimage: "https://racstartup.com/wp-content/uploads/2026/07/Group-44.png",
      department: "ip"
    },
    {
      id: 16,
      Firstname: "NABEEL  ",
      Secondname: "ALI",
      designation: "IP Advisor",
      phone: "+91 9061035000",
      email: " nabeelalirac@gmail.com ",
     image:"https://racstartup.com/wp-content/uploads/2026/07/nabeel.png",
      withoutimage: "https://racstartup.com/wp-content/uploads/2026/07/Group-44.png",
      department: "ip"
    },


    {
      id: 17,
      Firstname: "MUHAMMED ",
      Secondname: "ABDUL JALAL P",
      designation: "IP Advisor",
      phone: "+91 9544178000",
      email: "",
      image: "https://racstartup.com/wp-content/uploads/2026/07/Group-45.png",
      withoutimage: "https://racstartup.com/wp-content/uploads/2026/07/Group-44.png",
      department: "ip"
    },

    // ─── IT Department ───
    {
      id: 6,
      Firstname: "MUHAMMED",
      Secondname: "SHAFEEQ P C",
      designation: "IT Manager",
      phone: "+91 735 600 4150",
      email: "shafeeq@racpartners.in",
      image: "https://racstartup.com/wp-content/uploads/2026/06/Group-42.png",
      withoutimage: "https://racstartup.com/wp-content/uploads/2026/07/Group-44.png",
      department: "it"
    },
    {
      id: 18,
      Firstname: "Mohammed ",
      Secondname: "Shibili EK",
      designation: "Junior Developer",
      phone: "+91 8590999526",
      email: "mohammed.shibili@racpartners.in",
      image: "https://racstartup.com/wp-content/uploads/2026/07/shibili.png",
      withoutimage: "https://racstartup.com/wp-content/uploads/2026/07/Group-44.png",
      department: "it"
    }

    // Add more IT Department employees below, keeping department: "it".
    // Omit `image` for a without-image-only signature.
    // {
    //   id: 15,
    //   Firstname: "",
    //   Secondname: "",
    //   designation: "",
    //   phone: "",
    //   email: "",
    //   image: "",
    //   withoutimage: "https://racstartup.com/wp-content/uploads/2026/07/Group-44.png",
    //   department: "it"
    // },
  ]

  const [isAuthenticated, setIsAuthenticated] = useState(
    () => localStorage.getItem('rac_auth') === 'true'
  )
  const [selectedEmployee, setSelectedEmployee] = useState(employees[0])
  const [showImage, setShowImage] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleLogin = () => {
    localStorage.setItem('rac_auth', 'true')
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    localStorage.removeItem('rac_auth')
    setIsAuthenticated(false)
  }

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />
  }

  return (
    <div className="flex h-screen overflow-hidden">
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <Sidebar
        departments={DEPARTMENTS}
        employees={employees}
        selectedEmployee={selectedEmployee}
        setSelectedEmployee={setSelectedEmployee}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Navbar onLogout={handleLogout} onMenuClick={() => setSidebarOpen(true)} />
        <main className="flex-1 overflow-y-auto bg-gray-900 p-4 md:p-6">
          {selectedEmployee ? (
            <>
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <button
                  className={`font-bold py-2 px-4 rounded ${showImage ? 'bg-blue-500 hover:bg-blue-700 text-white' : 'bg-gray-700 hover:bg-gray-600 text-gray-200'}`}
                  onClick={() => setShowImage(true)}
                >
                  With Image
                </button>
                <button
                  className={`font-bold py-2 px-4 rounded ${!showImage ? 'bg-green-500 hover:bg-green-700 text-white' : 'bg-gray-700 hover:bg-gray-600 text-gray-200'}`}
                  onClick={() => setShowImage(false)}
                >
                  Without Image
                </button>
              </div>
              <Emaillist employee={selectedEmployee} showImage={showImage} />
            </>
          ) : (
            <div className="flex items-center justify-center h-64 text-center">
              <p className="text-gray-400">
                Select an employee to see their signature.
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default App
