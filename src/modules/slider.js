import Swiper, {Navigation, Pagination, Thumbs} from 'swiper';

Swiper.use([Navigation]);
Swiper.use([Pagination]);
Swiper.use([Thumbs]);

const slider = () => {
  let swiper = new Swiper('.slippers__Swiper', {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  let swiper2 = new Swiper('.slippers__Swiper2', {
    spaceBetween: 10,

    thumbs: {
      swiper: swiper,
    },
  });
};

export default slider;

