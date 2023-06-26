import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [nameError, setNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [messError, setmessError] = useState('')

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleMessageChange = (e) => {
    setMessage(e.target.value)
  }
  const handleNameChange = (e) => {
    setName(e.target.value)
  }
  const validateName = () => {
    if (name === '') {
      setNameError('Name must be enter')
    } else {
      setNameError('')
    }
  }
  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setEmailError('Invalid email address')
    } else {
      setEmailError('')
    }
  }

  const validateMessage = () => {
    if (message === ' ') {
      setmessError('Message must be write')
    } else {
      setmessError('')
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    validateName()
    validateEmail()
    validateMessage()

    const data = {
      name: name,
      email: email,
      message: message,
    }
    if (!nameError && !emailError && !messError) {
      alert('Contact Successfully')
    }
    console.log(data)
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div className=" container-fluid">
      <div className="row">
        <div className=" col-lg 12 col-md-12 col-md-12 col-12 ">
          <form className=" w-50 main-box" onSubmit={handleSubmit}>
            <h1 className="text-center">Contact Us</h1>
            <div>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={handleNameChange}
                onBlur={validateName}
                className="form-control p-lg-2 my-4 fs-4"
                required
              />
              {nameError && <div className="error">{nameError}</div>}
            </div>

            <div>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                onBlur={validateEmail}
                className="form-control py-lg-2 my-4  fs-4"
                required
              />
              {emailError && <div className="error">{emailError}</div>}
            </div>
            <div>
              <textarea
                value={message}
                onChange={handleMessageChange}
                onBlur={validateMessage}
                cols={99}
                rows={8}
                className="form-control p-2 my-4 fs-4"
                placeholder="Enter the message"
                required
              ></textarea>
              {messError && <div className="error">{messError}</div>}
            </div>

            <button className="btn btn-primary px-4 py-2 fs-3 mx-3">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
