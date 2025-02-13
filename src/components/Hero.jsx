import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";
import hero5 from "../assets/hero5.webp";
import hero6 from "../assets/hero6.webp";
import hero7 from "../assets/hero7.webp";
import hero8 from "../assets/hero8.webp";
import { Link } from "react-router-dom";

const carouselImg = [hero1, hero2, hero3, hero4, hero5, hero6, hero7, hero8];

const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-24 items-center ">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl text-center md:text-start">
          Changing the way you <span className="text-primary">Decorate</span>
        </h1>
        <p className="mt-8 text-accent-content text-center max-w-xl text-lg leading-8 md:text-start sm:text-center">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, eligendi
          odio? Fuga earum, nam iusto quo illum laboriosam dolores hic in quas
          aut non repellat ut itaque pariatur. Neque, unde.
        </p>
        <div className="mt-10 flex justify-center sm:justify-center md:justify-start">
          {" "}
          <Link to="/products" className="btn btn-primary">
            {" "}
            Our Products
          </Link>
        </div>
      </div>
      <div
        className="data-carousel-slide carousel carousel-center p-4 space-x-4 bg-secondary-content rounded-box 
            sm:carousel sm:carousel-center 
            lg:carousel lg:carousel-center"
      >
        {carouselImg.map((img) => {
          return (
            <div key={img} className="carousel-item">
              <img
                src={img}
                className="rounded-box h-full w-60 object-cover sm:w-80"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Hero;
