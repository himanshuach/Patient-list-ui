import { useParams } from "react-router-dom";

const PatientDetail = () => {
    const { id } = useParams();

    return <h2>Patient Detail for ID: {id}</h2>;
};

export default PatientDetail;