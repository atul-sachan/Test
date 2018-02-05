import { greet } from "./greet";

describe("Class : greet", () => {
    it("should include name in the message", () => {
        expect(greet('atul')).toContain('atul');
    });
});
