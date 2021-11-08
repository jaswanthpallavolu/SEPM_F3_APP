import React from 'react'
import Slider from 'react-slick'
import './carousel.css'
import Vedio from '../../components/Fitness_Section/Vedio'
export default function Carousel({ list }) {

    const settings = {
        dots: false,
        speed: 500,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        centerMode: false,
        responsive: [
            {
                breakpoint: 1920,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 948,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 380,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }

        ]
    }
    return (

        <div className='m_carousel'>
            <Slider {...settings} >
                {list?.map(i => (
                    <div className="wrapper" key={Math.random() * 100}><Vedio item={i} style={{ margin: 'auto' }} /></div>
                ))}
            </Slider>
        </div>
    )
}
