import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

import style from "../Componentsstyle/home.module.css"

export default function Home() {
const[validata,SetValidData]=useState(false)
const[emailid,SetEmailId] =useState("")
const[password,setPassword]=useState("")
let router =useNavigate()
let  userDetails = new Map();

function getData(){
  let data =JSON.parse(localStorage.getItem("data"))
    data.map((element)=>{
       userDetails.set(element.emailId,element.password)
    })
}


function handleSubmit(e){
  e.preventDefault()
  validateData(emailid,password)
  if(validata){
    getData()
    checkUserIsPresent(emailid,password)
  }
}

  // useEffect(()=>{
  //    let arr =[{"emailId":"manojmanu08@gmail.com","password":"Manoj@123y"},
  //    {"emailId":"murali299@gmail.com","password":"bhararth$234@"},
  //    {"emailId":"Mani23129@gmail.com","password":"Melli78^er"},{
  //     "emailId":"Surya6767@gmail.com","password":"Surya444@"
  //    }]  
  //    localStorage.setItem("data",JSON.stringify(arr))



  // },[])
function checkUserIsPresent(inputemail,inputPassword){
  if(userDetails.has(inputemail)){
      let isPasswordContain = userDetails.get(inputemail).toString();
      if(inputPassword===isPasswordContain){
         router("/main")
       }
       else{
         alert("Password Doesn't matched")
       }
      
   }
   else{
      alert("User Not existed")
   }
}

 function validateData(inputEmailId,inputpassword){
   console.log(inputEmailId)
   if(inputEmailId===""){
   alert("EmailId is Required")

   }
   else if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(inputEmailId)){
    alert("Inavlid EmailId")
   }
   else if(inputpassword===""){
  alert("Password Required")
   }
   else if(!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()+=-\?;,./{}|\":<>\[\]\\\' ~_]).{8,}/.test(inputpassword)){
   alert("Password isNotValid")
   }
   else
    SetValidData(true)

}



  
  return (

    <div  className={style.box}>
     
    <div>
      <h1>Login</h1>
     <form>    
       <div className={style.inputBox}>
       <input type="email" name='' required  className={style.input}  onChange ={(e)=>SetEmailId(e.target.value)}  />  
       <label>EmailId</label>
       </div><br></br>
       <div className={style.inputBox}>
       <input    type="password" name='' required   className={style.input}  onChange ={(e)=>setPassword(e.target.value)}  />
       <label>Password</label>
       </div>
       <div className={style.inputBox}>
       <Button onClick={(e)=>handleSubmit(e)}>Submit</Button>
       <div></div>
       </div>
     </form>
     </div>

    </div>
  )
}
