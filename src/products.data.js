import React, { useState, useEffect } from "react"
import "./country.css"
//import Header from "./components/Header"
import Datatable from "./datatable/Datatable.js"
import products from './products'


//require('es6-promise').polyfill()
//require('isomorphic-fetch')

const App = () => {
  const [data, setData] = useState([])
  const [q, setQ] = useState('')


  useEffect(() => {
    //we want to make a fetch req to get the Api Data
    const fetchData = async () => {
      const response = await fetch(
        `https://restcountries.com/v2/all`
      )
      const data = await response.json()
      setData(data)
      console.log(data)
    }

    fetchData()
  }, [])
  

  return (
    <>
     
    <div>
      <Datatable data={products}></Datatable>
    </div>
</>
  )
}

export default App


/* const [data, setData] = useState([]);
  const [q, setQ] = useState('');
  const [searchColumns, setSearchColumns] = useState([
    'name',
    'birth_year',
  ]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
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
    <div>
      <div>
        <input
          type='text'
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        {columns &&
          columns.map((column) => (
            <label>
              <input
                type='checkbox'
                checked={searchColumns.includes(column)}
                onChange={(e) => {
                  const checked = searchColumns.includes(column);
                  setSearchColumns((prev) =>
                    checked
                      ? prev.filter((sc) => sc !== column)
                      : [...prev, column],
                  );
                }}
              />
              {column}
            </label>
          ))}
      </div>
      <div>
        <Datatable data={search(data)} />
      </div>
    </div>
  );*/