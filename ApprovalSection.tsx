import ReportSection from './ReportSection';
import { CheckCircle, User } from 'lucide-react';

const ApprovalSection = () => {
  return (
    <ReportSection title="الاعتماد والموافقات" icon={<CheckCircle className="w-5 h-5" />}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-4">
        {/* Approver 1 */}
        <div className="flex flex-col items-center">
          <div className="w-full border-b-2 border-slate-200 pb-2 mb-4 text-center">
            <span className="text-slate-400 text-xs font-bold block mb-1">المعتمد</span>
            <span className="font-bold text-blue-900">مشرف محطة التنقية</span>
          </div>
          
          <div className="w-full flex justify-between items-end gap-4 px-4">
            <div className="flex-1">
              <span className="text-[10px] text-slate-400 font-bold block mb-1">الاسم:</span>
              <div className="flex items-center gap-2 border-b border-slate-100 pb-1">
                <User className="w-3 h-3 text-slate-300" />
                <span className="font-bold text-sm">ناصر الدوسري</span>
              </div>
            </div>
            
            <div className="flex-1 text-left">
              <span className="text-[10px] text-slate-400 font-bold block mb-1">التوقيع:</span>
              <div className="h-12 flex items-end justify-start">
                 <div className="italic font-serif text-blue-300 text-xl select-none pointer-events-none">N. Al-Dossari</div>
              </div>
            </div>
          </div>
        </div>

        {/* Approver 2 */}
        <div className="flex flex-col items-center">
          <div className="w-full border-b-2 border-slate-200 pb-2 mb-4 text-center">
            <span className="text-slate-400 text-xs font-bold block mb-1">المعتمد</span>
            <span className="font-bold text-blue-900">مدير التشغيل</span>
          </div>
          
          <div className="w-full flex justify-between items-end gap-4 px-4">
            <div className="flex-1">
              <span className="text-[10px] text-slate-400 font-bold block mb-1">الاسم:</span>
              <div className="flex items-center gap-2 border-b border-slate-100 pb-1">
                <User className="w-3 h-3 text-slate-300" />
                <span className="font-bold text-sm">عبدالله المطيري</span>
              </div>
            </div>
            
            <div className="flex-1 text-left">
              <span className="text-[10px] text-slate-400 font-bold block mb-1">التوقيع:</span>
              <div className="h-12 flex items-end justify-start">
                 <div className="italic font-serif text-blue-300 text-xl select-none pointer-events-none opacity-50">A. Al-Mutairi</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 pt-6 border-t border-slate-100 flex justify-between items-center opacity-50 text-[10px] font-bold text-slate-400">
        <span>رقم التقرير: WT-2025-01-30-001</span>
        <span>تاريخ الطباعة: {new Date().toLocaleString('ar-SA')}</span>
      </div>
    </ReportSection>
  );
};

export default ApprovalSection;
