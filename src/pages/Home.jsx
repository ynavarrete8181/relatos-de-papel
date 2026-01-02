import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BOOKS } from "../mocks/books.js";
import { useCart } from "../hooks/useCart.js";

import Header from "../components/Header.jsx";
import SearchBar from "../components/SearchBar.jsx";
import BookList from "../components/BookList.jsx";
import CartDrawer from "../components/CartDrawer.jsx";

export default function Home() {
    const navigate = useNavigate();
    const cart = useCart(); // ✅ custom hook usado
    const [query, setQuery] = useState(""); // ✅ useState (criterio 2)

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return BOOKS;
        return BOOKS.filter((b) => b.title.toLowerCase().includes(q)); // ✅ filtra por título
    }, [query]);

    const openBook = (id) => navigate(`/book/${id}`);

    return (
        <div className="layout">
            <div className="layout__main">
                <Header title="Relatos de Papel">
                    <SearchBar value={query} onChange={setQuery} />
                </Header>

                <BookList books={filtered} onOpen={openBook} />
            </div>

            <div className="layout__side">
                <CartDrawer cart={cart} />
            </div>
        </div>
    );
}
