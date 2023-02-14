import {
    Url,
    Host,
    Protocol,
    Params,
    Password,
    Path,
    Port,
    Username,
  } from "./url";
  
  export interface UrlBuilder {
    withProtocol(protocol: Protocol): this;
    withUsername(username: Username): this;
    withPassword(password: Password): this;
    withHost(host: Host): this;
    withPort(port: Port): this;
    withPath(path: Path): this;
    withParams(params: Params): this;
    build(): Url;
  }
  