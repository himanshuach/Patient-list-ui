import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    return (
        <div className="w-[280px] bg-[linear-gradient(180deg,#1e293b_0%,#0f172a_100%)] border-r border-border-custom flex flex-col h-screen sticky top-0 overflow-y-auto">
            <div className="p-6 md:px-5 md:py-6 border-b border-border-custom">
                <div className="flex items-center gap-3 cursor-pointer">
                    <span className="text-[32px]">🏥</span>
                    <div>
                        <h3 className="text-xl m-0 leading-none">Hospital</h3>
                        <p className="text-[0.75rem] text-text-secondary m-0 uppercase tracking-widest">Management</p>
                    </div>
                </div>
            </div>

            <nav className="flex-1 py-5 overflow-y-auto">
                <div className="px-4 mb-7">
                    <p className="text-[0.75rem] font-semibold text-text-secondary uppercase tracking-[1.2px] mb-3 px-2">MAIN</p>
                    <ul className="flex flex-col gap-2 list-none p-0 m-0">
                        <li>
                            <Link
                                to="/"
                                className={`flex items-center gap-3 p-3 rounded-lg text-text-secondary transition-all duration-200 font-medium hover:bg-primary/10 hover:text-text-primary ${isActive("/") ? "bg-primary/20 text-primary border-l-3 border-primary pl-[9px]" : ""
                                    }`}
                            >
                                <span className="text-[1.25rem] min-w-[24px] text-center">📊</span>
                                <span>Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/patients"
                                className={`flex items-center gap-3 p-3 rounded-lg text-text-secondary transition-all duration-200 font-medium hover:bg-primary/10 hover:text-text-primary ${isActive("/patients") ? "bg-primary/20 text-primary border-l-3 border-primary pl-[9px]" : ""
                                    }`}
                            >
                                <span className="text-[1.25rem] min-w-[24px] text-center">👥</span>
                                <span>Patients</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="px-4 mb-7">
                    <p className="text-[0.75rem] font-semibold text-text-secondary uppercase tracking-[1.2px] mb-3 px-2">OTHER</p>
                    <ul className="flex flex-col gap-2 list-none p-0 m-0">
                        <li>
                            <a href="#" className="flex items-center gap-3 p-3 rounded-lg text-text-secondary transition-all duration-200 font-medium hover:bg-primary/10 hover:text-text-primary">
                                <span className="text-[1.25rem] min-w-[24px] text-center">⚙️</span>
                                <span>Settings</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center gap-3 p-3 rounded-lg text-text-secondary transition-all duration-200 font-medium hover:bg-primary/10 hover:text-text-primary">
                                <span className="text-[1.25rem] min-w-[24px] text-center">📋</span>
                                <span>Reports</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="p-5 border-t border-border-custom">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/20">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-xl flex-shrink-0">👨‍⚕️</div>
                    <div className="flex-1 min-w-0">
                        <p className="text-[0.875rem] font-semibold text-text-primary m-0">Dr. Admin</p>
                        <p className="text-[0.75rem] text-text-secondary m-0">Administrator</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
