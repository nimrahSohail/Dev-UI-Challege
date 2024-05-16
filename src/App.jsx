import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignupForm from './SignupForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div class="container">
  <div class="sign-up-form">
    <h2>Create Account</h2>
    <img src='./../public/vite.svg' />
    <form>
      <label for="full-name">Full Name</label>
      <input type="text" id="full-name" placeholder="Enter Full Name" />
      <label for="email">Email</label>
      <input type="email" id="email" placeholder="Enter Your Email" />
      <label for="password">Password</label>
      <input type="password" id="password" placeholder="Enter Your Password" />
      <button type="submit">Sign-Up</button>
      <p>OR-</p>
      <p>Already have an account? <a href="#">Login</a></p>
    </form>
  </div>
</div>


    {/* <SignupForm/> */}
    </>
  )
}

export default App
