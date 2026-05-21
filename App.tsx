import Header from './components/Header';
import OperationalReport from './components/OperationalReport';
import MaintenanceReport from './components/MaintenanceReport';
import WaterQualityReport from './components/WaterQualityReport';
import ApprovalSection from './components/ApprovalSection';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Statistics Overview (Optional addition for modern dashboard feel) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <StatCard label="إجمالي الإنتاج الكلي" value="42,791" unit="م3" color="blue" />
          <StatCard label="نسبة التغطية" value="98.4%" unit="" color="green" />
          <StatCard label="حالة المحطة" value="مستقرة" unit="" color="indigo" />
        </div>

        <OperationalReport />
        <MaintenanceReport />
        <WaterQualityReport />
        <ApprovalSection />
      </main>
      
      <footer className="text-center text-slate-400 text-xs py-4">
        &copy; 2025 نظام إدارة محطات المياه | جميع الحقوق محفوظة
      </footer>
    </div>
  );
}

const StatCard = ({ label, value, unit, color }: { label: string, value: string, unit: string, color: 'blue' | 'green' | 'indigo' }) => {
  const colors = {
    blue: 'bg-blue-600',
    green: 'bg-emerald-600',
    indigo: 'bg-indigo-600'
  };
  
  return (
    <div className="bg-white p-5 rounded-lg shadow-sm border border-slate-100 flex items-center justify-between">
      <div>
        <p className="text-xs text-slate-400 font-bold mb-1">{label}</p>
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-black text-slate-800">{value}</span>
          <span className="text-xs text-slate-500 font-medium">{unit}</span>
        </div>
      </div>
      <div className={`w-2 h-10 rounded-full ${colors[color]}`} />
    </div>
  );
};

export default App;
