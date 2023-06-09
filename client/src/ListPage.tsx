import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_CLIENTS } from './queries';
import './ListPage.css'

const ListPage = () => {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const clientInfo = data.clients;
  console.log(clientInfo)

  return (
    <div className='containers'>
     
<h2>Clients</h2>

<table>
  <thead>
    <tr>
      <th>ID</th>
      <th>NAME</th>
      <th>AGE</th>
    
    </tr>
  </thead>
  <tbody>
  {clientInfo.map((info:any) => (
      <tr key={info.id}>
        <td>{info.id}</td>
        <Link to={`/DetailPage/${info.id}`}>{info.name}</Link>
        <td>{info.age}</td>
        
      </tr>
    ))}
  </tbody>
</table>
    </div>
  );
};

export default ListPage;





