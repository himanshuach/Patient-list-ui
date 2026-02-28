import { Link } from "react-router-dom";
import PatientCard from "../components/PatientCard";
import { usePatients } from "../hooks/usePatients";
import "./Patients.css";

const Patients = () => {
    const { patients } = usePatients();

    const criticalPatients = patients.filter((p) => p.condition === "Critical");
    const stablePatients = patients.filter((p) => p.condition === "Stable");

    return (
        <div className="patients-container">
            <div className="patients-header">
                <div>
                    <h1>Patients</h1>
                    <p className="subtitle">Manage and monitor all patients</p>
                </div>
                <button className="btn-add-patient">+ Add Patient</button>
            </div>

            <div className="patient-filters">
                <button className="filter-badge active">
                    All ({patients.length})
                </button>
                <button className="filter-badge critical">
                    Critical ({criticalPatients.length})
                </button>
                <button className="filter-badge stable">
                    Stable ({stablePatients.length})
                </button>
            </div>

            {criticalPatients.length > 0 && (
                <div className="patients-section">
                    <h2 className="section-title critical-title">
                        ⚠️ Critical Cases ({criticalPatients.length})
                    </h2>
                    <div className="patients-list">
                        {criticalPatients.map((patient) => (
                            <Link key={patient.id} to={`/patients/${patient.id}`}>
                                <PatientCard patient={patient} />
                            </Link>
                        ))}
                    </div>
                </div>
            )}

            {stablePatients.length > 0 && (
                <div className="patients-section">
                    <h2 className="section-title stable-title">
                        ✅ Stable Patients ({stablePatients.length})
                    </h2>
                    <div className="patients-list">
                        {stablePatients.map((patient) => (
                            <Link key={patient.id} to={`/patients/${patient.id}`}>
                                <PatientCard patient={patient} />
                            </Link>
                        ))}
                    </div>
                </div>
            )}

            {patients.length === 0 && (
                <div className="empty-state">
                    <div className="empty-icon">👥</div>
                    <h3>No Patients Found</h3>
                    <p>Start by adding your first patient to the system</p>
                    <button className="btn-add-patient">+ Add Patient</button>
                </div>
            )}
        </div>
    );
};

export default Patients;
