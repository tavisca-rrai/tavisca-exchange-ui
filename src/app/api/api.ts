export class Api {
  baseUrl: string = "http://localhost:443399/api";
  version: string = "/v1.0";
  applicationName: string = "/ORP";
  apiList = [{ path: "/Signin", name: "signin" }];

  getApiUrl(operation: string) {
    return (
      this.baseUrl +
      this.version +
      this.applicationName +
      this.apiList.filter(x => x.name == operation)[0].path
    );
  }
}
