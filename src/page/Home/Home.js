import SlideShow from "../../component/SlideShow/SlideShow";
import CustomCarousel from "../../component/CustomCarousel";
import { videos, images } from "../../asset";

function Home() {
  const video = videos.AthenaTrailer;
  const text = `Cái chết bi thảm của một cậu bé châm ngòi cuộc chiến toàn diện
  trong cộng đồng Athena. Những người anh của nạn nhân là trung tâm
  của cuộc xung đột.`;
  const image = images.logoAthena;

  return (
    <div>
      <SlideShow text={text} video={video} image={image} />
      <CustomCarousel />
      <CustomCarousel />
    </div>
  );
}

export default Home;
