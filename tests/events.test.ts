/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import mdl, { MagentoDataLayer } from "../src/index";
import {
  ADD_TO_CART,
  CUSTOM_URL,
  INITIATE_CHECKOUT,
  PAGE_ACTIVITY_SUMMARY,
  PAGE_VIEW,
  PRODUCT_PAGE_VIEW,
  REFERRER_URL,
  REMOVE_FROM_CART,
  SIGN_IN,
  SIGN_OUT,
  UPDATE_CART,
} from "../src/types/events";

beforeAll(() => {
  // Forces magento data layer code to be bundled so that
  // 'data layer should exist' test passes
  expect(mdl).toBeInstanceOf(MagentoDataLayer);
});

beforeEach(async () => {
  jest.resetModules();
  window.adobeDataLayer = [];
  require("@adobe/adobe-client-data-layer");
});

test("data layer should exist", () => {
  expect(window.adobeDataLayer).toBeDefined();
});

describe("events", () => {
  test("add to cart", async () => {
    const eventHandler = jest.fn((eventObj, mdl) => {
      expect(eventObj.event).toEqual(ADD_TO_CART);
      expect(mdl).toBeInstanceOf(MagentoDataLayer);
    });

    mdl.subscribe.addToCart(eventHandler);
    expect(eventHandler).not.toHaveBeenCalled();
    mdl.publish.addToCart();
    expect(eventHandler).toHaveBeenCalledTimes(1);
    mdl.unsubscribe.addToCart(eventHandler);
    mdl.publish.addToCart();
    expect(eventHandler).toHaveBeenCalledTimes(1);
  });

  test("custom url", async () => {
    const eventHandler = jest.fn((eventObj, mdl) => {
      expect(eventObj.event).toEqual(CUSTOM_URL);
      expect(mdl).toBeInstanceOf(MagentoDataLayer);
    });

    mdl.subscribe.customUrl(eventHandler);
    expect(eventHandler).not.toHaveBeenCalled();
    mdl.publish.customUrl();
    expect(eventHandler).toHaveBeenCalledTimes(1);
    mdl.unsubscribe.customUrl(eventHandler);
    mdl.publish.customUrl();
    expect(eventHandler).toHaveBeenCalledTimes(1);
  });

  test("initiate checkout", async () => {
    const eventHandler = jest.fn((eventObj, mdl) => {
      expect(eventObj.event).toEqual(INITIATE_CHECKOUT);
      expect(mdl).toBeInstanceOf(MagentoDataLayer);
    });

    mdl.subscribe.initiateCheckout(eventHandler);
    expect(eventHandler).not.toHaveBeenCalled();
    mdl.publish.initiateCheckout();
    expect(eventHandler).toHaveBeenCalledTimes(1);
    mdl.unsubscribe.initiateCheckout(eventHandler);
    mdl.publish.initiateCheckout();
    expect(eventHandler).toHaveBeenCalledTimes(1);
  });

  test("page activity summary", async () => {
    const eventHandler = jest.fn((eventObj, mdl) => {
      expect(eventObj.event).toEqual(PAGE_ACTIVITY_SUMMARY);
      expect(mdl).toBeInstanceOf(MagentoDataLayer);
    });

    mdl.subscribe.pageActivitySummary(eventHandler);
    expect(eventHandler).not.toHaveBeenCalled();
    mdl.publish.pageActivitySummary();
    expect(eventHandler).toHaveBeenCalledTimes(1);
    mdl.unsubscribe.pageActivitySummary(eventHandler);
    mdl.publish.pageActivitySummary();
    expect(eventHandler).toHaveBeenCalledTimes(1);
  });

  test("page view", async () => {
    const eventHandler = jest.fn((eventObj, mdl) => {
      expect(eventObj.event).toEqual(PAGE_VIEW);
      expect(mdl).toBeInstanceOf(MagentoDataLayer);
    });

    mdl.subscribe.pageView(eventHandler);
    expect(eventHandler).not.toHaveBeenCalled();
    mdl.publish.pageView();
    expect(eventHandler).toHaveBeenCalledTimes(1);
    mdl.unsubscribe.pageView(eventHandler);
    mdl.publish.pageView();
    expect(eventHandler).toHaveBeenCalledTimes(1);
  });

  test("product page view", async () => {
    const eventHandler = jest.fn((eventObj, mdl) => {
      expect(eventObj.event).toEqual(PRODUCT_PAGE_VIEW);
      expect(mdl).toBeInstanceOf(MagentoDataLayer);
    });

    mdl.subscribe.productPageView(eventHandler);
    expect(eventHandler).not.toHaveBeenCalled();
    mdl.publish.productPageView();
    expect(eventHandler).toHaveBeenCalledTimes(1);
    mdl.unsubscribe.productPageView(eventHandler);
    mdl.publish.productPageView();
    expect(eventHandler).toHaveBeenCalledTimes(1);
  });

  test("referrer url", async () => {
    const eventHandler = jest.fn((eventObj, mdl) => {
      expect(eventObj.event).toEqual(REFERRER_URL);
      expect(mdl).toBeInstanceOf(MagentoDataLayer);
    });

    mdl.subscribe.referrerUrl(eventHandler);
    expect(eventHandler).not.toHaveBeenCalled();
    mdl.publish.referrerUrl();
    expect(eventHandler).toHaveBeenCalledTimes(1);
    mdl.unsubscribe.referrerUrl(eventHandler);
    mdl.publish.referrerUrl();
    expect(eventHandler).toHaveBeenCalledTimes(1);
  });

  test("remove from cart", async () => {
    const eventHandler = jest.fn((eventObj, mdl) => {
      expect(eventObj.event).toEqual(REMOVE_FROM_CART);
      expect(mdl).toBeInstanceOf(MagentoDataLayer);
    });

    mdl.subscribe.removeFromCart(eventHandler);
    expect(eventHandler).not.toHaveBeenCalled();
    mdl.publish.removeFromCart();
    expect(eventHandler).toHaveBeenCalledTimes(1);
    mdl.unsubscribe.removeFromCart(eventHandler);
    mdl.publish.removeFromCart();
    expect(eventHandler).toHaveBeenCalledTimes(1);
  });

  test("sign in", async () => {
    const eventHandler = jest.fn((eventObj, mdl) => {
      expect(eventObj.event).toEqual(SIGN_IN);
      expect(mdl).toBeInstanceOf(MagentoDataLayer);
    });

    mdl.subscribe.signIn(eventHandler);
    expect(eventHandler).not.toHaveBeenCalled();
    mdl.publish.signIn();
    expect(eventHandler).toHaveBeenCalledTimes(1);
    mdl.unsubscribe.signIn(eventHandler);
    mdl.publish.signIn();
    expect(eventHandler).toHaveBeenCalledTimes(1);
  });

  test("sign out", async () => {
    const eventHandler = jest.fn((eventObj, mdl) => {
      expect(eventObj.event).toEqual(SIGN_OUT);
      expect(mdl).toBeInstanceOf(MagentoDataLayer);
    });

    mdl.subscribe.signOut(eventHandler);
    expect(eventHandler).not.toHaveBeenCalled();
    mdl.publish.signOut();
    expect(eventHandler).toHaveBeenCalledTimes(1);
    mdl.unsubscribe.signOut(eventHandler);
    mdl.publish.signOut();
    expect(eventHandler).toHaveBeenCalledTimes(1);
  });

  test("update cart", async () => {
    const eventHandler = jest.fn((eventObj, mdl) => {
      expect(eventObj.event).toEqual(UPDATE_CART);
      expect(mdl).toBeInstanceOf(MagentoDataLayer);
    });

    mdl.subscribe.updateCart(eventHandler);
    expect(eventHandler).not.toHaveBeenCalled();
    mdl.publish.updateCart();
    expect(eventHandler).toHaveBeenCalledTimes(1);
    mdl.unsubscribe.updateCart(eventHandler);
    mdl.publish.updateCart();
    expect(eventHandler).toHaveBeenCalledTimes(1);
  });

  test("getting state before data layer initializes", () => {
    window.adobeDataLayer = [];
    expect(mdl.context.getCustomUrl()).toEqual({});
    expect(mdl.context.getReferrerUrl()).toEqual({});
  });
});
