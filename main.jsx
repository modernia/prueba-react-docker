import { createRoot } from 'react-dom/client'
import './style.css'
import App from './src/App'
import AppTest from './src/AppTest'

const root = createRoot(document.getElementById('app'))
root.render(<AppTest />)
