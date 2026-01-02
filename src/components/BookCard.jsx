export default function BookCard({ book, onOpen }) {
    return (
        <article className="book-card" onClick={() => onOpen(book.id)} role="button">
            <img className="book-card__img" src={book.cover} alt={book.title} />
            <div className="book-card__body">
                <h3 className="book-card__title">{book.title}</h3>
                <p className="book-card__author">{book.author}</p>
                <p className="book-card__price">${book.price.toFixed(2)}</p>
            </div>
        </article>
    );
}
