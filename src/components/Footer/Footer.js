import bannerFooter from '../../assets/img/bannerFooter.jpg';
import aboutUsFooter from '../../assets/img/aboutusFooter.jpg';
import post1 from '../../assets/img/post1.jpg';
import post2 from '../../assets/img/post2.jpg';
import post3 from '../../assets/img/post3.jpg';

import Gallery from './Gallery/Gallery';

import './Footer.scss';

export default function Footer() {
    return (
        <footer className="footer">
            <Gallery />

            <img src={bannerFooter} alt="banner-footer" className="footer__banner full-width" />
            <div className="footer__main container">
                <div className="footer-top row">
                    <div className="footer-aboutus col-4">
                        <div className="footer-aboutus__label button">
                            <h2>About us</h2>
                        </div>
                        <img src={aboutUsFooter} alt="about-us" className="footer-aboutus__img full-width" />
                        <div className="footer-aboutus__desc">
                            <h2 className="fw-400 text-center">Themespond design</h2>
                            <h3 className="fw-400 text-center">Themespond design is a fashion product selling online website. With the mission to bring the utility in purchasing for customer, we is offering over 4 millions products from more than 20 different brands.</h3>
                        </div>
                    </div>
                    <div className="footer-post col-4">
                        <div className="footer-post__label button">
                            <h2>Lastest Post</h2>
                        </div>
                        <ul className="footer-post__list">
                            <li className="item-video display-flex justify-content-start align-items-start">
                                <a href="javascript:;" className="item-video__link">
                                    <img src={post1} alt="post-1" />
                                </a>
                                <div className="item-video__info">
                                    <a href="javascript:;" className="title fw-400 breadcrumb-move" title="My Favorite Outdoor">
                                        My Favorite Outdoor
                                    </a>
                                    <div className="date">
                                        <h3 className="fw-400">Life Style / April 09, 2016</h3>
                                    </div>
                                </div>
                            </li>
                            <li className="item-video display-flex justify-content-start align-items-start">
                                <a href="javascript:;" className="item-video__link">
                                    <img src={post2} alt="post-2" />
                                </a>
                                <div className="item-video__info">
                                    <a href="javascript:;" className="title fw-400 breadcrumb-move" title="Tasty Food">
                                        Tasty Food
                                    </a>
                                    <div className="date">
                                        <h3 className="fw-400">Food / April 10, 2016</h3>
                                    </div>
                                </div>
                            </li>
                            <li className="item-video display-flex justify-content-start align-items-start">
                                <a href="javascript:;" className="item-video__link">
                                    <img src={post3} alt="post-3" />
                                </a>
                                <div className="item-video__info">
                                    <a href="javascript:;" className="title fw-400 breadcrumb-move" title="Travel With Friend">
                                        Travel With Friend
                                    </a>
                                    <div className="date">
                                        <h3 className="fw-400">Travel / April 02, 2016</h3>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-category col-4">
                        <div className="footer-category__label button">
                            <h2>Categories</h2>
                        </div>
                        <ul className="footer-category__list">
                            <li className="item-category">
                                <h3 className="fw-400">Travel (10)</h3>
                            </li>
                            <li className="item-category">
                                <h3 className="fw-400">Food (25)</h3>
                            </li>
                            <li className="item-category">
                                <h3 className="fw-400">Fashion (40)</h3>
                            </li>
                            <li className="item-category">
                                <h3 className="fw-400">Life style (36)</h3>
                            </li>
                            <li className="item-category">
                                <h3 className="fw-400">Video (4)</h3>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom text-center">
                    <div className="social-footer">
                        <a href="javascript:;" className="social-footer__link display-inline-block">
                            <i className="fa-brands fa-facebook-f breadcrumb-move"></i>
                        </a>
                        <a href="javascript:;" className="social-footer__link display-inline-block">
                            <i className="fa-brands fa-twitter breadcrumb-move"></i>
                        </a>
                        <a href="javascript:;" className="social-footer__link display-inline-block">
                            <i className="fa-brands fa-google-plus-g breadcrumb-move"></i>
                        </a>
                        <a href="javascript:;" className="social-footer__link display-inline-block">
                            <i className="fa-brands fa-instagram-square breadcrumb-move"></i>
                        </a>
                    </div>
                    <h3 className="fw-400">Copyright 2016 by <span>Themespond</span></h3>
                </div>
            </div>
        </footer>
    )
}