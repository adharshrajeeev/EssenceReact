import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap';
import { isValidatePassword, isValidatePhoneNumber, validateEmail } from '../utils/validation';
import { useNavigate } from 'react-router-dom';
import instance, { VERIFY_NUMBER } from '../utils/axios';


function Login() {

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("")
  const [phoneNumber,setPhoneNumber]=useState("");
  const [loading,setLoading]=useState(false)
  const [signupError,setSignUpError] = useState({emailErr:null,passwordErr:null,phoneNumberErr:null,verificationErr:null})

  const navigate=useNavigate()

  const handleEmailChange = (event)=>{
    if(!validateEmail(event.target.value)){
      setSignUpError({emailErr:"Enter Valid Email"})
    }else{
      setSignUpError({emailErr:null})
    }
    setEmail(event.target.value)
  }


  const handlePhoneNumberChange = (event)=>{
    if(!isValidatePhoneNumber(event.target.value)){
      setSignUpError({phoneNumberErr:"Enter valid Number"})
    }else{
      setSignUpError({phoneNumberErr:false})
    }
    setPhoneNumber(event.target.value)
  }

  const handlePasswordChange = (event)=>{
    if(!isValidatePassword(event.target.value)){
      setSignUpError({passwordErr:"Enter Valid Password(Min 8 Letters)"})
    }else{
      setSignUpError({passwordErr:null})
    }
    setPassword(event.target.value)
  }


  const handleSubmit = async(event) => {
    setLoading(true)
    try{
      const response = await instance.get(`${VERIFY_NUMBER}?number=${phoneNumber}`);
      if(response.data.valid){
        setLoading(false)
        localStorage.setItem("userToken","userToken123")
      
        navigate('/')
      }else{
        setLoading(false)
        setSignUpError({verificationErr:"Enter valid PhoneNumber"})
      }
    }catch(err){  
      setLoading(false)
      console.log(err)
    }
  }

  return (
    <div className="container">

    <Row className="justify-content-center align-items-center" style={{height:"100vh"}}>
      <Col xs={12} sm={8} md={6} lg={4}>
        <h2>Login</h2>

        <form className='mt-3'>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                value={email}
                onChange={handleEmailChange}
            />
              {signupError.emailErr && <span style={{color: 'red',fontSize:"small"}}>{signupError.emailErr}</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
            <input type="number" className="form-control" id="phoneNumebr" aria-describedby="PhoneNumer"
             value={phoneNumber}
             onChange={handlePhoneNumberChange}
            />
              {signupError.phoneNumberErr && <span style={{color: 'red',fontSize:"small"}}>{signupError.phoneNumberErr}</span>}
              {signupError.verificationErr && <span style={{color: 'red',fontSize:"small"}}>{signupError.verificationErr}</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" 
             value={password}
             onChange={handlePasswordChange}
            />
            {signupError.passwordErr && <span style={{color: 'red',fontSize:"small"}}>{signupError.passwordErr}</span>}
          </div>
          {
            loading ? <div class="d-flex justify-content-center align-items-center" >
            <div class="spinner-border text-primary" role="status">
              <span class="sr-only"></span>
            </div>
          </div> : 
          <button type="button" className="btn btn-primary" style={{width:'100%'}}
          disabled={signupError.passwordErr || signupError.emailErr || signupError.phoneNumberErr ||
            !Boolean(email) ||  !Boolean(phoneNumber) || !Boolean(password) }

            onClick={()=>handleSubmit()}
          >Submit</button>
          }
        </form>
      </Col>
    </Row> 
    </div>
  )
}

export default Login