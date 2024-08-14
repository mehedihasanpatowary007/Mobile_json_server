
const Flags = () => {
    return (
      <div className="flex h-screen justify-center items-center gap-4">
        <div className="w-[450px] h-[250px] bg-green-800 relative">
          <div className="bg-red-600 absolute size-[150px] rounded-[50%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></div>
        </div>
        <div className="bg-white  border border-black w-[450px] h-[250px] relative overflow-hidden">
            <div className="bg-black h-1/3"></div>
            <div className="bg-white h-1/3"></div>
            <div className="bg-green-700 h-1/3"></div>
            <div className="bg-red-600 absolute top-1/2 size-[175px] -rotate-45 translate-x-[-50%] translate-y-[-50%]"></div>
        </div>
      </div>
    );
};

export default Flags;