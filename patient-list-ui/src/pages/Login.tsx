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
        <div className="min-h-screen flex items-center justify-center bg-[linear-gradient(135deg,#020617_0%,#0f172a_100%)] p-6">
            <div className="w-full max-w-md bg-card-bg border border-border-custom p-10 rounded-2xl shadow-2xl animate-[fadeIn_0.5s_ease-out]">
                <div className="text-center mb-10">
                    <div className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center text-5xl mx-auto mb-4 border border-primary/30">🏥</div>
                    <h2 className="text-3xl font-bold text-text-primary mb-2">Welcome Back</h2>
                    <p className="text-text-secondary">Sign in to Hospital Management System</p>
                </div>

                <div className="space-y-6">
                    <div>
                        <label className="block text-[0.75rem] font-semibold text-text-secondary uppercase tracking-widest mb-2 px-1">Email Address</label>
                        <input type="email" placeholder="admin@hospital.com" className="w-full px-4 py-3 bg-bg-dark border border-border-custom rounded-xl text-text-primary outline-none focus:border-primary transition-colors" />
                    </div>
                    <div>
                        <label className="block text-[0.75rem] font-semibold text-text-secondary uppercase tracking-widest mb-2 px-1">Password</label>
                        <input type="password" placeholder="••••••••" className="w-full px-4 py-3 bg-bg-dark border border-border-custom rounded-xl text-text-primary outline-none focus:border-primary transition-colors" />
                    </div>

                    <button
                        onClick={handleLogin}
                        className="w-full py-4 bg-[linear-gradient(135deg,var(--primary)_0%,var(--primary-dark)_100%)] text-white rounded-xl font-bold text-base hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(124,58,237,0.4)] active:translate-y-0 transition-all duration-200"
                    >
                        Sign In
                    </button>
                </div>

                <p className="text-center text-text-secondary text-sm mt-8">
                    Don't have an account? <a href="#" className="text-primary hover:underline font-semibold">Contact Administrator</a>
                </p>
            </div>
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