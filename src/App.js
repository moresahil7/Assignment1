import React,{useState, useEffect} from 'react'
import Axios from 'axios'
import Tables from './components/Tables';
import Paginate from './components/Paginate';
import "./App.css"
import { BsSearch } from "react-icons/bs";


const App = () => {



  const [items, setItems] = useState([]);
  const [searchElement, setSearchElement] = useState("")  // For Searching
  const [arrrangement, setArrangement] = useState("Ascending")    // For Sorting


  const [currentPage, setCurrentPage] = useState(1)         //for pages
  const [itemsperPage, setItemsperPage] = useState(7)        //10 items in table on single page



  const lastitemIndex = currentPage * itemsperPage;
  const firstitemIndex = lastitemIndex-itemsperPage;
  const currentItem = items.slice(firstitemIndex,lastitemIndex)




  const Sorting = (tablehead) =>{
    if(arrrangement == "Ascending"){
      const sorted = [...items].sort((a,b)=>
      (a[tablehead] >b[tablehead]) ? 1 : -1
      )

      setItems(sorted);
      setArrangement("Descending")

    }
    if(arrrangement == "Descending"){
      const sorted = [...items].sort((a,b)=>
      (a[tablehead] <b[tablehead])  ? 1 : -1
      )

      setItems(sorted);
      setArrangement("Ascending")

    }
    
}

const changePage = (number) => setCurrentPage(number)

  const fetchitems = async () => {
    
      const {data} = await Axios.get('https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json')
      console.log(data);

      setItems(data);
    
}

const previousPage = () => setCurrentPage(currentPage-1);
const nextPage = () => setCurrentPage(currentPage+1);


useEffect(() => {
  fetchitems()
}, [])





  return (
    <div>
    <div className="form-search mt-3">
      <label htmlFor="">Search</label>
      <input type="search" name="" placeholder='Search' id="" 
      onChange={(e) =>{setSearchElement(e.target.value)}} />
      <div className="icon">
      <BsSearch size={22}/>
      </div>
    </div>
  
      <Tables 
        items={currentItem} 
        searchElement={searchElement} 
        Sorting={Sorting}
      />
      <Paginate 
        itemsperPage={itemsperPage} 
        itemsCount={items.length} 
        changePage={changePage}  
        previousPage={previousPage} 
        nextPage={nextPage} 
      />

    </div>
  )
}

export default App
