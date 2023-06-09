import axios from "axios"
import "./App.css"
import Routes from "./Routes"
import { UserContextProvider } from "./UserContext"

function App() {
  axios.defaults.headers = ["Content-Type"]
  axios.defaults.baseURL = "https://chat-app-api-uie4.onrender.com" 
  axios.defaults.withCredentials = true
  return (
    <UserContextProvider>
      <Routes />
    </UserContextProvider>
  )
}

export default App
