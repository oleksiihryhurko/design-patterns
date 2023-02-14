import { Singleton } from "../singleton";

describe("Singleton", () => {
  it("should always return the same instance", () => {
    const i1 = Singleton.getInstance();
    const i2 = Singleton.getInstance();
    expect(i1).toEqual(i2);
  });
});
