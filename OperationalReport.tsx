import ReportSection from './ReportSection';
import { Activity, Zap, Droplet } from 'lucide-react';

const OperationalReport = () => {
  return (
    <ReportSection title="تقرير التشغيل / الإنتاج" icon={<Activity className="w-5 h-5" />}>
      {/* Basic Info Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-0 border border-slate-200 rounded-lg overflow-hidden mb-6 text-sm">
        <InfoBox label="القطاع" value="الأوسط" />
        <InfoBox label="المدينة" value="الرياض" />
        <InfoBox label="المحطة" value="تقنية الحاير" />
        <InfoBox label="الجهة المستفيدة" value="السبيعي - مفتوحة" />
        <InfoBox label="الإنتاج التصميمي (م3 / يوم)" value="50000" highlight />
        <InfoBox label="آلية التشغيل" value="ذاتي" />
        
        <InfoBox label="الشركة المشغلة" value="NWC" />
        <InfoBox label="التغطية الكهربائية" value="شركة الكهرباء" />
        <InfoBox label="الاستهلاك (MW/DAY)" value="-" />
        <InfoBox label="مولدات ديزل - عدد" value="1" />
        <InfoBox label="نوع المصادر" value="مياه جوفية ( آبار )" span={2} />
      </div>

      {/* Production & Pumps Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Production Table */}
        <div>
          <h3 className="text-blue-700 font-bold mb-3 flex items-center gap-2">
            <Droplet className="w-4 h-4" />
            مخرجات الإنتاج
          </h3>
          <table className="w-full border-collapse border border-slate-200 text-sm">
            <thead className="bg-slate-100">
              <tr>
                <th className="border border-slate-200 p-2">كمية الإنتاج (م3/يوم)</th>
                <th className="border border-slate-200 p-2">كمية الخلط</th>
                <th className="border border-slate-200 p-2">كمية الإنتاج الكلي (م3/يوم)</th>
                <th className="border border-slate-200 p-2">كمية التصدير (م3/يوم)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center font-bold">
                <td className="border border-slate-200 p-3 bg-blue-50">42791</td>
                <td className="border border-slate-200 p-3">-</td>
                <td className="border border-slate-200 p-3">42791</td>
                <td className="border border-slate-200 p-3 text-blue-700">42124</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* HPP Pumps */}
        <div>
          <h3 className="text-blue-700 font-bold mb-3 flex items-center gap-2">
            <Zap className="w-4 h-4" />
            مضخات الضغط العالي ( HPP )
          </h3>
          <table className="w-full border-collapse border border-slate-200 text-sm">
            <thead className="bg-slate-100">
              <tr>
                <th className="border border-slate-200 p-2">عدد المضخات الكلي</th>
                <th className="border border-slate-200 p-2">في الخدمة</th>
                <th className="border border-slate-200 p-2">خارج الخدمة</th>
                <th className="border border-slate-200 p-2">السبب</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <td className="border border-slate-200 p-3 font-bold">8</td>
                <td className="border border-slate-200 p-3 text-green-600 font-bold">3</td>
                <td className="border border-slate-200 p-3 text-red-600 font-bold">5</td>
                <td className="border border-slate-200 p-3 text-xs text-slate-500 italic">احتياطي</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="mt-6 bg-slate-50 p-3 rounded border border-slate-200 text-sm">
        <span className="font-bold text-blue-800">ملاحظات:</span>
        <span className="mr-2 text-slate-600">بئر الحاير رقم 10 ما زال تحت الصيانة</span>
      </div>
    </ReportSection>
  );
};

const InfoBox = ({ label, value, highlight = false, span = 1 }: { label: string, value: string, highlight?: boolean, span?: number }) => (
  <div className={`flex flex-col border border-slate-100 p-3 ${span > 1 ? `md:col-span-${span}` : ''} ${highlight ? 'bg-blue-50' : ''}`}>
    <span className="text-[10px] text-slate-400 font-bold uppercase mb-1">{label}</span>
    <span className={`font-bold ${highlight ? 'text-blue-700' : 'text-slate-800'}`}>{value}</span>
  </div>
);

export default OperationalReport;
