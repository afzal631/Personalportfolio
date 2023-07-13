// import { Carousel } from "@material-tailwind/react";
// import { Carousel, IconButton } from "@material-tailwind/react";
import { Carousel } from "react-responsive-carousel";
import img1 from "../assets/cert/50368750.jpg";
import img2 from "../assets/cert/95692372.jpg";
import img3 from "../assets/cert/123445.jpg";
import img4 from "../assets/cert/234567890.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Example() {
  const images = [
    {
      id: 1,
      src: img1,
    },
    {
      id: 2,
      src: img2,
    },
    {
      id: 3,
      src: img3,
    },
    {
      id: 4,
      src: img4,
    },
  ];
  return (
    <div
      name="skills"
      className="bg-gradient-to-b to-black from-gray-800 w-full h-full py-32 text-white md:h-full"
    >
      <div className="max-w-screen-lg p-8 mx-auto flex flex-col justify-content w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          Achievements
          </p>
          <p className="py-6 ">These are some of my certifications and awards.</p>
        </div>
        <div className="w-full h-full border-2 border-white rounded-md ">
          <Carousel
            infiniteLoop={true}
            autoPlay={true}
            showThumbs={true}
            showIndicators={false}
            showStatus={false}
            dynamicHeight={300}
            showArrows={true}
            className="w-[100%] max-w-[1000px]"
            style={{ margin: "0 auto" }}
          >
            {images.map(({ id, src }) => (
              <div key={id}>
                <img src={src} alt="sliderimages" className="w-full h-auto" />
                {/* <p className="legend">Legend {id}</p> */}
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
