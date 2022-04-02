import { Component } from "react";

/**
 * @typedef SearchResultProps
 * @property {Object} matchObject
 * @property {String} matchString
 * @property {String} matchField
 * @property {Number} matchPosition
 */

export default class SearchResult extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="searchResult">
                {this.props.matchObject.lotCode}
            </div>
        )
    }
}