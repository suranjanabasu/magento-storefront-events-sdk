# Magento Storefront Events SDK

[![version][version-badge]][npm]
[![downloads][downloads-badge]][npm]
[![size][size-badge]][bundlephobia]
[![build][build-badge]][actions]
[![typescript][typescript-badge]][typescript]
[![contributing][contributing-badge]][contributing]

## Overview

This package serves as the foundation for eventing on a [Magento][magento] storefront. It provides access to a common data layer, and an event publishing and subscription service. Handling these events is up to you, but we provide the [Magento Storefront Event Collector][collector] package that can listen for events and send them to Magento for processing.

## Installation

This SDK can be used as a hosted script, or bundled in a JavaScript application. The script version is hosted on [unpkg][unpkg], and the bundled version is hosted on [npm][npm].

To load the SDK as a script, use the following snippet.

```
<script src="https://unpkg.com/@adobe/magento-storefront-events-sdk/dist/index.js"></script>
```

To install the script as a dependency, run this command.

```shell
npm install @adobe/magento-storefront-events-sdk
```

## Quick Start

Once imported, you have access to the four main functions of the Events SDK.

-   [Context][context] - set context data
-   [Publish][publish] - publish events
-   [Subscribe][subscribe] - subscribe to events
-   [Unsubscribe][unsubscribe] - unsubscribe from events

Below is a code example of how to get started.

> _IMPORTANT: Relevant context data must be populated before publishing events that require it._

```javascript
import mse from "@adobe/magento-storefront-events-sdk";

// subscribe to events
mse.subscribe.pageView(pageViewHandler);

// set context data
mse.context.setPage(/* page context */);

// publish events
mse.publish.pageView();

// unsubscribe from events
mse.unsubscribe.pageView(pageViewHandler);
```

## API Reference

The SDK API is broken down into four major parts: [Context][context], [Publish][publish], [Subscribe][subscribe], [Unsubscribe][unsubscribe].

### Context

These functions get and set context data.

#### `mse.context.getCategory`

Gets the `Category` context.

```javascript
mse.context.getCategory();
```

#### `mse.context.getCustomUrl`

Gets the `CustomUrl` context.

```javascript
mse.context.getCustomUrl();
```

#### `mse.context.getMagentoExtension`

Gets the `MagentoExtension` context.

```javascript
mse.context.getMagentoExtension();
```

#### `mse.context.getOrder`

Gets the `Order` context.

```javascript
mse.context.getOrder();
```

#### `mse.context.getPage`

Gets the `Page` context.

```javascript
mse.context.getPage();
```

#### `mse.context.getProduct`

Gets the `Product` context.

```javascript
mse.context.getProduct();
```

#### `mse.context.getRecommendations`

Gets the `Recommendations` context.

```javascript
mse.context.getRecommendations();
```

#### `mse.context.getReferrerUrl`

Gets the `ReferrerUrl` context.

```javascript
mse.context.getReferrerUrl();
```

#### `mse.context.getSearchInput`

Gets the `SearchInput` context.

```javascript
mse.context.getSearchInput();
```

#### `mse.context.getSearchResults`

Gets the `SearchResults` context.

```javascript
mse.context.getSearchResults();
```

#### `mse.context.getShopper`

Gets the `Shopper` context.

```javascript
mse.context.getShopper();
```

#### `mse.context.getShoppingCart`

Gets the `ShoppingCart` context.

```javascript
mse.context.getShoppingCart();
```

#### `mse.context.getStorefrontInstance`

Gets the `StorefrontInstance` context.

```javascript
mse.context.getStorefrontInstance();
```

#### `mse.context.getContext`

Gets a generic `Context`.

| Name   | Required | Description   |
| ------ | -------- | ------------- |
| `name` | Yes      | Context name. |

```javascript
mse.context.getContext(name);
```

#### `mse.context.setCategory`

Sets the `Category` context.

| Name      | Required | Description         |
| --------- | -------- | ------------------- |
| `context` | Yes      | `Category` context. |

```javascript
mse.context.setCategory(categoryCtx);
```

#### `mse.context.setCustomUrl`

Sets the `CustomUrl` context.

| Name      | Required | Description          |
| --------- | -------- | -------------------- |
| `context` | Yes      | `CustomUrl` context. |

```javascript
mse.context.setCustomUrl(customUrlCtx);
```

#### `mse.context.setMagentoExtension`

Sets the `MagentoExtension` context.

| Name      | Required | Description                 |
| --------- | -------- | --------------------------- |
| `context` | Yes      | `MagentoExtension` context. |

```javascript
mse.context.setMagentoExtension(magentoExtensionCtx);
```

#### `mse.context.setOrder`

Sets the `Order` context.

| Name      | Required | Description      |
| --------- | -------- | ---------------- |
| `context` | Yes      | `Order` context. |

```javascript
mse.context.setOrder(orderCtx);
```

#### `mse.context.setPage`

Sets the `Page` context.

| Name      | Required | Description     |
| --------- | -------- | --------------- |
| `context` | Yes      | `Page` context. |

```javascript
mse.context.setPage(pageCtx);
```

#### `mse.context.setProduct`

Sets the `Product` context.

| Name      | Required | Description        |
| --------- | -------- | ------------------ |
| `context` | Yes      | `Product` context. |

```javascript
mse.context.setProduct(productCtx);
```

#### `mse.context.setRecommendations`

Sets the `Recommendations` context.

| Name      | Required | Description                |
| --------- | -------- | -------------------------- |
| `context` | Yes      | `Recommendations` context. |

```javascript
mse.context.setRecommendations(recommendationsCtx);
```

#### `mse.context.setReferrerUrl`

Sets the `ReferrerUrl` context.

| Name      | Required | Description            |
| --------- | -------- | ---------------------- |
| `context` | Yes      | `ReferrerUrl` context. |

```javascript
mse.context.setReferrerUrl(referrerUrlCtx);
```

#### `mse.context.setSearchInput`

Sets the `SearchInput` context.

| Name      | Required | Description            |
| --------- | -------- | ---------------------- |
| `context` | Yes      | `SearchInput` context. |

```javascript
mse.context.setSearchInput(searchInputCtx);
```

#### `mse.context.setSearchResults`

Sets the `SearchResults` context.

| Name      | Required | Description              |
| --------- | -------- | ------------------------ |
| `context` | Yes      | `SearchResults` context. |

```javascript
mse.context.setSearchResults(searchResultsCtx);
```

#### `mse.context.setShopper`

Sets the `Shopper` context.

| Name      | Required | Description        |
| --------- | -------- | ------------------ |
| `context` | Yes      | `Shopper` context. |

```javascript
mse.context.setShopper(shopperCtx);
```

#### `mse.context.setShoppingCart`

Sets the `ShoppingCart` context.

| Name      | Required | Description             |
| --------- | -------- | ----------------------- |
| `context` | Yes      | `ShoppingCart` context. |

```javascript
mse.context.setShoppingCart(shoppingCartCtx);
```

#### `mse.context.setStorefrontInstance`

Sets the `StorefrontInstance` context.

| Name      | Required | Description                   |
| --------- | -------- | ----------------------------- |
| `context` | Yes      | `StorefrontInstance` context. |

```javascript
mse.context.setStorefrontInstance(storefrontCtx);
```

#### `mse.context.setContext`

Sets a generic `Context`.

| Name      | Required | Description      |
| --------- | -------- | ---------------- |
| `name`    | Yes      | Context name.    |
| `context` | Yes      | Generic context. |

```javascript
mse.context.setContext(ctx);
```

### Publish

These functions publish events which notify all of the subscribers.

#### `mse.publish.addToCart`

Publishes the `addToCart` event.

```javascript
mse.publish.addToCart();
```

#### `mse.publish.customUrl`

Publishes the `customUrl` event.

```javascript
mse.publish.customUrl();
```

#### `mse.publish.initiateCheckout`

Publishes the `initiateCheckout` event.

```javascript
mse.publish.initiateCheckout();
```

#### `mse.publish.instantPurchase`

Publishes the `instantPurchase` event.

```javascript
mse.publish.instantPurchase();
```

#### `mse.publish.pageActivitySummary`

Publishes the `pageActivitySummary` event.

```javascript
mse.publish.pageActivitySummary();
```

#### `mse.publish.pageView`

Publishes the `pageView` event.

```javascript
mse.publish.pageView();
```

#### `mse.publish.placeOrder`

Publishes the `placeOrder` event.

```javascript
mse.publish.placeOrder();
```

#### `mse.publish.productPageView`

Publishes the `productPageView` event.

```javascript
mse.publish.productPageView();
```

#### `mse.publish.recsItemAddToCartClick`

Publishes the `recsItemAddToCartClick` event.

```javascript
mse.publish.recsItemAddToCartClick();
```

#### `mse.publish.recsItemClick`

Publishes the `recsItemClick` event.

```javascript
mse.publish.recsItemClick();
```

#### `mse.publish.recsRequestSent`

Publishes the `recsRequestSent` event.

```javascript
mse.publish.recsRequestSent();
```

#### `mse.publish.recsResponseReceived`

Publishes the `recsResponseReceived` event.

```javascript
mse.publish.recsResponseReceived();
```

#### `mse.publish.recsUnitRender`

Publishes the `recsUnitRender` event.

```javascript
mse.publish.recsUnitRender();
```

#### `mse.publish.recsUnitView`

Publishes the `recsUnitView` event.

```javascript
mse.publish.recsUnitView();
```

#### `mse.publish.referrerUrl`

Publishes the `referrerUrl` event.

```javascript
mse.publish.referrerUrl();
```

#### `mse.publish.removeFromCart`

Publishes the `removeFromCart` event.

```javascript
mse.publish.removeFromCart();
```

#### `mse.publish.searchCategoryClick`

Publishes the `searchCategoryClick` event.

```javascript
mse.publish.searchCategoryClick();
```

#### `mse.publish.searchProductClick`

Publishes the `searchProductClick` event.

```javascript
mse.publish.searchProductClick();
```

#### `mse.publish.searchRequestSent`

Publishes the `searchRequestSent` event.

```javascript
mse.publish.searchRequestSent();
```

#### `mse.publish.searchResponseReceived`

Publishes the `searchResponseReceived` event.

```javascript
mse.publish.searchResponseReceived();
```

#### `mse.publish.searchResultsView`

Publishes the `searchResultsView` event.

```javascript
mse.publish.searchResultsView();
```

#### `mse.publish.searchSuggestionClick`

Publishes the `searchSuggestionClick` event.

```javascript
mse.publish.searchSuggestionClick();
```

#### `mse.publish.shoppingCartView`

Publishes the `shoppingCartView` event.

```javascript
mse.publish.shoppingCartView();
```

#### `mse.publish.signIn`

Publishes the `signIn` event.

```javascript
mse.publish.signIn();
```

#### `mse.publish.signOut`

Publishes the `signOut` event.

```javascript
mse.publish.signOut();
```

#### `mse.publish.updateCart`

Publishes the `updateCart` event.

```javascript
mse.publish.updateCart();
```

### Subscribe

These functions subscribe to events.

#### `mse.subscribe.addToCart`

Subscribes to the `addToCart` event.

```javascript
mse.subscribe.addToCart();
```

#### `mse.subscribe.customUrl`

Subscribes to the `customUrl` event.

```javascript
mse.subscribe.customUrl();
```

#### `mse.subscribe.dataLayerChange`

Subscribes to the `dataLayerChange` event.

```javascript
mse.subscribe.dataLayerChange();
```

#### `mse.subscribe.dataLayerEvent`

Subscribes to the `dataLayerEvent` event.

```javascript
mse.subscribe.dataLayerEvent();
```

#### `mse.subscribe.initiateCheckout`

Subscribes to the `initiateCheckout` event.

```javascript
mse.subscribe.initiateCheckout();
```

#### `mse.subscribe.instantPurchase`

Subscribes to the `instantPurchase` event.

```javascript
mse.subscribe.instantPurchase();
```

#### `mse.subscribe.pageActivitySummary`

Subscribes to the `pageActivitySummary` event.

```javascript
mse.subscribe.pageActivitySummary();
```

#### `mse.subscribe.pageView`

Subscribes to the `pageView` event.

```javascript
mse.subscribe.pageView();
```

#### `mse.subscribe.placeOrder`

Subscribes to the `placeOrder` event.

```javascript
mse.subscribe.placeOrder();
```

#### `mse.subscribe.productPageView`

Subscribes to the `productPageView` event.

```javascript
mse.subscribe.productPageView();
```

#### `mse.subscribe.recsItemAddToCartClick`

Subscribes to the `recsItemAddToCartClick` event.

```javascript
mse.subscribe.recsItemAddToCartClick();
```

#### `mse.subscribe.recsItemClick`

Subscribes to the `recsItemClick` event.

```javascript
mse.subscribe.recsItemClick();
```

#### `mse.subscribe.recsRequestSent`

Subscribes to the `recsRequestSent` event.

```javascript
mse.subscribe.recsRequestSent();
```

#### `mse.subscribe.recsResponseReceived`

Subscribes to the `recsResponseReceived` event.

```javascript
mse.subscribe.recsResponseReceived();
```

#### `mse.subscribe.recsUnitRender`

Subscribes to the `recsUnitRender` event.

```javascript
mse.subscribe.recsUnitRender();
```

#### `mse.subscribe.recsUnitView`

Subscribes to the `recsUnitView` event.

```javascript
mse.subscribe.recsUnitView();
```

#### `mse.subscribe.referrerUrl`

Subscribes to the `referrerUrl` event.

```javascript
mse.subscribe.referrerUrl();
```

#### `mse.subscribe.removeFromCart`

Subscribes to the `removeFromCart` event.

```javascript
mse.subscribe.removeFromCart();
```

#### `mse.subscribe.searchCategoryClick`

Subscribes to the `searchCategoryClick` event.

```javascript
mse.subscribe.searchCategoryClick();
```

#### `mse.subscribe.searchProductClick`

Subscribes to the `searchProductClick` event.

```javascript
mse.subscribe.searchProductClick();
```

#### `mse.subscribe.searchRequestSent`

Subscribes to the `searchRequestSent` event.

```javascript
mse.subscribe.searchRequestSent();
```

#### `mse.subscribe.searchResponseReceived`

Subscribes to the `searchResponseReceived` event.

```javascript
mse.subscribe.searchResponseReceived();
```

#### `mse.subscribe.searchResultsView`

Subscribes to the `searchResultsView` event.

```javascript
mse.subscribe.searchResultsView();
```

#### `mse.subscribe.searchSuggestionClick`

Subscribes to the `searchSuggestionClick` event.

```javascript
mse.subscribe.searchSuggestionClick();
```

#### `mse.subscribe.shoppingCartView`

Subscribes to the `shoppingCartView` event.

```javascript
mse.subscribe.shoppingCartView();
```

#### `mse.subscribe.signIn`

Subscribes to the `signIn` event.

```javascript
mse.subscribe.signIn();
```

#### `mse.subscribe.signOut`

Subscribes to the `signOut` event.

```javascript
mse.subscribe.signOut();
```

#### `mse.subscribe.updateCart`

Subscribes to the `updateCart` event.

```javascript
mse.subscribe.updateCart();
```

### Unsubscribe

These functions unsubscribe from events.

#### `mse.unsubscribe.addToCart`

Unsubscribes from the `addToCart` event.

```javascript
mse.unsubscribe.addToCart();
```

#### `mse.unsubscribe.customUrl`

Unsubscribes from the `customUrl` event.

```javascript
mse.unsubscribe.customUrl();
```

#### `mse.unsubscribe.dataLayerChange`

Unsubscribes from the `dataLayerChange` event.

```javascript
mse.unsubscribe.dataLayerChange();
```

#### `mse.unsubscribe.dataLayerEvent`

Unsubscribes from the `dataLayerEvent` event.

```javascript
mse.unsubscribe.dataLayerEvent();
```

#### `mse.unsubscribe.initiateCheckout`

Unsubscribes from the `initiateCheckout` event.

```javascript
mse.unsubscribe.initiateCheckout();
```

#### `mse.unsubscribe.instantPurchase`

Unsubscribes from the `instantPurchase` event.

```javascript
mse.unsubscribe.instantPurchase();
```

#### `mse.unsubscribe.pageActivitySummary`

Unsubscribes from the `pageActivitySummary` event.

```javascript
mse.unsubscribe.pageActivitySummary();
```

#### `mse.unsubscribe.pageView`

Unsubscribes from the `pageView` event.

```javascript
mse.unsubscribe.pageView();
```

#### `mse.unsubscribe.placeOrder`

Unsubscribes from the `placeOrder` event.

```javascript
mse.unsubscribe.placeOrder();
```

#### `mse.unsubscribe.productPageView`

Unsubscribes from the `productPageView` event.

```javascript
mse.unsubscribe.productPageView();
```

#### `mse.unsubscribe.recsItemAddToCartClick`

Unsubscribes from the `recsItemAddToCartClick` event.

```javascript
mse.unsubscribe.recsItemAddToCartClick();
```

#### `mse.unsubscribe.recsItemClick`

Unsubscribes from the `recsItemClick` event.

```javascript
mse.unsubscribe.recsItemClick();
```

#### `mse.unsubscribe.recsRequestSent`

Unsubscribes from the `recsRequestSent` event.

```javascript
mse.unsubscribe.recsRequestSent();
```

#### `mse.unsubscribe.recsResponseReceived`

Unsubscribes from the `recsResponseReceived` event.

```javascript
mse.unsubscribe.recsResponseReceived();
```

#### `mse.unsubscribe.recsUnitRender`

Unsubscribes from the `recsUnitRender` event.

```javascript
mse.unsubscribe.recsUnitRender();
```

#### `mse.unsubscribe.recsUnitView`

Unsubscribes from the `recsUnitView` event.

```javascript
mse.unsubscribe.recsUnitView();
```

#### `mse.unsubscribe.referrerUrl`

Unsubscribes from the `referrerUrl` event.

```javascript
mse.unsubscribe.referrerUrl();
```

#### `mse.unsubscribe.removeFromCart`

Unsubscribes from the `removeFromCart` event.

```javascript
mse.unsubscribe.removeFromCart();
```

#### `mse.unsubscribe.searchCategoryClick`

Unsubscribes from the `searchCategoryClick` event.

```javascript
mse.unsubscribe.searchCategoryClick();
```

#### `mse.unsubscribe.searchProductClick`

Unsubscribes from the `searchProductClick` event.

```javascript
mse.unsubscribe.searchProductClick();
```

#### `mse.unsubscribe.searchRequestSent`

Unsubscribes from the `searchRequestSent` event.

```javascript
mse.unsubscribe.searchRequestSent();
```

#### `mse.unsubscribe.searchResponseReceived`

Unsubscribes from the `searchResponseReceived` event.

```javascript
mse.unsubscribe.searchResponseReceived();
```

#### `mse.unsubscribe.searchResultsView`

Unsubscribes from the `searchResultsView` event.

```javascript
mse.unsubscribe.searchResultsView();
```

#### `mse.unsubscribe.searchSuggestionClick`

Unsubscribes from the `searchSuggestionClick` event.

```javascript
mse.unsubscribe.searchSuggestionClick();
```

#### `mse.unsubscribe.shoppingCartView`

Unsubscribes from the `shoppingCartView` event.

```javascript
mse.unsubscribe.shoppingCartView();
```

#### `mse.unsubscribe.signIn`

Unsubscribes from the `signIn` event.

```javascript
mse.unsubscribe.signIn();
```

#### `mse.unsubscribe.signOut`

Unsubscribes from the `signOut` event.

```javascript
mse.unsubscribe.signOut();
```

#### `mse.unsubscribe.updateCart`

Unsubscribes from the `updateCart` event.

```javascript
mse.unsubscribe.updateCart();
```

## Support

If you have any questions or encounter any issues, please reach out at these locations.

-   [GitHub][issues]
-   [Zendesk][zendesk]

[npm]: https://npmjs.com/package/@adobe/magento-storefront-events-sdk
[version-badge]: https://img.shields.io/npm/v/@adobe/magento-storefront-events-sdk.svg?style=flat-square
[downloads-badge]: https://img.shields.io/npm/dt/@adobe/magento-storefront-events-sdk?style=flat-square
[bundlephobia]: https://bundlephobia.com/result?p=@adobe/magento-storefront-events-sdk
[size-badge]: https://img.shields.io/bundlephobia/minzip/@adobe/magento-storefront-events-sdk?style=flat-square
[actions]: https://github.com/adobe/magento-storefront-events-sdk/actions
[build-badge]: https://img.shields.io/github/workflow/status/adobe/magento-storefront-events-sdk/publish-latest?style=flat-square
[typescript]: https://typescriptlang.org/dt/search?search=%40adobe%2Fmagento-storefront-events-sdk
[typescript-badge]: https://img.shields.io/npm/types/@adobe/magento-storefront-events-sdk?style=flat-square
[contributing]: https://github.com/adobe/magento-storefront-events-sdk/blob/main/.github/CONTRIBUTING.md
[contributing-badge]: https://img.shields.io/badge/PRs-welcome-success?style=flat-square
[magento]: https://magento.com
[collector]: https://github.com/adobe/magento-storefront-event-collector
[unpkg]: https://unpkg.com/@adobe/magento-storefront-events-sdk/dist/index.js
[npm]: https://npmjs.com/package/@adobe/magento-storefront-events-sdk
[context]: #context
[publish]: #publish
[subscribe]: #subscribe
[unsubscribe]: #unsubscribe
[issues]: https://github.com/adobe/magento-storefront-events-sdk/issues
[zendesk]: https://account.magento.com/zendesk/login
