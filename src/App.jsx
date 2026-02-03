import React, { useState } from 'react'
import axios from 'axios' 
import Http from "./Http"

const App = () => {
  const [isloading, setisloading] = useState(false)
  const [allpost,setAllpost] = useState([])

  const Fetchallpost = async() =>{
    try {
      setisloading(true)
      const allpost = await axios.get("https://dummyjson.com/posts")
      console.log(allpost);
      setisloading(false)
      setallpost(allpost.data.posts)
    } catch (error) {
          setisloading(false)
      console.log(error);
    }
  }

   useEffect(() => {
    Fetchallpost()
  }, [])
  // const [id, setId] = useState("")
  // const [id, setId] = useState("")
  // const [hobbie, setHobbie] = useState("")
  // const [hobbies, setHobbies] = useState(["Cooking"])
  // // const [gender, setGender] = useState()
  // const [genderFilter, setGenderFilter] = useState("")
  // const [users, setUsers] = useState([
  //   { id: 1, name: "Daniel", age: 3, gender: "Male" },
  //   { id: 2, name: "Olaide", age: 16, gender: "Female" },
  //   { id: 3, name: "Habeeb", age: 72, gender: "Male" },
  //   { id: 4, name: "Ayo", age: 45, gender: "Male" },
  //   { id: 5, name: "Kareem", age: 55, gender: "Male" },
  //   { id: 6, name: "Ameen", age: 12, gender: "Male" },
  //   { id: 7, name: "Olamide", age: 59, gender: "Male" },
  //   { id: 8, name: "Fedrick", age: 44, gender: "Male" },
  //   { id: 9, name: "Mercy", age: 17, gender: "Female" },
  //   { id: 10, name: "Richard", age: 60, gender: "Male" },
  //   { id: 11, name: "Evans", age: 61, gender: "Male" },
  //   { id: 12, name: "Roqeebat", age: 12, gender: "Female" },
  //   { id: 13, name: "Kenny", age: 15, gender: "Female" },
  //   { id: 14, name: "Titilayo", age: 105, gender: "Female" },
  //   { id: 15, name: "Temi", age: 15, gender: "Male" },
  //   { id: 16, name: "Oray", age: 18, gender: "Male" },
  //   { id: 16, name: "Anu", age: 21, gender: "Female" },
  //   { id: 16, name: "Racheal", age: 16, gender: "Female" }
  // ])
  // const deleteUser = (idx) => {
  //   console.log(idx);
  //   const remainingUsers = users.filter((user) => user.id !== idx);
  //   // const remainingUsers = users.filter((_,i) => i !== idx);
  //   setUsers(remainingUsers);
  // }
  // const addHobbies = () => {
  //   console.log(hobbie, "Single hobbie");
  //   console.log(hobbies, "Single hobbie");
  //   setHobbies([...hobbies, hobbie]);
  //   // ternary operator
  //   // spread operator
  // }
  // const deleteHobbies = (id) => {
  //   console.log(id);
  //   const remainingHobby = hobbies.filter((hobby) => hobbies.id !== id)
  //   setHobbies(remainingHobby)
  // }
  // const filteredUser = users.filter((user) => {
  //   if (genderFilter === "") {
  //     return true
  //   }
  //   return user.gender === genderFilter
  // })
  return (
    <>
      <div>
           <Http loading={isloading} allpost={allpost}/>
        {/* <h1>Add Hobbies</h1> */}
        {/* <input onChange={(e) => setHobbie(e.target.value)} type="text" /> */}
        {/* <input onChange={(e) => setId(e.target.value)} type="text" placeholder='Enter your id' /><br /><br />
        <input onChange={(e)=> setName(e.target.value)} type="text" placeholder='Enter your name' /><br /><br />
        <input onChange={(e)=> setAge(e.target.value)} type="text" placeholder='Enter your age' /><br /><br /> */}
        {/* <button onClick={() => addHobbies()}>Add Hobbies</button> */}
        {/* <div>
          <h1>All Hobbies</h1>
          {hobbies.length === 0 ?
            <h2>There are no hoobies currently</h2> :
           
            <table>
          <thead>
            <tr>
              <th>S/N</th>
              <th>Hobby</th>              
              <th>Action</th>
            </tr>
          </thead>
          <tbody>           
             {hobbies.map((hobbie, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{hobbie}</td>
                <td>
                  <button onClick={() => deleteHobbies(hobbie.id)}>&times;</button>
                </td>
              </tr>              
            ))}
          </tbody>
        </table>
          }
        </div> */}
        {/* <select value={genderFilter} onChange={(e) => setGenderFilter(e.target.value)}>
          <option value="">Filter by Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select> */}
        {/* <table>
          <thead>
            <tr>
              <th>S/N</th>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredUser.map((user, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.gender}</td>
                <td>
                  <button onClick={() => deleteUser(user.id)}>&times;</button>
                  <button onClick={() => deleteUser(i)}>&times;</button>
                  <button onClick={deleteUser(user.id)}>&times;</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table> */}

      </div>
    </>
  )
}

export default App