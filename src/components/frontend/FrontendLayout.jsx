
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
const FrontendLayout = () => {
  return (
    <>
      <div className="h-screen flex flex-col">
        <Header />
        <div className='flex-grow'>
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default FrontendLayout