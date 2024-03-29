import './bootstrap.css';
import './App.scss';
import Create from './Components/Create';
import AnimalsContext from './Components/AnimalsContext';
import { useEffect } from 'react';
import { create } from './Functions/localstorage';
import { useState } from 'react';

const keyLock = 'Zoo'
const animalsTypes = [
  { id: 1, type: 'Duck' },
  { id: 2, type: 'Sheep' },
  { id: 3, type: 'Antilope' },
  { id: 4, type: 'Bever' },
  { id: 5, type: 'Moose' },
  { id: 6, type: 'Skunk' },
];


function App() {

  const [createData, setCreateData,] = useState(null);
  const [animals, setAnimals] = useState(null);

  useEffect(() => {
    if (null === createData) {
      return;
    }
    create(keyLock, createData);
  }, [createData]);


  return (
    <AnimalsContext.Provider value={{
      animalsTypes,
      setCreateData
    }}>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Create />
          </div>
          <div className="col-8">
            One of three columns
          </div>
        </div>
      </div>
    </AnimalsContext.Provider>
  );
}

export default App;
