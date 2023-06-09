import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import client from './client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListPage from './ListPage';
import DetailPage from './DetailPage';


const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/" element={<ListPage />} />
          <Route path="/DetailPage/:id" element={<DetailPage />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));


export default App