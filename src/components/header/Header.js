import Vector1 from "../../assets/img/Vector1.png";
import Vector2 from "../../assets/img/Vector2.png";
import Vector3 from "../../assets/img/Vector3.png";
import Vector4 from "../../assets/img/Vector4.png";
import Img25 from "../../assets/img/25.png";
import Pen1 from "../../assets/img/pen1.png";
import Pen2 from "../../assets/img/pen2.png";
import Pen3 from "../../assets/img/pen3.png";
import menuMobile from "../../assets/img/menuMobile.png";
import menuDown from "../../assets/img/menuDown.png";
import Group1 from "../../assets/img/Group1.png";

export const Header = () => {
  const posts = [
    { id: 1, title: "MECHANICAL PENCILS" },
    { id: 2, title: " ARCHITECT'S CHOICE" },
    { id: 3, title: "   EXECUTIVE PENCILS" },
    { id: 4, title: " ENGRAVABLE PENCILS" },
  ];
  const sidebar = (
    <ul className="mb-9">
      {posts.map((post) => (
        <li
          className="text-list font-semibold leading-40 not-italic list-disc ml-4 mb-4 lg:block hidden "
          key={post.id}
        >
          {post.title}
        </li>
      ))}
    </ul>
  );
  return (
    <>
      <div className="container   mx-auto my-0 bg-[#F4F4F4] rounded-b-[25px] ">
        {/* header  */}
        <div className="h-[120px] lg:h-[200px]  bg-[#ffffff] flex">
          <div className=" w-full lg:w-3/12 bg-[#F4F4F4] h-full flex lg:items-center justify-center rounded-t-[25px]">
            <div
              className="w-[368px]  mt-2.5 lg:mt-0 mx-[10px] lg:mx-[0px] lg:w-[235px] h-[80px] lg:h-[140px]  bg-[#ffffff] flex lg:flex-col 
             items-center justify-between lg:justify-center rounded-[10px] shadow-3xl"
            >
              <div className="flex lg:flex-col items-center ml-[30px] lg:ml-0">
                <div className="w-[58px] h-[58px]  bg-[#F4F4F4] flex items-center justify-center rounded-full">
                  <img src={Vector1} alt="" />
                </div>
                <div className="text-Content font-bold pt-[4px] ml-5 lg:ml-0">
                  Pencils
                </div>
              </div>
              <div className="lg:hidden mr-[30px] ">
                <img src={menuMobile} alt="" />
              </div>
            </div>
          </div>
          <div className="w-3/12  h-full hidden items-center justify-center rounded-t-[25px] lg:flex ">
            <div className="w-[235px] h-[140px]  bg-[#ffffff] flex flex-col  items-center justify-center rounded-[10px] shadow-3xl">
              <div className="w-[58px] h-[58px]  bg-[#F4F4F4] flex items-center justify-center rounded-full">
                <img src={Vector2} alt="" />
              </div>
              <div className="text-Content font-bold pt-[4px]">Markers</div>
            </div>
          </div>
          <div className="w-3/12  h-full hidden items-center justify-center rounded-t-[25px]  lg:flex">
            <div className="w-[235px] h-[140px]  bg-[#ffffff] flex flex-col  items-center justify-center rounded-[10px] shadow-3xl">
              <div className="w-[58px] h-[58px]  bg-[#F4F4F4] flex items-center justify-center rounded-full">
                <img src={Vector3} alt="" />
              </div>
              <div className="text-Content font-bold pt-[4px]">
                Drawing Colors
              </div>
            </div>
          </div>
          <div className="w-3/12  h-full hidden items-center justify-center rounded-t-[25px]  lg:flex">
            <div className="w-[235px] h-[140px]  bg-[#ffffff] flex flex-col  items-center justify-center rounded-[10px] shadow-3xl">
              <div className="w-[58px] h-[58px]  bg-[#F4F4F4] flex items-center justify-center rounded-full">
                <img src={Vector4} alt="" />
              </div>
              <div className="text-Content font-bold pt-[4px]">Notebooks</div>
            </div>
          </div>
        </div>
        {/* content  */}
        <div className="h-[700px] lg:h-[500px]  flex w-full ">
          <div className="lg:pt-[40px] pt-[11px] lg:mx-[4.166666666666666%] h-[93%] flex-col lg:flex-row rounded-b-[25px] bg-[#F4F4F4] w-full lg:h-full mb-[1px] flex justify-between">
            <div className="w-[320px] mx-auto lg:w-[31.818181818181817%]  lg:h-full">
              <div className="lg:text-Content font-normal hidden lg:block  lg:leading-32 not-italic mb-[20px]">
                <p>
                  Graphite Artist Quality Fine Art Drawing and Sketching Pencils
                  Replaceable Nib Pencils.
                </p>
              </div>
              {/* pc  */}
              <div className=" text-16 font-normal leading-27 not-italic mb-[9px] lg:hidden">
                <p>
                  Graphite Artist Quality Fine Art Drawing, Sketching and
                  Replaceable Nib Pencils.
                </p>
              </div>
              {/* list ul li  */}
              <div>{sidebar}</div>
              <div className="flex w-[342px] justify-between">
                <ul className=" w-[161px]">
                  <li className="text-13 font-semibold leading-32 not-italic list-disc ml-4 mb-4 lg:hidden ">
                    MECHANICAL PENCILS
                  </li>
                  <li className="text-13 font-semibold leading-32 not-italic list-disc ml-4 mb-4 lg:hidden ">
                    ARCHITECT'S CHOICE
                  </li>
                </ul>
                <ul className=" w-[161px]">
                  <li className="text-13 font-semibold leading-32 not-italic list-disc ml-4 mb-4 lg:hidden ">
                    EXECUTIVE PENCILS
                  </li>
                  <li className="text-13 font-semibold leading-32 not-italic list-disc ml-4 mb-4 lg:hidden ">
                    ENGRAVABLE PENCILS
                  </li>
                </ul>
              </div>
              {/* shop all  */}
              <div className="lg:flex hidden cursor-pointer w-[120px] h-[50px] bg-[#F4B840] rounded-[5px]  items-center justify-center font-bold leading-40 text-while">
                SHOP ALL
              </div>
            </div>
            {/* Text pen  */}
            <div className="w-[348px] lg:w-[64.72727272727272%]  bg-[#F4F4F4]  rounded-[18px]  mx-auto">
              <div className="w-[94.25287356321839%] mx-auto h-[90px] lg:w-full  lg:h-20 flex border-3 border-white rounded-[18px] overflow-hidden mb-5">
                <div className="w-[200px] bg-[#F4F4F4] lg:bg-[#ffffff] flex items-center ">
                  <img
                    src={Img25}
                    className="ml-[40px] mr-[28px] w-[132px]  hidden lg:block "
                    alt=""
                  />
                  <img
                    src={Group1}
                    className="ml-[24px] mr-[16px]  lg:hidden"
                    alt=""
                  />
                </div>
                <div className="ml-6 flex items-center lg:leading-38 leading-24 text-black font-light text-16 lg:text-25  ">
                  Offer Applicable on All Our Pencils
                </div>
              </div>
              {/* list pen  */}
              <div className=" bg-[#F4F4F4] w-full  flex justify-between">
                <div className="lg:w-[31.46067415730337%] w-[47.41379310344828%]  h-[260px] lg:h-[320px] bg-[#ffffff] rounded-[18px] overflow-hidden">
                  <div className="lg:w-[180px] w-[135px] h-[160px] lg:h-[210px]  mt-[10px] mx-auto">
                    <img src={Pen1} alt="" />
                  </div>
                  <div className=" font-medium text-14 leading-21 text-center mt-3.5 mb-[7px] hidden lg:block">
                    <p>Aero Mechanical Pencil</p>
                  </div>
                  <div className=" font-medium text-13 leading-18 text-center  mb-[7px] lg:hidden">
                    <p>Aero </p>
                    <p>Mechanical Pencil</p>
                  </div>
                  <div className="flex justify-center">
                    <div className="flex justify-between lg:w-[118px] w-[105px]">
                      <span className="w-74px lg:text-16 lg:leading-24 text-14 leading-21 ">
                        $99.00
                      </span>
                      <span className="w-74px text-gray72 line-through lg:text-14 lg:leading-21 text-13 leading-20 ">
                        $125.00
                      </span>
                    </div>
                  </div>
                </div>

                {/* pen 2  */}
                <div className="lg:w-[31.46067415730337%] w-[47.41379310344828%] h-[260px] lg:h-[320px] bg-[#ffffff] rounded-[18px] overflow-hidden ">
                  <div className="lg:w-[180px] w-[135px] h-[160px] lg:h-[210px]  mt-[10px] mx-auto">
                    <img src={Pen2} alt="" />
                  </div>
                  <div className=" font-medium text-14 leading-21 text-center mt-3.5 mb-[7px] hidden lg:block">
                    <p>Aero Mechanical Pencil</p>
                  </div>
                  <div className=" font-medium text-13 leading-18 text-center  mb-[7px] lg:hidden">
                    <p>Castell </p>
                    <p>Mechanical Pencil</p>
                  </div>
                  <div className="flex justify-center">
                    <div className="flex justify-between lg:w-[118px] w-[105px]">
                      <span className="w-74px lg:text-16 lg:leading-24 text-14 leading-21 ">
                        $75.00
                      </span>
                      <span className="w-74px text-gray72 line-through lg:text-14 lg:leading-21 text-13 leading-20 ">
                        $99.00
                      </span>
                    </div>
                  </div>
                </div>
                {/* pen 3  */}
                <div className="w-[31.46067415730337%] lg:h-[320px] bg-[#ffffff] rounded-[18px] hidden lg:block">
                  <div className="w-[180px] h-[80.35714285714286%] lg:h-[210px]  mt-[10px] mx-auto">
                    <img src={Pen3} alt="" />
                  </div>
                  <div className=" font-medium text-14 leading-21 text-center mt-3.5 mb-[7px]">
                    <p>Aero Mechanical Pencil</p>
                  </div>
                  <div className="flex justify-center">
                    <div className="flex justify-between w-[118px]">
                      <span className="w-74px">$45.00</span>
                      <span className="w-74px text-gray72 line-through">
                        $70.00
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:hidden flex mx-auto mt-[39px] cursor-pointer w-[120px] h-[50px] bg-[#F4B840] rounded-[5px]  items-center justify-center font-bold leading-40 text-while">
                SHOP ALL
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* menu 2  */}
      <div className="container mx-auto lg:hidden">
        {/* Markers  */}
        <div className=" h-[100px]  mt-2.5 lg:mt-0 justify-center flex items-center rounded-[18px] bg-[#F4F4F4]">
          <div
            className="w-[368px]  lg:mx-[0px] lg:w-[235px] h-[80px] lg:h-[140px]  bg-[#ffffff] flex lg:flex-col 
             items-center justify-between lg:justify-center rounded-[10px] shadow-3xl"
          >
            <div className="flex lg:flex-col items-center  ml-[30px] lg:ml-0">
              <div className="w-[58px] h-[58px]  bg-[#F4F4F4] flex items-center justify-center rounded-full">
                <img src={Vector1} alt="" />
              </div>
              <div className="text-Content font-bold pt-[4px] ml-5 lg:ml-0">
                Markers
              </div>
            </div>
            <div className="lg:hidden mr-[30px] ">
              <img src={menuDown} alt="" />
            </div>
          </div>
        </div>
        {/* Drawing Colors */}
        <div className=" h-[100px]  mt-2.5 lg:mt-0 justify-center flex items-center rounded-[18px] bg-[#F4F4F4]">
          <div
            className="w-[368px]  lg:mx-[0px] lg:w-[235px] h-[80px] lg:h-[140px]  bg-[#ffffff] flex lg:flex-col 
             items-center justify-between lg:justify-center rounded-[10px] shadow-3xl"
          >
            <div className="flex lg:flex-col items-center  ml-[30px] lg:ml-0">
              <div className="w-[58px] h-[58px]  bg-[#F4F4F4] flex items-center justify-center rounded-full">
                <img src={Vector1} alt="" />
              </div>
              <div className="text-Content font-bold pt-[4px] ml-5 lg:ml-0">
                Drawing Colors
              </div>
            </div>
            <div className="lg:hidden mr-[30px] ">
              <img src={menuDown} alt="" />
            </div>
          </div>
        </div>
        {/* Notebooks  */}
        <div className=" h-[100px]  mt-2.5 lg:mt-0 justify-center flex items-center rounded-[18px] bg-[#F4F4F4]">
          <div
            className="w-[368px]  lg:mx-[0px] lg:w-[235px] h-[80px] lg:h-[140px]  bg-[#ffffff] flex lg:flex-col 
             items-center justify-between lg:justify-center rounded-[10px] shadow-3xl"
          >
            <div className="flex lg:flex-col items-center  ml-[30px] lg:ml-0">
              <div className="w-[58px] h-[58px]  bg-[#F4F4F4] flex items-center justify-center rounded-full">
                <img src={Vector1} alt="" />
              </div>
              <div className="text-Content font-bold pt-[4px] ml-5 lg:ml-0">
                Notebooks
              </div>
            </div>
            <div className="lg:hidden mr-[30px] ">
              <img src={menuDown} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
