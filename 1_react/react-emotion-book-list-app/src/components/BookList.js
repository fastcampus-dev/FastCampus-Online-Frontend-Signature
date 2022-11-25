import React from 'react'
import { Link } from 'react-router-dom'
import formatAuthors from '../helpers/formatAuthors'

const Book = ({ book }) => {
    const IMG_BASE_URL = `http://books.google.com/books`;
    return (
        <li>
            <div>
                <img
                    src={`${IMG_BASE_URL}/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
                    alt={`${book.volumeInfo.title} book`}
                />
                <div>
                    <Link to={`/book/${book.id}`}>
                        <h3>{book.volumeInfo.title}</h3>
                    </Link>
                    <p>{formatAuthors(book.volumeInfo.authors)}</p>
                    <p>{book.volumeInfo.publishedDate}</p>
                </div>
            </div>
        </li>
    )
}


const BookList = ({ books }) => {

    if (!books.totalItems) {
        return <div>책 이름을 검색해주세요.</div>
    } else if (books.totalItems === 0) {
        return <div>찾고 있는 책이 없습니다.</div>
    } else {
        return (
            <ul>
                {books.items.map(book => {
                    return <Book book={book} key={book.id} />
                })}
            </ul>
        )
    }
}

export default BookList