import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './router.jsx'
import './app.css'

export default function App() {
    // const [count, setCount] = useState(0)

    // function handleSubmit(e) {
    //     e.preventDefault()
    //     if(e.target.username.value && e.target.password.value) {
    //         alert('Login Success')
    //     }
    // }

    return (
        <div className="wrapper">
            <BrowserRouter>
                <Suspense fallback={'loading...'}>
                    <Routes />
                </Suspense>
            </BrowserRouter>
            {/* <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className="input-box">
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        required
                    />
                    <i className="bx bxs-user"></i>
                </div>
                <div className="input-box">
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                    />
                    <i className="bx bxs-lock-alt"></i>
                </div>
                <div className="remember-forgot">
                    <label>
                        <input type="checkbox" />
                        Remember me
                    </label>
                    <a href="#"> Forgot Password?</a>
                </div>
                <button type="submit" className="btn">
                    Login
                </button>
                <div className="register-link">
                    <p>
                        {`Don't have an account?`} <a href="#">Register</a>
                    </p>
                </div>
            </form> */}
        </div>
    )
}
