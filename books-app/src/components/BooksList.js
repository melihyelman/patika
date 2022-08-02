import { useSelector } from 'react-redux';
import { BookCard } from './BookCard';


export const BooksList = () => {
    const books = useSelector(state => state.books.data);
    return (
        <div className='container mx-auto py-8 flex flex-wrap gap-4'>
            {books && books?.map(book => (
                <BookCard key={book.id} item={book} />
            ))}
        </div>
    )
}

