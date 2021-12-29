import React, { useState, useEffect } from "react"
//import "./country.css"
import Header from "./components/Header"
import Datatable from "./datatable/Datatable.js"
//import products from './products'


require('es6-promise').polyfill()
require('isomorphic-fetch')


const App = () => {

  const [data, setData] = useState([]);
  const [q, setQ] = useState('');
  const [searchColumns, setSearchColumns] = useState([
    'name',
    'birth_year',
  ]);


  useEffect(() => {
    fetch('https://swapi.dev/api/people')
  
      .then((response) => response.json())
   
      .then((json) => setData(json.results));
  }, []);



  

  function search(rows) {
    return rows.filter((row) =>
      searchColumns.some(
        (column) =>
          row[column]
            .toString()
            .toLowerCase()
            .indexOf(q.toLowerCase()) > -1,
      ),
    );
  }



  const columns = data[0] && Object.keys(data[0]);
  return (
    <div  >
    <Header/>
      <div className='m-3' >
        <input 
          type='text'
        

          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        {columns &&
          columns.map((column) => (
            <label >
          
              <input className="flexbox checkmark"
                type='checkbox'
                
                checked={searchColumns.includes(column)}

                onChange={(e) => {
                  const checked = searchColumns.includes(column);
                  setSearchColumns((previousState) =>
                    checked
                      ? previousState.filter((searchColumn) => searchColumn!== column)
                      : [...previousState, column],
                  );
                }}
              />
              {column}
            </label>
          ))}
      </div>
      <div className="datatable">
        <Datatable data={search(data)} />
      </div>
    </div>
  )
}

export default App

