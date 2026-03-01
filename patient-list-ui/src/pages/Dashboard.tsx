import { usePatients } from "../hooks/usePatients";

const Dashboard = () => {
    const { patients } = usePatients();

    const stats = {
        total: patients.length,
        critical: patients.filter((p) => p.condition === "Critical").length,
        stable: patients.filter((p) => p.condition === "Stable").length,
    };

    const criticalPercentage =
        stats.total > 0 ? ((stats.critical / stats.total) * 100).toFixed(1) : 0;

    return (
        <div className="animate-[fadeIn_0.5s_ease-in-out]">
            <div className="flex flex-col md:flex-row md:items-center justify-between items-start gap-4 md:gap-0 mb-8">
                <div>
                    <h1 className="text-4xl font-bold text-text-primary mb-2">Dashboard</h1>
                    <p className="text-text-secondary text-[0.875rem] mt-1">Hospital Management System</p>
                </div>
                <div className="px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-lg text-green-300 text-[0.875rem] font-semibold">
                    Last updated: Just now
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
                <div className="bg-card-bg border border-border-custom rounded-xl p-6 flex gap-4 transition-all duration-300 hover:border-primary hover:shadow-[0_8px_24px_rgba(124,58,237,0.15)] hover:-translate-y-1">
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center text-[32px] shrink-0 bg-primary/10">👥</div>
                    <div className="flex-1 min-w-0 ">
                        <p className="text-[0.875rem] text-text-secondary uppercase tracking-wider font-semibold mb-2">Total Patients</p>
                        <h2 className="text-4xl font-bold text-text-primary mb-2 mt-0 leading-none">{stats.total}</h2>
                        <p className="text-[0.875rem] text-text-secondary mt-0">Active in system</p>
                    </div>
                </div>

                <div className="bg-card-bg border border-border-custom rounded-xl p-6 flex gap-4 transition-all duration-300 hover:border-primary hover:shadow-[0_8px_24px_rgba(124,58,237,0.15)] hover:-translate-y-1">
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center text-[32px] shrink-0 bg-red-500/10">⚠️</div>
                    <div className="flex-1">
                        <p className="text-[0.875rem] text-text-secondary uppercase tracking-wider font-semibold mb-2">Critical Cases</p>
                        <h2 className="text-4xl font-bold text-text-primary mb-2 mt-0 leading-none">{stats.critical}</h2>
                        <p className="text-[0.875rem] text-text-secondary mt-0">{criticalPercentage}% of total</p>
                    </div>
                </div>

                <div className="bg-card-bg border border-border-custom rounded-xl p-6 flex gap-4 transition-all duration-300 hover:border-primary hover:shadow-[0_8px_24px_rgba(124,58,237,0.15)] hover:-translate-y-1">
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center text-[32px] shrink-0 bg-green-500/10">✅</div>
                    <div className="flex-1">
                        <p className="text-[0.875rem] text-text-secondary uppercase tracking-wider font-semibold mb-2">Stable Patients</p>
                        <h2 className="text-4xl font-bold text-text-primary mb-2 mt-0 leading-none">{stats.stable}</h2>
                        <p className="text-[0.875rem] text-text-secondary mt-0">Under observation</p>
                    </div>
                </div>

                <div className="bg-card-bg border border-border-custom rounded-xl p-6 flex gap-4 transition-all duration-300 hover:border-primary hover:shadow-[0_8px_24px_rgba(124,58,237,0.15)] hover:-translate-y-1">
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center text-[32px] shrink-0 bg-primary/10">🏥</div>
                    <div className="flex-1">
                        <p className="text-[0.875rem] text-text-secondary uppercase tracking-wider font-semibold mb-2">System Status</p>
                        <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-2 mt-0 leading-tight break-words">Operational</h2>
                        <p className="text-[0.875rem] text-text-secondary mt-0">All systems online</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-card-bg border border-border-custom rounded-xl p-6">
                    <h3 className="mt-0 mb-5 text-text-primary text-[1.125rem] font-semibold">System Overview</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg flex flex-col gap-2">
                            <span className="text-[0.75rem] text-text-secondary uppercase font-semibold tracking-wider">Total Beds</span>
                            <span className="text-2xl font-bold text-text-primary">120</span>
                        </div>
                        <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg flex flex-col gap-2">
                            <span className="text-[0.75rem] text-text-secondary uppercase font-semibold tracking-wider">Occupied Beds</span>
                            <span className="text-2xl font-bold text-text-primary">{stats.total}</span>
                        </div>
                        <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg flex flex-col gap-2">
                            <span className="text-[0.75rem] text-text-secondary uppercase font-semibold tracking-wider">Available Beds</span>
                            <span className="text-2xl font-bold text-text-primary">{120 - stats.total}</span>
                        </div>
                        <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg flex flex-col gap-2">
                            <span className="text-[0.75rem] text-text-secondary uppercase font-semibold tracking-wider">Occupancy Rate</span>
                            <span className="text-2xl font-bold text-text-primary">
                                {((stats.total / 120) * 100).toFixed(1)}%
                            </span>
                        </div>
                    </div>
                </div>

                <div className="bg-card-bg border border-border-custom rounded-xl p-6">
                    <h3 className="mt-0 mb-5 text-text-primary text-[1.125rem] font-semibold">Recent Activity</h3>
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-3 p-3 bg-primary/5 border border-primary/20 rounded-lg items-center">
                            <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl shrink-0 bg-primary/10">📋</div>
                            <div className="flex-1">
                                <p className="text-text-primary text-[0.875rem] font-medium m-0 mb-1">New patient admitted</p>
                                <span className="text-text-secondary text-[0.75rem] m-0">2 hours ago</span>
                            </div>
                        </div>
                        <div className="flex gap-3 p-3 bg-primary/5 border border-primary/20 rounded-lg items-center">
                            <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl shrink-0 bg-primary/10">✔️</div>
                            <div className="flex-1">
                                <p className="text-text-primary text-[0.875rem] font-medium m-0 mb-1">Patient discharge completed</p>
                                <span className="text-text-secondary text-[0.75rem] m-0">4 hours ago</span>
                            </div>
                        </div>
                        <div className="flex gap-3 p-3 bg-primary/5 border border-primary/20 rounded-lg items-center">
                            <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl shrink-0 bg-primary/10">🔔</div>
                            <div className="flex-1">
                                <p className="text-text-primary text-[0.875rem] font-medium m-0 mb-1">Critical alert issued</p>
                                <span className="text-text-secondary text-[0.75rem] m-0">6 hours ago</span>
                            </div>
                        </div>
                        <div className="flex gap-3 p-3 bg-primary/5 border border-primary/20 rounded-lg items-center">
                            <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl shrink-0 bg-primary/10">📊</div>
                            <div className="flex-1">
                                <p className="text-text-primary text-[0.875rem] font-medium m-0 mb-1">Daily report generated</p>
                                <span className="text-text-secondary text-[0.75rem] m-0">1 day ago</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
