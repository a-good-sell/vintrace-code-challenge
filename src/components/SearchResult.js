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

        this.getSearchResultFormattedText = this.getSearchResultFormattedText.bind(this);
        this.getFormattedVolume = this.getFormattedVolume.bind(this);
    }

    render() {
        return (
            <div className="searchResult">
                <div className="searchResultLeft">
                    <div className="lotCode">
                        {this.getSearchResultFormattedText("lotCode")}
                    </div>
                    <div>
                        {this.getSearchResultFormattedText("description")}
                    </div>
                </div>
                <div className="searchResultRight">
                    <div>
                        {this.props.matchObject.tankCode}
                    </div>
                    <div>
                        {this.getFormattedVolume()}
                    </div>
                </div>
            </div>
        )
    }

    /**
     * If the field name matches "matchField", the string returned will have the substring
     * that matches the search term highlighted
     * @param {String} fieldName
     * @returns {HTMLSpanElement} HTML-formatted string of the field name
     */
    getSearchResultFormattedText(fieldName) {
        if (!this.props.matchObject[fieldName]) {
            return "";
        }

        if (this.props.matchField !== fieldName) {
            // Return unformatted string
            return this.props.matchObject[fieldName].toString();
        }

        const resultString = this.props.matchObject[fieldName].toString();

        const resultPrefix = resultString.substring(0, this.props.matchPosition);
        const resultValue = resultString.substring(this.props.matchPosition, this.props.matchPosition + this.props.matchString.length);
        const resultSuffix = resultString.substring(this.props.matchPosition + this.props.matchString.length);

        return (<>
            {resultPrefix}
            <span className="matchString">
                {resultValue}
            </span>
            {resultSuffix}
        </>)
    }

    /**
     * Gets a string formatted value i.e. "1,000,000.5 L"
     * @returns {String} String formatted volume
     */
     getFormattedVolume() {
        return parseFloat(this.props.matchObject.volume).toLocaleString('en') + " L";
    }
}