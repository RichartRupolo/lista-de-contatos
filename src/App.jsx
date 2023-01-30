import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Login from  './pages/login'
import EditPerson from './pages/person/EditPerson';
import PersonList from './pages/person/PersonList';
function App() {

  return (
    <div className="App">
  
     
      <Router>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/person-list/" component={PersonList} />
          <Route path="/edit-person/:id" component={EditPerson} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

