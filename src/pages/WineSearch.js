import { Component } from "react"

import SearchResult from "../components/SearchResult";

import "../css/WineSearch.css";

import ICON from "../../images/ICON.svg";
import SEARCH from "../../images/Search.svg";
import CLOSE from "../../images/Close.svg";

import mockWineData from "../../data/mockWineData";

const SEARCH_FIELDS = [ "lotCode", "description" ];

/** 
 * typedef WineSearchState
 * @property {String} searchInput
 * @property {Array.<SearchResultProps>} searchResults
 */

export default class WineSearch extends Component {
    constructor() {
        super();
        this.state = {
            searchInput: "",
            searchResults: []
        }

        this.onUpdateSearchInput = this.onUpdateSearchInput.bind(this);
        this.onClearSearch = this.onClearSearch.bind(this);
    }

    render() {
        const searchResultComponents = this.state.searchResults.map((searchResult) => {
            return <SearchResult {...searchResult} key={searchResult.matchObject.lotCode}/>
        })

        return (
            <div className="wineSearch">
                <header>
                    <h3>Wine Search</h3>
                    <img src={ICON} ></img>
                </header>
                <main>
                    <div className="textInputWrapper">
                        <input 
                            placeholder="Search by lot code and description"
                            type="text" 
                            value={this.state.searchInput}
                            onChange={this.onUpdateSearchInput} />
                        <img className="searchIcon" src={SEARCH} alt="Search icon"></img>
                        {this.state.searchInput.length > 0 &&
                            <img className="clearIcon" src={CLOSE} alt="Clear icon" onClick={this.onClearSearch}></img>
                        }
                    </div> 
                    {this.state.searchResults.length > 0 &&
                        <div className="searchResultsWrapper">
                            {searchResultComponents}
                        </div>
                    }
                </main>
            </div>
        );
    }

    onUpdateSearchInput(event) {
        this.setState({
            searchInput: event.target.value,
            searchResults: this.keywordSearch(event.target.value)
        });
        event.preventDefault();
    }

    onClearSearch(event) {
        this.setState({
            searchInput: "",
            searchResults: []
        });
        event.preventDefault();
    }

    /**
     * Searches for wines where search keyword is located in one of the candidate fields
     * @param {string} keyword 
     * @returns {Array.<SearchResultProps>}
     */
    keywordSearch(keyword) {
        if (!keyword || keyword.length === 0) {
            return [];
        }

        let searchResults = mockWineData.map((wineLot) => {
            let searchField = null;
            let searchPosition = -1;

            for (let candidateField of SEARCH_FIELDS) {
                if (!wineLot[candidateField]) {
                    continue;
                }

                searchPosition = wineLot[candidateField].toUpperCase().search(keyword.toUpperCase());

                if (searchPosition > -1) {
                    searchField = candidateField;
                    break;
                }
            }

            return {
                searchObject: wineLot,
                searchField: searchField,
                searchPosition: searchPosition
            }
        }).filter((result) => {
            return result.searchPosition > -1;
        }).map((result) => {
            return {
                matchObject: result.searchObject,
                matchString: keyword,
                matchField: result.searchField,
                matchPosition: result.searchPosition
            };
        })

        return searchResults;
    }
}