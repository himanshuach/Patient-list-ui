import { Link } from "react-router-dom";
import PatientCard from "../components/PatientCard";
import Skeleton from "../components/Skeleton";
import { usePatients } from "../hooks/usePatients";

const Patients = () => {
    const { patients, loading, error, retry } = usePatients();

    const criticalPatients = patients.filter(
        (p) => p.condition === "Critical"
    );
    const stablePatients = patients.filter(
        (p) => p.condition === "Stable"
    );

    return (
        <div className="animate-[fadeIn_0.5s_ease-in-out]">

            {/* HEADER */}
            <div className="flex flex-col md:flex-row md:items-center justify-between items-start gap-4 mb-8">
                <div>
                    <h1 className="text-4xl font-bold text-text-primary">
                        Patients
                    </h1>
                    <p className="text-text-secondary text-[0.875rem] mt-1">
                        Manage and monitor all patients
                    </p>
                </div>
                <button className="py-3 px-6 bg-[linear-gradient(135deg,var(--primary)_0%,var(--primary-dark)_100%)] text-white border-none rounded-lg font-semibold cursor-pointer transition-all duration-200 text-sm hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(124,58,237,0.3)]">
                    + Add Patient
                </button>
            </div>

            {/* LOADING STATE */}
            {loading && (
                <div className="flex flex-col gap-4">
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                </div>
            )}

            {/* ERROR STATE */}
            {error && !loading && (
                <div className="text-center py-10 bg-card-bg border border-border-custom rounded-xl">
                    <p className="text-red-400 mb-4 font-semibold">{error}</p>
                    <button
                        onClick={retry}
                        className="py-2 px-5 bg-primary text-white rounded-lg font-semibold"
                    >
                        Retry
                    </button>
                </div>
            )}

            {/* DATA STATE */}
            {!loading && !error && patients.length > 0 && (
                <>
                    {/* FILTER SUMMARY */}
                    <div className="flex gap-3 mb-8 flex-wrap">
                        <button className="px-4 py-2 border border-border-custom bg-primary/20 border-primary text-primary rounded-lg text-sm font-semibold">
                            All ({patients.length})
                        </button>
                        <button className="px-4 py-2 border border-border-custom bg-transparent text-text-secondary rounded-lg text-sm font-semibold hover:border-red-500 hover:text-red-400">
                            Critical ({criticalPatients.length})
                        </button>
                        <button className="px-4 py-2 border border-border-custom bg-transparent text-text-secondary rounded-lg text-sm font-semibold hover:border-green-500 hover:text-green-400">
                            Stable ({stablePatients.length})
                        </button>
                    </div>

                    {/* CRITICAL SECTION */}
                    {criticalPatients.length > 0 && (
                        <div className="mb-10">
                            <h2 className="text-[1.25rem] font-semibold mb-4 pb-3 border-b-2 border-red-500/30 text-red-300">
                                ⚠️ Critical Cases ({criticalPatients.length})
                            </h2>
                            <div className="flex flex-col gap-4">
                                {criticalPatients.map((patient) => (
                                    <Link
                                        key={patient.id}
                                        to={`/patients/${patient.id}`}
                                        className="block no-underline text-inherit"
                                    >
                                        <PatientCard patient={patient} />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* STABLE SECTION */}
                    {stablePatients.length > 0 && (
                        <div className="mb-10">
                            <h2 className="text-[1.25rem] font-semibold mb-4 pb-3 border-b-2 border-green-500/30 text-green-300">
                                ✅ Stable Patients ({stablePatients.length})
                            </h2>
                            <div className="flex flex-col gap-4">
                                {stablePatients.map((patient) => (
                                    <Link
                                        key={patient.id}
                                        to={`/patients/${patient.id}`}
                                        className="block no-underline text-inherit"
                                    >
                                        <PatientCard patient={patient} />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </>
            )}

            {/* EMPTY STATE */}
            {!loading && !error && patients.length === 0 && (
                <div className="text-center py-[60px] px-5 bg-card-bg border border-border-custom rounded-xl">
                    <div className="text-[64px] mb-4">👥</div>
                    <h3 className="text-2xl mb-2 text-text-primary">
                        No Patients Found
                    </h3>
                    <p className="text-text-secondary mb-6">
                        Start by adding your first patient to the system
                    </p>
                    <button className="py-3 px-6 bg-[linear-gradient(135deg,var(--primary)_0%,var(--primary-dark)_100%)] text-white rounded-lg font-semibold text-sm hover:-translate-y-0.5">
                        + Add Patient
                    </button>
                </div>
            )}
        </div>
    );
};

export default Patients;