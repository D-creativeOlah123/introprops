import { useState } from "react";
import Inputvalue from "../INPUT/Inputvalue";
import Button from "../Button/Button";


function Propsinput() {
  const [username, setUsername] = useState("");
  const [surname, setSurname] = useState("");
  const [allmember, setAllmember] = useState([]);

  const handleChange = (e) => {
    setUsername(e.target.value);
  };
   const handleChange2 = (e) => {
    setSurname(e.target.value);
  };
//   const addMember = () => {

//   }
const displaymember = () => {
    const memberDetails = {
        username,
        surname
    }
    console.log(memberDetails);
    
  setAllmember([...allmember, memberDetails])
  console.log(allmember);
  
}
  return (
    <div>
      <h1>React props ass</h1>
      <Inputvalue type="text" value={username} onChange={handleChange} />
       <Inputvalue type="text" value={surname} onChange={handleChange2} />
       <Button func = {displaymember} text="add member" />

      <p>You typed: {username}</p>
      <p>You typed: {surname}</p>

  {
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
  }
    </div>
  );
}

export default Propsinput;
