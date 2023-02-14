export type HttpProtocol = "http" | "https";
export type MongoProtocol = "mongodb" | "mongodb+srv";
export type RedisProtocol = "redis" | "rediss";
export type Protocol = HttpProtocol | MongoProtocol | RedisProtocol;

export const HTTP_BASE_PORT = 8080;
export const MONGODB_BASE_PORT = 27017;
export const REDIS_BASE_PORT = 6379;

export type Username = string;
export type Password = string;
export type Host = string;
export type Port = string | number;
export type Path = string;
export type Params = Record<string, string>;

export abstract class Url {
  private _protocol: Protocol = "http";
  private _username: Username = "";
  private _password: Password = "";
  private _host: Host = "";
  private _port: Port = "";
  private _path: Path = "";
  private _params: Params = {};

constructor() {}

  public get protocol(): Protocol {
    return this._protocol;
  }
  public set protocol(protocol: Protocol) {
    this._protocol = protocol;
  }

  public get username(): Username {
    return this._username;
  }
  public set username(username: Username) {
    this._username = username;
  }

  public get password(): Password {
    return this._password;
  }
  public set password(password: Password) {
    this._password = password;
  }

  public get host(): Host {
    return this._host;
  }
  public set host(host: Host) {
    this._host = host;
  }

  public get port(): Port {
    return this._port;
  }
  public set port(port: Port) {
    this._port = port;
  }

  public get path(): Path {
    return this._path;
  }
  public set path(path: Path) {
    this._path = path;
  }

  public get params(): Params {
    return this._params;
  }
  public set params(params: Params) {
    this._params = params;
  }

  toString(): string {
    let url = this.protocol + "://";
    if (this.username || this.password) {
      url += this.username + ":" + this.password + "@";
    }
    url += this.host;
    if (this.port) {
      url += ":" + this.port;
    }
    if (this.path) {
      url += this._path;
    }
    if (Object.keys(this.params).length) {
      url += "?";
      const keys = Object.keys(this.params);
      keys.forEach((key, index) => {
        url += key + "=" + this.params[key];
        if (index !== keys.length - 1) {
          url += "&";
        }
      });
    }
    return url;
  }
}
