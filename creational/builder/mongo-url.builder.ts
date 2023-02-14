import { UrlBuilder } from "./url.builder";
import {
  Url,
  Host,
  MongoProtocol,
  Params,
  Password,
  Path,
  Port,
  Username,
  MONGODB_BASE_PORT,
} from "./url";

class MongoUrl extends Url {}

export class MongoUrlBuilder implements UrlBuilder {
  private url: Url;

  constructor() {
    this.url = new MongoUrl();
    this.url.protocol = "mongodb";
    this.url.port = MONGODB_BASE_PORT;
  }

  withProtocol(protocol: MongoProtocol): this {
    this.url.protocol = protocol;
    return this;
  }
  withUsername(username: Username): this {
    this.url.username = username;
    return this;
  }
  withPassword(password: Password): this {
    this.url.password = password;
    return this;
  }
  withHost(host: Host): this {
    this.url.host = host;
    return this;
  }
  withPort(port: Port): this {
    this.url.port = port;
    return this;
  }
  withPath(path: Path): this {
    this.url.path = path;
    return this;
  }
  withParams(params: Params): this {
    this.url.params = params;
    return this;
  }
  build(): Url {
    return this.url;
  }
}
