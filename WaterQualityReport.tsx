import ReportSection from './ReportSection';
import { Microscope } from 'lucide-react';

const WaterQualityReport = () => {
  const parameters = [
    { name: 'Time', unit: 'Hrs.', standard: '-', raw: '-', product: '07:00', rejected: '-' },
    { name: 'Temp.', unit: '°C', standard: 'Max. 40', raw: '-', product: '31.4', rejected: '-' },
    { name: 'Turbidity', unit: 'NTU', standard: 'Max. 5', raw: '-', product: '0.37', rejected: '-' },
    { name: 'Free Chlorine', unit: 'mg/l', standard: '0.2 - 0.5', raw: '-', product: '0.43', rejected: '-' },
    { name: 'pH', unit: '-', standard: '6.5 - 8.5', raw: '-', product: '7.8', rejected: '-' },
    { name: 'Conductivity', unit: 'µs/cm', standard: '200-2000', raw: '-', product: '876', rejected: '-' },
    { name: 'TDS', unit: 'mg/l', standard: '100 - 1000', raw: '-', product: '570', rejected: '-' },
    { name: 'T. Iron', unit: 'mg/l', standard: 'Max. 0.3', raw: 'NA', product: 'NA', rejected: 'NA' },
    { name: 'Manganese', unit: 'mg/l', standard: 'Max. 0.4', raw: 'NA', product: 'NA', rejected: 'NA' },
    { name: 'Chloride', unit: 'mg/l', standard: 'Max. 250', raw: 'NA', product: 'NA', rejected: 'NA' },
    { name: 'Total Hardness', unit: 'mg/l', standard: 'Max. 320', raw: 'NA', product: 'NA', rejected: 'NA' },
    { name: 'Total Alkalinity', unit: 'mg/l', standard: '25-200', raw: 'NA', product: 'NA', rejected: 'NA' },
    { name: 'Ca as CaCO3', unit: 'mg/l', standard: '30 <', raw: 'NA', product: 'NA', rejected: 'NA' },
    { name: 'LSI', unit: '-', standard: '0.0- 0.3', raw: 'NA', product: 'NA', rejected: 'NA' },
    { name: 'Radon', unit: 'Bq/l', standard: '300', raw: 'NA', product: 'NA', rejected: 'NA' },
    { name: 'Radium-228', unit: 'Bq/l', standard: '0.2', raw: 'NA', product: 'NA', rejected: 'NA' },
    { name: 'Radium-226', unit: 'Bq/l', standard: '0.5', raw: 'NA', product: 'NA', rejected: 'NA' },
    { name: 'Total Bacteria', unit: 'Negative', standard: 'Negative', raw: 'Negative', product: 'Negative', rejected: 'NA' },
    { name: 'Coliform Bacteria', unit: 'MPN/100', standard: 'Negative', raw: 'NA', product: 'NA', rejected: 'NA' },
    { name: 'Fecal Bacteria', unit: 'MPN/100', standard: 'Negative', raw: 'NA', product: 'NA', rejected: 'NA' },
  ];

  return (
    <ReportSection title="تقرير جودة المياه" icon={<Microscope className="w-5 h-5" />}>
      <div className="mb-4 text-xs font-bold text-slate-500 uppercase tracking-widest text-center">
        Physical, Chemical, Radiological and Bacteriological Analysis
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-slate-200 text-[11px]">
          <thead>
            <tr className="bg-blue-700 text-white">
              <th className="border border-blue-600 p-2 min-w-[100px]">Parameters</th>
              <th className="border border-blue-600 p-2 min-w-[70px]">Unit</th>
              <th className="border border-blue-600 p-2 min-w-[90px]">MEWA-2024 Standards</th>
              <th className="border border-blue-600 p-2 bg-slate-800">Raw water</th>
              <th className="border border-blue-600 p-2 bg-green-700">Product Water</th>
              <th className="border border-blue-600 p-2 bg-red-700">Rejected Water</th>
            </tr>
          </thead>
          <tbody>
            {parameters.map((param, idx) => (
              <tr key={idx} className="hover:bg-slate-50 border-b border-slate-100">
                <td className="border-x border-slate-200 p-2 font-bold text-blue-900">{param.name}</td>
                <td className="border-x border-slate-200 p-2 text-center text-slate-500">{param.unit}</td>
                <td className="border-x border-slate-200 p-2 text-center font-medium">{param.standard}</td>
                <td className="border-x border-slate-200 p-2 text-center font-bold bg-slate-50">{param.raw}</td>
                <td className="border-x border-slate-200 p-2 text-center font-bold text-green-700 bg-green-50">{param.product}</td>
                <td className="border-x border-slate-200 p-2 text-center font-bold text-red-700 bg-red-50">{param.rejected}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-4 flex justify-between items-center text-[10px] text-slate-400 font-bold px-2">
        <span>MEWA: Ministry of Environment, Water and Agriculture</span>
        <span>NA: Not Available / Not Applicable</span>
      </div>
    </ReportSection>
  );
};

export default WaterQualityReport;
