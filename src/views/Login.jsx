import { useNavigate } from 'react-router-dom'

export default function App() {
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        if(e.target.username.value && e.target.password.value) {
            alert('Login Success')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
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
                <a
                    role="button"
                    className="link"
                    onClick={() => navigate('/forgot-password')}
                >
                    {' '}
                    Forgot Password?
                </a>
            </div>
            <button type="submit" className="btn">
                Login
            </button>
            <div className="register-link">
                <p>
                    {`Don't have an account?`} <a role="button"
                    className="link"
                    onClick={() => navigate('/register')}>Register</a>
                </p>
            </div>
        </form>
    )
}
