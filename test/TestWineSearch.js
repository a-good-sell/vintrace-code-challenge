import WineSearch from "../src/pages/WineSearch";

describe("TestWineSearch", () => {
    let wineSearch = null;

    beforeAll(() => {
        wineSearch = new WineSearch();
    });

    it("Should return search results", () => {
        let searchResults = wineSearch.keywordSearch("201");
        expect(searchResults.length).toEqual(2);

        for (let result of searchResults) {
            expect(result.matchField).toEqual("description");
        }

        searchResults = wineSearch.keywordSearch("11YV");
        expect(searchResults.length).toEqual(2);

        for (let result of searchResults) {
            expect(result.matchField).toEqual("lotCode");
        }
    });

    it("Should return empty array if blank keyword", () => {
        let searchResults = wineSearch.keywordSearch("");
        expect(searchResults.length).toEqual(0);
    });
});