import React from 'react';
//import data from './products.js'

export default function Datatable({ data }) {
 /*  How to do it dynamically? 
 with that we pulling the keys out of that rwo to use that as our headings*/

 // here we use Object.keys wich is going to pull out all of the keys from the json data to use this as our headers.  
  const columns = data[0] && Object.keys(data[0]);
  return (
 
    <table cellPadding={0} cellSpacing={0}>
      <thead>
        <tr>
          {data[0] && columns.map((heading) => <th>{heading}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr>
            {columns.map((column) => (
              <td>{row[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

