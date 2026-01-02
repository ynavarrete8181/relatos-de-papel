import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BOOKS } from "../mocks/books.js";
import { useCart } from "../hooks/useCart.js";
import CartDrawer from "../components/CartDrawer.jsx";

export default function BookDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const cart = useCart();

    const book = useMemo(() => BOOKS.find((b) => b.id === id), [id]);

    if (!book) {
        return (
            <main className="page">
                <h2 className="page__title">Libro no encontrado</h2>
                <button className="btn" onClick={() => navigate("/home")}>
                    Volver
                </button>
            </main>
        );
    }

    return (
        <div className="layout">
            <div className="layout__main">
                <div className="book">
                    <button className="btn btn--ghost" onClick={() => navigate("/home")}>
                        ← Volver
                    </button>

                    <div className="book__content">
                        <img className="book__img" src={book.cover} alt={book.title} />

                        <div className="book__info">
                            <h2 className="book__title">{book.title}</h2>
                            <p className="book__author">{book.author}</p>
                            <p className="book__desc">{book.description}</p>
                            <p className="book__price">${book.price.toFixed(2)}</p>

                            <button
                                className="btn btn--primary"
                                onClick={() => cart.addToCart(book)}
                            >
                                Añadir al carrito
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="layout__side">
                <CartDrawer cart={cart} />
            </div>
        </div>
    );
}
