import React from 'react';
import Welcome from './Components/Person.jsx'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends React.Component {
  render(){
    return (
      <div className='App'>
      <Welcome/>
      </div>
    )
   
  }

}
export default App;
