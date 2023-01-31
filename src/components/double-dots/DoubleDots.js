function DoubleDots({ left }) {
  return (
    <div>
      {(() => {
        if (left === true) {
          return (
            <div className="w-[45px] flex justify-between mx-auto lg:mt-[50px] mt-[30px] lg:mb-[100px] mb-[34px]">
              <div className="w-[15px] h-[15px] rounded-[50px]  bg-[#000000] cursor-pointer"></div>
              <div className="w-[15px] h-[15px] rounded-[50px]  bg-[#333333] cursor-pointer "></div>
            </div>
          );
        } else {
          return (
            <div className="w-[45px] flex justify-between mx-auto lg:mt-[50px] mt-[30px]">
              <div className="w-[15px] h-[15px] rounded-[50px]   bg-[#333333] cursor-pointer"></div>
              <div className="w-[15px] h-[15px] rounded-[50px] bg-[#000000] cursor-pointer "></div>
            </div>
          );
        }
      })()}
    </div>
  );
}

export default DoubleDots;
