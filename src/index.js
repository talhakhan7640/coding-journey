import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter, Routes, Navigate, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import Contents from './components/Contents.jsx'
import { client } from './components/Contents.jsx';
import Programming from './components/Programming.jsx'
import RandomArticles from './components/RandomArticles.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<Navigate replace to="/posts" />} />
          <Route path="/">
            <Route index path="/posts" element={<Contents />} />
						<Route path="/posts/category/programming" element={<Programming />} />	
						<Route path="/posts/category/random-articles" element={<RandomArticles />} />
          </Route>
        </Routes>
      </App>
    </BrowserRouter>
  </ApolloProvider>
);

