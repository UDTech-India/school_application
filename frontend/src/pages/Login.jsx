import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Student'); // Standard default portal entity
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      login(response.data);
      alert(`✅ Welcome to the Portal, ${response.data.name}. Access Granted.`);
    } catch (error) {
      alert(error.response?.data?.message || 'Invalid institutional credentials');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 md:p-10 font-sans">
      
      {/* Main Corporate Institutional Container */}
      <div className="bg-white w-full max-w-5xl rounded-2xl shadow-xl border border-slate-200/80 overflow-hidden grid grid-cols-1 md:grid-cols-12 min-h-[600px]">
        
        {/* Left Column: Academic Branding Banner (Visible on Desktop) */}
        <div className="hidden md:flex md:col-span-5 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 p-12 flex-col justify-between relative">
          <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
          
          <div className="z-10">
            <div className="flex items-center gap-2 text-white font-bold text-xl tracking-tight">
              <span className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-sm">SM</span>
              <span>School Momentum</span>
            </div>
          </div>

          <div className="z-10 my-auto">
            <h1 className="text-3xl font-bold text-white leading-tight tracking-tight">
              Centralized Administrative & Academic Gateway
            </h1>
            <p className="text-slate-400 text-sm mt-4 leading-relaxed">
              Access localized modules across secondary, senior, and administrative divisions seamlessly from a secure enterprise terminal.
            </p>
          </div>

          <div className="z-10 border-t border-slate-700/60 pt-6">
            <div className="flex gap-6 text-xs text-slate-400 font-medium">
              <div><span className="text-white font-bold block text-lg">6th-12th</span> Structure Scope</div>
              <div><span className="text-white font-bold block text-lg">RBAC</span> Secured Layer</div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Institutional Form Console */}
        <div className="col-span-1 md:col-span-7 p-8 sm:p-12 md:p-16 flex flex-col justify-center bg-white">
          
          {/* Top Mobile Header (Visible on Mobile) */}
          <div className="flex md:hidden items-center gap-2 text-slate-900 font-bold text-lg mb-8">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-sm text-white">SM</div>
            <span>School Momentum</span>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">Account Sign In</h2>
            <p className="text-slate-500 text-sm mt-2">Enter your official institutional credentials to access your dashboard segment.</p>
          </div>

          {/* Role Segment Selector - Clean Academic Badges */}
          <div className="mb-6">
            <label className="block text-slate-500 text-xs font-bold uppercase tracking-wider mb-2.5">System Context Role</label>
            <div className="flex gap-2 p-1.5 bg-slate-100 rounded-xl border border-slate-200">
              {['Admin', 'Teacher', 'Student'].map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setRole(r)}
                  className={`flex-1 text-center py-2 text-xs font-bold rounded-lg transition-all ${
                    role === r
                      ? 'bg-white text-indigo-600 shadow-sm border border-slate-200'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                  }`}
                >
                  {r === 'Admin' ? '🛡️ ' : r === 'Teacher' ? '👨‍🏫 ' : '🎓 '} {r}
                </button>
              ))}
            </div>
          </div>

          {/* Secure Credential Intake form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-2">Institutional Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="yusuf.shaikh@schoolportal.edu"
                className="w-full bg-slate-50 text-slate-900 placeholder-slate-400 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-600 focus:bg-white transition-all text-sm"
                required
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider">Account Password</label>
                <a href="#" className="text-xs font-bold text-indigo-600 hover:text-indigo-700 transition-colors">Forgot Password?</a>
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-slate-50 text-slate-900 placeholder-slate-400 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-600 focus:bg-white transition-all text-sm"
                required
              />
            </div>

            {/* Submit Action */}
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3.5 rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all transform active:scale-[0.99] mt-2"
            >
              Authenticate & Launch Portal
            </button>
          </form>

          {/* Footer Notice */}
          <div className="mt-10 pt-6 border-t border-slate-100 text-center md:text-left">
            <p className="text-xs text-slate-400 leading-relaxed">
              This infrastructure is governed by standard security systems. Unauthorized connection attempts or credential hijacking are flagged automatically.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;