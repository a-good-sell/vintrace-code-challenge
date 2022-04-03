import { useParams } from "react-router";

import mockWineData from "../../data/mockWineData";

import RedIcon from "../../images/Red.svg";

import "../css/ProductView.css";

export default function ProductView() {
    const params = useParams();

    const wineLot = mockWineData.find((wine) => {
        return wine.lotCode === params.lotCode;
    });

    console.log("ProductView(): wineLot=", wineLot); // @@@

    let componentRows = [];

    for (let wine in wineLot.components) {
        componentRows.push(
            <tr>
                <td>{wine.year}</td>
                <td>{wine.percentage}</td>
            </tr>
        );
    }

    return (
        <div className="productView">
            <header>
                <div className="headerTitle">
                    <img src={RedIcon} alt="Wine icon"/>
                    <h1>{wineLot.lotCode}</h1>
                </div>
                <div className="headerSubtitle">
                    <h4>{wineLot.description}</h4>
                </div>
            </header>
            <main>
                <table>
                    <tr>
                        <th>Volume</th>
                        <td>{wineLot.volume}</td>
                    </tr>
                    <tr>
                        <th>Tank code</th>
                        <td>{wineLot.tankCode}</td>
                    </tr>
                    <tr>
                        <th>Product state</th>
                        <td>{wineLot.productState}</td>
                    </tr>
                    <tr>
                        <th>Owner</th>
                        <td>{wineLot.ownerName}</td>
                    </tr>
                </table>
            </main>
        </div>
    );
}