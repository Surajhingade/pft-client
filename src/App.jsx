
import './App.css'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Category from './pages/Category'
import Dashbord from './pages/Dashbord'
import Transaction from './pages/Transaction'
import {Routes,Route} from 'react-router-dom'
import TransactionList from './components/TransactionList/TransactionList'
 

function App() {
  return (
    <div className="App">
      <Header />
       <div className='w-full min-h-[90vh] grid grid-cols-12' >
        <Navbar />
        <Routes>
          <Route path="/" element={<Transaction />} />
          <Route path="/transactionlist" element={<TransactionList />} />
          <Route path="/dashbord" element={<Dashbord />} />
          <Route path="/category" element={<Category />} />
        </Routes>
       </div>
    </div>
  )
}

export default App
