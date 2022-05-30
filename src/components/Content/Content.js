import Banner from './Banner/Banner';
import Feature from "./Feature/Feature";

import './Content.scss';

import LeftContainer from "./LeftContainer/LeftContainer";
import Sidebar from "./Sidebar/Sidebar";

export default function Content() {
    return (
        <div className="content container">
            <Banner />
            <Feature />
            <div className="content-wrap row display-flex-wrap justify-content-between align-items-start">
                <div className="col-12 col-lg-8 left-container">
                    <LeftContainer />
                </div>
                <div className="col-12 col-lg-4 right-sidebar">
                    <Sidebar />
                </div>
            </div>
        </div>
    );
}