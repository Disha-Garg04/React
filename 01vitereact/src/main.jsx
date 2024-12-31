import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
    return (
        <>
    <h1>Hii i m function</h1>
    <p>hii </p>
    </>
    )
}

createRoot(document.getElementById('root')).render(
    <MyApp />
)
