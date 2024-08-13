/* eslint-disable react-hooks/exhaustive-deps */
import Sidebar from "./Sidebar";
import Content from "./Content";
import { Link, Outlet, useNavigate} from "react-router-dom";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/ReactToastify.css'
const BackendLayout = () => {
  const navigate = useNavigate()

  useEffect(()=> {
    if (localStorage.getItem("admin") === 'null') {
      navigate('login')
    }
    console.log(localStorage.getItem('admin'))
  },[])


  const handleLogOut = ()=> {
    localStorage.setItem('admin', null)
    navigate('login')
    toast.success('Logout Successfully', {
      position: 'top-center'
    })
  }
  return (
    <>
      <div className="flex">
        <Sidebar />

        <div className="flex-grow">
          <div className="sticky top-0 w-full h-[60px] bg-black flex justify-between items-center ps-2">
            <span className="text-white text-2xl font-semibold">
              Welcome to Dashboard
            </span>
            <div className="flex items-center gap-3">
              <Link
                to="/"
                className="text-white text-[22px]  border-2 border-white px-4 py-1"
              >
                <span className="hover:opacity-85">Visit Frontend</span>
              </Link>
              <ToastContainer />
              <button
                onClick={handleLogOut}
                className="bg-white  border-2 border-white text-black font-bold text-[22px] py-1 uppercase hover:bg-black duration-1000 px-4 me-4 hover:text-white rounded-sm"
              >
                Logout
              </button>
            </div>
          </div>

          <Content>
            <div className="container-admin">
              <Outlet />
            </div>
          </Content>
        </div>
      </div>
    </>
  );
};

export default BackendLayout;
