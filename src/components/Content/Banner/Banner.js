import { Carousel } from 'react-bootstrap';
import { useState } from 'react';

import './Banner.scss';

import bannerImg from '../../../assets/img/bannerImg.jpg';

export default function Banner() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="banner row display-flex justify-content-center">
            <div className="banner-wrap col-12 col-xl-10 full-height">
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img
                            className="banner-wrap__img full-width"
                            src={bannerImg}
                            alt="slide1"
                        />
                        <div className="banner-wrap__info col-12 col-xl-6 color-light position-abs text-center">
                            <div className="banner__category"><h3 className="color-light fw-700">Travel</h3></div>
                            <div className="banner__title"><h3 className="color-light fw-700 text-uppercase">Hymn for the weekend</h3></div>
                            <div className="banner__info"><h3 className="color-light fw-400">July 20, 2016 / 969 views / 30 comments</h3></div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="banner-wrap__img full-width"
                            src={bannerImg}
                            alt="slide1"
                        />
                        <div className="banner-wrap__info col-12 col-xl-6 color-light position-abs text-center">
                            <div className="banner__category"><h3 className="color-light fw-700">Travel</h3></div>
                            <div className="banner__title"><h3 className="color-light fw-700 text-uppercase">Hymn for the weekend</h3></div>
                            <div className="banner__info"><h3 className="color-light fw-400">July 20, 2016 / 969 views / 30 comments</h3></div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="banner-wrap__img full-width"
                            src={bannerImg}
                            alt="slide1"
                        />
                        <div className="banner-wrap__info col-12 col-xl-6 color-light position-abs text-center">
                            <div className="banner__category"><h3 className="color-light fw-700">Travel</h3></div>
                            <div className="banner__title"><h3 className="color-light fw-700 text-uppercase">Hymn for the weekend</h3></div>
                            <div className="banner__info"><h3 className="color-light fw-400">July 20, 2016 / 969 views / 30 comments</h3></div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}