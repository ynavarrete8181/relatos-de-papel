export default function Header({ title, children }) {
    return (
        <header className="header">
            <h1 className="header__title">{title}</h1>
            <div className="header__right">{children}</div>
        </header>
    );
}
