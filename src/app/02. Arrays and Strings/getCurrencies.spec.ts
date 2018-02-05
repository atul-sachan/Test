import { getCurrencies } from "./getCurrencies";

describe("function: getCurrencies", () => {
    it("should return suported currencies", () => {
        const currencies = getCurrencies();
        expect(currencies).toContain('USD');
        expect(currencies).toContain('AUD');
    });
});
