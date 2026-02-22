import React from 'react'
import {useFormik} from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {

     const navigate = useNavigate()
     const passwordRegex = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/

    const formik = useFormik({
        initialValues:{
            email:'',
            password:''
        },
        validationSchema:yup.object({
            email:yup.string().email('Invalid email address').required('email cannot be empty'),
            password:yup.string().matches(passwordRegex, 'password must include atleast one special character'),
            // confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'password must match').required('please confirm password')

        }),
        onSubmit: async(value)=>{
           const res= await axios.get(`http://localhost:1334/user?email=${value.email}`)
            
           const userExists = res.data
                
                
            

            if(userExists.length > 0 && userExists[0].password === value.password){
                    alert('Login successful')
                    navigate('/dashboard')
                    return
                }
                if (userExists.length>0 && userExists[0].password !== value.password) {
                    alert('Invalid details')
                    return
                }
                if (userExists.length ==0) {
                    alert('user does not exist')
                    navigate('/Formik')
                    return
                }
                    
                }






            
            
        }
    )
  return (
    <div>
      <form onSubmit={formik.handleSubmit} className='w-50 mx-auto px-3 py-3' method="">

            
            <input type="email" onChange={formik.handleChange} name='email' onBlur={formik.handleBlur} className= 'form-control mb-3' placeholder='email'/>
            <div className='text-danger'>{formik.touched.email && formik.errors.email}</div>

            <input type="password" onChange={formik.handleChange} name='password' onBlur={formik.handleBlur} className= 'form-control mb-3' placeholder='password'/>
            <div className='text-danger'>{formik.touched.password && formik.errors.password}</div>


            <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Login