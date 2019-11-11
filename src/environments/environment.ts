export const environment = {
  production: false,
  version: "/v1.0",
  applicationName: "/OnlineRetailPortal",
  isMockingEnabled: true,
  loginSetting: {
    BaseUrl: "https://localhost:44357/api",
    signInPath: "/signin"
  },
  productSetting: {
    BaseUrl: "https://localhost:44357/api",
    addProductPath: "/products/add",
    adDetailsPath: "/details",
    adsListPath: "/products"
  },
  imageApiSettings:{
    BaseUrl: "https://localhost:44357/",
    uploadImagePath: "api/v1.0/OnlineRetailPortal/images/",
  }
};