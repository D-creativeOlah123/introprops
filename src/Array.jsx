import React, {useState} from 'react'

const Array = () => {
     const [array, setArray] = useState("")
     const[allArray, setAllArray] = useState([])

     const updateArray = () => {
        console.log(array, "single array");
        setAllArray([...allArray, array])
     } 

  return (
     <div>
        <input type="text" onChange={(e) => setArray(e.target.value)} />
        <button onClick={() => updateArray()}>Add</button>

        <div>
            {allArray.map((arr, i)=> (
                <div>
                    <p>{i + 1}</p>
                    <p>{arr}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Array