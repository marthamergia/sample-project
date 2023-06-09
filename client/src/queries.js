import { gql } from '@apollo/client';

export const GET_CLIENTS = gql`
  query GetClients {
    clients {
      id
      name
      age
    }
  }`
  export const GET_INFO = gql`
  query GetInfo {
    additionalinfo {
        company
        email
        phone
        address
      }
    }`

