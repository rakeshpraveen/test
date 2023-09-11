import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navigation from './Components/Navigation';
import Welcome from './Components/Welcom';
import ClassComponent from './Components/ClassComponent';
import Garage from './Components/Garage';
import BookList from './Components/BookList';
import Styling from './Components/Styling';
import Reducer from './Components/Reducer';
import Heading from './Components/Heading';
import { BrowserRouter } from 'react-router-dom';
import Axios from './Components/Axios';
import PostalPinAxios from './Components/PostalPinAxios';
import Pagination from './Components/Pagenation';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* <BrowserRouter>
    <App/>
  </BrowserRouter> */}
  {/* <Navigation/>
  <Welcome />
  <ClassComponent/> 
  <Garage />
   <BookList></BookList>
    <App /> 
    <Styling />*/}
    {/* <Reducer/> */}
   {/* <Axios/> */}
   {/* <PostalPinAxios/> */}
   
   <Pagination />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
