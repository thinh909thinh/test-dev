import Vector1 from "../../assets/img/Vector1.png";
import Vector2 from "../../assets/img/Vector2.png";
import Vector3 from "../../assets/img/Vector3.png";
import Vector4 from "../../assets/img/Vector4.png";
import Img25 from "../../assets/img/25.png";
import Pen1 from "../../assets/img/pen1.png";
import Pen2 from "../../assets/img/pen2.png";
import Pen3 from "../../assets/img/pen3.png";
function Home() {
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
          className="text-list font-semibold leading-40 not-italic list-disc ml-4 mb-4 "
          key={post.id}
        >
          {post.title}
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <div className="container   mx-auto my-0 bg-[#F4F4F4]">
        {/* header  */}
        <div className="h-[200px]  bg-[#ffffff] flex">
          <div className="w-3/12 bg-[#F4F4F4] h-full flex items-center justify-center rounded-t-[25px]">
            <div className="w-[235px] h-[140px]  bg-[#ffffff] flex flex-col  items-center justify-center rounded-[10px] shadow-3xl">
              <div className="w-[58px] h-[58px]  bg-[#F4F4F4] flex items-center justify-center rounded-full">
                <img src={Vector1} alt="" />
              </div>
              <div className="text-Content font-bold pt-[4px]">Pencils</div>
            </div>
          </div>
          <div className="w-3/12  h-full flex items-center justify-center rounded-t-[25px]">
            <div className="w-[235px] h-[140px]  bg-[#ffffff] flex flex-col  items-center justify-center rounded-[10px] shadow-3xl">
              <div className="w-[58px] h-[58px]  bg-[#F4F4F4] flex items-center justify-center rounded-full">
                <img src={Vector2} alt="" />
              </div>
              <div className="text-Content font-bold pt-[4px]">Markers</div>
            </div>
          </div>
          <div className="w-3/12  h-full flex items-center justify-center rounded-t-[25px]">
            <div className="w-[235px] h-[140px]  bg-[#ffffff] flex flex-col  items-center justify-center rounded-[10px] shadow-3xl">
              <div className="w-[58px] h-[58px]  bg-[#F4F4F4] flex items-center justify-center rounded-full">
                <img src={Vector3} alt="" />
              </div>
              <div className="text-Content font-bold pt-[4px]">
                Drawing Colors
              </div>
            </div>
          </div>
          <div className="w-3/12  h-full flex items-center justify-center rounded-t-[25px]">
            <div className="w-[235px] h-[140px]  bg-[#ffffff] flex flex-col  items-center justify-center rounded-[10px] shadow-3xl">
              <div className="w-[58px] h-[58px]  bg-[#F4F4F4] flex items-center justify-center rounded-full">
                <img src={Vector4} alt="" />
              </div>
              <div className="text-Content font-bold pt-[4px]">Notebooks</div>
            </div>
          </div>
        </div>
        {/* content  */}
        <div className="h-[500px]  flex w-full">
          <div className="pt-[40px] mx-[50px] bg-[#F4F4F4] w-full h-full mb-[1px] flex justify-between">
            <div className="w-[350px]  h-full">
              <div className="text-Content font-normal leading-32 not-italic mb-[20px]">
                <p>
                  Graphite Artist Quality Fine Art Drawing and Sketching Pencils
                  Replaceable Nib Pencils.
                </p>
              </div>
              {/* list ul li  */}
              <div>{sidebar}</div>
              {/* shop all  */}
              <div className="cursor-pointer w-[120px] h-[50px] bg-[#F4B840] rounded-[5px] flex items-center justify-center font-bold leading-40 text-while">
                SHOP ALL
              </div>
            </div>
            {/* Text pen  */}
            <div className="w-[712px] bg-[#F4F4F4]  rounded-[18px] ">
              <div className="h-20 flex border-3 border-white rounded-[18px] overflow-hidden mb-5">
                <div className="w-[200px] bg-[#ffffff] flex items-center ">
                  <img
                    src={Img25}
                    className="ml-[40px] mr-[28px] w-[132px] "
                    alt=""
                  />
                </div>
                <div className="ml-6  leading-72 text-black font-light text-25 ">
                  Offer Applicable on All Our Pencils
                </div>
              </div>
              {/* list pen  */}
              <div className=" bg-[#F4F4F4] w-full  flex justify-between">
                <div className="w-[224px] h-[320px] bg-[#ffffff] rounded-[18px] ">
                  <div className="w-[180px] h-[210px] mt-[10px] mx-auto">
                    <img src={Pen1} alt="" />
                  </div>
                  <div className=" font-medium text-14 leading-21 text-center mt-3.5 mb-[7px]">
                    <p>Aero Mechanical Pencil</p>
                  </div>
                  <div className="flex justify-center">
                    <div className="flex justify-between w-[118px]">
                      <span className="w-74px">$99.00</span>
                      <span className="w-74px text-gray72 line-through">
                        $125.00
                      </span>
                    </div>
                  </div>
                </div>

                {/* pen 2  */}
                <div className="w-[224px] h-[320px] bg-[#ffffff] rounded-[18px] ">
                  <div className="w-[180px] h-[210px] mt-[10px] mx-auto">
                    <img src={Pen2} alt="" />
                  </div>
                  <div className=" font-medium text-14 leading-21 text-center mt-3.5 mb-[7px]">
                    <p>Aero Mechanical Pencil</p>
                  </div>
                  <div className="flex justify-center">
                    <div className="flex justify-between w-[118px]">
                      <span className="w-74px">$99.00</span>
                      <span className="w-74px text-gray72 line-through">
                        $125.00
                      </span>
                    </div>
                  </div>
                </div>
                {/* pen 3  */}
                <div className="w-[224px] h-[320px] bg-[#ffffff] rounded-[18px] ">
                  <div className="w-[180px] h-[210px] mt-[10px] mx-auto">
                    <img src={Pen3} alt="" />
                  </div>
                  <div className=" font-medium text-14 leading-21 text-center mt-3.5 mb-[7px]">
                    <p>Aero Mechanical Pencil</p>
                  </div>
                  <div className="flex justify-center">
                    <div className="flex justify-between w-[118px]">
                      <span className="w-74px">$99.00</span>
                      <span className="w-74px text-gray72 line-through">
                        $125.00
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* double dost  */}
      <div className="w-[45px] flex justify-between mx-auto mt-[50px]">
        <div className="w-[15px] h-[15px] rounded-[50px]  bg-[#000000] "></div>
        <div className="w-[15px] h-[15px] rounded-[50px]  bg-[#333333] "></div>
      </div>
    </>
  );
}

export default Home;
