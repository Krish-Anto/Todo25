import { useState } from "react"

export function Counter () {

const [like,setLike] = useState(0)
const [dislike, setdisLike] = useState(0)
    return(
        <div>
        <button onClick={()=>{
            setLike(like+1);
            console.log(like)
        }}>👍 {like} </button>
        <button onClick={()=>{
            setdisLike(dislike+1);
            console.log(dislike)
        }}> 👎 {dislike} </button>
        </div>

    )
}