export const environment = {
  production: false,
  version: "/v1.0",
  applicationName: "/OnlineRetailPortal",
  isMockingEnabled: true,
  isPreviewEnabled:false,
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
  userSetting: {
    baseUrl: "https://localhost:44340/api",
    profile: "/profile",
    activeAds: "/active",
    inactiveAds: "/inactive",
    userId: "777888666",
  },
};