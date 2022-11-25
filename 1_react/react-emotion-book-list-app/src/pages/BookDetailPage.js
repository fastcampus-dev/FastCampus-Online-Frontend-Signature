import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Header, HeaderContainer, LogoText } from '../components/Shared';
import Loader from '../components/Loader';
import BookDetail from '../components/BookDetail';

const BookDetailPage = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const API_BASE_URL = `https://www.googleapis.com/books`;
    const fetchBooks = async () => {
      setLoading(true);
      try {
        const result = await axios.get(`${API_BASE_URL}/v1/volumes/${bookId}`);
        setBook(result.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    fetchBooks();
  }, [bookId])


  return (
    <>
      <Header>
        <HeaderContainer>
          <Link to={'/'}>
            <LogoText>Book List</LogoText>
          </Link>
        </HeaderContainer>
      </Header>
      <Container>
        <Loader loading={loading}>
          <strong>{bookId}</strong>라는 북 ID를 가진 북 정보를 가져오고 있습니다.
        </Loader>
        {book.volumeInfo ? <BookDetail book={book} /> : null}
      </Container>
    </>
  )
}

export default BookDetailPage