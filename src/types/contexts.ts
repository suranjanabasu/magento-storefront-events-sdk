/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import contexts from "../contexts";

export type ContextName =
    | typeof contexts.CUSTOM_URL_CONTEXT
    | typeof contexts.MAGENTO_EXTENSION_CONTEXT
    | typeof contexts.ORDER_CONTEXT
    | typeof contexts.PAGE_OFFSET_CONTEXT
    | typeof contexts.PRODUCT_CONTEXT
    | typeof contexts.REFERRER_URL_CONTEXT
    | typeof contexts.SEARCH_INPUT_CONTEXT
    | typeof contexts.SEARCH_RESULTS_CONTEXT
    | typeof contexts.SHOPPER_CONTEXT
    | typeof contexts.SHOPPING_CART_CONTEXT
    | typeof contexts.STOREFRONT_INSTANCE_CONTEXT;

export type Context = {
    [K in ContextName]: unknown;
};

export type CustomContext = Record<string, unknown>;
