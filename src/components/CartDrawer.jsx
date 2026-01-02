import { Link } from "react-router-dom";
import CartItem from "./CartItem.jsx";

export default function CartDrawer({ cart }) {
    const { items, removeItem, total, count } = cart;

    return (
        <aside className="cart">
            <div className="cart__header">
                <h3 className="cart__title">Carrito</h3>
                <span className="cart__badge">{count}</span>
            </div>

            <div className="cart__body">
                {items.length === 0 ? (
                    <p className="cart__empty">Tu carrito está vacío.</p>
                ) : (
                    items.map((it) => (
                        <CartItem key={it.id} item={it} onRemove={removeItem} />
                    ))
                )}
            </div>

            <div className="cart__footer">
                <p className="cart__total">Total: ${total.toFixed(2)}</p>
                <Link className={`btn btn--primary ${items.length ? "" : "btn--disabled"}`} to="/checkout">
                    Ir a checkout
                </Link>
            </div>
        </aside>
    );
}
