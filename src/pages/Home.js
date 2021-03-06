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
            <a href="/my-piano/Lalaland">
              <img id="lalaland" src="/my-piano/images/lalaland.jpeg" alt="lalaland"></img>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img-container">
            <a href="/my-piano/HowlsMovingCastle">
              <img id="howlsmovingcaslte" src="/my-piano/images/howlsmovingcastle.jpeg" alt="howlsmovingcastle"></img>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img-container">
            <a href="/my-piano/HarryPotter">
              <img id="harrypotter" src="/my-piano/images/harrypotter.jpeg" alt="harrypotter"></img>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img-container">
            <a href="/my-piano/CinemaParadiso">
              <img id="cinemaparadiso" src="/my-piano/images/cinemaparadiso.jpeg" alt="cinemaparadiso"></img>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img-container">
            <a href="/my-piano/Tiffany">
              <img id="tiffany" src="/my-piano/images/tiffany.jpeg" alt="tiffany"></img>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img-container">
            <a href="/my-piano/Amelie">
              <img id="amelie" src="/my-piano/images/amelie.jpeg" alt="amelie"></img>
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Home;
