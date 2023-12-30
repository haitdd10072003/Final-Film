import { FC, useEffect, useState } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Item } from "../../shared/types";
import FilmItem from "../Common/FilmItem";
import Skeleton from "../Common/Skeleton";

interface SectionSliderProps {
  films: Item[] | undefined;
}

const SectionSlider: FC<SectionSliderProps> = ({ films }) => {
  const [accessCount, setAccessCount] = useState<number>(0);

  useEffect(() => {
    // Retrieve access count from local storage on component mount
    const storedAccessCount = localStorage.getItem('accessCount');
    setAccessCount(storedAccessCount ? parseInt(storedAccessCount, 10) : 0);
  }, []);

  const handleFilmItemClick = () => {
    // Increment access count when a film item is clicked
    setAccessCount(accessCount + 1);

    // Save updated access count to local storage
    localStorage.setItem('accessCount', (accessCount + 1).toString());
  };

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation]}
        navigation
        slidesPerView="auto"
        slidesPerGroupAuto
        spaceBetween={30}
        loop
        className="md:!w-[calc(100vw_-_260px_-_310px_-_2px_-_4vw_-_10px)] !w-[calc(100vw-8vw-2px)] tw-section-slider !py-2"
      >
        {films?.map((film) => (
          <SwiperSlide key={film.id} className="!w-[175px]">
            <FilmItem item={film} onClick={handleFilmItemClick} />
          </SwiperSlide>
        )) || (
          <>
            {new Array(Math.ceil(window.innerWidth / 200))
              .fill("")
              .map((_, index) => (
                <SwiperSlide key={index} className="!w-[175px]">
                  <Skeleton className="!w-[175px] !h-[280px] shadow-sm" />
                </SwiperSlide>
              ))}
          </>
        )}

        {films !== undefined && (
          <>
            <div className="absolute top-[2%] left-0 w-full h-[83%] z-10 pointer-events-none tw-black-backdrop-2" />
            <div className="absolute top-0 left-0 w-[4%] h-full z-10"></div>
            <div className="absolute top-0 right-0 w-[4%] h-full z-10"></div>
          </>
        )}
      </Swiper>
    </div>
  );
};

export default SectionSlider;
