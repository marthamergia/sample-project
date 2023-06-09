import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_INFO } from './queries';
import './DetailPage.css';

const DetailPage = () => {
  const { loading, error, data } = useQuery(GET_INFO);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const additionalInfo = data.additionalinfo;

  return (
    <div className='containerz'>
      <h2>Additional Information</h2>

      <table>
        <thead>
          <tr>
            <th>Company</th>
            <th>Address</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {additionalInfo.map((info: { id: React.Key | null | undefined; company: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; address: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; email: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; phone: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => (
            <tr key={info.id}>
              <td>{info.company}</td>
              <td>{info.address}</td>
              <td>{info.email}</td>
              <td>{info.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DetailPage;





