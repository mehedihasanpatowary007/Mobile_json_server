
import Logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='w-[300px] h-auto min-h-screen bg-gradient-to-r from-blue-700 to-blue-400'>
        <div className='w-full flex justify-center'>
          <img src={Logo} alt="" className=' h-[180px] p-5' />
        </div>

        <ul>
          <li className='navlink'> <Link to="/admin" className='text-white'>Dashboard</Link> </li>
          <li className='navlink'> <Link to="add-product" className='text-white'>Add Product</Link> </li>
          <li className='navlink'> <Link to="product-list" className='text-white'>Product List</Link> </li>
        </ul>
    </div>
  )
}

export default Sidebar