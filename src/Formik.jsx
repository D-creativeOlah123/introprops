// import React from 'react'
// import { useFormik } from 'formik'
// import * as yup from "yup"
// import axios from 'axios'

// const Formik = () => {
//  const passwordRegex = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/

//     const formik = useFormik({
//         initialValues:{
//             username:"",
//             email:"",
//             password:""
//         },
//         validationSchema:yup.object({
//             username:yup.string().min(3,"Username is too short").max(8,"usernam is too long").required("username cannot be empty"),
//             email:yup.string().email("Invalid email address").required("email cannot be empty"),
//             password:yup.string().matches(passwordRegex, "password has eight characters including one uppercase letter, one lowercase letter, and one number or special character.").required("password cannot be empty")
//         }),
//         onSubmit:(value)=>{
//             console.log(value);
//             axios.post(" http://localhost:1429/user", value)
//             .then((res)=>{
//                 console.log(res);
                
//             }).catch((err)=>{
//                 console.log(err);
//             })
        
            
//         }

//     })
//     console.log(formik.errors);
//     console.log(formik.touched);
    
    
//   return (
//     <div>
//         <form className='w-100 mx-auto px-3 py-3' onSubmit={formik.handleSubmit}>
//            <div className='form-group'>
//              <input onBlur={formik.handleBlur} className='form-control mb-3'  name='username' onChange={formik.handleChange} type="text" placeholder='username' />
//             <small className='text-danger'>{formik.touched.username && formik.errors.username}</small>
//            </div>
            
//             <div className='form-group'>
//             <input onBlur={formik.handleBlur} className='form-control mb-3' name='email' onChange={formik.handleChange} type="text"  placeholder='email'/>
//              <small className='text-danger'>{formik.touched.email && formik.errors.email}</small>
//             </div>

//             <div className='form-group'>
//             <input onBlur={formik.handleBlur} className='form-control mb-3'  name='password'  onChange={formik.handleChange} type="text" placeholder='passwords'/>
//              <small className='text-danger'>{ formik.touched.password && formik.errors.password}</small>
//             </div>

//             <button type='submit'>Summit</button>
           
//         </form>
//     </div>
//   )
// }

// export default Formik

import React, {useState} from 'react'
import {useFormik} from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Formik = () => {
    const navigate = useNavigate()
     const passwordRegex = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
    const formik = useFormik({
        initialValues:{
            username:'',
            email:'',
            password:''
        },
        validationSchema:yup.object({
            username:yup.string().min(3, 'username is too short').required('username cannot be empty'),
            email:yup.string().email('Invalid email address').required('email cannot be empty'),
            password:yup.string().matches(passwordRegex, 'password must include atleast one special character'),
            // confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'password must match').required('please confirm password')

        }),
        onSubmit: async(value)=>{
           const res= await axios.get(`http://localhost:133/user?email=${value.email}`)
            
           const userExists = res.data
                
                
            

            if(userExists.length > 0){
                    alert('user already exists')
                    navigate('/login')
                    return
                };






            console.log(value);
            axios.post('http://localhost:1334/user', value).then((res)=>{
                console.log(res);
                navigate('/login')
                
            }).catch((err)=>{
                console.log(err);
                
            })
            
    //         response =  fetch('http://localhost:1334/user', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(value)
    //   });
    //   const data =  response.json();
        }
    })
    // console.log(Object.keys(formik));
    
    console.log(formik.errors)
    console.log(formik.touched)
  return (
    <div>
      <form onSubmit={formik.handleSubmit} className='w-50 mx-auto px-3 py-3' method="">
            <input onBlur={formik.handleBlur} className= 'form-control mb-3' type="text" onChange={formik.handleChange} name='username' placeholder='username' />
            <div className='text-danger'>{formik.touched.username && formik.errors.username}</div>

            <input type="password" onChange={formik.handleChange} name='password' onBlur={formik.handleBlur} className= 'form-control mb-3' placeholder='password'/>
            <div className='text-danger'>{formik.touched.password && formik.errors.password}</div>

            <input type="email" onChange={formik.handleChange} name='email' onBlur={formik.handleBlur} className= 'form-control mb-3' placeholder='email'/>
            <div className='text-danger'>{formik.touched.email && formik.errors.email}</div>

            <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Formik