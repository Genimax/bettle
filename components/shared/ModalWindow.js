const ModalWindow = ({ type = "bet" || "win", team = "red" || "blue" }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-10">
      <div className="bg-white rounded-lg p-5 w-1/2">
        <p>Здесь ваш контент...</p>
        <button className="absolute top-3 right-3 text-black text-xl">
          &times;
        </button>
      </div>
    </div>
  );
};

export default ModalWindow;
