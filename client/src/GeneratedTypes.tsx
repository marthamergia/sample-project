import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Client = {
  __typename?: 'Client';
  additionalinfo: Array<Maybe<AdditionalInfo>>;
  age?: Maybe<Scalars['Int']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  additionalinfo?: Maybe<Array<Maybe<AdditionalInfo>>>;
  clients?: Maybe<Array<Maybe<Client>>>;
};

export type AdditionalInfo = {
  __typename?: 'additionalInfo';
  address: Scalars['String']['output'];
  company: Scalars['String']['output'];
  email: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  user: Array<Maybe<Client>>;
};

export type GetClientsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetClientsQuery = { __typename?: 'Query', clients?: Array<{ __typename?: 'Client', id: string, name: string, age?: number | null } | null> | null };

export type GetInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type GetInfoQuery = { __typename?: 'Query', additionalinfo?: Array<{ __typename?: 'additionalInfo', company: string, email: string, phone: string, address: string } | null> | null };


export const GetClientsDocument = gql`
    query GetClients {
  clients {
    id
    name
    age
  }
}
    `;

/**
 * __useGetClientsQuery__
 *
 * To run a query within a React component, call `useGetClientsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetClientsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetClientsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetClientsQuery(baseOptions?: Apollo.QueryHookOptions<GetClientsQuery, GetClientsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetClientsQuery, GetClientsQueryVariables>(GetClientsDocument, options);
      }
export function useGetClientsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetClientsQuery, GetClientsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetClientsQuery, GetClientsQueryVariables>(GetClientsDocument, options);
        }
export type GetClientsQueryHookResult = ReturnType<typeof useGetClientsQuery>;
export type GetClientsLazyQueryHookResult = ReturnType<typeof useGetClientsLazyQuery>;
export type GetClientsQueryResult = Apollo.QueryResult<GetClientsQuery, GetClientsQueryVariables>;
export const GetInfoDocument = gql`
    query GetInfo {
  additionalinfo {
    company
    email
    phone
    address
  }
}
    `;

/**
 * __useGetInfoQuery__
 *
 * To run a query within a React component, call `useGetInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetInfoQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetInfoQuery(baseOptions?: Apollo.QueryHookOptions<GetInfoQuery, GetInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetInfoQuery, GetInfoQueryVariables>(GetInfoDocument, options);
      }
export function useGetInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetInfoQuery, GetInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetInfoQuery, GetInfoQueryVariables>(GetInfoDocument, options);
        }
export type GetInfoQueryHookResult = ReturnType<typeof useGetInfoQuery>;
export type GetInfoLazyQueryHookResult = ReturnType<typeof useGetInfoLazyQuery>;
export type GetInfoQueryResult = Apollo.QueryResult<GetInfoQuery, GetInfoQueryVariables>;