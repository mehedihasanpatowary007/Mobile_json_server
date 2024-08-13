import { useContext, useEffect, useState } from "react"
import Phone from "./phone"
import { SearchContext } from "../../context/SearchContext"
import Loading from "./Loading"
const Home = () => {
  const [phones, setPhones] = useState([])
  const [loading, setLoading] = useState(true)
  const {searchText} = useContext(SearchContext)
  console.log(searchText)
  useEffect(()=>{
    fetch('http://localhost:3000/phones')
    .then(res=> res.json())
    .then(data => {
      return (
        setLoading(false),
        setPhones(data)
      )
    })
  },[searchText])

    const handleSearch = phones.filter((phone) => {
      if(phone.name.toLowerCase().includes(searchText.toLowerCase().trim())){
        return true
      }
      else{
        return false
      }
    })

  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <div className="flex flex-wrap w-[95%] justify-center mx-auto gap-10 z-40 py-5">
          {handleSearch?.map((phone) => (
            <Phone key={phone.id} phone={phone} />
          ))}
        </div>
      )}
    </>
  );
}

export default Home