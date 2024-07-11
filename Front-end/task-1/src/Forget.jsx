import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Forget() {
    const navigate=useNavigate()
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    async function Submit(e){
        e.preventDefault()
        try{
            await axios.patch('https://task-1-server-eight.vercel.app/forget',{
                email,password
            }).then(res=>{
                if(res.data.message==='updated'){
                    navigate('/login')
                }
            }).catch(e=>{
                alert('wrong email')
            })
        }catch(err){
            alert('Filled the wrong credentials')
        }
    }
  return (
    <div style={{padding:'24px 28px',border:'1px solid black',borderRadius:'12px' }}>
    <h2>Forget password page</h2>
    <form method='POST'>
        <div style={{marginBottom:'12px'}}>
        <span style={{padding:'5px 12px', fontWeight:'bold'}}>Email</span>
        <input style={{padding:'5px 5px', borderRadius:'12px',border:'1px solid #696969'}} type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email' required/>
        </div>
        <div style={{marginBottom:'12px'}}>
        <span style={{padding:'5px 12px', fontWeight:'bold'}}>Password</span>
        <input style={{padding:'5px 5px', borderRadius:'12px',border:'1px solid #696969'}} type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password' required/>
        </div>
        <button style={{background:'#0066FF',color:'white',marginBottom:'32px'}} onClick={Submit}>Submit</button>
      </form>
      <div style={{display:'flex',gap:'20px',padding:'0 35px'}}>
      <Link to='/login'><button style={{background:'#0066FF',color:'white'}}>Login</button></Link>
      <Link to='/signup'><button style={{background:'#0066FF',color:'white'}}>SignUp</button></Link>
      </div>
      </div>
  )
}
