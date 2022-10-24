import React from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import style from "../Componentsstyle/navigation.module.css"
export default function Navigation() {
  return (
    <div className={style.main}>
        
     <Button basic color='purple'>
     <Link to={"/"}>LogIn</Link>
    </Button>
    <Button basic color='green'>
     <Link to={"/"}>Logout</Link>
    </Button>
    </div>
  )
}
