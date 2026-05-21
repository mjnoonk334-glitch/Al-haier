import ReportSection from './ReportSection';
import { Settings } from 'lucide-react';

const MaintenanceReport = () => {
  const equipment = [
    { name: 'مضخات الرفع', location: 'مبنى المضخات', total: 8, active: 3, inactive: 5, reason: 'مضخات احتياطية' },
    { name: 'المحولات', location: 'المحطة', total: 6, active: 3, inactive: 3, reason: 'محولات احتياطية' },
    { name: 'مضخات تجريع الكلور', location: 'مبنى الكلور', total: 2, active: 1, inactive: 1, reason: 'مضخات احتياطية' },
    { name: 'بادئ تشغيل', location: 'مبنى المضخات', total: 8, active: 3, inactive: 5, reason: 'مضخات احتياطية' },
  ];

  const activities = [
    { type: 'وقائية', equipment: 'المضختين (6-7)', location: 'المحطة', description: 'تشبيك وتغيير زيت (تشغيل طبيعي، تشحيم، الاهتزازات، النظافة)' },
    { type: 'وقائية', equipment: 'المطور (6-7)', location: 'المحطة', description: 'تشبيك وتغيير زيت (تشغيل طبيعي، تشحيم، الاهتزازات، النظافة)' },
    { type: 'وقائية', equipment: 'بادئ التشغيل (6-7)', location: 'المحطة', description: 'تشبيك وفحص (نظافة وشد)' },
  ];

  return (
    <ReportSection title="تقرير الصيانة" icon={<Settings className="w-5 h-5" />}>
      <div className="space-y-8">
        {/* Equipment Status Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-slate-200 text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="border border-slate-200 p-3 text-right">اسم المعدة</th>
                <th className="border border-slate-200 p-3">الموقع</th>
                <th className="border border-slate-200 p-3">العدد</th>
                <th className="border border-slate-200 p-3">في الخدمة</th>
                <th className="border border-slate-200 p-3">خارج الخدمة</th>
                <th className="border border-slate-200 p-3 text-right">السبب</th>
              </tr>
            </thead>
            <tbody>
              {equipment.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="border border-slate-200 p-3 font-bold text-blue-900">{item.name}</td>
                  <td className="border border-slate-200 p-3 text-center text-slate-600">{item.location}</td>
                  <td className="border border-slate-200 p-3 text-center font-bold">{item.total}</td>
                  <td className="border border-slate-200 p-3 text-center text-green-600 font-bold">{item.active}</td>
                  <td className="border border-slate-200 p-3 text-center text-red-600 font-bold">{item.inactive}</td>
                  <td className="border border-slate-200 p-3 text-right text-xs text-slate-500">{item.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Maintenance Activities */}
        <div>
          <h3 className="text-blue-700 font-bold mb-3">سجل الأعمال المنجزة</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-slate-200 text-sm">
              <thead className="bg-slate-800 text-white">
                <tr>
                  <th className="border border-slate-700 p-3 text-right w-32">نوع الصيانة</th>
                  <th className="border border-slate-700 p-3 text-right w-48">اسم المعدة</th>
                  <th className="border border-slate-700 p-3 text-right w-32">الموقع</th>
                  <th className="border border-slate-700 p-3 text-right">وصف العمل</th>
                </tr>
              </thead>
              <tbody>
                {activities.map((act, idx) => (
                  <tr key={idx} className="even:bg-slate-50">
                    <td className="border border-slate-200 p-3">
                      <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-[10px] font-bold">
                        {act.type}
                      </span>
                    </td>
                    <td className="border border-slate-200 p-3 font-medium">{act.equipment}</td>
                    <td className="border border-slate-200 p-3 text-slate-600">{act.location}</td>
                    <td className="border border-slate-200 p-3 text-slate-600 leading-relaxed">{act.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </ReportSection>
  );
};

export default MaintenanceReport;
