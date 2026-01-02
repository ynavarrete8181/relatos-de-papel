import BookCard from "./BookCard.jsx";

export default function BookList({ books, onOpen }) {
    if (!books.length) {
        return <p className="empty">No hay resultados.</p>;
    }

    return (
        <section className="book-list">
            {books.map((b) => (
                <BookCard key={b.id} book={b} onOpen={onOpen} />
            ))}
        </section>
    );
}
