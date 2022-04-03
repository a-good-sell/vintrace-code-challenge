import { Component } from "react";

import mockWineData from "../../data/mockWineData";

import RedIcon from "../../images/Red.svg";

export default class ProductView extends Component {
    render() {
        return (
            <div className="productView">
                <header>
                    <img src={RedIcon} alt="Wine icon"/>
                    <h1>Product View</h1>
                </header>
            </div>
        );
    }
}