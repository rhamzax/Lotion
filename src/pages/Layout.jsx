import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"

const Layout = () => {
  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <div className='flex-1 grid grid-cols-4'>
        <Sidebar className='flex-grow' />
        <div className='col-span-3'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
export default Layout