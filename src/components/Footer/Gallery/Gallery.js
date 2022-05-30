import { useState } from 'react';

import gallery1 from '../../../assets/img/gallery1.jpg';
import gallery2 from '../../../assets/img/gallery2.jpg';
import gallery3 from '../../../assets/img/gallery3.jpg';
import gallery4 from '../../../assets/img/gallery4.jpg';
import gallery5 from '../../../assets/img/gallery5.jpg';

import './Gallery.scss';

export default function Gallery() {
    const [enableIndex, setEnableIndex] = useState(3);
    return (
        <>
        <div className="footer__gallery row display-flex position-rel"> 
            <div className="footer__gallery__wrap col-2 position-rel full-height">
                <img className={enableIndex !== 1 ? "gallery-img gallery-img--overlay full-box" : "gallery-img full-box"} src={gallery4} alt="gallery-4" />
            </div>
            <div className="footer__gallery__wrap col-2 position-rel full-height">
                <img className={enableIndex !== 2 ? "gallery-img gallery-img--overlay full-box" : "gallery-img full-box"} src={gallery3} alt="gallery-3" />
            </div>
            <div className="footer__gallery__wrap col-4 position-rel full-height">
                <img className={enableIndex !== 3 ? "gallery-img gallery-img--overlay full-box" : "gallery-img full-box"} src={gallery1} alt="gallery-1" />
            </div>
            <div className="footer__gallery__wrap col-2 position-rel full-height">
                <img className={enableIndex !== 4 ? "gallery-img gallery-img--overlay full-box" : "gallery-img full-box"} src={gallery2} alt="gallery-2" />
            </div>
            <div className="footer__gallery__wrap col-2 position-rel full-height">
                <img className={enableIndex !== 5 ? "gallery-img gallery-img--overlay full-box" : "gallery-img full-box"} src={gallery5} alt="gallery-5" />
            </div>

            {/*Button*/}
            <div className="gallery-prev position-abs top-0 left-0 bottom-0 display-flex-center-wrap justify-content-center breadcrumb-move cursor-pointer" onClick={() => {
                if(enableIndex > 1)
                    setEnableIndex(enableIndex - 1);
                else    
                    setEnableIndex(1);
            }}>
                <i className="fa-solid fa-angle-left color-light"></i>
            </div>
            <div className="gallery-next position-abs top-0 right-0 bottom-0 display-flex-center-wrap justify-content-center breadcrumb-move cursor-pointer" onClick={() => {
                if(enableIndex < 5)
                    setEnableIndex(enableIndex + 1);
                else    
                    setEnableIndex(5);
            }}>
                <i className="fa-solid fa-angle-right color-light"></i>
            </div>
        </div>
        </>
    );
}