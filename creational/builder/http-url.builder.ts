import { UrlBuilder } from "./url.builder";
import {
  Url,
  Host,
  HttpProtocol,
  Params,
  Password,
  Path,
  Port,
  Username,
  HTTP_BASE_PORT,
} from "./url";

class HttpUrl extends Url {}

export class HttpUrlBuilder implements UrlBuilder {
  private url: Url;

  constructor() {
    this.url = new HttpUrl();
    this.url.protocol = 'http';
    this.url.port = HTTP_BASE_PORT;
  }

  withProtocol(protocol: HttpProtocol): this {
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
