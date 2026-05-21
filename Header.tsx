
import { Droplets, Calendar, MapPin } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white border-b-4 border-blue-600 p-6 shadow-sm">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 p-3 rounded-xl">
            <Droplets className="text-white w-8 h-8" />
          </div>
          <div>
            <h1 className="text-2xl font-black text-blue-900 leading-tight">تحلية المياه</h1>
            <p className="text-sm text-slate-500 font-medium">نظام المراقبة والتقارير اليومية</p>
          </div>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-6">
          <div className="flex flex-col items-center px-4 py-1 border-x border-slate-200">
            <span className="text-xs text-slate-400 font-bold mb-1">التاريخ</span>
            <div className="flex items-center gap-2 text-slate-700">
              <Calendar className="w-4 h-4 text-blue-600" />
              <span className="font-bold">30/01/2025</span>
            </div>
          </div>
          
          <div className="flex flex-col items-center px-4 py-1 border-x border-slate-200">
            <span className="text-xs text-slate-400 font-bold mb-1">اليوم</span>
            <span className="font-bold text-slate-700">الخميس</span>
          </div>

          <div className="flex flex-col items-center px-4 py-1 border-x border-slate-200">
            <span className="text-xs text-slate-400 font-bold mb-1">المحطة / المدينة</span>
            <div className="flex items-center gap-2 text-slate-700">
              <MapPin className="w-4 h-4 text-blue-600" />
              <span className="font-bold">تقنية الحاير / الرياض</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
