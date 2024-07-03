import useStore from "@/store";
const ModalWindow = ({ children }) => {
  const setModal = useStore((state) => state.setModal);

  const handleClickOutside = (e) => {
    if (e.target === e.currentTarget) setModal(null);
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={handleClickOutside}
    >
      <div className="bg-[#0F0F0F] rounded-lg px-6 py-8 w-11/12 max-w-2xl md:px-20 md:py-12 md:w-1/2 lg:w-1/3 relative flex flex-col justify-center items-center gap-6">
        {children}
      </div>
    </div>
  );
};

export default ModalWindow;
