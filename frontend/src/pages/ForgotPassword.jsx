import React, { useState } from 'react'

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
  return (
    <div>
      <input type='email' name='email' value={email} >
      </input>
    </div>
  )
}

export default ForgotPassword
