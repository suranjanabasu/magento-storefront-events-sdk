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

export default class UnsubscribeManager extends Base {
  /**
   *  Unsubscribe from Add to Cart event
   */
  addToCart(handler: EventHandler): void {
    this.removeEventListener(ADD_TO_CART, handler);
  }

  /**
   * Unsubscribe from Custom Url event
   */
  customUrl(handler: EventHandler): void {
    this.removeEventListener(CUSTOM_URL, handler);
  }

  /**
   * Unsubscribe from Data Layer Change event
   */
  dataLayerChange(handler: EventHandler): void {
    this.removeEventListener(DATA_LAYER_CHANGE, handler);
  }

  /**
   * Unsubscribe from Data Layer Event event
   */
  dataLayerEvent(handler: EventHandler): void {
    this.removeEventListener(DATA_LAYER_EVENT, handler);
  }

  /**
   * Unsubscribe from Initiate Checkout event
   */
  initiateCheckout(handler: EventHandler): void {
    this.removeEventListener(INITIATE_CHECKOUT, handler);
  }

  /**
   * Unsubscribe from Page Activity Summary event
   */
  pageActivitySummary(handler: EventHandler): void {
    this.removeEventListener(PAGE_ACTIVITY_SUMMARY, handler);
  }

  /**
   * Unsubscribe from Page View event
   */
  pageView(handler: EventHandler): void {
    this.removeEventListener(PAGE_VIEW, handler);
  }

  /**
   * Unsubscribe from Place Order event
   */
  placeOrder(handler: EventHandler): void {
    this.removeEventListener(PLACE_ORDER, handler);
  }

  /**
   * Unsubscribe from Product Page View event
   */
  productPageView(handler: EventHandler): void {
    this.removeEventListener(PRODUCT_PAGE_VIEW, handler);
  }

  /**
   * Unsubscribe from Referrer Url event
   */
  referrerUrl(handler: EventHandler): void {
    this.removeEventListener(REFERRER_URL, handler);
  }

  /**
   * Unsubscribe from Remove from Cart event
   */
  removeFromCart(handler: EventHandler): void {
    this.removeEventListener(REMOVE_FROM_CART, handler);
  }

  /**
   * Unsubscribe from Search Request Sent event
   */
  searchRequestSent(handler: EventHandler): void {
    this.removeEventListener(SEARCH_REQUEST_SENT, handler);
  }

  /**
   * Unsubscribe from Search Response Received event
   */
  searchResponseReceived(handler: EventHandler): void {
    this.removeEventListener(SEARCH_RESPONSE_RECEIVED, handler);
  }

  /**
   * Unsubscribe from Search Result Click event
   */
  searchResultClick(handler: EventHandler): void {
    this.removeEventListener(SEARCH_RESULT_CLICK, handler);
  }

  /**
   * Unsubscribe from Sign In event
   */
  signIn(handler: EventHandler): void {
    this.removeEventListener(SIGN_IN, handler);
  }

  /**
   * Unsubscribe from Sign Out event
   */
  signOut(handler: EventHandler): void {
    this.removeEventListener(SIGN_OUT, handler);
  }

  /**
   * Unsubscribe from Update Cart event
   */
  updateCart(handler: EventHandler): void {
    this.removeEventListener(UPDATE_CART, handler);
  }
}
