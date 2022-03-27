import { describe, beforeAll, it, expect } from "jasmine-core";

import WineSearch from "../src/pages/WineSearch";

describe("TestWineSearch", () => {
    let wineSearch = null;

    beforeAll(() => {
        wineSarch = new WineSearch();
    });

    it("Should return search results", () => {
        expect(3).toEqual(3);
    });
});