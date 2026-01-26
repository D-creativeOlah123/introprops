import React, { useState } from 'react'
import Button from './Button/Button'
// import Inputvalue from './INPUT//Inputvalue'

const Input = () => {
    const [input1, setInput1] = useState("")
    const [input2, setInput2] = useState("")
    const [allUser, setAllUser] = useState([])
    const [buttonInp, setButtonInp] = useState("")
   
   

    const displayinput = () => {
        const userdetails = {
            input1,
            input2
        }
        console.log(userdetails);
        
        setAllUser([...allUser, userdetails])
        console.log(allUser);
        
    }
    const deleteUser = (idx) => {
      console.log(idx);

     const oneuser = allUser.filter((user,i) => i !== idx)
     console.log(oneuser);

     setAllUser(oneuser)
     
      // remainingusers = allUser.filter((_, i) => i !== idx)
      // setAllUser(remainingusers)
      
    }
    const signup =()=>{
      alert('signup.....')
    }
    const handleChange = (e) => {
  setUsername(e.target.value);
};


  return (
    <div>
        <h1>Input component</h1>
        <input type="text" onChange={(e) => setInput1(e.target.value)} />
        <input type="text" onChange={(e) => setInput2(e.target.value) } />
      {/* <Input type="text" value={username} onChange={handleChange} /> */}

         <Button func={signup} sty= "btn btn-success" text = "signup"/>
         <Button func={function () {
          alert('im success')
         }} sty="btn btn-danger" text = "login"/>
         <Button func= {function () {
            alert('show')
            
           }}
          sty="mybutton" text = "forgiotten password"/>
        

        <button onClick={displayinput}>Submit</button>

        <div>
            <p>{input1}</p>
            <p>{input2}</p>
            
        </div>
{/*         
            {allUser.length < 1 ? <h2>No user available</h2> :
            allUser.map((user, i) => (
               <div key={i}>                
                 <p>{user.input1}</p>
                 <p>{user.input2}</p>
                 <button>&times;</button>
               </div> 
              
            ))} */}
        {allUser.length < 1 ? <h2> No user available</h2> :
        <table>
          <thead>
            <tr>
              <th>S/N</th>
              <th>INFO 1</th>
              <th>INFO 2</th>
              <th>BUTTON</th>
            </tr>
          </thead>

          <tbody>
           {allUser.map((user,i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{user.input1}</td>
              <td>{user.input2}</td>
              <td><button onClick={() => deleteUser(i)}>&times;</button></td>
            </tr>

           ))}
          </tbody>
        </table>

        }

           
    </div>

    
  )
}

export default Input