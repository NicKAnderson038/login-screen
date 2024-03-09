import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './router.jsx'
import './app.css'

export default function App() {
    return (
        <div className="wrapper">
            <BrowserRouter>
                <Suspense fallback={'loading...'}>
                    <Routes />
                </Suspense>
            </BrowserRouter>
        </div>
    )
}
