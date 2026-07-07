import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Emaillist from './components/Emaillist'
import Login from './components/Login'

function App() {
  const employees = [
    {
      id: 1,
      Firstname: "Shibili ",
      Secondname: "Rahman Kp",
      designation: "Chairman",
      phone: "+91 73064 52529",
      email: "shibilirahiman.sr@racpartners.in",
      image: "https://racstartup.com/wp-content/uploads/2026/07/Group-42-4.png",
      withoutimage:"https://racstartup.com/wp-content/uploads/2026/07/Group-44.png"
    },
      {
      id: 2,
      Firstname: "",
      Secondname: "Vipin vk",
      designation: "Head of Operations- founder's  office",
      phone: "+91 70341 68000",
      email: "vipin@racpartners.in",
      image: "https://racstartup.com/wp-content/uploads/2026/07/vipin-vk.png",
      withoutimage:"https://racstartup.com/wp-content/uploads/2026/07/Group-44.png"
    },
    {

      id: 3,
      Firstname: "",
      Secondname: "Rajath S",
      designation: "Operations Manager",
      phone: "+91 80751 97908",
      email: "rajath@racpartners.in",
      image: "https://racstartup.com/wp-content/uploads/2026/07/Group-42-3.png",
      withoutimage:"https://racstartup.com/wp-content/uploads/2026/07/Group-44.png"

    },
    {
      id: 4,
      Firstname: "Jasira",
      Secondname: "Moideen",
      designation: "Head of Sales",
      phone: "+91 964 551 2000 ",
      email: "jasira@racpartners.in",
      image: "https://racstartup.com/wp-content/uploads/2026/07/Group-42-2.png",
      withoutimage:"https://racstartup.com/wp-content/uploads/2026/07/Group-44.png"
    },
    {
      id: 5,
      Firstname: "",
      Secondname: "Reshma A",
      designation: "HR Executive",
      phone: "+91 90723 74000",
      email: "reshma@racpartners.in",
      image: "https://racstartup.com/wp-content/uploads/2026/07/Group-42-1.png",
      withoutimage:"https://racstartup.com/wp-content/uploads/2026/07/Group-44.png"
    },
  
    {
      id: 6,
      Firstname: "MUHAMMED",
      Secondname: "SHAFEEQ PC",
      designation: "IT Manager",
      phone: "+91 735 600 4150",
      email: "shafeeq@racpartners.in",
      image: "https://racstartup.com/wp-content/uploads/2026/06/Group-42.png",
      withoutimage:"https://racstartup.com/wp-content/uploads/2026/07/Group-44.png"
    },
    {
      id: 7,
      Firstname: "",
      Secondname: "Admin",
      designation: "Admin",
      phone:"+91 80864 99444",
      email:"admin@racpartners.in",
      withoutimage:"https://racstartup.com/wp-content/uploads/2026/07/Group-44.png"
     
    },
    {
      id: 8,
      Firstname: "",
      Secondname: "Connect",
      designation: "Connect",
      phone: "+91 80864 99444",
      email: "connect@racpartners.in",
      withoutimage: "https://racstartup.com/wp-content/uploads/2026/07/Group-44.png"
    },
     {
      id: 9,
      Firstname: "",
      Secondname: "Accounts",
      designation: "Accounts",
      phone: "+91 90615 96000",
      email: "accounts@racpartners.in",
      withoutimage: "https://racstartup.com/wp-content/uploads/2026/07/Group-44.png"
    }
  ]

  const [isAuthenticated, setIsAuthenticated] = useState(
    () => localStorage.getItem('rac_auth') === 'true'
  )
  const [selectedEmployee, setSelectedEmployee] = useState(employees[0])
  const [showImage, setShowImage] = useState(true)

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
      <Sidebar
        employees={employees}
        selectedEmployee={selectedEmployee}
        setSelectedEmployee={setSelectedEmployee}
      />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Navbar onLogout={handleLogout} />
        <main className="flex-1 overflow-y-auto bg-gray-900 p-6">
          <div className="flex justify-center  gap-4 mb-6">
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
        </main>
      </div>
    </div>
  )
}

export default App
