import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div
            style={{
                width: "220px",
                background: "#f4f4f4",
                padding: "20px"
            }}
        >
            <h3>Hospital Panel</h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
                <li>
                    <Link to="/">Dashboard</Link>
                </li>
                <li>
                    <Link to="/patients">Patients</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;