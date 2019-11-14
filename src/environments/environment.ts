export const environment = {
  production: false,
  version: "/v1.0",
  applicationName: "/OnlineRetailPortal",
  isMockingEnabled: false,
  isPreviewEnabled: false,
  loginSetting: {
    BaseUrl: "http://localhost:62914/api",
    signInPath: "/signin"
  },
  productSetting: {
    BaseUrl: "https://localhost:44357/api",
    addProductPath: "/products/add",
    adDetailsPath: "/details",
    adsListPath: "/products"
  },
  userSetting: {
    baseUrl: "http://localhost:62914/api",
    profile: "/profile",
    activeAds: "/active",
    inactiveAds: "/inactive"
  },

  imageApiSettings: {
    BaseUrl: "https://localhost:44357/",
    uploadImagePath: "api/v1.0/OnlineRetailPortal/image/",
    storeImagePath: "api/v1.0/OnlineRetailPortal/image/store",
    mockImageUrl: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  }
};