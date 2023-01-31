import Gallery from "../gallery/gallery.js";
import DoubleDots from "../double-dots/DoubleDots";
import { Header } from "../header/Header";
function Home() {
  return (
    <>
      <Header />
      <DoubleDots left={true} />

      <Gallery />
      <DoubleDots />
    </>
  );
}

export default Home;
