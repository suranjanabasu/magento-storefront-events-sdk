import MagentoDataLayer from "./index";
import "@adobe/adobe-client-data-layer";

beforeAll(() => {
  // Forces magento data layer code to be bundled so that
  // 'data layer should exist' test passes
  MagentoDataLayer;
});

test("data layer should exist", () => {
  expect(window.adobeDataLayer).toBeDefined();
});

test("set shopper context", () => {
  const shopperContext = { flopperId: "test" };

  expect(window.adobeDataLayer.length).toBe(0);
  MagentoDataLayer.setShopperContext(shopperContext);
  expect(window.adobeDataLayer.length).toBe(1);
  expect(MagentoDataLayer.getShopperContext()).toEqual(shopperContext);
});
