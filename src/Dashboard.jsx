import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const navigate = useNavigate()
    
    const formik = useFormik ({
        initialValues:{
            title:'',
            description:''
    },
        validationSchema:yup.object({
            title:yup.string().required('title cannot be empty'),
            description:yup.string().required('description cannot be empty')
        }),
        onSubmit: async(value)=>{
        try {
            let todo = await axios.post("http://localhost:3000/todo", value)
            console.log("Todo added:", todo.data);
            formik.resetForm()
            alert('Todo added successfully!')
        } catch (error) {
            console.error("Error adding todo:", error)
            alert('Error adding todo')
        }
        }
    })  
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <input type="text" value={formik.values.title} onChange={formik.handleChange} name='title' onBlur={formik.handleBlur} placeholder='title'/>
         <div className='text-danger'>{formik.touched.title && formik.errors.title}</div>

        <input type="text" value={formik.values.description} onChange={formik.handleChange} name='description' onBlur={formik.handleBlur} placeholder='description'/>
         <div className='text-danger'>{formik.touched.description && formik.errors.description}</div>

         <button type='submit'>Add todo</button>
      </form>
    </div>
  )
}

export default Dashboard