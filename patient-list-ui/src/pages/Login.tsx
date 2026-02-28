import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        // Simulated token structure (frontend demo purpose)
        const session = {
            accessToken: generateToken(),
            issuedAt: Date.now(),
            user: {
                id: "u_001",
                role: "admin"
            }
        };

        localStorage.setItem("auth_session", JSON.stringify(session));
        navigate("/");
    };

    return (
        <div style={{ padding: "40px" }}>
            <h2>Login</h2>
            <button onClick={handleLogin}>Sign In</button>
        </div>
    );
};

export default Login;


/**
 * Generates a pseudo token for demo purposes.
 * This mimics a real token format without backend.
 */
function generateToken(): string {
    const header = btoa(JSON.stringify({ alg: "HS256", typ: "JWT" }));
    const payload = btoa(
        JSON.stringify({
            sub: "u_001",
            exp: Date.now() + 60 * 60 * 1000
        })
    );
    const signature = btoa("signature");

    return `${header}.${payload}.${signature}`;
}