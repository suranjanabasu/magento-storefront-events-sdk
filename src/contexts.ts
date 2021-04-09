/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

const contexts = {
    CUSTOM_URL_CONTEXT: "customUrlContext" as const,
    MAGENTO_EXTENSION_CONTEXT: "magentoExtensionContext" as const,
    ORDER_CONTEXT: "orderContext" as const,
    PAGE_CONTEXT: "pageContext" as const,
    PRODUCT_CONTEXT: "productContext" as const,
    RECOMMENDATIONS_CONTEXT: "recommendationsContext" as const,
    REFERRER_URL_CONTEXT: "referrerUrlContext" as const,
    SEARCH_INPUT_CONTEXT: "searchInputContext" as const,
    SEARCH_RESULTS_CONTEXT: "searchResultsContext" as const,
    SHOPPER_CONTEXT: "shopperContext" as const,
    SHOPPING_CART_CONTEXT: "shoppingCartContext" as const,
    STOREFRONT_INSTANCE_CONTEXT: "storefrontInstanceContext" as const,
};

export default contexts;
