/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import { CustomContext, Context } from "./contexts";

export const ADD_TO_CART = "add-to-cart";
export const CUSTOM_URL = "custom-url";
export const DATA_LAYER_CHANGE = "adobeDataLayer:change";
export const DATA_LAYER_EVENT = "adobeDataLayer:event";
export const INITIATE_CHECKOUT = "initiate-checkout";
export const PAGE_ACTIVITY_SUMMARY = "page-activity-summary";
export const PAGE_VIEW = "page-view";
export const PLACE_ORDER = "place-order";
export const PRODUCT_PAGE_VIEW = "product-page-view";
export const RECS_ITEM_CLICK = "recs-item-click";
export const RECS_ITEM_ADD_TO_CART_CLICK = "recs-item-add-to-cart-click";
export const RECS_REQUEST_SENT = "recs-api-request-sent";
export const RECS_RESPONSE_RECEIVED = "recs-api-response-received";
export const RECS_UNIT_RENDER = "recs-unit-impression-render";
export const RECS_UNIT_VIEW = "recs-unit-view";
export const REFERRER_URL = "referrer-url";
export const REMOVE_FROM_CART = "remove-from-cart";
export const SEARCH_REQUEST_SENT = "search-request-sent";
export const SEARCH_RESPONSE_RECEIVED = "search-response-received";
export const SEARCH_RESULT_CLICK = "search-result-click";
export const SIGN_IN = "sign-in";
export const SIGN_OUT = "sign-out";
export const UPDATE_CART = "update-cart";

export type EventName =
    | typeof ADD_TO_CART
    | typeof CUSTOM_URL
    | typeof DATA_LAYER_CHANGE
    | typeof DATA_LAYER_EVENT
    | typeof INITIATE_CHECKOUT
    | typeof PAGE_ACTIVITY_SUMMARY
    | typeof PAGE_VIEW
    | typeof PLACE_ORDER
    | typeof PRODUCT_PAGE_VIEW
    | typeof RECS_ITEM_CLICK
    | typeof RECS_ITEM_ADD_TO_CART_CLICK
    | typeof RECS_REQUEST_SENT
    | typeof RECS_RESPONSE_RECEIVED
    | typeof RECS_UNIT_RENDER
    | typeof RECS_UNIT_VIEW
    | typeof REFERRER_URL
    | typeof REMOVE_FROM_CART
    | typeof SEARCH_REQUEST_SENT
    | typeof SEARCH_RESPONSE_RECEIVED
    | typeof SEARCH_RESULT_CLICK
    | typeof SIGN_IN
    | typeof SIGN_OUT
    | typeof UPDATE_CART;

export type Event = {
    event: EventName;
    eventInfo: Context & CustomContext;
};

export type EventHandler = (event: Event) => void;

export type ListenerOptions = {
    path?: string;
    scope?: "past" | "future" | "all";
};
