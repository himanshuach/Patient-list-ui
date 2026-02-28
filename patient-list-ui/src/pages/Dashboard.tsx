import { usePatients } from "../hooks/usePatients";
import "./Dashboard.css";

const Dashboard = () => {
    const { patients } = usePatients();

    const stats = {
        total: patients.length,
        critical: patients.filter((p) => p.condition === "Critical").length,
        stable: patients.filter((p) => p.condition === "Stable").length,
    };

    const criticalPercentage =
        stats.total > 0 ? ((stats.critical / stats.total) * 100).toFixed(1) : 0;

    return (
        <div className="dashboard">
            <div className="dashboard-header">
                <div>
                    <h1>Dashboard</h1>
                    <p className="subtitle">Hospital Management System</p>
                </div>
                <div className="header-badge">
                    Last updated: Just now
                </div>
            </div>

            <div className="stats-grid">
                <div className="stat-card">
                    <div className="stat-icon total">👥</div>
                    <div className="stat-content">
                        <p className="stat-label">Total Patients</p>
                        <h2 className="stat-value">{stats.total}</h2>
                        <p className="stat-subtext">Active in system</p>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon critical">⚠️</div>
                    <div className="stat-content">
                        <p className="stat-label">Critical Cases</p>
                        <h2 className="stat-value">{stats.critical}</h2>
                        <p className="stat-subtext">{criticalPercentage}% of total</p>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon stable">✅</div>
                    <div className="stat-content">
                        <p className="stat-label">Stable Patients</p>
                        <h2 className="stat-value">{stats.stable}</h2>
                        <p className="stat-subtext">Under observation</p>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon">🏥</div>
                    <div className="stat-content">
                        <p className="stat-label">System Status</p>
                        <h2 className="stat-value">Operational</h2>
                        <p className="stat-subtext">All systems online</p>
                    </div>
                </div>
            </div>

            <div className="dashboard-content">
                <div className="content-section">
                    <h3>System Overview</h3>
                    <div className="overview-card">
                        <div className="overview-item">
                            <span className="overview-label">Total Beds</span>
                            <span className="overview-value">120</span>
                        </div>
                        <div className="overview-item">
                            <span className="overview-label">Occupied Beds</span>
                            <span className="overview-value">{stats.total}</span>
                        </div>
                        <div className="overview-item">
                            <span className="overview-label">Available Beds</span>
                            <span className="overview-value">{120 - stats.total}</span>
                        </div>
                        <div className="overview-item">
                            <span className="overview-label">Occupancy Rate</span>
                            <span className="overview-value">
                                {((stats.total / 120) * 100).toFixed(1)}%
                            </span>
                        </div>
                    </div>
                </div>

                <div className="content-section">
                    <h3>Recent Activity</h3>
                    <div className="activity-list">
                        <div className="activity-item">
                            <div className="activity-icon">📋</div>
                            <div className="activity-content">
                                <p>New patient admitted</p>
                                <span>2 hours ago</span>
                            </div>
                        </div>
                        <div className="activity-item">
                            <div className="activity-icon">✔️</div>
                            <div className="activity-content">
                                <p>Patient discharge completed</p>
                                <span>4 hours ago</span>
                            </div>
                        </div>
                        <div className="activity-item">
                            <div className="activity-icon">🔔</div>
                            <div className="activity-content">
                                <p>Critical alert issued</p>
                                <span>6 hours ago</span>
                            </div>
                        </div>
                        <div className="activity-item">
                            <div className="activity-icon">📊</div>
                            <div className="activity-content">
                                <p>Daily report generated</p>
                                <span>1 day ago</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
