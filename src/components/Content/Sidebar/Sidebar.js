import social1 from '../../../assets/img/social1.jpg';
import social2 from '../../../assets/img/social2.jpg';
import social3 from '../../../assets/img/social3.jpg';
import social4 from '../../../assets/img/social4.jpg';
import social5 from '../../../assets/img/social5.jpg';
import social6 from '../../../assets/img/social6.jpg';
import aboutus from '../../../assets/img/aboutusContent.jpg';

import video1 from '../../../assets/img/video1.jpg';
import video2 from '../../../assets/img/video2.jpg';
import video3 from '../../../assets/img/video3.jpg';

import sidebar1 from '../../../assets/img/sidebar1.jpg';
import sidebar2 from '../../../assets/img/sidebar2.jpg';
import sidebar3 from '../../../assets/img/sidebar3.jpg';
import sidebar4 from '../../../assets/img/sidebar4.jpg';
import sidebar5 from '../../../assets/img/sidebar5.jpg';
import sidebar6 from '../../../assets/img/sidebar6.jpg';
import sidebar7 from '../../../assets/img/sidebar7.jpg';
import sidebar8 from '../../../assets/img/sidebar8.jpg';
import sidebar9 from '../../../assets/img/sidebar9.jpg';

import './Sidebar.scss';

export default function Sidebar() {
    return <div className="sidebar">
        <div className="sidebar__connect">
            <div className="sidebar__connect__label button">
                <h2>Stay connected</h2>
            </div>
            <div className="sidebar__connect__list">
                <div className="group display-flex-center-wrap justify-content-between">
                    <div className="group__item display-flex-center-wrap justify-content-center breadcrumb-move">
                        <img src={social1} alt="social-1" className="group__item__img" />
                        <a href="javascript:;" className="group__item__text display-flex-center-wrap justify-content-center full-height text-uppercase font-weight-light">RSS Feed</a>
                    </div>
                    <div className="group__item display-flex-center-wrap justify-content-center breadcrumb-move">
                        <img src={social2} alt="social-2" className="group__item__img" />
                        <a href="javascript:;" className="group__item__text display-flex-center-wrap justify-content-center full-height text-uppercase font-weight-light">Follow us</a>
                    </div>
                </div>
                <div className="group display-flex-center-wrap justify-content-between">
                    <div className="group__item display-flex-center-wrap justify-content-center breadcrumb-move">
                        <img src={social3} alt="social-3" className="group__item__img" />
                        <a href="javascript:;" className="group__item__text display-flex-center-wrap justify-content-center full-height text-uppercase font-weight-light">Like us</a>
                    </div>
                    <div className="group__item display-flex-center-wrap justify-content-center breadcrumb-move">
                        <img src={social4} alt="social-4" className="group__item__img" />
                        <a href="javascript:;" className="group__item__text display-flex-center-wrap justify-content-center full-height text-uppercase font-weight-light">Follow us</a>
                    </div>
                </div>
                <div className="group display-flex-center-wrap justify-content-between">
                    <div className="group__item display-flex-center-wrap justify-content-center breadcrumb-move">
                        <img src={social5} alt="social-5" className="group__item__img" />
                        <a href="javascript:;" className="group__item__text display-flex-center-wrap justify-content-center full-height text-uppercase font-weight-light">Follow us</a>
                    </div>
                    <div className="group__item display-flex-center-wrap justify-content-center breadcrumb-move">
                        <img src={social6} alt="social-6" className="group__item__img" />
                        <a href="javascript:;" className="group__item__text display-flex-center-wrap justify-content-center full-height text-uppercase font-weight-light">Plus 1 US</a>
                    </div>
                </div>
            </div>
        </div>

        <div className="sidebar__aboutus">
            <div className="sidebar__aboutus__label button">
                <h2>About us</h2>
            </div>
            <img src={aboutus} alt="about-us" className="sidebar__aboutus__img full-width" />
            <div className="sidebar__aboutus__desc">
                <h2 className="fw-400 text-center">Themespond design</h2>
                <h3 className="fw-400 text-center">Themespond design is a fashion product selling online website. With the mission to bring the utility in purchasing for customer, we is offering over 4 millions products from more than 20 different brands.</h3>
            </div>
        </div>

        <div className="sidebar__category">
            <div className="sidebar__category__label button">
                <h2>Categories</h2>
            </div>
            <ul className="sidebar__category__list">
                <li className="item-category fw-400">
                    <h3 className="display-inline-block">Travel <span>(10)</span></h3>
                </li>
                <li className="item-category fw-400">
                    <h3 className="display-inline-block">Food <span>(25)</span></h3>
                </li>
                <li className="item-category fw-400">
                    <h3 className="display-inline-block">Fashion <span>(40)</span></h3>
                </li>
                <li className="item-category fw-400">
                    <h3 className="display-inline-block">Life style <span>(36)</span></h3>
                </li>
                <li className="item-category fw-400">
                    <h3 className="display-inline-block">Video <span>(4)</span></h3>
                </li>
            </ul>
        </div>

        <div className="sidebar__video">
            <div className="sidebar__video__label button">
                <h2>Featured video</h2>
            </div>
            <ul className="sidebar__video__list">
                <li className="item-video display-flex justify-content-start align-items-start">
                    <div className="item-video__wrap position-rel cursor-pointer">
                        <img src={video1} alt="video-1" className="full-box breadcrumb-move" />
                        <i className="fa-solid fa-play color-light position-abs"></i>
                    </div>
                    <div className="item-video__info">
                        <a href="javascript:;" className="title fw-400" title="My Favorite Outdoor">
                            My Favorite Outdoor
                        </a>
                        <div className="date">
                            <h3 className="fw-400">Life Style / April 09, 2016</h3>
                        </div>
                    </div>
                </li>
                <li className="item-video display-flex justify-content-start align-items-start">
                    <div className="item-video__wrap position-rel cursor-pointer">
                        <img src={video2} alt="video-2" className="full-box breadcrumb-move" />
                        <i className="fa-solid fa-play color-light position-abs"></i>
                    </div>
                    <div className="item-video__info">
                        <a href="javascript:;" className="title fw-400" title="Tasty Food">
                            Tasty Food
                        </a>
                        <div className="date">
                            <h3 className="fw-400">Food / April 10, 2016</h3>
                        </div>
                    </div>
                </li>
                <li className="item-video display-flex justify-content-start align-items-start">
                    <div className="item-video__wrap position-rel cursor-pointer">
                        <img src={video3} alt="video-3" className="full-box breadcrumb-move" />
                        <i className="fa-solid fa-play color-light position-abs"></i>
                    </div>
                    <div className="item-video__info">
                        <a href="javascript:;" className="title fw-400" title="Travel With Friend">
                            Travel With Friend
                        </a>
                        <div className="date">
                            <h3 className="fw-400">Travel / April 02, 2016</h3>
                        </div>
                    </div>
                </li>
            </ul>
        </div>

        <div className="sidebar__explore">
            <div className="sidebar__explore__label button">
                <h2>Explore tags</h2>
            </div>
            <ul className="sidebar__explore__list display-flex-wrap justify-content-start align-items-start">
                <li className="item__explore position-rel breadcrumb-move cursor-pointer">
                   <h3 className="fw-400 text-uppercase z-index-2">Food</h3>
                </li> 
                <li className="item__explore position-rel breadcrumb-move cursor-pointer">
                    <h3 className="fw-400 text-uppercase z-index-2">Travel</h3>
                </li> 
                <li className="item__explore position-rel breadcrumb-move cursor-pointer">
                    <h3 className="fw-400 text-uppercase z-index-2">Photography</h3>
                </li> 
                <li className="item__explore position-rel breadcrumb-move cursor-pointer">
                    <h3 className="fw-400 text-uppercase z-index-2">Life style</h3>
                </li> 
                <li className="item__explore position-rel breadcrumb-move cursor-pointer">
                    <h3 className="fw-400 text-uppercase z-index-2">Fashion</h3>
                </li> 
                <li className="item__explore position-rel breadcrumb-move cursor-pointer">
                    <h3 className="fw-400 text-uppercase z-index-2">Video</h3>
                </li> 
                <li className="item__explore position-rel breadcrumb-move cursor-pointer">
                    <h3 className="fw-400 text-uppercase z-index-2">Hot</h3>
                </li> 
                <li className="item__explore position-rel breadcrumb-move cursor-pointer">
                    <h3 className="fw-400 text-uppercase z-index-2">Popular</h3>
                </li> 
            </ul>
        </div>

        <div className="sidebar__follow">
            <div className="sidebar__follow__label button">
                <h2>Follow instagram</h2>
            </div>
            <ul className="sidebar__follow__list row display-flex-center-wrap justify-content-center">
                <li className="item__follow col-4">
                    <img src={sidebar1} alt="sidebar-1" className="full-box" />
                </li>
                <li className="item__follow col-4">
                    <img src={sidebar2} alt="sidebar-2" className="full-box" />
                </li>
                <li className="item__follow col-4">
                    <img src={sidebar3} alt="sidebar-3" className="full-box" />
                </li>
                <li className="item__follow col-4">
                    <img src={sidebar4} alt="sidebar-4" className="full-box" />
                </li>
                <li className="item__follow col-4">
                    <img src={sidebar5} alt="sidebar-5" className="full-box" />
                </li>
                <li className="item__follow col-4">
                    <img src={sidebar6} alt="sidebar-6" className="full-box" />
                </li>
                <li className="item__follow col-4">
                    <img src={sidebar7} alt="sidebar-7" className="full-box" />
                </li>
                <li className="item__follow col-4">
                    <img src={sidebar8} alt="sidebar-8" className="full-box" />
                </li>
                <li className="item__follow col-4">
                    <img src={sidebar9} alt="sidebar-9" className="full-box" />
                </li>
            </ul>
        </div>

        <div className="sidebar__subscribe">
            <div className="sidebar__subscribe__label button">
                <h2>Subscribe to newsletter</h2>
            </div>
            <form className="sidebar__subscribe__form display-flex-center-wrap justify-content-start">
                <input type="text" placeholder='Enter your email...' className="full-box fw-400" />
                <button className="full-height justify-content-center align-items-center cursor-pointer"><i className="fa-solid fa-angles-right border-none"></i></button>
            </form>
        </div>

        <div className="sidebar__ads full-width display-flex-center-wrap justify-content-center">
            <h3 className="fw-700">For Advertising</h3>
        </div>
    </div>
}