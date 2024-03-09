import { useOutlet } from 'react-router-dom'

export default function Header() {
    // const navigate = useNavigate()
    const outlet = useOutlet()
    return (
        <div>
            {/* <button onClick={() => navigate('/login')}>Login</button>
            <button onClick={() => navigate('/forgot-password')}>Forgot Password</button>
            <button onClick={() => navigate('/reset-password')}>Register</button> */}
            {outlet}
        </div>
    )
}