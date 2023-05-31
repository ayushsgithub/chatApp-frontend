// import React, { useEffect, useState } from 'react'
// import { auth } from './firebase'
// import "./login.css"
// import { signInWithEmailAndPassword } from 'firebase/auth'

// function Login() {
//     const [user, setUser] = useState(null)
//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")
  
//     async function register () {
//         try {
//            await auth.createUserWithEmailAndPassword(auth, email, password)
//         } 
//         catch (e) {
//             console.log(e)
//             alert(e)
//         }
//     } 


// async function loginToApp () {
//     try {
//         await signInWithEmailAndPassword(auth, email, password)
//     } catch (e) {
//         alert(e)
//     }
// }

// async function logout() {
//    await auth.signOut(auth)
// }

// useEffect(() => {
//     auth.onAuthStateChanged(auth, () => {
//         setUser(user)
//     })
// }, [user])


//   return (
//     <div className='login'>
//         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png" alt="" />


//         <form>
//             <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email' />
//             <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' />

//             <button type='submit' onClick={loginToApp}>Sign In</button>
//         </form>

//         <p>Not a member? {" "}
//             <span className='login-register' onClick={register}>Register Now</span>
//         </p>
//     </div>
//   )
// }

// export default Login