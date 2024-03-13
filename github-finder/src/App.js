import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import '../src/style.css'
import Navbar from './component/Navbar';
import UserList from './component/UserList';
import Search from './component/Search';
import Alert from './component/Alert';
import UserContextProvider from './contexts/userContext';
import ErrorContextProvider from './contexts/errorContext';


const App = () => {

  return (
    <div className="App">
      <Navbar />
      <UserContextProvider>
        <div className='container'>
          <ErrorContextProvider>
            <Search/>
            <Alert/>
          </ErrorContextProvider>
          <UserList />
        </div>
      </UserContextProvider>
    </div>


  )

}

export default App

