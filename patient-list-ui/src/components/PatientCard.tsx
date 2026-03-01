import type { Patient } from "../data/patient";

interface PatientCardProps {
    patient: Patient;
}

const PatientCard: React.FC<PatientCardProps> = ({ patient }) => {
    const isCritical = patient.condition === "Critical";

    return (
        <div className="bg-card-bg border border-border-custom rounded-xl p-5 mb-4 transition-all duration-300 cursor-pointer hover:border-primary hover:shadow-[0_8px_24px_rgba(124,58,237,0.15)] hover:-translate-y-0.5">
            <div className="flex items-center gap-4 mb-5 flex-wrap md:flex-nowrap">
                <div className="w-14 h-14 rounded-full bg-[linear-gradient(135deg,var(--primary)_0%,var(--primary-dark)_100%)] flex items-center justify-center font-bold text-2xl text-white shrink-0">
                    {patient.name.charAt(0).toUpperCase()}
                </div>
                <div className="flex-1">
                    <h3 className="text-xl font-semibold text-text-primary m-0 mb-1">{patient.name}</h3>
                    <p className="text-sm text-text-secondary m-0">{patient.disease}</p>
                </div>
                <span className={`px-3 py-1.5 rounded-md text-[0.75rem] font-semibold uppercase tracking-wider whitespace-nowrap border ${isCritical
                        ? "bg-red-500/10 text-red-300 border-red-500/30"
                        : "bg-green-500/10 text-green-300 border-green-500/30"
                    }`}>
                    {patient.condition}
                </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-5 border-y border-border-custom mb-5">
                <div className="flex flex-col gap-1.5">
                    <span className="text-[0.75rem] uppercase text-text-secondary font-semibold tracking-wider">Age</span>
                    <span className="text-base font-semibold text-text-primary">{patient.age} years</span>
                </div>
                <div className="flex flex-col gap-1.5">
                    <span className="text-[0.75rem] uppercase text-text-secondary font-semibold tracking-wider">Status</span>
                    <div className="flex items-center gap-2 text-sm text-text-secondary">
                        <span className={`w-2 h-2 rounded-full inline-block ${isCritical ? "bg-red-500 animate-pulse" : "bg-green-500"
                            }`}></span>
                        <span>{patient.condition}</span>
                    </div>
                </div>
            </div>

            <div className="flex gap-3">
                <button className="flex-1 py-2.5 px-4 bg-[linear-gradient(135deg,var(--primary)_0%,var(--primary-dark)_100%)] text-white border-none rounded-lg text-sm font-semibold cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(124,58,237,0.3)] active:translate-y-0">
                    View Details →
                </button>
            </div>
        </div>
    );
};

export default PatientCard;
