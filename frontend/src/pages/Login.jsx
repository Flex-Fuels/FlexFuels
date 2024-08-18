import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { toast } from "react-toastify"

export function Login(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const onLogIn = async() => {
       if(email.length==0) {
            toast.warn('Enter Email')
        }else if(password.length==0) {
            toast.warn('Enter Password')
        }else {
            toast.success('Welcome to FlexFuels')
            navigate('/home')
        }
    }

    return(
        <>
            <div className="header">
            <h1 className="logo">Flex<span className="white-text">Fuels</span><p className="tagline">...a one stop solution for optimum nutrition</p>
            </h1>
            </div>
            <div className="row">
                <div className="col"></div>
                <div className="col">
                <div className="mb-3">
                <label htmlFor="">Email</label>
                <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="abc@test.com" className="form-control" />
                </div>

                <div className="mb-3">
                <label htmlFor="">Password</label>
                <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="xxxxxxxxxx" className="form-control" />
                </div>
                <div>Don't have an account ? <Link to={"/signup"}>Sign Up</Link></div>
                <button onClick={onLogIn} className="btn btn-primary mt-2">Log In</button>
                </div>
                <div className="col"></div>
            </div>
            
        </>
    )
}

export default Login