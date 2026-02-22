import { useState } from "react";
import {FaEye, FaEyeSlash} from "react-icons/fa"

function Home() {
    const [username,setUsername] = useState("lola")
    const [userdetails,setUserdetails] = useState({
        name: "olaide", age: 23
    })
    const [userinfo, setUserinfo] = useState({
        username: "",
        email: "",
        password: ""
    })
    const [allUser, setAllUser] = useState([])
    console.log(username, "The variable");
    console.log(setUsername, "The function that update the variables");
    const [show,setShow] = useState(false)

    const Update = (name) => {
        console.log("working", name);
        setUsername(name)
        setUserdetails({...userdetails, age: 22} )
        setAllUser([userinfo, ...allUser])
        
    }
    const showpassword = ()=>{

        setShow(!show)
    }
    
    return(
        <div>
            <h1>Hello world {Math.random()}</h1>
            <p>{username}</p>
            <p>{userdetails.age}</p>
            <button onClick={()=>Update("shola")}>Update user</button>
            <input onChange={(e)=>setUserinfo({...userinfo,email:e.target.value})} type="email" placeholder="email" />
            <input onChange={(e)=>setUserinfo({...userinfo,username:e.target.value})} type="text" placeholder="username" />
            <input onChange={(e)=>setUserinfo({...userinfo,password:e.target.value})} type={show ? "text" : "password"} placeholder="password" />
            <button onClick={showpassword}>{show ? <FaEyeSlash/> : <FaEye/>}</button>

            {allUser.length == 0 ? "NO USER FOUND" :
            
                allUser.map((user, index) => {
                    
                    return(
                        <div key={index}>
                            <h1>{user.email}</h1>
                            <h1>{user.username}</h1>
                        </div>
                    )
                })}
        </div>
    )
    
}


export default Home