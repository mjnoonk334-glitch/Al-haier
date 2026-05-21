import { cn } from '../utils/cn';

interface ReportSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

const ReportSection = ({ title, children, className, icon }: ReportSectionProps) => {
  return (
    <section className={cn("bg-white rounded-lg shadow-md overflow-hidden mb-8 border border-slate-200", className)}>
      <div className="bg-blue-800 px-6 py-3 flex items-center justify-between">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          {icon}
          {title}
        </h2>
      </div>
      <div className="p-1 md:p-6 overflow-x-auto">
        {children}
      </div>
    </section>
  );
};

export default ReportSection;
