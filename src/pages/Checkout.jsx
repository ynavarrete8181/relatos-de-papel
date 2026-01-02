import { useNavigate } from "react-router-dom";
import { useCart } from "../hooks/useCart.js";

export default function Checkout() {
    const navigate = useNavigate();
    const cart = useCart();

    const handlePay = () => {
        if (cart.items.length === 0) return;

        alert("Pedido realizado ✅");
        cart.clearCart();
        navigate("/home");
    };

    return (
        <main className="checkout">
            <div className="checkout__header">
                <h2 className="checkout__title">Checkout</h2>
                <button className="btn btn--ghost" onClick={() => navigate("/home")}>
                    ← Seguir comprando
                </button>
            </div>

            {cart.items.length === 0 ? (
                <p className="checkout__empty">No tienes productos en el carrito.</p>
            ) : (
                <>
                    <section className="checkout__list">
                        {cart.items.map((it) => (
                            <div className="checkout-item" key={it.id}>
                                <p className="checkout-item__title">{it.title}</p>
                                <p className="checkout-item__meta">
                                    {it.qty} × ${it.price.toFixed(2)}
                                </p>
                            </div>
                        ))}
                    </section>

                    <div className="checkout__footer">
                        <p className="checkout__total">Total: ${cart.total.toFixed(2)}</p>
                        <button className="btn btn--primary" onClick={handlePay}>
                            Pagar
                        </button>
                    </div>
                </>
            )}
        </main>
    );
}
