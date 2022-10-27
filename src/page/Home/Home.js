import { useEffect, useState } from "react";

import SlideShow from "../../component/SlideShow/SlideShow";
import CustomCarousel from "../../component/CustomCarousel";
import { videos, images } from "../../asset";

function Home() {
  const title = "Athena";
  const video = videos.AthenaTrailer;
  const text = `Cái chết bi thảm của một cậu bé châm ngòi cuộc chiến toàn diện
  trong cộng đồng Athena. Những người anh của nạn nhân là trung tâm
  của cuộc xung đột.`;
  const image = images.logoAthena;

  const [data, setData] = useState([]);

  function chunkArray(myArray, chunk_size) {
    var index = 0;
    const arrayLength = myArray.length;
    const tempArray = [];

    for (index = 0; index < arrayLength; index += chunk_size) {
      const myChunk = myArray.slice(index, index + chunk_size);
      tempArray.push(myChunk);
    }

    return tempArray;
  }

  useEffect(() => {
    fetch("http://localhost:3001/movie")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);

        var result = chunkArray(data, 6);

        setData(result);
      });
  }, []);

  const type = "New Bonus";

  return (
    <div>
      <SlideShow text={text} video={video} image={image} title={title} />
      <CustomCarousel type={type} carouselImages={data.Image} data={data} />
    </div>
  );
}

export default Home;
