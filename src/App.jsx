import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Feed from './components/Feed/Feed';
import Aside from './components/Aside/Aside';
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <Feed />
      <Aside />
    </div>
  )
}

export default App
