import React,{useState, useEffect} from 'react'
import Axios from 'axios'
import Tables from './components/Tables';
import { Button } from 'bootstrap';
import "./App.css"
import { BsSearch } from "react-icons/bs";


const App = () => {


  const [searchElement, setSearchElement] = useState("")  // For Searching

  const [details, setDetails] = useState([]);

  const [arrrangement, setArrangement] = useState("Ascending")    // For Sorting


  const Sorting = (tablehead) =>{
    if(arrrangement == "Ascending"){
      const sorted = [...details].sort((a,b)=>
          (a[tablehead] >b[tablehead]) ? 1 : -1
      )

      setDetails(sorted);
      setArrangement("Descending")

    }
    if(arrrangement == "Descending"){
      const sorted = [...details].sort((a,b)=>
         (a[tablehead] <b[tablehead])  ? 1 : -1
      )

      setDetails(sorted);
      setArrangement("Ascending")

    }
    
}

  

  const fetchDetails = async () => {
    
      const {data} = await Axios.get('https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json')
      console.log(data);

      setDetails(data);
    
}

useEffect(() => {
  fetchDetails()
}, [])





  return (
    <div>
    <div className="form-search">
      <label htmlFor="">Search</label>
      <input type="search" name="" placeholder='Search' id="" 
      onChange={(e) =>{setSearchElement(e.target.value)}} />
      <div className="icon">
      <BsSearch size={25}/>
      </div>
    </div>
  
      <Tables details={details} searchElement={searchElement} Sorting={Sorting}/>
    </div>
  )
}

export default App
