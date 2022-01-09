import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Tables = ({details,searchElement}) => {
    return (
        <div>
      
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Sr No</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Age </th>
      <th scope="col">Email </th>
      <th scope="col">Web </th>
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
