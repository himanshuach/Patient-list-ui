import PatientCard from "./components/PatientCard";
import { usePatients } from "./hooks/usePatients";

const App: React.FC = () => {
  const { patients } = usePatients();

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "auto",
        padding: "20px",
        fontFamily: "Arial"
      }}
    >
      <h1>Auto Refreshing Patient List</h1>

      {patients.map((patient) => (
        <PatientCard key={patient.id} patient={patient} />
      ))}
    </div>
  );
};

export default App;