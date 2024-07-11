import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function SignUp() {
    const navigate=useNavigate()
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [username,setName]=useState('')
    async function Submit(e){
        e.preventDefault()
        try{
            await axios.post('https://task-1-server-eight.vercel.app/register',{
              username,email,password
            }).then(res=>{
              
                if(res.data.success==='Ok'){
                  console.log(res)
                    navigate('/')
                }
            }).catch(err=>{
                alert('Something went wrong')
            }
            )
        }catch(err){
            alert('Filled the wrong credentials')
        }
    }
  return (
    <div style={{padding:'24px 28px',border:'1px solid black',borderRadius:'12px' }}>
        <h2>Signup page</h2>
      <form method='POST'>
        <div style={{marginBottom:'12px'}}>
        <span style={{padding:'5px 12px', fontWeight:'bold'}}>Username</span>
        <input style={{padding:'5px 5px', borderRadius:'12px',border:'1px solid #696969'}} type="text" value={username} onChange={(e)=>setName(e.target.value)} placeholder='Username' required/>
        </div>
        <div style={{marginBottom:'12px'}}>
        <span style={{padding:'5px 12px', fontWeight:'bold'}}>Email</span>
        <input style={{padding:'5px 5px', borderRadius:'12px',border:'1px solid #696969'}} type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email' required/>
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
      <Link to='/login'>Login</Link>
    </div>
  )
}
