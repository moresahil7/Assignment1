import React,{useState, useEffect} from 'react'
import Axios from 'axios'
import Tables from './components/Tables';
import { Button } from 'bootstrap';
import "./App.css"

const App = () => {


  const [searchElement, setSearchElement] = useState("")

  const [details, setDetails] = useState([]);

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
    </div>
  
      <Tables details={details} searchElement={searchElement}/>
    </div>
  )
}

export default App
