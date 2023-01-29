import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Login from  './pages/login'
import EditContact from './pages/contact/EditContact';
import ContactList from './pages/contact/ContactList';
function App() {

  return (
    <div className="App">
  
     
      <Router>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/contact-list/" component={ContactList} />
          <Route path="/edit-contact/:id" component={EditContact} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

