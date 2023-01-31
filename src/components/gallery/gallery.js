import Rectangle27 from "../../assets/img/Rectangle27.png";
import Rectangle28 from "../../assets/img/Rectangle28.png";
import Rectangle26 from "../../assets/img/Rectangle26.png";
import Rectangle25 from "../../assets/img/Rectangle25.png";
import Rectangle24 from "../../assets/img/Rectangle24.png";
import Rectangle23 from "../../assets/img/Rectangle23.png";
import Rectangle21 from "../../assets/img/Rectangle21.png";
import Rectangle29 from "../../assets/img/Rectangle29.png";
import Rectangle30 from "../../assets/img/Rectangle30.png";
import Rectangle31 from "../../assets/img/Rectangle31.png";
function Gallery() {
  return (
    <>
      <div className=" container   mx-auto mb-[50px]">
        <h1 className="font-bold leading-68 text-45 text-center mb-[40px]">
          Packer pen Gallery
        </h1>
        <div className="hidden lg:block">
          <div className="container grid gap-x-18 gap-y-13 ">
            <div className="row-start-3 row-end-6 col-start-4 col-end-5 relative ">
              <img
                src={Rectangle26}
                alt=""
                className="absolute bottom-0 w-full h-full"
              />
            </div>
            <div className=" row-start-10 row-end-14 col-start-4 col-end-5 ">
              <img src={Rectangle28} alt="" className="w-full h-full" />
            </div>
            <div className=" row-start-7 row-end-14 col-start-1 col-end-2 ">
              <img src={Rectangle25} alt="" className="w-full h-full" />
            </div>
            <div className=" relative row-start-1 row-end-8 col-start-2 col-end-4 ">
              <img
                src={Rectangle21}
                alt=""
                className="absolute bottom-0 w-full h-full"
              />
            </div>
            <div className=" row-start-4 row-end-7 col-start-1 col-end-2 ">
              <img src={Rectangle23} alt="" className="w-full h-full" />
            </div>
            <div className=" row-start-8 row-end-16 col-start-2 col-end-4">
              <img src={Rectangle24} alt="" />
            </div>
            <div className=" row-start-6 row-end-10 col-start-4 col-end-5 ">
              <img src={Rectangle27} alt="" className="w-full h-full" />
            </div>
          </div>
        </div>

        {/* mb  */}
        <div className="lg:hidden block">
          <div className="w-[388px] mx-auto ">
            {/* box 1  */}
            <div className="flex gap-2">
              <div className="w-[50%]">
                {/* 1  */}
                <div className="  ">
                  <img src={Rectangle23} alt="" className="w-full h-full" />
                </div>
                {/* 3  */}
                <div className="mt-2 ">
                  <img src={Rectangle25} alt="" />
                </div>
              </div>
              {/* 2  */}
              <div className=" w-[50%] ">
                <img src={Rectangle29} alt="" className="h-[100%]" />
              </div>
            </div>
            {/* box 2  */}
            <div className=" my-2">
              <img src={Rectangle31} alt="" />
            </div>
            {/* box 3  */}
            <div className="mb-2 ">
              <img src={Rectangle30} alt="" className="w-full" />
            </div>
            {/* box 4  */}
            <div className="flex gap-2">
              <div className="  ">
                <img src={Rectangle27} alt="" className="w-full h-full" />
              </div>

              {/* 7  */}
              <div className=" row-start-12 row-end-13 col-start-3 col-end-6 ">
                <img src={Rectangle28} alt="" className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
