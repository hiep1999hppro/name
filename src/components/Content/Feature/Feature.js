import feature1 from "../../../assets/img/feature1.jpg";
import feature2 from "../../../assets/img/feature2.jpg";
import feature3 from "../../../assets/img/feature3.jpg";
import feature4 from "../../../assets/img/feature4.jpg";

import './Feature.scss';

export default function Feature() {
    return (
        <div className="feature">
            <div className="feature-list row display-flex-center-wrap justify-content-start">
                <div className="feature-item col-6 col-md-3">
                    <div className="item-main full-height position-rel">
                        <img src={feature1} alt="feature1" className="item-main__img full-box" />
                        <h2 className="item-main__label display-flex-center-wrap justify-content-center fw-700 text-uppercase bg-color-light position-abs breadcrumb-move">Life style</h2>
                        <div className="item-main__info position-abs display-flex-center-wrap justify-content-center breadcrumb-move">
                            <div className="item-main__info__view">
                                <i className="fa-solid fa-eye color-light"></i>
                                <span className="display-inline-block color-light">343</span>
                            </div>
                            <div className="item-main__info__comment">
                                <i className="fa-solid fa-comments color-light"></i>
                                <span className="display-inline-block color-light">223</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feature-item col-6 col-md-3">
                    <div className="item-main full-height position-rel">
                        <img src={feature2} alt="feature2" className="item-main__img full-box" />
                        <h2 className="item-main__label display-flex-center-wrap justify-content-center fw-700 text-uppercase bg-color-light position-abs breadcrumb-move">Fashion</h2>
                        <div className="item-main__info position-abs display-flex-center-wrap justify-content-center breadcrumb-move">
                            <div className="item-main__info__view">
                                <i className="fa-solid fa-eye color-light"></i>
                                <span className="display-inline-block color-light">343</span>
                            </div>
                            <div className="item-main__info__comment">
                                <i className="fa-solid fa-comments color-light"></i>
                                <span className="display-inline-block color-light">223</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feature-item col-6 col-md-3">
                    <div className="item-main full-height position-rel">
                        <img src={feature3} alt="feature3" className="item-main__img full-box" />
                        <h2 className="item-main__label display-flex-center-wrap justify-content-center fw-700 text-uppercase bg-color-light position-abs breadcrumb-move">Travel</h2>
                        <div className="item-main__info position-abs display-flex-center-wrap justify-content-center breadcrumb-move">
                            <div className="item-main__info__view">
                                <i className="fa-solid fa-eye color-light"></i>
                                <span className="display-inline-block color-light">343</span>
                            </div>
                            <div className="item-main__info__comment">
                                <i className="fa-solid fa-comments color-light"></i>
                                <span className="display-inline-block color-light">223</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feature-item col-6 col-md-3">
                    <div className="item-main full-height position-rel">
                        <img src={feature4} alt="feature4" className="item-main__img full-box" />
                        <h2 className="item-main__label display-flex-center-wrap justify-content-center fw-700 text-uppercase bg-color-light position-abs breadcrumb-move">Food</h2>
                        <div className="item-main__info position-abs display-flex-center-wrap justify-content-center breadcrumb-move">
                            <div className="item-main__info__view">
                                <i className="fa-solid fa-eye color-light"></i>
                                <span className="display-inline-block color-light">343</span>
                            </div>
                            <div className="item-main__info__comment">
                                <i className="fa-solid fa-comments color-light"></i>
                                <span className="display-inline-block color-light">223</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}