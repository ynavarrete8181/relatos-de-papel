import { useEffect, useMemo, useState } from "react";

const KEY = "relatos_cart_v1";

export function useCart() {
    const [items, setItems] = useState(() => {
        const saved = localStorage.getItem(KEY);
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem(KEY, JSON.stringify(items));
    }, [items]);

    const addToCart = (book) => {
        setItems((prev) => {
            const found = prev.find((x) => x.id === book.id);
            if (found) {
                return prev.map((x) => (x.id === book.id ? { ...x, qty: x.qty + 1 } : x));
            }
            return [...prev, { ...book, qty: 1 }];
        });
    };

    const removeItem = (id) => setItems((prev) => prev.filter((x) => x.id !== id));
    const clearCart = () => setItems([]);

    const total = useMemo(
        () => items.reduce((acc, x) => acc + x.price * x.qty, 0),
        [items]
    );

    const count = useMemo(() => items.reduce((acc, x) => acc + x.qty, 0), [items]);

    return { items, addToCart, removeItem, clearCart, total, count };
}
