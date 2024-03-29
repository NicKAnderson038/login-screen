export default function App() {
    function handleSubmit(e) {
        e.preventDefault()
        if(e.target.email.value) {
            alert('Forgot Password Success')
        }
    }

    return (
            <form onSubmit={handleSubmit}>
                <h1>Forgot Password</h1>
                <div className="input-box">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                    />
                    <i className="bx bxs-envelope"></i>
                </div>
                <button type="submit" className="btn">
                    Submit
                </button>
            </form>
    )
}
