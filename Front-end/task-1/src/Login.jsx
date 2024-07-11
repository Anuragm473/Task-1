import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
export default function() {
    const navigate=useNavigate()
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    async function Submit(e){
        e.preventDefault()
        try{
          
            await axios.post('https://task-1-server-eight.vercel.app/login',{
                username,password
            }).then(res=>{
              
                if(res.data.login==='success'){
                    navigate('/')
                }else if(res.data.login==='unsuccess'){
                  alert('wrong credentials')
                }
            }).catch(e=>{
              console.log('third')
                alert('credentials mismatch')
            })
        }catch(err){
            alert('Filled the wrong credentials')
        }
    }
  return (
    
    <div style={{padding:'24px 28px',border:'1px solid black',borderRadius:'12px' }}>
        <h2 style={{marginBottom:'18px'}}>Login page</h2>
      <form method='POST'>
      <div style={{marginBottom:'12px'}}>
        <span style={{padding:'5px 12px', fontWeight:'bold'}}>Email</span>
        <input style={{padding:'5px 5px', borderRadius:'12px',border:'1px solid #696969'}} type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='Username' required/>
        </div>
        <div style={{marginBottom:'12px'}}>
        <span style={{padding:'5px 12px', fontWeight:'bold'}}>Password</span>
        <input style={{padding:'5px 5px', borderRadius:'12px',border:'1px solid #696969'}} type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password' required/>
        </div>
        <button style={{background:'#0066FF',color:'white'}} onClick={Submit}>Submit</button>
      </form>
      <br/>
      <p>Or</p>
      <br/>
      <div style={{display:'flex',gap:'20px',padding:'0 35px'}}>
      <Link to='/signup'>Signup</Link>
      <Link to='/forget'>Forgot password</Link>
      </div>
    </div>
  )
}
