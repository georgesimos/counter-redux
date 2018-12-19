import counter from "./index";

describe("reducers", () => {
  describe("counter", () => {
    it("should provide the initial state", () => {
      expect(counter(undefined, {})).toBe(0);
    });

    it("should handle INCREMENT action", () => {
      expect(counter(1, { type: "INCREMENT" })).toBe(2);
    });

    it("should handle DECREMENT action", () => {
      expect(counter(2, { type: "DECREMENT" })).toBe(1);
    });

    it("should ignore unknown action", () => {
      expect(counter(2, { type: "unknown" })).toBe(2);
    });
  });
});
