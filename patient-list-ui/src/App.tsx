import PatientCard from "./components/PatientCard";
import { patients } from "./data/patient";

const App: React.FC = () => {
  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "auto",
        padding: "20px",
        fontFamily: "Arial"
      }}
    >
      <h1>Hospital Patient List</h1>

      {patients.map((patient) => (
        <PatientCard key={patient.id} patient={patient} />
      ))}
    </div>
  );
};

export default App;