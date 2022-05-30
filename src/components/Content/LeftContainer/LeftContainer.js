import { useState } from 'react';

import blog1 from '../../../assets/img/blog1.jpg';
import blog2 from '../../../assets/img/blog2.jpg';
import blog3 from '../../../assets/img/blog3.jpg';
import blog4 from '../../../assets/img/blog4.jpg';
import blog5 from '../../../assets/img/blog5.jpg';
import blog6 from '../../../assets/img/blog6.jpg';
import blog7 from '../../../assets/img/blog7.jpg';
import blog8 from '../../../assets/img/blog8.jpg';

import lastest1 from '../../../assets/img/story1.jpg';
import lastest2 from '../../../assets/img/story2.jpg';
import lastest3 from '../../../assets/img/story3.jpg';
import lastest4 from '../../../assets/img/story4.jpg';
import lastest5 from '../../../assets/img/story5.jpg';
import lastest6 from '../../../assets/img/story6.jpg';
import lastest7 from '../../../assets/img/story7.jpg';
import lastest8 from '../../../assets/img/story8.jpg';

import './LeftContainer.scss';

export default function LeftContainer() {
    const [tabIndex, setTabIndex] = useState(1);

    return (
        <div className="stories">
            <div className="stories__popular">
                <div className="stories__popular__top display-flex-center-wrap justify-content-between">
                    <div 
                        className={tabIndex === 1 ? "stories__button stories__button--active cursor-pointer" : "stories__button cursor-pointer"}
                        onClick={() => setTabIndex(1)}
                    >
                        <h2 className="text-center fw-700 text-uppercase">Featured Stories</h2>
                    </div>
                    <div 
                        className={tabIndex === 2 ? "stories__button stories__button--active cursor-pointer" : "stories__button cursor-pointer"}
                        onClick={() => setTabIndex(2)}
                    >
                        <h2 className="text-center fw-700 text-uppercase">Popular Stories</h2>
                    </div>
                </div>

                <div className="stories__popular__bottom row display-flex justify-content-between align-items-start">
                    {/*Popular stories */}
                    <div className="list-stories col-12 col-md-6">
                        <div className="list-stories__top">
                            <div className="stories-main">
                                <a href="javascript:;" className="stories-main__link display-block full-width">
                                    <img src={blog1} alt="blog-1" className="full-box" />
                                </a>
                                <div className="stories-main__info">
                                    <a href="javascript:;" className="stories-title display-block full-width fw-400 breadcrumb-move word-break-word word-excerpt-line word-excerpt-line--1" title="Roasted Breakfast Potatoes">Roasted Breakfast Potatoes</a>
                                    <div className="stories-wrap">
                                        <span className="stories-wrap__author">John Doe</span>
                                        <span className="stories-wrap__icon display-inline-block">-</span>
                                        <span className="stories-wrap__date">May 22, 2015</span>
                                    </div>
                                    <p className="stories-desc font-weight-light text-justify word-break-word word-excerpt-line word-excerpt-line--6" title="Themespond is a fashion product selling online web site. With the mission to bring the utility in purchasing for customer, we are offering over 4 million products from more than 20 different brands.">
                                        Themespond is a fashion product selling online web site. With the mission to bring the utility in purchasing for customer, we are offering over 4 million products from more than 20 different brands.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <ul className="list-stories__bottom">
                            <li className="item display-flex justify-content-between align-items-start">
                                <a href="javascript:;" className="item__link display-block">
                                    <img src={blog2} alt="blog-2" className="full-box" />
                                </a>
                                <div className="item__info position-rel">
                                    <a href="javascript:;" className="item__info__title display-block full-width fw-400 breadcrumb-move word-break-word word-excerpt-line word-excerpt-line--2" title="There are many variations of passages of Lorem">There are many variations of passages of Lorem</a>
                                    <h2 className="item__info__date">Apr 22, 2015</h2>
                                </div>
                            </li>
                            <li className="item display-flex justify-content-between align-items-start">
                                <a href="javascript:;" className="item__link display-block">
                                    <img src={blog3} alt="blog-3" className="full-box" />
                                </a>
                                <div className="item__info position-rel">
                                    <a href="javascript:;" className="item__info__title display-block full-width fw-400 breadcrumb-move word-break-word word-excerpt-line word-excerpt-line--2" title="Encouraging Your Child to Walk">Encouraging Your Child to Walk</a>
                                    <h2 className="item__info__date">Apr 22, 2015</h2>
                                </div>
                            </li>
                            <li className="item display-flex justify-content-between align-items-start">
                                <a href="javascript:;" className="item__link display-block">
                                    <img src={blog4} alt="blog-4" className="full-box" />
                                </a>
                                <div className="item__info position-rel">
                                    <a href="javascript:;" className="item__info__title display-block full-width fw-400 breadcrumb-move word-break-word word-excerpt-line word-excerpt-line--2" title="How to Make Chocolate Cupcakes">How to Make Chocolate Cupcakes</a>
                                    <h2 className="item__info__date">Apr 22, 2015</h2>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/*Feature stories */}
                    <div className="list-stories col-12 col-md-6">
                        <div className="list-stories__top">
                            <div className="stories-main">
                                <a href="javascript:;" className="stories-main__link display-block full-width">
                                    <img src={blog5} alt="blog-5" className="full-box" />
                                </a>
                                <div className="stories-main__info">
                                    <a href="javascript:;" className="stories-title display-block full-width fw-400 breadcrumb-move word-break-word word-excerpt-line word-excerpt-line--1" title="Carry-on: What Lee Can't Travel Without">Carry-on: What Lee Can't Travel Without</a>
                                    <div className="stories-wrap">
                                        <span className="stories-wrap__author">John Doe</span>
                                        <span className="stories-wrap__icon display-inline-block">-</span>
                                        <span className="stories-wrap__date">May 22, 2015</span>
                                    </div>
                                    <p className="stories-desc font-weight-light text-justify word-break-word word-excerpt-line word-excerpt-line--6" title="Themespond is a fashion product selling online web site. With the mission to bring the utility in purchasing for customer, we are offering over 4 million products from more than 20 different brands.">
                                        Themespond is a fashion product selling online web site. With the mission to bring the utility in purchasing for customer, we are offering over 4 million products from more than 20 different brands.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <ul className="list-stories__bottom">
                            <li className="item display-flex justify-content-between align-items-start">
                                <a href="javascript:;" className="item__link display-block">
                                    <img src={blog6} alt="blog-6" className="full-box" />
                                </a>
                                <div className="item__info position-rel">
                                    <a href="javascript:;" className="item__info__title display-block full-width fw-400 breadcrumb-move word-break-word word-excerpt-line word-excerpt-line--2" title="Roasted Breakfast Potatoes">Roasted Breakfast Potatoes</a>
                                    <h2 className="item__info__date">Apr 22, 2015</h2>
                                </div>
                            </li>
                            <li className="item display-flex justify-content-between align-items-start">
                                <a href="javascript:;" className="item__link display-block">
                                    <img src={blog7} alt="blog-7" className="full-box" />
                                </a>
                                <div className="item__info position-rel">
                                    <a href="javascript:;" className="item__info__title display-block full-width fw-400 breadcrumb-move word-break-word word-excerpt-line word-excerpt-line--2" title="Day Trips: Green Garden">Day Trips: Green Garden</a>
                                    <h2 className="item__info__date">Apr 22, 2015</h2>
                                </div>
                            </li>
                            <li className="item display-flex justify-content-between align-items-start">
                                <a href="javascript:;" className="item__link display-block">
                                    <img src={blog8} alt="blog-8" className="full-box" />
                                </a>
                                <div className="item__info position-rel">
                                    <a href="javascript:;" className="item__info__title display-block full-width fw-400 breadcrumb-move word-break-word word-excerpt-line word-excerpt-line--2" title="Finding Common Ground in the US">Finding Common Ground in the US</a>
                                    <h2 className="item__info__date">Apr 22, 2015</h2>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="stories__lastest full-width">
                <div className="stories__lastest__label full-width text-center cursor-pointer">
                    <h2 className="fw-700 text-uppercase">Lastest Stories</h2>
                </div>
                <div className="stories__lastest__list">
                    <div className="stories-row row">
                        <div className="lastest-item col-12 col-md-6">
                            <a href="javascript:;" className="lastest-item__wrap display-block position-rel">
                                <img src={lastest1} alt="lastest-1" className="full-box" />
                                <div className="box display-flex-center justify-content-center position-abs left-0 bottom-0">
                                    <h2 className="text-uppercase color-light">Food</h2>
                                </div>
                            </a>
                            <div className="lastest-item__title">
                                <a href="javascript:;" title="Roasted Breakfast Potatoes" className="display-block fw-400 breadcrumb-move word-break-word">Roasted Breakfast Potatoes</a>
                            </div>
                            <div className="lastest-item__info display-flex">
                                <div className="date font-weight-light">
                                    <h2>July 20, 2016</h2>
                                </div>
                                <div className="icon font-weight-light">/</div>
                                <div className="view font-weight-light">
                                    <h2>969 Views</h2>
                                </div>
                                <div className="icon font-weight-light">/</div>
                                <div className="comment font-weight-light">
                                    <h2>30 Comments</h2>
                                </div>
                            </div>
                            <p className="lastest-item__desc text-justify font-weight-light word-break-word" title="Themespond is a fashion product selling online web site. With the mission to bring the utility in purchasing for customer, we are offering over 4 million products from more than 20 different brands.">
                                Themespond is a fashion product selling online web site. With the mission to bring the utility in purchasing for customer, we are offering over 4 million products from more than 20 different brands.
                            </p>
                        </div>
                        <div className="lastest-item col-12 col-md-6">
                            <a href="javascript:;" className="lastest-item__wrap display-block position-rel">
                                <img src={lastest2} alt="lastest-2" className="full-box" />
                                <div className="box display-flex-center justify-content-center position-abs left-0 bottom-0">
                                    <h2 className="text-uppercase color-light">Travel</h2>
                                </div>
                            </a>
                            <div className="lastest-item__title">
                                <a href="javascript:;" title="Roasted Breakfast Potatoes" className="display-block fw-400 breadcrumb-move word-break-word">Roasted Breakfast Potatoes</a>
                            </div>
                            <div className="lastest-item__info display-flex">
                                <div className="date font-weight-light">
                                    <h2>July 20, 2016</h2>
                                </div>
                                <div className="icon font-weight-light">/</div>
                                <div className="view font-weight-light">
                                    <h2>969 Views</h2>
                                </div>
                                <div className="icon font-weight-light">/</div>
                                <div className="comment font-weight-light">
                                    <h2>30 Comments</h2>
                                </div>
                            </div>
                            <p className="lastest-item__desc text-justify font-weight-light word-break-word" title="Themespond is a fashion product selling online web site. With the mission to bring the utility in purchasing for customer, we are offering over 4 million products from more than 20 different brands.">
                                Themespond is a fashion product selling online web site. With the mission to bring the utility in purchasing for customer, we are offering over 4 million products from more than 20 different brands.
                            </p>
                        </div>
                    </div>
                    <div className="stories-row row">
                        <div className="lastest-item col-12 col-md-6">
                            <a href="javascript:;" className="lastest-item__wrap display-block position-rel">
                                <img src={lastest3} alt="lastest-3" className="full-box" />
                                <div className="box display-flex-center justify-content-center position-abs left-0 bottom-0">
                                    <h2 className="text-uppercase color-light">Travel</h2>
                                </div>
                            </a>
                            <div className="lastest-item__title">
                                <a href="javascript:;" title="Roasted Breakfast Potatoes" className="display-block fw-400 breadcrumb-move word-break-word">Roasted Breakfast Potatoes</a>
                            </div>
                            <div className="lastest-item__info display-flex">
                                <div className="date font-weight-light">
                                    <h2>July 20, 2016</h2>
                                </div>
                                <div className="icon font-weight-light">/</div>
                                <div className="view font-weight-light">
                                    <h2>969 Views</h2>
                                </div>
                                <div className="icon font-weight-light">/</div>
                                <div className="comment font-weight-light">
                                    <h2>30 Comments</h2>
                                </div>
                            </div>
                            <p className="lastest-item__desc text-justify font-weight-light word-break-word" title="Themespond is a fashion product selling online web site. With the mission to bring the utility in purchasing for customer, we are offering over 4 million products from more than 20 different brands.">
                                Themespond is a fashion product selling online web site. With the mission to bring the utility in purchasing for customer, we are offering over 4 million products from more than 20 different brands.
                            </p>
                        </div>
                        <div className="lastest-item col-12 col-md-6">
                            <a href="javascript:;" className="lastest-item__wrap display-block position-rel">
                                <img src={lastest4} alt="lastest-4" className="full-box" />
                                <div className="box display-flex-center justify-content-center position-abs left-0 bottom-0">
                                    <h2 className="text-uppercase color-light">Travel</h2>
                                </div>
                            </a>
                            <div className="lastest-item__title">
                                <a href="javascript:;" title="Roasted Breakfast Potatoes" className="display-block fw-400 breadcrumb-move word-break-word">Roasted Breakfast Potatoes</a>
                            </div>
                            <div className="lastest-item__info display-flex">
                                <div className="date font-weight-light">
                                    <h2>July 20, 2016</h2>
                                </div>
                                <div className="icon font-weight-light">/</div>
                                <div className="view font-weight-light">
                                    <h2>969 Views</h2>
                                </div>
                                <div className="icon font-weight-light">/</div>
                                <div className="comment font-weight-light">
                                    <h2>30 Comments</h2>
                                </div>
                            </div>
                            <p className="lastest-item__desc text-justify font-weight-light word-break-word" title="Themespond is a fashion product selling online web site. With the mission to bring the utility in purchasing for customer, we are offering over 4 million products from more than 20 different brands.">
                                Themespond is a fashion product selling online web site. With the mission to bring the utility in purchasing for customer, we are offering over 4 million products from more than 20 different brands.
                            </p>
                        </div>
                    </div>
                    <div className="stories-row row">
                        <div className="lastest-item col-12 col-md-6">
                            <a href="javascript:;" className="lastest-item__wrap display-block position-rel">
                                <img src={lastest5} alt="lastest-5" className="full-box" />
                                <div className="box display-flex-center justify-content-center position-abs left-0 bottom-0">
                                    <h2 className="text-uppercase color-light">Fashion</h2>
                                </div>
                            </a>
                            <div className="lastest-item__title">
                                <a href="javascript:;" title="Roasted Breakfast Potatoes" className="display-block fw-400 breadcrumb-move word-break-word">Roasted Breakfast Potatoes</a>
                            </div>
                            <div className="lastest-item__info display-flex">
                                <div className="date font-weight-light">
                                    <h2>July 20, 2016</h2>
                                </div>
                                <div className="icon font-weight-light">/</div>
                                <div className="view font-weight-light">
                                    <h2>969 Views</h2>
                                </div>
                                <div className="icon font-weight-light">/</div>
                                <div className="comment font-weight-light">
                                    <h2>30 Comments</h2>
                                </div>
                            </div>
                            <p className="lastest-item__desc text-justify font-weight-light word-break-word" title="Themespond is a fashion product selling online web site. With the mission to bring the utility in purchasing for customer, we are offering over 4 million products from more than 20 different brands.">
                                Themespond is a fashion product selling online web site. With the mission to bring the utility in purchasing for customer, we are offering over 4 million products from more than 20 different brands.
                            </p>
                        </div>
                        <div className="lastest-item col-12 col-md-6">
                            <a href="javascript:;" className="lastest-item__wrap display-block position-rel">
                                <img src={lastest6} alt="lastest-6" className="full-box" />
                                <div className="box display-flex-center justify-content-center position-abs left-0 bottom-0">
                                    <h2 className="text-uppercase color-light">Food</h2>
                                </div>
                            </a>
                            <div className="lastest-item__title">
                                <a href="javascript:;" title="Roasted Breakfast Potatoes" className="display-block fw-400 breadcrumb-move word-break-word">Roasted Breakfast Potatoes</a>
                            </div>
                            <div className="lastest-item__info display-flex">
                                <div className="date font-weight-light">
                                    <h2>July 20, 2016</h2>
                                </div>
                                <div className="icon font-weight-light">/</div>
                                <div className="view font-weight-light">
                                    <h2>969 Views</h2>
                                </div>
                                <div className="icon font-weight-light">/</div>
                                <div className="comment font-weight-light">
                                    <h2>30 Comments</h2>
                                </div>
                            </div>
                            <p className="lastest-item__desc text-justify font-weight-light word-break-word" title="Themespond is a fashion product selling online web site. With the mission to bring the utility in purchasing for customer, we are offering over 4 million products from more than 20 different brands.">
                                Themespond is a fashion product selling online web site. With the mission to bring the utility in purchasing for customer, we are offering over 4 million products from more than 20 different brands.
                            </p>
                        </div>
                    </div>
                    <div className="stories-row row">
                        <div className="lastest-item col-12 col-md-6">
                            <a href="javascript:;" className="lastest-item__wrap display-block position-rel">
                                <img src={lastest7} alt="lastest-7" className="full-box" />
                                <div className="box display-flex-center justify-content-center position-abs left-0 bottom-0">
                                    <h2 className="text-uppercase color-light">Travel</h2>
                                </div>
                            </a>
                            <div className="lastest-item__title">
                                <a href="javascript:;" title="Roasted Breakfast Potatoes" className="display-block fw-400 breadcrumb-move word-break-word">Roasted Breakfast Potatoes</a>
                            </div>
                            <div className="lastest-item__info display-flex">
                                <div className="date font-weight-light">
                                    <h2>July 20, 2016</h2>
                                </div>
                                <div className="icon font-weight-light">/</div>
                                <div className="view font-weight-light">
                                    <h2>969 Views</h2>
                                </div>
                                <div className="icon font-weight-light">/</div>
                                <div className="comment font-weight-light">
                                    <h2>30 Comments</h2>
                                </div>
                            </div>
                            <p className="lastest-item__desc text-justify font-weight-light word-break-word" title="Themespond is a fashion product selling online web site. With the mission to bring the utility in purchasing for customer, we are offering over 4 million products from more than 20 different brands.">
                                Themespond is a fashion product selling online web site. With the mission to bring the utility in purchasing for customer, we are offering over 4 million products from more than 20 different brands.
                            </p>
                        </div>
                        <div className="lastest-item col-12 col-md-6">
                            <a href="javascript:;" className="lastest-item__wrap display-block position-rel">
                                <img src={lastest8} alt="lastest-8" className="full-box" />
                                <div className="box display-flex-center justify-content-center position-abs left-0 bottom-0">
                                    <h2 className="text-uppercase color-light">Food</h2>
                                </div>
                            </a>
                            <div className="lastest-item__title">
                                <a href="javascript:;" title="Roasted Breakfast Potatoes" className="display-block fw-400 breadcrumb-move word-break-word">Roasted Breakfast Potatoes</a>
                            </div>
                            <div className="lastest-item__info display-flex">
                                <div className="date font-weight-light">
                                    <h2>July 20, 2016</h2>
                                </div>
                                <div className="icon font-weight-light">/</div>
                                <div className="view font-weight-light">
                                    <h2>969 Views</h2>
                                </div>
                                <div className="icon font-weight-light">/</div>
                                <div className="comment font-weight-light">
                                    <h2>30 Comments</h2>
                                </div>
                            </div>
                            <p className="lastest-item__desc text-justify font-weight-light word-break-word" title="Themespond is a fashion product selling online web site. With the mission to bring the utility in purchasing for customer, we are offering over 4 million products from more than 20 different brands.">
                                Themespond is a fashion product selling online web site. With the mission to bring the utility in purchasing for customer, we are offering over 4 million products from more than 20 different brands.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Load more btn */}
                <div className="stories__lastest__loadmore display-flex-center-wrap justify-content-center position-rel breadcrumb-move cursor-pointer">
                    <h2 className="fw-700 text-uppercase">Load more</h2>
                </div>
            </div>
        </div>
    );
}