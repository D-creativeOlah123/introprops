import { useState } from "react";
import Inputvalue from "../INPUT/Inputvalue";
import Button from "../Button/Button";
import Display from "../Display"
import { useEffect } from "react";

function Propsinput() {
  const [username, setUsername] = useState("");
  // const [surname, setSurname] = useState("");
  const [allmember, setAllmember] = useState([]);
  const [count, setCount] = useState(0)
  const [calculation, setCalculation] = useState(1)

  const handleChange = (e) => {
    setUsername(e.target.value);
  };
  //  const handleChange2 = (e) => {
  //   setSurname(e.target.value);
  // };

const displaymember = () => {
  setCount(count +1)
 

  username
  setAllmember([...allmember, username])
  // console.log(allmember);
    // setSurname("");
    setUsername("");
     console.log(allmember);
    // console.log(memberDetails);
  
}
// useEffect(()=> {
//   // alert(`WELCOME ${count}`)
//   // setCalculation(count * 2)
//   const timer = setInterval(()=> {
//     console.log("timer working........................");
    

//   },3000)

//   return()=>{
//     clearInterval(timer)
//   }
// },[count])

  useEffect(()=>{
    fetch("https://dummyjson.com/posts")
    .then((data)=> data.json())
    .then((res)=> console.log(res))
    
  })
  return (
    <div>
      <h1>React props ass</h1>
      <h1> calculation{calculation}</h1>
      <h1> count{count}</h1>
      <Inputvalue className="form-control mt-3" type="text" value={username} onChange={handleChange} placeholder="enter your first input"/>
       {/* <Inputvalue className="form-control mt-3"  type="text" value={surname} onChange={handleChange2} placeholder="enter your first input"/> */}
       <Button func = {displaymember} text="add member" />
       <Display allmember ={allmember}/>

      {/* <p>You typed: {username}</p>
      <p>You typed: {surname}</p> */}

  {/* {
    allmember.length < 1? <h2> No members for now</h2> :
        <table>
        <thead>
            <tr>
                <th>s/n</th>
                <th>username</th>
                <th>surname</th>
            </tr>
        </thead>
        <tbody>
            {
                allmember.map((user,i) => (
                    <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{user.username}</td>
                        <td>{user.surname}</td>
                    </tr>
                )) }
        </tbody>
      </table>
  } */}
    </div>
  );
}

export default Propsinput;
