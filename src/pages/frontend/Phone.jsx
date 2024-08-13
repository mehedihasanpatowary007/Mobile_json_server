/* eslint-disable react/prop-types */

const Phone = ({phone}) => {
    return (
      <div>
        <div className="bg-gray-600 flex gap-4 p-2 max-w-[600px] min-h-[350px]  rounded ">
          <div className="border-2 border-black flex items-center justify-center bg-white rounded w-[40%] ">
            <img className="" src={phone?.image} alt={phone?.name} />
          </div>
          <div className="text-white flex flex-col justify-between w-[60%]">
            <h1 className="text-2xl font-bold text-black">{phone?.name}</h1>
            <div className="flex flex-col gap-3">
              <h4>Display : {phone?.display}</h4>
              <h4>Processor : {phone?.processor}</h4>
              <h4>Camera : {phone?.camera}</h4>
              <h4>Feature : {phone?.feature}</h4>
            </div>
            <h2 className="text-3xl font-bold">
              $<span>{phone?.price}</span>
            </h2>
          </div>
        </div>
      </div>
    );
};

export default Phone;