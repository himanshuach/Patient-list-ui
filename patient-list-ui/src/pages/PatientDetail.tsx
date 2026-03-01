import { useParams } from "react-router-dom";

const PatientDetail = () => {
    const { id } = useParams();

    return (
        <div className="p-10 animate-[fadeIn_0.5s_ease-out]">
            <h1 className="text-4xl font-bold text-text-primary mb-4">Patient Details</h1>
            <p className="text-text-secondary">Detail view for patient ID: <span className="text-primary font-mono">{id}</span> coming soon...</p>
        </div>
    );
};

export default PatientDetail;