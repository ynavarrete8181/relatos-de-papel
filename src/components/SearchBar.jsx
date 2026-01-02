export default function SearchBar({ value, onChange }) {
    return (
        <div className="search">
            <input
                className="search__input"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Buscar por título…"
            />
        </div>
    );
}
