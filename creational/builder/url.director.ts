import { Url } from "./url";
import { UrlBuilder } from "./url.builder";

export class UrlDirector {
  constructor(private readonly builder: UrlBuilder) {}

  public generateMinimalUrl(): Url {
    return this.builder.withHost("localhost").build();
  }
}
