import { useState } from "react";
import addProductImage from '../../assets/images/add_product-1024.webp'
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/ReactToastify.css'

const AddProduct = () => {
  const [phoneInfo, setPhoneInfo] = useState({
    image: "",
    name: "",
    display: "",
    processor: "",
    camera: "",
    feature: "",
    price: "",
  });

  const handleState = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setPhoneInfo({ ...phoneInfo, [name]: value });
  };

  const saveProduct = () => {
    const obj = { ...phoneInfo };
    console.log(phoneInfo);
    fetch("http://localhost:3000/phones", {
      method: "POST",
      body: JSON.stringify(obj),
    })
      .then((res) => {
        if (res?.status == 201) {
          toast.success('Product Added Successfully', {
            position: "top-center",
            autoClose: 2000 
          })
          setPhoneInfo({
            image: "",
            name: "",
            display : "",
            processor : "",
            camera : "",
            feature : "",
            price: ""
          });
        } else {
          toast.success("Something went wrong.", {
            position: "top-center",
            autoClose: 2000
          });
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="w-[500px] h-auto mx-auto">
      <div className=" flex justify-center">
        <img className="w-[300px]" src={addProductImage} alt="" />
      </div>
      <div className="flex flex-col ">
        <label htmlFor="image">Image</label>
        <input
          value={phoneInfo.image}
          name="image"
          className="input-field"
          type="text"
          onChange={handleState}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="name">Name</label>
        <input
          value={phoneInfo.name}
          name="name"
          className="input-field"
          type="text"
          onChange={handleState}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="display">Display</label>
        <input
          value={phoneInfo.display}
          name="display"
          className="input-field"
          type="text"
          onChange={handleState}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="processor">Processor</label>
        <input
          value={phoneInfo.processor}
          name="processor"
          className="input-field"
          type="text"
          onChange={handleState}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="camera">Camera</label>
        <input
          value={phoneInfo?.camera}
          name="camera"
          className="input-field"
          type="text"
          onChange={handleState}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="feature">Feature</label>
        <input
          value={phoneInfo?.feature}
          name="feature"
          className="input-field"
          type="text"
          onChange={handleState}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="">Price</label>
        <input
          value={phoneInfo?.price}
          name="price"
          onChange={handleState}
          className="input-field"
          type="text"
        />
      </div>

      <div className="mt-2">
      <ToastContainer />
        <button onClick={saveProduct} className="px-5 py-3 bg-black text-white">
          Save
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
