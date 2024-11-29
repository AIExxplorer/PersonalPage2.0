import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cube';

export default function Slider() {
  return (
    <Swiper
      effect="cube"
      grabCursor={true}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94
      }}
    >
      <SwiperSlide>
        <div>Slide 1</div>
      </SwiperSlide>
      <SwiperSlide>
        <div>Slide 2</div>
      </SwiperSlide>
    </Swiper>
  );
}
