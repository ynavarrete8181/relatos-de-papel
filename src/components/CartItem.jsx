export default function CartItem({ item, onRemove }) {
    return (
        <div className="cart-item">
            <div className="cart-item__info">
                <p className="cart-item__title">{item.title}</p>
                <p className="cart-item__meta">
                    {item.qty} × ${item.price.toFixed(2)}
                </p>
            </div>
            <button className="btn btn--ghost" onClick={() => onRemove(item.id)}>
                Quitar
            </button>
        </div>
    );
}
