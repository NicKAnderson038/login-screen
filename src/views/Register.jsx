export default function App() {
    function handleSubmit(e) {
        e.preventDefault()
        if(e.target.username.value && e.target.password.value && e.target.email.value) {
            alert('Register Success')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Register</h1>
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
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                    />
                    <i className="bx bxs-envelope"></i>
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
            <button type="submit" className="btn">
                Register
            </button>
        </form>
    )
}
