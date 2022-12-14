import { useState } from "react";

  const AddUser = () => {
  const [data,setData]=useState({
    departmentName: '',
    employeeName: '',
    employeeCode: '',
    userName: '',
    password: '',
    roleType: '',
 
  });
 const inputChangeHandler=(e)=>{
    let newData={...data};
    newData[e.target.name]=e.target.value;
    setData(newData)
   
 }
    const submitHandler = (e) => {
      e.preventDefault();
   console.log(JSON.stringify(data))
   fetch('http://localhost:8080/saveuser', {
     
     method: "POST",
     headers: { "Content-Type": "application/json", "Accept": "application/json" },
     body:JSON.stringify(data)
   }).then(() => {
     
     console.log("Payroll are Added");
   }).catch(err=>console.log(err))
 }

  return <>
  <div className="container">
   <div className="d-flex">
    <h3>Add User</h3>
    <button type="button" className="btn btn-primary sm-4 mt-2 mx-3">Add User Master</button>
    </div> 
    <hr />
    <h6>Add/Edit User</h6>
    <form onSubmit={submitHandler} className="bg-light">
    <div className="row ">
      
      
    <div className="col-sm-4 mt-2">
         <label for="cars" id='label'>Department Name:</label>
       <br/>  
   <select valueType={data.departmentName} class="form-select" aria-label="Default select example" name="departmentName" onChange={inputChangeHandler}>
   {/* <input value={data.name} type="text" class="form-control" id="formGroupExampleInput" name="name" onChange={inputChangeHandler}/> */}
    <option selected disabled>Select Department</option>
    <option valueType="B.Tech">B.Tech</option>
    <option valueType="MCA">MCA</option>
    <option valueType="Arts">Arts</option>
    <option valueType="Sceince">Sceince</option>
  </select>
  </div>

  <div className="col-sm-4 mt-2">
         <label for="cars" id='label'>Employee Name:</label>
       <br/>  
   <select valueType={data.employeeName} class="form-select" aria-label="Default select example" name="employeeName" onChange={inputChangeHandler}>
   {/* <input value={data.name} type="text" class="form-control" id="formGroupExampleInput" name="name" onChange={inputChangeHandler}/> */}
    <option selected disabled>Select Employee Name</option>
    <option valueType="aman">Aman</option>
    <option valueType="amit">Amit</option>
    <option valueType="ranjan">Ranjan</option>
    <option valueType="saurav">Saurav</option>
  </select>
  </div>

  <div className="col-sm-4 mt-2">
         <label for="cars" id='label'>Employee Code:</label>
       <br/>  
   <select valueType={data.employeeCode} class="form-select" aria-label="Default select example" name="employeeCode" onChange={inputChangeHandler}>
   {/* <input value={data.name} type="text" class="form-control" id="formGroupExampleInput" name="name" onChange={inputChangeHandler}/> */}
    <option selected disabled>Select Employee Code</option>
    <option valueType="004">004</option>
    <option valueType="005">005</option>
    <option valueType="006">006</option>
    <option valueType="007">007</option>
  </select>
  </div>
  
 
  <div className="col-sm-4 mt-2">
         <label for="cars" id='label'>User Name:</label>
       <br/>
    <input value={data.userName} type="text" class="form-control" id="formGroupExampleInput" name="userName" onChange={inputChangeHandler}/>
  </div>

<div className="col-sm-4 mt-2">
         <label for="cars" id='label'>Password:</label>
       <br/>
    <input value={data.password} type="text" class="form-control" id="formGroupExampleInput" name="password" onChange={inputChangeHandler}/>
  </div>

  <div className="col-sm-4 mt-2">
         <label for="cars" id='label'>Role Type:</label>
       <br/>  
   <select valueType={data.roleType} class="form-select" aria-label="Default select example" name="roleType" onChange={inputChangeHandler}>
   {/* <input value={data.name} type="text" class="form-control" id="formGroupExampleInput" name="name" onChange={inputChangeHandler}/> */}
    <option selected disabled>Select Role</option>
    <option valueType="react JS">React JS</option>
    <option valueType="java">Java</option>
    <option valueType="pHP">PHP</option>
    <option valueType="python">Python</option>
  </select>
  </div>

  </div>
  <button type="submit" class="btn btn-primary mt-4">Save</button>
  </form>
  </div>
  </>
  }
  
  export default AddUser;