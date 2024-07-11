import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Home() {
  return (
    <div style={{marginTop:'100px',marginLeft:'200px',display:'flex',gap:'32px',padding:'48px',border:'1px solid #696969',borderRadius:'12px'
    }}>
      <NavLink to='login'><button style={{background:'#0066FF',color:'white'}}>Login</button></NavLink>
      <NavLink to='signup'><button style={{background:'#0066FF',color:'white'}}>Sign Up</button></NavLink>
    </div>
  )
}
