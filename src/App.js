import "./App.css";
import Employee from "./components/Employee";
import { useState } from 'react';

function App() {
  const [role, setRole] = useState('dev');
  const showEmployeeBool = true;
  return (
    <div className="App">
      {showEmployeeBool ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
          />
          <Employee name="Nikhil" role="software" />
          <Employee name="jash" role={role} />
        </>
      ) : (
        <p>you do not have permission to see the employees.</p>
      )}
    </div>
  );
}

export default App;
