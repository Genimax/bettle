const BorderedBlock = ({ children }) => {
  return (
    <div className="container w-full lg:w-4/6 px-4 sm:px-10 md:px-20 py-8 sm:py-10 md:py-12 rounded-xl border-gradient">
      {children}
    </div>
  );
};

export default BorderedBlock;
