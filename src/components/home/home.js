import react, { useState } from "react";

import "./home.css";
import logo from "../../assets/image/logoNCC1.png";
import item1 from "../../assets/image/cssicon1.png";
import item2 from "../../assets/image/icon2.png";
import item3 from "../../assets/image/icon3.png";
import menuIcon from "../../assets/image/menu-icon.jpg";
function Home() {
  const [open, setOpen] = useState(true);
  return (
    <>
      {!open && (
        <div className="menu-icon">
          <img src={menuIcon} alt="" onClick={() => setOpen(true)} />
        </div>
      )}
      <div className="containers">
        {open && (
          <div className="menu-mb">
            <div onClick={() => setOpen(false)} className="close">
              X
            </div>
            <div className="menu-item text-white">Home</div>
            <div className="menu-item">Services</div>
            <div className="menu-item text-white active">News</div>
            <div className="menu-item">Blog</div>
            <div className="menu-item">Contact</div>
          </div>
        )}
        <div className="menu">
          <div className="menu-item text-white">Home</div>
          <div className="menu-item">Services</div>
          <div className="menu-item text-white active">News</div>
          <div className="menu-item">Blog</div>
          <div className="menu-item">Contact</div>
        </div>

        <div className="content">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="container-content">
            <div className="group1">
              <h4 className="text-header-group1">
                Lorem ipsum dolor sit asmet?
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                tristique consequat placerat. Vestibulum auctor pellentesque
                sem, eu posuere erat hendrerit quis. Maecenas vel consequat
                turpis. Nam facilisis, ligula in mattis sodales, augue justo
                tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam
                augue. Aliquam vel mauris a nibh auctor commodo. Praesent et
                nisi eu justo eleifend convallis. Quisque suscipit maximus
                vestibulum. Phasellus congue mollis orci, sit amet luctus augue
                tristique eu. Donec vulputate odio neque, sed semper turpis
                pellentesque a.
              </p>
            </div>
            <div className="group-item-container">
              {/* box 1  */}
              <div className="group-item">
                <div className="item">
                  <img src={item1} alt="" className="img-item" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    non dui sodales, faucibus libero ut, posuere felis. Donec
                    imperdiet suscipit accumsan. Aenean consequat condimentum
                    velit ut tempor. Nam porta massa in metus bibendum congue.
                    Pellentesque ultrices liquam egestas nunc at ullamcorper
                    ultricies. Donec feugiat velit nulla, vel sodales est
                    ullamcorper id. Aenean consequat condimentum velit ut
                    tempor. Nam porta massa in metus bibendum congue.
                    Pellentesque ultrices vestibulum mattis.
                  </p>
                </div>
              </div>
              {/* box 2  */}
              <div className="group-item">
                <div className="item">
                  <img src={item2} alt="" className="img-item" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    non dui sodales, faucibus libero ut, posuere felis. Donec
                    imperdiet suscipit accumsan. Aenean consequat condimentum
                    velit ut tempor. Nam porta massa in metus bibendum congue.
                    Pellentesque ultrices liquam egestas nunc at ullamcorper
                    ultricies. Donec feugiat velit nulla, vel sodales est
                    ullamcorper id. Aenean consequat condimentum velit ut
                    tempor. Nam porta massa in metus bibendum congue.
                    Pellentesque ultrices vestibulum mattis.
                  </p>
                </div>
              </div>
              {/* box 3  */}
              <div className="group-item">
                <div className="item">
                  <img src={item3} alt="" className="img-item" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    non dui sodales, faucibus libero ut, posuere felis. Donec
                    imperdiet suscipit accumsan. Aenean consequat condimentum
                    velit ut tempor. Nam porta massa in metus bibendum congue.
                    Pellentesque ultrices liquam egestas nunc at ullamcorper
                    ultricies. Donec feugiat velit nulla, vel sodales est
                    ullamcorper id. Aenean consequat condimentum velit ut
                    tempor. Nam porta massa in metus bibendum congue.
                    Pellentesque ultrices vestibulum mattis.
                  </p>
                </div>
              </div>
            </div>
            <h1>test dev </h1>
          </div>

          {/* footẻ  */}
          <footer>
            <div>Copyright © 2021</div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Home;
