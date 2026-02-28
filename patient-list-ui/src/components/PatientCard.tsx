import type { Patient } from "../data/patient";
import "./PatientCard.css";

interface PatientCardProps {
    patient: Patient;
}

const PatientCard: React.FC<PatientCardProps> = ({ patient }) => {
    const isCritical = patient.condition === "Critical";

    const getConditionClass = () => {
        if (patient.condition === "Critical") return "critical";
        return "stable";
    };

    return (
        <div className="patient-card">
            <div className="patient-card-header">
                <div className="patient-avatar">
                    {patient.name.charAt(0).toUpperCase()}
                </div>
                <div className="patient-info-header">
                    <h3 className="patient-name">{patient.name}</h3>
                    <p className="patient-disease">{patient.disease}</p>
                </div>
                <span className={`condition-badge ${getConditionClass()}`}>
                    {patient.condition}
                </span>
            </div>

            <div className="patient-card-body">
                <div className="patient-detail">
                    <span className="detail-label">Age</span>
                    <span className="detail-value">{patient.age} years</span>
                </div>
                <div className="patient-detail">
                    <span className="detail-label">Status</span>
                    <div className="status-indicator">
                        <span className={`status-dot ${getConditionClass()}`}></span>
                        <span>{patient.condition}</span>
                    </div>
                </div>
            </div>

            <div className="patient-card-footer">
                <button className="btn-view-details">View Details →</button>
            </div>
        </div>
    );
};

export default PatientCard;
