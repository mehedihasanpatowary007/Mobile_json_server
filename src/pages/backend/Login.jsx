import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/ReactToastify.css'

const Login = () => {
  const navigate = useNavigate();
  const admin = {
    email: "example@gmail.com",
    password: "mehedi007@"
  };
  const [logInAdmin, setLogInAdmin] = useState({
    email: "",
    password: ""
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogInAdmin({ ...logInAdmin, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    if (admin.email === logInAdmin.email && admin.password === logInAdmin.password) {
      localStorage.setItem("admin",logInAdmin)
      navigate("/admin");
      toast.success("Login Successfully", {
        position: "top-center",
        autoClose: 2000,
      });
    } else {
      toast.success('Invalid User', {
        position : 'top-center',
        autoClose: 2000
      })
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-red-300">
      <div className="w-[400px] h-auto bg-white rounded-lg flex flex-col gap-24 p-10">
        <h1 className="uppercase lg:text-5xl md:text-3xl text-2xl font-bold bg-slate-200 text-center py-4">
          Log in
        </h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <input
              className="p-2 w-full outline-none border-b-2 focus:border-black bg-slate-300 focus:bg-transparent text-[20px]"
              type="email"
              id="email"
              name="email"
              value={logInAdmin.email}
              placeholder="Enter your e-mail"
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              className="p-2 w-full outline-none border-b-2 focus:border-black bg-slate-300 focus:bg-transparent text-[20px]"
              type="password"
              id="password"
              name="password"
              value={logInAdmin.password}
              placeholder="Enter your password"
              onChange={handleChange}
            />
          </div>
          <ToastContainer />
          <button className="uppercase text-3xl font-bold text-black rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 py-3 ">
            <span className="hover:opacity-85">Login</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
