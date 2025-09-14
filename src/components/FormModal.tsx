import KajabiForm from "./KajabiForm";

interface FormModalProps {
  open: boolean;
  onClose: () => void;
}

export default function FormModal({ open, onClose }: FormModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-2xl shadow-xl max-w-lg w-full relative animate-fadeIn">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
        >
          ✖
        </button>

        {/* Embedded Kajabi Form */}
        <KajabiForm />
      </div>
    </div>
  );
}
