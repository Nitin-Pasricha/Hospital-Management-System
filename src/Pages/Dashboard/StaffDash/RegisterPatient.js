import React, { useState, useEffect } from 'react'
//import { Link, useNavigate } from 'react-router-dom'

import Button from '../../../Components/Button/Button'
import InputControl from '../../../Components/InputControl/InputControl'
import signUp from './health.svg'

import styles from '../../Auth/Auth.module.css'

function RegisterPatient(props) {
  //let navigate = useNavigate()
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [age, setAge] = useState('')
  const [phnNo, setPhnNo] = useState('')
  const [email, setEmail] = useState('')
  const [id, setId] = useState('')
  const [errors, setErrors] = useState({
    fname: '',
    lname: '',
    age: '',
    phnNo: '',
    email: '',
  })
  const [errorMessage, setErrorMessage] = useState('')
  const [loginButtonDisabled, setLoginButtonDisabled] = useState(false)

  //registering new user by sending api request at backend
  // const authenticate = () => {
  //   fetch(' ', {
  //     method: 'post',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       firstName: fname,
  //       lastName: lname,
  //       email: email,
  //       password: password,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setLoginButtonDisabled(false)

  //       if (!res.status) {
  //         setErrorMessage(res.message)
  //       } else {
  //         if (props.changeLoggedIn) {
  //           props.changeLoggedIn(true)
  //         }
  //         const user = {
  //           token: res.data?.authToken,
  //           firstName: res.data?.firstName,
  //           lastName: res.data?.lastName,
  //           email: res.data?.email,
  //         }
  //         //localStorage.setItem("user", JSON.stringify(user));
  //         //navigate("/dashboard");
  //       }
  //     })
  //     .catch((err) => {
  //       setErrorMessage('Error connecting to server')
  //       setLoginButtonDisabled(false)
  //     })
  // }

  useEffect(() => {
    setId(new Date().getTime())
  }, [])
  const validateForm = () => {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    const errors = {}
    if (!fname) {
      errors.fname = 'Enter First Name'
    }
    if (!lname) {
      errors.lname = 'Enter Last Name'
    }
    if (!age) {
      errors.age = 'Enter Age'
    }

    if (!phnNo) {
      errors.phnNo = 'Enter Contact No.'
    }
    if (phnNo.length < 10 || phnNo.length > 10) {
      errors.phnNo = 'Enter Valid Contact No.'
    }

    if (email.trim() === '') {
      errors.email = 'Enter Email'
    } else if (!emailRegex.test(String(email).toLowerCase())) {
      errors.email = 'Invalid Email'
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors)
      return false
    } else {
      return true
    }
  }

  const submission = (e) => {
    e.preventDefault()
    const emailValue = email

    if (!emailValue) {
      setErrorMessage('Enter Credentials')
      return
    }
    setErrorMessage('')

    if (!validateForm()) return
    setLoginButtonDisabled(true)
    //authenticate()
  }

  // disable login button while calling api
  // setLoginButtonDisabled(true);

  return (
    <section className={styles['login']}>
      <img src={signUp} alt='sign-up' className={styles['logo']} />
      <div className={styles['signin-form']}>
        <h1 className={styles['signin-form_head']}>Register Patient</h1>
        <h3 className={styles['signin-form_sub-head']}>City Hospital</h3>
        <form onSubmit={(e) => submission(e)}>
          <div className={styles.formFeilds}>
            <p>
              <strong>Patient Id:</strong> {id}
            </p>
            <InputControl
              label='First Name'
              onChange={(e) => {
                const value = e.target.value
                setFname(value)
              }}
              placeholder='Rosy'
              error={errors.fname}
            />
            <InputControl
              label='Last Name'
              onChange={(e) => {
                const value = e.target.value
                setLname(value)
              }}
              placeholder='Fernando'
              error={errors.lname}
            />
            <InputControl
              label='Age'
              onChange={(e) => {
                const value = e.target.value
                setAge(value)
              }}
              error={errors.age}
              type='number'
            />
            <InputControl
              label='Contact No.'
              onChange={(e) => {
                const value = e.target.value
                setPhnNo(value)
              }}
              error={errors.phnNo}
              type='number'
            />
            <InputControl
              label='Email'
              onChange={(e) => {
                const value = e.target.value
                setEmail(value)
              }}
              placeholder='abc@xyz.com'
              error={errors.email}
            />
            {errorMessage && (
              <small className='error-msg'>{errorMessage}</small>
            )}

            <div style={{ display: 'flex', placeContent: 'center' }}>
              <Button disabled={loginButtonDisabled} type='submit'>
                Register
              </Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default RegisterPatient
