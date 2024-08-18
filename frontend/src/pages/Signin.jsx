import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"


export function Signin(){
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [pinCode, setPinCode] = useState('')

    const navigate = useNavigate()


    const onSignUp = async() => {
        if(firstName.length==0) {
            toast.warn('Enter First Name')
        }else if(lastName.length==0) {
            toast.warn('Enter Last Name')
        }else if(email.length==0) {
            toast.warn('Enter Email')
        }else if(password.length==0) {
            toast.warn('Enter Password')
        }else if(confirmPassword.length==0) {
            toast.warn('Enter Confirm Password')
        }else if(city.length==0) {
            toast.warn('Enter City')
        }else if(state.length==0) {
            toast.warn('Enter state')
        }else if(pinCode.length==0) {
            toast.warn('Enter pin code')
        }else if(password != confirmPassword) {
            toast.warn('password does not match')
        }else {
            toast.success('registration successful')
            navigate('/')
        }

    }
    return(
        <>
            <h1 className="logo">FlexFuels</h1>
            <p className="tagline">...a one stop solution for optimum nutrition</p>
            <div className="form">

                <div className="row">
                    <div className="col"></div>
                    <div className="col">
                    <div>
                <div className="mb-3">
                <label htmlFor="">First Name</label>
                <input onChange={(e)=>setFirstName(e.target.value)} type="text"  className="form-control" />
                </div>

                <div>
                <label htmlFor="">Last Name</label>
                <input onChange={(e)=>setLastName(e.target.value)} type="text"  className="form-control" />
                </div>
                
                <div className="mb-3">
                <label htmlFor="">Email</label>
                <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="abc@test.com" className="form-control" />
                </div>

                <div className="mb-3">
                <label htmlFor="">Password</label>
                <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="xxxxxxxxxx" className="form-control" />
                </div>

                <div className="mb-3">
                <label htmlFor="">Confirm Password</label>
                <input onChange={(e)=>setConfirmPassword(e.target.value)} type="password" placeholder="xxxxxxxxxx" className="form-control" />
                </div>

                <div className="mb-3">
                <label htmlFor="">City</label>
                <input onChange={(e)=>setCity(e.target.value)} type="text" placeholder="eg. = Pune" className="form-control" />
                </div>

                <div className="mb-3">
                <label htmlFor="">State</label>
                <input onChange={(e)=>setState(e.target.value)} type="text" placeholder="eg. = Maharashtra" className="form-control" />
                </div>

                <div className="mb-3">
                <label htmlFor="">Pin Code</label>
                <input onChange={(e)=>setPinCode(e.target.value)}type="text" placeholder="eg. = 411038" className="form-control" />
                </div>

                <div className="mb-3">
                <p>Gender:</p>
                <input type="radio" id="male" name="gender" value="Male"/>
                 <label for="male">Male</label><br/>
                <input type="radio" id="female" name="gender" value="Female"/>
                  <label for="female">Female</label><br/>
                  <input type="radio" id="other" name="gender" value="Other"/>
                  <label for="other">Other</label>
                </div>

                <div>Already have an account ? <Link to={"/"}>Login</Link></div>

                <button onClick={onSignUp} className="btn btn-primary mt-2">Register</button>
                </div>
                    </div>
                    <div className="col"></div>
                </div>
                

                
            </div>
        </>
        
    )
}
export default Signin