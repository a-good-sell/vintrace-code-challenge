import { Component } from "react"

import SearchResult from "../components/SearchResult";

import mockWineData from "../../data/mockWineData";

const SEARCH_FIELDS = [ "lotCode", "description" ];

export default class WineSearch extends Component {
    render() {
        return (
            <div className="wineSearch">
                <h1>Wine Search</h1>
            </div>
        );
    }

    /**
     * Searches for wines where search keyword is located in one of the candidate fields
     * @param {string} keyword 
     * @returns {Array.<SearchResult>}
     */
    keywordSearch(keyword) {
        let searchResults = mockWineData.map((wineLot) => {
            let searchField = null;
            let searchPosition = -1;

            for (let candidateField of SEARCH_FIELDS) {

            }

            return {
                searchField: searchField,
                searchPosition: searchPosition
            }
        }).filter((result) => {
            return result.searchPosition > 0;
        }).map((result) => {
            return new SearchResult({
                searchField: result.searchField,
                searchPosition: result.searchPosition
            });
        })

        return searchResults;
    }
}