import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <div className="logo">
                    <span className="logo-icon">🏥</span>
                    <div>
                        <h3>Hospital</h3>
                        <p>Management</p>
                    </div>
                </div>
            </div>

            <nav className="sidebar-nav">
                <div className="nav-section">
                    <p className="nav-section-label">MAIN</p>
                    <ul className="nav-list">
                        <li>
                            <Link
                                to="/"
                                className={`nav-link ${isActive("/") ? "active" : ""}`}
                            >
                                <span className="nav-icon">📊</span>
                                <span>Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/patients"
                                className={`nav-link ${isActive("/patients") ? "active" : ""}`}
                            >
                                <span className="nav-icon">👥</span>
                                <span>Patients</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="nav-section">
                    <p className="nav-section-label">OTHER</p>
                    <ul className="nav-list">
                        <li>
                            <a href="#" className="nav-link">
                                <span className="nav-icon">⚙️</span>
                                <span>Settings</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link">
                                <span className="nav-icon">📋</span>
                                <span>Reports</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="sidebar-footer">
                <div className="user-card">
                    <div className="user-avatar">👨‍⚕️</div>
                    <div className="user-info">
                        <p className="user-name">Dr. Admin</p>
                        <p className="user-role">Administrator</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
