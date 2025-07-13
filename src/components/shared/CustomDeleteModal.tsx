import { FaExclamationTriangle } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

const CustomDeleteModal = ({
  open,
  setOpen,
  onConfirm,
  title = "Are you sure you want to delete this?",  
}: {
  open: boolean;
  setOpen: (val: boolean) => void;
  onConfirm: () => void;
  title?: string;
  productName?: string;
}) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-2xl shadow-xl w-[90%] max-w-sm relative p-6">
        {/* Close button */}
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-black cursor-pointer"
          onClick={() => setOpen(false)}
        >
          <IoClose size={22} />
        </button>

        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="bg-red-100 p-3 rounded-full">
            <FaExclamationTriangle className="text-red-500 text-xl" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-center text-lg font-semibold text-gray-900 mb-10">
          {title}
        </h2>
        
        {/* Buttons */}
        <div className="flex justify-between gap-3">
          <button
            onClick={() => setOpen(false)}
            className="w-full border border-gray-300 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-100 cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onConfirm();
              setOpen(false);
            }}
            className="w-full bg-red-600 text-white py-2 rounded-lg font-medium hover:bg-red-700 cursor-pointer"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomDeleteModal;
