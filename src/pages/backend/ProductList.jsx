import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.css'

const ProductList = () => {

    const [phones, setPhones] = useState([])

    const getProducts = () => {
        fetch("http://localhost:3000/phones").then(res => res.json())
        .then(data => {
            setPhones(data)
        }).catch(err => console.log(err))
    }

    useEffect(() => {
        getProducts()
    }, [phones])

    const deleteProduct = (id) => {
        fetch(`http://localhost:3000/phones/${id}`, {method: "DELETE"})
        .then(res => { 
            if(res?.status == 200)
            {
                toast.success("Deleted Successfully", {
                  position: "top-center",
                  autoClose: 2000,
                });
            }else{
                toast.success("Something Went Wrong", {
                  position: "top-center",
                  autoClose: 2000,
                });
            }
         })
        .catch(err => console.log(err))
    }

  return (
    <div>
      <table className="table-auto w-full text-center">
        <thead>
          <tr className="bg-red-700 w-full">
            <th>Index</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <ToastContainer />
          {phones?.map((phone, index) => (
            <tr className="mt-10" key={phone?.id}>
              <td>{index + 1}.</td>
              <td>{phone?.name}</td>
              <td>{phone?.price} Tk.</td>
              <td className="flex justify-center">
                <img src={phone.image} className="w-[60px]" alt="" />
              </td>
              <td>
                <span className="flex gap-3 justify-center items-center">
                  <button
                    onClick={() => deleteProduct(phone?.id)}
                    className="px-4 py-2 outline-none text-white bg-red-800 border-none"
                  >
                    Delete
                  </button>
                  <Link
                    to={`/admin/edit-product/${phone?.id}`}
                    className="px-4 py-2 outline-none text-white bg-blue-800"
                  >
                    Edit
                  </Link>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList