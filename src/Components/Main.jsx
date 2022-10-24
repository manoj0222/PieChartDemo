import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Style from "../Componentsstyle/main.module.css"

import { CChartBar } from '@coreui/react-chartjs'

export default function Main() {
  const names=[]
  const value=[]
  const  [data,setData] =useState([])
  const[base,setBase]=useState("")
  const[recentUpdated,setrecentUpdated] = useState("")
 let counter =0

 const BASE_URL = `https://api.fastforex.io/fetch-all?api_key=b879b666f1-c43e5a5a8a-rk7q33`

   useEffect(()=>{
    getReponse()
     const intervalId = setInterval(() => {  getReponse()}, 1000 * 60) // in milliseconds
   },[])


  
   function getReponse(){
     axios.get(BASE_URL).then(response=>{
       console.log(response.data)
         setBase(response.data.base)
         data[0]=  [...Object.keys(response.data.results)]
         data[1]= [...Object.values(response.data.results)]
         setrecentUpdated(new Date().toString());
      }).catch((error)=>{
      }) 
      console.log(data)
   }


    for(let i=0;i<data.length;i++){
      for(let j=0;j<data[i].length;j++){
         if(i==0&&j==26||i==0&&j==42||i==0&&j==45||i==0&&j==48||i==0&&j==73)
         names.push(data[i][j])
         if(i==1&&j==26||i==1&&j==42||i==1&&j==45||i==1&&j==48||i==1&&j==73)
         value.push(data[i][j])
      }
    }

  return (
    <div >   
      <div className={Style.main}>
      <h1>Data page</h1>
      <CChartBar
       type="bar"
       width={600}
       height={300}
    
       data={{
         labels:names,
         datasets:[
           {
           label:"Currency Exchanges Based on  "+` ${base} `+` ${recentUpdated}`,
            backgroundColor : "#f87979",
            maxBarThickness:33,
            barThickness:20,
            categorySpacing:3.0,
            data:value,
            responsive:true
            
           }
         ]
       }}
      />
      </div>
    
    </div>
  )
}
