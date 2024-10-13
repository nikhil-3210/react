import './App.css';
import Employee from './components/Employee';

function App() {
  const showEmployeeBool = true;
  return (
    <div className="App">
      {showEmployeeBool ?
        <>
          <Employee name="Nikhil" role="software"/>
          <Employee name="jaiminee" role="farm"/>
          <Employee name="jash" role="finance"/>
          <Employee name="vishal"/>
        </> 
        :
        <p>you do not have permission to see the employees.</p>}
    </div>
  );
}

export default App;
