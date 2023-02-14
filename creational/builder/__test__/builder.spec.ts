import { HttpUrlBuilder } from "../http-url.builder";
import { MongoUrlBuilder } from "../mongo-url.builder";
import { UrlDirector } from "../url.director";

describe("Url builder", () => {
  describe("Http url builder", () => {
    it("should build http url", () => {
      const url = new HttpUrlBuilder()
        .withPort(80)
        .withHost("localhost")
        .withProtocol("http")
        .withPassword("password")
        .withUsername("username")
        .withPath("/path")
        .withParams({ param: "1", param2: "2" })
        .build();
      expect(url.toString()).toEqual(
        "http://username:password@localhost:80/path?param=1&param2=2"
      );
    });
  });
  describe("Mongo url builder", () => {
    it("should build mongo url", () => {
      const url = new MongoUrlBuilder()
        .withPort(27017)
        .withHost("localhost")
        .withProtocol("mongodb+srv")
        .withPassword("password")
        .withUsername("username")
        .build();
      expect(url.toString()).toEqual(
        "mongodb+srv://username:password@localhost:27017"
      );
    });
  });
  describe("Url director", () => {
    it("should build minimal http url", () => {
      const httpUrlBuilder = new HttpUrlBuilder();
      const url = new UrlDirector(httpUrlBuilder).generateMinimalUrl();
      expect(url.toString()).toEqual("http://localhost:8080");
    });
    it("should build minimal mongo url", () => {
      const mongoUrlBuilder = new MongoUrlBuilder();
      const url = new UrlDirector(mongoUrlBuilder).generateMinimalUrl();
      expect(url.toString()).toEqual("mongodb://localhost:27017");
    });
  });
});
