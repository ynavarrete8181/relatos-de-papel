import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Landing() {
    const navigate = useNavigate();

    useEffect(() => {
        const id = setTimeout(() => navigate("/home"), 5000);
        return () => clearTimeout(id);
    }, [navigate]);

    return (
        <main className="landing">
            <h1 className="landing__title">Relatos de Papel</h1>
            <p className="landing__text">
                Bienvenido a la librería. Te llevamos a la tienda en 5 segundos…
            </p>
            <button className="btn btn--primary" onClick={() => navigate("/home")}>
                Entrar ahora
            </button>
        </main>
    );
}
