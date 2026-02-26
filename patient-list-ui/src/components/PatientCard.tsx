import type { Patient } from "../data/patient";

interface PatientCardProps {
    patient: Patient;
}

const PatientCard: React.FC<PatientCardProps> = ({ patient }) => {
    const isCritical = patient.condition === "Critical";

    return (
        <div style={styles.card}>
            <h2>{patient.name}</h2>
            <p>Age: {patient.age}</p>
            <p>Disease: {patient.disease}</p>

            <span
                style={{
                    ...styles.badge,
                    backgroundColor: isCritical ? "red" : "green"
                }}
            >
                {patient.condition}
            </span>
        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    card: {
        border: "1px solid #ddd",
        padding: "16px",
        borderRadius: "8px",
        marginBottom: "12px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
    },
    badge: {
        padding: "6px 10px",
        borderRadius: "5px",
        color: "white",
        fontWeight: "bold"
    }
};

export default PatientCard;