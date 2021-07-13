import '../css/Home.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css"
import "swiper/components/pagination/pagination.min.css"

// import Swiper core and required modules
import SwiperCore, {
  EffectCoverflow,Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([EffectCoverflow,Pagination]);


function Home() {
  return (
    <>
      <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} coverflowEffect={{
      "rotate": 50,
      "stretch": 0,
      "depth": 100,
      "modifier": 1,
      "slideShadows": true
    }} pagination={true} className="mySwiper">
        <SwiperSlide>
          <div className="img-container">
            <a href="/Lalaland">
              <img id="lalaland" src="/images/lalaland.jpeg" alt="lalaland"></img>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img-container">
            <a href="/MerryGoRound">
              <img id="merrygoround" src="/images/merrygoround.jpeg" alt="merrygoround"></img>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img-container">
            <a href="/HarryPotter">
              <img id="harrypotter" src="/images/harrypotter.jpeg" alt="harrypotter"></img>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img-container">

          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Home;
