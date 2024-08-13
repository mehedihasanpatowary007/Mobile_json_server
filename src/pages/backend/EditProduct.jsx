/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import editLogo from "../../assets/images/edit.svg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
const EditProduct = () => {
  const { id } = useParams();

  const [phonesInfo, setPhonesInfo] = useState({
    image: "",
    name: "",
    display: "",
    processor: "",
    camera: "",
    feature: "",
    price: ""
  });

  const getProductById = () => {
    fetch(`http://localhost:3000/phones/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPhonesInfo({
          image: data?.image,
          name: data?.name,
          display: data?.display,
          processor: data?.processor,
          camera: data?.camera,
          feature: data.feature,
          price: data?.price,
        });
      })
      .catch((err) => console.log(err));
  };

  const handleState = (e) => {
    const { name, value } = e.target;
    setPhonesInfo({ ...phonesInfo, [name]: value });
  };

  const updateProduct = () => {
    const obj = { ...phonesInfo };
    fetch(`http://localhost:3000/phones/${id}`, {
      method: "PUT",
      body: JSON.stringify(obj),
    })
      .then((res) => {
        if (res?.status == 200) {
          toast.success("Product Edited Successfully", {
            position: "top-center",
            autoClose: 2000,
          });
        } else {
          toast.success("Something Went Wrong", {
            position: "top-center",
            autoClose: 2000,
          });
        }
        setPhonesInfo({
          image: "",
          name: "",
          display: "",
          processor: "",
          camera: "",
          feature: "",
          price: "",
        });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProductById();
  }, []);
  return (
    <div className="w-[500px] mx-auto h-auto">
      <div className="flex justify-center">
        <img className="w-[300px]" src={editLogo} alt="" />
      </div>
      <div>
        <div className="flex flex-col">
          <label htmlFor="">Image</label>
          <input
            value={phonesInfo?.image}
            name="image"
            onChange={handleState}
            className="input-field"
            type="text"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Name</label>
          <input
            value={phonesInfo?.name}
            name="name"
            className="input-field"
            type="text"
            onChange={handleState}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Display</label>
          <input
            value={phonesInfo?.display}
            name="display"
            onChange={handleState}
            className="input-field"
            type="text"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Processor</label>
          <input
            value={phonesInfo?.processor}
            name="processor"
            onChange={handleState}
            className="input-field"
            type="text"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Camera</label>
          <input
            value={phonesInfo?.camera}
            name="camera"
            className="input-field"
            type="text"
            onChange={handleState}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Feature</label>
          <input
            value={phonesInfo?.feature}
            name="feature"
            className="input-field"
            type="text"
            onChange={handleState}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Price</label>
          <input
            value={phonesInfo?.price}
            name="price"
            className="input-field"
            type="text"
            onChange={handleState}
          />
        </div>

        <div className="mt-2">
          <ToastContainer />
          <button
            onClick={updateProduct}
            className="px-5 py-3 bg-black text-white"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
