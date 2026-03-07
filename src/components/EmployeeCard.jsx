import { Mail, Phone, Globe, Building2, Printer, Download, Image } from "lucide-react";
import { downloadAsImage, downloadAsPDF } from "../utils/downloadCard";

const EmployeeCard = ({ employee }) => {
  const { id, name, email, phone, website, company } = employee;
  const cardId = `employee-card-${id}`;
  const initials = name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
  const colors = ["from-blue-500 to-indigo-600","from-purple-500 to-pink-500","from-green-500 to-teal-500","from-orange-400 to-red-500","from-cyan-500 to-blue-500"];
  const gradient = colors[(id - 1) % colors.length];

  const handlePrint = () => {
    const card = document.getElementById(cardId);
    const win = window.open("", "_blank");
    win.document.write(`
      <html><head><title>Employee Card - ${name}</title>
      <style>
        body { font-family: sans-serif; padding: 20px; }
        .card { border: 1px solid #e5e7eb; border-radius: 16px; padding: 24px; max-width: 360px; margin: auto; }
        .header { display: flex; align-items: center; gap: 16px; margin-bottom: 16px; }
        .avatar { width: 56px; height: 56px; border-radius: 50%; background: linear-gradient(135deg, #3b82f6, #6366f1); color: white; display: flex; align-items: center; justify-content: center; font-size: 20px; font-weight: bold; }
        .name { font-size: 18px; font-weight: bold; } .tag { font-size: 12px; color: #6b7280; }
        .info { margin: 6px 0; font-size: 13px; color: #374151; }
      </style></head><body>
      <div class="card">
        <div class="header">
          <div class="avatar">${initials}</div>
          <div><div class="name">${name}</div><div class="tag">Employee #${id}</div></div>
        </div>
        <div class="info">📧 ${email}</div>
        <div class="info">📞 ${phone}</div>
        <div class="info">🌐 ${website}</div>
        <div class="info">🏢 ${company.name}</div>
      </div>
      </body></html>
    `);
    win.document.close();
    win.print();
  };

  return (
    <div
      id={cardId}
      className="print-card bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 overflow-hidden group"
    >
      <div className={`bg-gradient-to-r ${gradient} p-5 flex items-center gap-4`}>
        <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white text-xl font-bold shadow-inner">
          {initials}
        </div>
        <div>
          <h2 className="text-white font-bold text-lg leading-tight">{name}</h2>
          <span className="text-white/70 text-xs font-medium bg-white/10 px-2 py-0.5 rounded-full">
            Employee #{id}
          </span>
        </div>
      </div>
      <div className="p-5 space-y-3">
        <InfoRow icon={<Mail size={15} className="text-blue-500" />} label="Email" value={email} />
        <InfoRow icon={<Phone size={15} className="text-green-500" />} label="Phone" value={phone} />
        <InfoRow icon={<Globe size={15} className="text-purple-500" />} label="Website" value={website} />
        <InfoRow icon={<Building2 size={15} className="text-orange-500" />} label="Company" value={company.name} />
      </div>
      <div className="no-print px-5 pb-5 flex gap-2">
        <button
          onClick={handlePrint}
          className="flex-1 flex items-center justify-center gap-1 text-sm border border-gray-200 text-gray-600 py-2 rounded-lg hover:bg-gray-50 transition"
        >
          <Printer size={14} /> Print
        </button>
        <button
          onClick={() => downloadAsImage(cardId, `employee-${id}`)}
          className="flex-1 flex items-center justify-center gap-1 text-sm border border-blue-200 text-blue-600 py-2 rounded-lg hover:bg-blue-50 transition"
        >
          <Image size={14} /> PNG
        </button>
        <button
          onClick={() => downloadAsPDF(cardId, `employee-${id}`)}
          className="flex-1 flex items-center justify-center gap-1 text-sm border border-indigo-200 text-indigo-600 py-2 rounded-lg hover:bg-indigo-50 transition"
        >
          <Download size={14} /> PDF
        </button>
      </div>
    </div>
  );
};

const InfoRow = ({ icon, label, value }) => (
  <div className="flex items-start gap-2">
    <span className="mt-0.5">{icon}</span>
    <div className="min-w-0">
      <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">{label}</p>
      <p className="text-sm text-gray-700 truncate">{value}</p>
    </div>
  </div>
);

export default EmployeeCard;