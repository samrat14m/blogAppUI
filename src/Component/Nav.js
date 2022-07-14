import React from 'react'
import { Link,Outlet } from 'react-router-dom'

const Nav = () => { 
  return (
      <div className='nav'>
        
           <nav className='desktop__nav'>
          <ul>
              <li><Link  to ="/">Home</Link></li>
              <li><Link  to="/bollywood" >Bollywood</Link></li>
              <li><Link  to="/technology">Technology</Link></li>
              <li><Link  to="/hollywood">Hollywood</Link></li>
              <li><Link  to="/fitness">Fitness</Link></li>
              <li><Link  to="/food">Food</Link></li>
          </ul>
          <Outlet/>
      </nav>   
        

       
    
    </div>
  )
}

export default Nav