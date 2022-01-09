import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Tables = ({details,searchElement, Sorting}) => {
    return (
        <div>
      
  <table class="table">
  <thead className='table-light'>
    <tr>
      <th scope="col" onClick={() =>Sorting("id")} >Sr No</th>
      <th scope="col" onClick={() =>Sorting("first_name")} >First Name</th>
      <th scope="col" onClick={() =>Sorting("last_name")}>Last Name</th>
      <th scope="col" onClick={() =>Sorting("age")}>Age </th>
      <th scope="col" onClick={() =>Sorting("email")}>Email </th>
      <th scope="col" onClick={() =>Sorting("email")}>Web </th>
    </tr>
  </thead>
  <tbody>
        
    {
      details.filter((val) =>{
        if(searchElement == ""){
          return val;
        }
        else if(val.first_name.toLowerCase().includes(searchElement.toLowerCase())){
          return val;
        }
        else if(val.last_name.toLowerCase().includes(searchElement.toLowerCase())){
          return val;
        }
      }).map((val,key) => {
        return(
  
    <tr key={key}>  
      <td>{val.id}</td>
      <td>{val.first_name}</td>
      <td>{val.last_name}</td>
      <td>{val.age}</td>
      <td>{val.email}</td>
      <td><a href={val.web}>{val.web}</a></td>
    </tr>
  
    
        )
      })
    }
    </tbody>
    </table>
      
    

   


        
        </div>
    )
}

export default Tables
