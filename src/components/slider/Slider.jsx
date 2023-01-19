import { Swiper, SwiperSlide } from 'swiper/react';
import BigCard from '../card/BigCard';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

export default function Slider({ info }) {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={4}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            breakpoints={{
                0: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                560: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
            }}
        >
            {
                info?.length > 0 ?
                    info.map((book, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <BigCard info={book} id={index} />
                            </SwiperSlide>
                        )
                    })
                    :
                    <p className='text-center '>
                        No images found
                    </p>
            }
        </Swiper>
    )
}
