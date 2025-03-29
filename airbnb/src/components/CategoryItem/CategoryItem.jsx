import './CategoryItem.scss'
import categories from '../../data/categories.json'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

export default function CategoryItem() {
    return (
        <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView="auto"
            navigation
            className="categories-slider"
        >
            {categories.map(item => {
                const imgUrl = new URL(`../../img/categories/${item.img}`, import.meta.url).href

                return (
                    <SwiperSlide key={item.title}>
                        <a className="category-item"
                            href={`/category/${item.title.toLowerCase()}`} 
                        >
                            <div className="category-item__img">
                                <img src={imgUrl} alt={item.title} />
                            </div>
                            <div className="category-item__title">{item.title}</div>
                        </a>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}