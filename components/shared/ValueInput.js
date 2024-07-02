const ValueInput = ({ value, setValue, currency, minimum = 5 }) => {
  return (
    <div className="flex bg-[#1D1D1D] rounded-xl font-medium text-[#3E3E3E] px-4 py-3 justify-evenly">
      <div className="w-1/2 text-center">{currency}</div>
      <div className="mx-4 min-w-0.5 min-h-full bg-[#3E3E3E]"></div>
      <input
        className="bg-transparent w-1/2 placeholder-[#3E3E3E] text-center text-white px-2 outline-0"
        placeholder={`min: ${minimum}`}
        type="number"
        value={value}
        onInput={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default ValueInput;
