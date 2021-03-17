/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import { Base } from "./Base";

import {
  ADD_TO_CART,
  CUSTOM_URL,
  DATA_LAYER_CHANGE,
  DATA_LAYER_EVENT,
  INITIATE_CHECKOUT,
  ListenerOptions,
  EventHandler,
  PAGE_ACTIVITY_SUMMARY,
  PAGE_VIEW,
  PLACE_ORDER,
  PRODUCT_PAGE_VIEW,
  REFERRER_URL,
  REMOVE_FROM_CART,
  SEARCH_REQUEST_SENT,
  SEARCH_RESPONSE_RECEIVED,
  SEARCH_RESULT_CLICK,
  SIGN_IN,
  SIGN_OUT,
  UPDATE_CART,
} from "./types/events";

export default class SubscribeManager extends Base {
  /**
   * Subscribe to Add to Cart event
   */
  addToCart(
    handler: EventHandler,
    options?: ListenerOptions
  ): void {
    this.addEventListener(ADD_TO_CART, handler, options);
  }

  /**
   * Subscribe to Custom Url event
   */
  customUrl(
    handler: EventHandler,
    options?: ListenerOptions
  ): void {
    this.addEventListener(CUSTOM_URL, handler, options);
  }

  /**
   * Subscribe to changes on the data layer
   */
  dataLayerChange(
    handler: EventHandler,
    options?: ListenerOptions
  ): void {
    this.addEventListener(DATA_LAYER_CHANGE, handler, options);
  }

  /**
   * Subscribe to all events on the data layer
   */
  dataLayerEvent(
    handler: EventHandler,
    options?: ListenerOptions
  ): void {
    this.addEventListener(DATA_LAYER_EVENT, handler, options);
  }

  /**
   * Subscribe to Initiate Checkout event
   */
  initiateCheckout(
    handler: EventHandler,
    options?: ListenerOptions
  ): void {
    this.addEventListener(INITIATE_CHECKOUT, handler, options);
  }

  /**
   * Subscribe to Page Activity Summary event
   */
  pageActivitySummary(
    handler: EventHandler,
    options?: ListenerOptions
  ): void {
    this.addEventListener(PAGE_ACTIVITY_SUMMARY, handler, options);
  }

  /**
   * Subscribe to Page View event
   */
  pageView(
    handler: EventHandler,
    options?: ListenerOptions
  ): void {
    this.addEventListener(PAGE_VIEW, handler, options);
  }

  /**
   * Subscribe to Place Order event
   */
  placeOrder(
    handler: EventHandler,
    options?: ListenerOptions
  ): void {
    this.addEventListener(PLACE_ORDER, handler, options);
  }

  /**
   * Subscribe to Product Page View event
   */
  productPageView(
    handler: EventHandler,
    options?: ListenerOptions
  ): void {
    this.addEventListener(PRODUCT_PAGE_VIEW, handler, options);
  }

  /**
   * Subscribe to Referrer Url event
   */
  referrerUrl(
    handler: EventHandler,
    options?: ListenerOptions
  ): void {
    this.addEventListener(REFERRER_URL, handler, options);
  }

  /**
   * Subscribe to Remove from Cart event
   */
  removeFromCart(
    handler: EventHandler,
    options?: ListenerOptions
  ): void {
    this.addEventListener(REMOVE_FROM_CART, handler, options);
  }

  /**
   * Subscribe to Search Request Sent event
   */
  searchRequestSent(handler: EventHandler): void {
    this.addEventListener(SEARCH_REQUEST_SENT, handler);
  }

  /**
   * Subscribe to Search Response Received event
   */
  searchResponseReceived(handler: EventHandler): void {
    this.addEventListener(SEARCH_RESPONSE_RECEIVED, handler);
  }

  /**
   * Subscribe to Search Result Click event
   */
  searchResultClick(handler: EventHandler): void {
    this.addEventListener(SEARCH_RESULT_CLICK, handler);
  }

  /**
   * Subscribe to Sign In event
   */
  signIn(
    handler: EventHandler,
    options?: ListenerOptions
  ): void {
    this.addEventListener(SIGN_IN, handler, options);
  }

  /**
   * Subscribe to Sign Out event
   */
  signOut(
    handler: EventHandler,
    options?: ListenerOptions
  ): void {
    this.addEventListener(SIGN_OUT, handler, options);
  }

  /**
   * Subscribe to Update Cart event
   */
  updateCart(handler: EventHandler): void {
    this.addEventListener(UPDATE_CART, handler);
  }
}
