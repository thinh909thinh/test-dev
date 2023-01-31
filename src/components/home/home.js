import Vector1 from "../../assets/img/Vector1.png";
import Vector2 from "../../assets/img/Vector2.png";
import Vector3 from "../../assets/img/Vector3.png";
import Vector4 from "../../assets/img/Vector4.png";
import Img25 from "../../assets/img/25.png";
import Pen1 from "../../assets/img/pen1.png";
import Pen2 from "../../assets/img/pen2.png";
import Pen3 from "../../assets/img/pen3.png";
import Gallery from "../gallery/gallery.js";
import DoubleDots from "../double-dots/DoubleDots";
import { Header } from "../header/Header";
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
      <Header />
      {/* double dost  */}
      <DoubleDots left={true} />

      <Gallery />
      <DoubleDots />
    </>
  );
}

export default Home;
