import MainLayout from "@/layouts/MainLayout"
import { useState } from "react";
import Css from "@/components/css";

export default function Home() {

  const [state, setState] = useState({
    username: '',
    password: '',
  });

function handleChange(e){
  setState({
    ...state,
    [e.target.name]: e.target.value
  })
}

// function handleChange(e){
//   setState({
//     ...state,
//     username: e.target.value
//   })
// }

  return (
    // <div>
    //   <form>
    //     Username:
    //     <input
    //       name="username"
    //       type="text"
    //       onChange={handleChange}
    //       value={state.username}
    //       />
    //     <br/>
    //     Password:
    //     <input
    //       name="password"
    //       type="password"
    //       onChange={handleChange}
    //       value={state.password}
    //       />
    //     <br/>
    //     <button type="submit">Login</button>
    //   </form>
    // </div>

    <Css/>
  )
}