import './app.css'
import App from './App.svelte'
import Dashboard from './Dashboard.svelte'

const app = new Dashboard({
  target: document.getElementById('app')!,
})

export default app
