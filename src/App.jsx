import './App.css'
import Contact from './components/Contact/Contact'
import Haqimizda from './components/Haqimizda/Haqimizda'
import Header from "./components/Header"
import Tavarlar from './components/Tavarlar/Tavarlar'
function App() {
  return (
    <div className='App'>
        <Header />  
        <Tavarlar /> 
        <Haqimizda /> 
        <Contact /> 
    </div>
  )
}

export default App
