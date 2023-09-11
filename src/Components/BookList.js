import React from 'react'
import Book from './Books'

const book =[ {
    image:"https://m.media-amazon.com/images/I/417kSOgt4aL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    title:"Children Book1",
    publisher:"Some Author1",
    price:799
},
 {
    image:"https://m.media-amazon.com/images/I/417kSOgt4aL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    title:"Children Book2",
    publisher:"Some Author2",
    price:900
}];

const BookList = () => {
  return (
    <>
    <h1>
     {book.map((ele,index) => (
      <h1><p>Book Number:</p>{index+1}
        <Book
        image= {ele.image}
        publisher={ele.publisher}
        title={ele.title}
        price={ele.price}
      />
      </h1>
     ))};
     </h1>
     </>
  )
}

export default BookList

