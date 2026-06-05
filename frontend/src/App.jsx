import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import Login from './pages/Login';

const DummyDashboard = ({ role }) => {
  const { logout } = useContext(AuthContext);
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col">
      
      {/* Enterprise Upper Navigation Matrix */}
      <nav className="w-full border-b border-slate-200 bg-white shadow-sm px-6 md:px-12 py-4 flex justify-between items-center z-10">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white text-base">SM</div>
          <div className="flex flex-col">
            <span className="font-extrabold text-slate-900 text-base tracking-tight leading-none">School Momentum</span>
            <span className="text-[10px] text-slate-400 font-semibold tracking-widest uppercase mt-1">Inter College Portal</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-200 rounded-full text-xs font-bold text-emerald-700">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Node Secure
          </div>
          <button onClick={logout} className="bg-slate-100 hover:bg-rose-50 text-slate-700 hover:text-rose-600 border border-slate-200 hover:border-rose-200 px-4 py-2 rounded-xl text-xs font-bold transition-all">
            Disconnect Session
          </button>
        </div>
      </nav>

      {/* Corporate Dashboard Container Work Area */}
      <div className="flex-1 max-w-7xl w-full mx-auto p-6 md:p-12">
        <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6 md:p-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 pb-6 mb-6 gap-4">
            <div>
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">Active Workspace Profile</span>
              <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mt-1">Institutional Account: {role} Division</h1>
            </div>
            <div className="text-3xl bg-slate-100 p-3 rounded-xl self-start sm:self-center">
              {role === 'Admin' ? '🛡️' : role === 'Teacher' ? '👨‍🏫' : '🎓'}
            </div>
          </div>

          <p className="text-slate-600 text-sm leading-relaxed max-w-3xl">
            Welcome back, Yusuf. The application foundation has successfully mapped your access matrix rules. You are cleared for cross-module processing, database querying, and analytical performance oversight under role token tracking guidelines.
          </p>
          
          {/* Production System Framework Metric Blocks */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            <div className="bg-slate-50 border border-slate-200/60 p-5 rounded-xl">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Database Stream</span>
              <span className="text-base font-bold text-emerald-600 mt-1.5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Connected (Port 5000)
              </span>
            </div>
            <div className="bg-slate-50 border border-slate-200/60 p-5 rounded-xl">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Security Protocol</span>
              <span className="text-base font-bold text-indigo-600 mt-1.5">JWT / Session RBAC</span>
            </div>
            <div className="bg-slate-50 border border-slate-200/60 p-5 rounded-xl">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">UI Scaling Matrix</span>
              <span className="text-base font-bold text-slate-700 mt-1.5">Tailwind Fluid Grid</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={user ? <DummyDashboard role={user.role} /> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;