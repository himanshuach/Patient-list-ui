import { Link } from "react-router-dom";
import PatientCard from "../components/PatientCard";
import { usePatients } from "../hooks/usePatients";

const Patients = () => {
    const { patients } = usePatients();

    return (
        <div>
            <h2>Patients</h2>

            {patients.map((patient) => (
                <Link key={patient.id} to={`/patients/${patient.id}`}>
                    <PatientCard patient={patient} />
                </Link>
            ))}
        </div>
    );
};

export default Patients;