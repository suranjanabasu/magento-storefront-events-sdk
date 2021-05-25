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

Gets a custom `Context`.

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

Sets a custom `Context`.

| Name      | Required | Description     |
| --------- | -------- | --------------- |
| `name`    | Yes      | Context name.   |
| `context` | Yes      | Custom context. |

```javascript
mse.context.setContext(ctx);
```

### Publish

These functions publish events which notify all of the subscribers.

#### `mse.publish.addToCart`

Publishes the `addToCart` event.

| Name      | Required | Description     |
| --------- | -------- | --------------- |
| `context` | No       | Custom context. |

```javascript
mse.publish.addToCart(ctx);
```

#### `mse.publish.customUrl`

Publishes the `customUrl` event.

| Name      | Required | Description     |
| --------- | -------- | --------------- |
| `context` | No       | Custom context. |

```javascript
mse.publish.customUrl(ctx);
```

#### `mse.publish.initiateCheckout`

Publishes the `initiateCheckout` event.

| Name      | Required | Description     |
| --------- | -------- | --------------- |
| `context` | No       | Custom context. |

```javascript
mse.publish.initiateCheckout(ctx);
```

#### `mse.publish.instantPurchase`

Publishes the `instantPurchase` event.

| Name      | Required | Description     |
| --------- | -------- | --------------- |
| `context` | No       | Custom context. |

```javascript
mse.publish.instantPurchase(ctx);
```

#### `mse.publish.pageActivitySummary`

Publishes the `pageActivitySummary` event.

| Name      | Required | Description     |
| --------- | -------- | --------------- |
| `context` | No       | Custom context. |

```javascript
mse.publish.pageActivitySummary(ctx);
```

#### `mse.publish.pageView`

Publishes the `pageView` event.

| Name      | Required | Description     |
| --------- | -------- | --------------- |
| `context` | No       | Custom context. |

```javascript
mse.publish.pageView(ctx);
```

#### `mse.publish.placeOrder`

Publishes the `placeOrder` event.

| Name      | Required | Description     |
| --------- | -------- | --------------- |
| `context` | No       | Custom context. |

```javascript
mse.publish.placeOrder(ctx);
```

#### `mse.publish.productPageView`

Publishes the `productPageView` event.

| Name      | Required | Description     |
| --------- | -------- | --------------- |
| `context` | No       | Custom context. |

```javascript
mse.publish.productPageView(ctx);
```

#### `mse.publish.recsItemAddToCartClick`

Publishes the `recsItemAddToCartClick` event.

| Name        | Required | Description              |
| ----------- | -------- | ------------------------ |
| `unitId`    | Yes      | Recommendations unit id. |
| `productId` | Yes      | Recommended product id.  |
| `context`   | No       | Custom context.          |

```javascript
mse.publish.recsItemAddToCartClick(unitId, productId, ctx);
```

#### `mse.publish.recsItemClick`

Publishes the `recsItemClick` event.

| Name        | Required | Description              |
| ----------- | -------- | ------------------------ |
| `unitId`    | Yes      | Recommendations unit id. |
| `productId` | Yes      | Recommended product id.  |
| `context`   | No       | Custom context.          |

```javascript
mse.publish.recsItemClick(unitId, productId, ctx);
```

#### `mse.publish.recsRequestSent`

Publishes the `recsRequestSent` event.

| Name      | Required | Description     |
| --------- | -------- | --------------- |
| `context` | No       | Custom context. |

```javascript
mse.publish.recsRequestSent(ctx);
```

#### `mse.publish.recsResponseReceived`

Publishes the `recsResponseReceived` event.

| Name      | Required | Description     |
| --------- | -------- | --------------- |
| `context` | No       | Custom context. |

```javascript
mse.publish.recsResponseReceived(ctx);
```

#### `mse.publish.recsUnitRender`

Publishes the `recsUnitRender` event.

| Name      | Required | Description              |
| --------- | -------- | ------------------------ |
| `unitId`  | Yes      | Recommendations unit id. |
| `context` | No       | Custom context.          |

```javascript
mse.publish.recsUnitRender(unitId, ctx);
```

#### `mse.publish.recsUnitView`

Publishes the `recsUnitView` event.

| Name      | Required | Description              |
| --------- | -------- | ------------------------ |
| `unitId`  | Yes      | Recommendations unit id. |
| `context` | No       | Custom context.          |

```javascript
mse.publish.recsUnitView(unitId, ctx);
```

#### `mse.publish.referrerUrl`

Publishes the `referrerUrl` event.

| Name      | Required | Description     |
| --------- | -------- | --------------- |
| `context` | No       | Custom context. |

```javascript
mse.publish.referrerUrl(ctx);
```

#### `mse.publish.removeFromCart`

Publishes the `removeFromCart` event.

| Name      | Required | Description     |
| --------- | -------- | --------------- |
| `context` | No       | Custom context. |

```javascript
mse.publish.removeFromCart(ctx);
```

#### `mse.publish.searchCategoryClick`

Publishes the `searchCategoryClick` event.

| Name           | Required | Description     |
| -------------- | -------- | --------------- |
| `searchUnitId` | Yes      | Search unit id. |
| `name`         | Yes      | Category name.  |
| `context`      | No       | Custom context. |

```javascript
mse.publish.searchCategoryClick(searchUnitId, name, ctx);
```

#### `mse.publish.searchProductClick`

Publishes the `searchProductClick` event.

| Name           | Required | Description     |
| -------------- | -------- | --------------- |
| `searchUnitId` | Yes      | Search unit id. |
| `sku`          | Yes      | Product sku.    |
| `context`      | No       | Custom context. |

```javascript
mse.publish.searchProductClick(searchUnitId, sku, ctx);
```

#### `mse.publish.searchRequestSent`

Publishes the `searchRequestSent` event.

| Name           | Required | Description     |
| -------------- | -------- | --------------- |
| `searchUnitId` | Yes      | Search unit id. |
| `context`      | No       | Custom context. |

```javascript
mse.publish.searchRequestSent(searchUnitId, ctx);
```

#### `mse.publish.searchResponseReceived`

Publishes the `searchResponseReceived` event.

| Name           | Required | Description     |
| -------------- | -------- | --------------- |
| `searchUnitId` | Yes      | Search unit id. |
| `context`      | No       | Custom context. |

```javascript
mse.publish.searchResponseReceived(searchUnitId, ctx);
```

#### `mse.publish.searchResultsView`

Publishes the `searchResultsView` event.

| Name           | Required | Description     |
| -------------- | -------- | --------------- |
| `searchUnitId` | Yes      | Search unit id. |
| `context`      | No       | Custom context. |

```javascript
mse.publish.searchResultsView(searchUnitId, ctx);
```

#### `mse.publish.searchSuggestionClick`

Publishes the `searchSuggestionClick` event.

| Name           | Required | Description       |
| -------------- | -------- | ----------------- |
| `searchUnitId` | Yes      | Search unit id.   |
| `suggestion`   | Yes      | Query suggestion. |
| `context`      | No       | Custom context.   |

```javascript
mse.publish.searchSuggestionClick(searchUnitId, suggestion, ctx);
```

#### `mse.publish.shoppingCartView`

Publishes the `shoppingCartView` event.

| Name      | Required | Description     |
| --------- | -------- | --------------- |
| `context` | No       | Custom context. |

```javascript
mse.publish.shoppingCartView(ctx);
```

#### `mse.publish.signIn`

Publishes the `signIn` event.

| Name      | Required | Description     |
| --------- | -------- | --------------- |
| `context` | No       | Custom context. |

```javascript
mse.publish.signIn(ctx);
```

#### `mse.publish.signOut`

Publishes the `signOut` event.

| Name      | Required | Description     |
| --------- | -------- | --------------- |
| `context` | No       | Custom context. |

```javascript
mse.publish.signOut(ctx);
```

#### `mse.publish.updateCart`

Publishes the `updateCart` event.

| Name      | Required | Description     |
| --------- | -------- | --------------- |
| `context` | No       | Custom context. |

```javascript
mse.publish.updateCart(ctx);
```

### Subscribe

These functions subscribe to events.

#### `mse.subscribe.addToCart`

Subscribes to the `addToCart` event.

| Name      | Required | Description       |
| --------- | -------- | ----------------- |
| `handler` | Yes      | Event handler.    |
| `options` | No       | Listener options. |

```javascript
mse.subscribe.addToCart(handler, options);
```

#### `mse.subscribe.customUrl`

Subscribes to the `customUrl` event.

| Name      | Required | Description       |
| --------- | -------- | ----------------- |
| `handler` | Yes      | Event handler.    |
| `options` | No       | Listener options. |

```javascript
mse.subscribe.customUrl(handler, options);
```

#### `mse.subscribe.dataLayerChange`

Subscribes to the `dataLayerChange` event.

| Name      | Required | Description       |
| --------- | -------- | ----------------- |
| `handler` | Yes      | Event handler.    |
| `options` | No       | Listener options. |

```javascript
mse.subscribe.dataLayerChange(handler, options);
```

#### `mse.subscribe.dataLayerEvent`

Subscribes to the `dataLayerEvent` event.

| Name      | Required | Description       |
| --------- | -------- | ----------------- |
| `handler` | Yes      | Event handler.    |
| `options` | No       | Listener options. |

```javascript
mse.subscribe.dataLayerEvent(handler, options);
```

#### `mse.subscribe.initiateCheckout`

Subscribes to the `initiateCheckout` event.

| Name      | Required | Description       |
| --------- | -------- | ----------------- |
| `handler` | Yes      | Event handler.    |
| `options` | No       | Listener options. |

```javascript
mse.subscribe.initiateCheckout(handler, options);
```

#### `mse.subscribe.instantPurchase`

Subscribes to the `instantPurchase` event.

| Name      | Required | Description       |
| --------- | -------- | ----------------- |
| `handler` | Yes      | Event handler.    |
| `options` | No       | Listener options. |

```javascript
mse.subscribe.instantPurchase(handler, options);
```

#### `mse.subscribe.pageActivitySummary`

Subscribes to the `pageActivitySummary` event.

| Name      | Required | Description       |
| --------- | -------- | ----------------- |
| `handler` | Yes      | Event handler.    |
| `options` | No       | Listener options. |

```javascript
mse.subscribe.pageActivitySummary(handler, options);
```

#### `mse.subscribe.pageView`

Subscribes to the `pageView` event.

| Name      | Required | Description       |
| --------- | -------- | ----------------- |
| `handler` | Yes      | Event handler.    |
| `options` | No       | Listener options. |

```javascript
mse.subscribe.pageView(handler, options);
```

#### `mse.subscribe.placeOrder`

Subscribes to the `placeOrder` event.

| Name      | Required | Description       |
| --------- | -------- | ----------------- |
| `handler` | Yes      | Event handler.    |
| `options` | No       | Listener options. |

```javascript
mse.subscribe.placeOrder(handler, options);
```

#### `mse.subscribe.productPageView`

Subscribes to the `productPageView` event.

| Name      | Required | Description       |
| --------- | -------- | ----------------- |
| `handler` | Yes      | Event handler.    |
| `options` | No       | Listener options. |

```javascript
mse.subscribe.productPageView(handler, options);
```

#### `mse.subscribe.recsItemAddToCartClick`

Subscribes to the `recsItemAddToCartClick` event.

| Name      | Required | Description       |
| --------- | -------- | ----------------- |
| `handler` | Yes      | Event handler.    |
| `options` | No       | Listener options. |

```javascript
mse.subscribe.recsItemAddToCartClick(handler, options);
```

#### `mse.subscribe.recsItemClick`

Subscribes to the `recsItemClick` event.

| Name      | Required | Description       |
| --------- | -------- | ----------------- |
| `handler` | Yes      | Event handler.    |
| `options` | No       | Listener options. |

```javascript
mse.subscribe.recsItemClick(handler, options);
```

#### `mse.subscribe.recsRequestSent`

Subscribes to the `recsRequestSent` event.

| Name      | Required | Description       |
| --------- | -------- | ----------------- |
| `handler` | Yes      | Event handler.    |
| `options` | No       | Listener options. |

```javascript
mse.subscribe.recsRequestSent(handler, options);
```

#### `mse.subscribe.recsResponseReceived`

Subscribes to the `recsResponseReceived` event.

| Name      | Required | Description       |
| --------- | -------- | ----------------- |
| `handler` | Yes      | Event handler.    |
| `options` | No       | Listener options. |

```javascript
mse.subscribe.recsResponseReceived(handler, options);
```

#### `mse.subscribe.recsUnitRender`

Subscribes to the `recsUnitRender` event.

| Name      | Required | Description       |
| --------- | -------- | ----------------- |
| `handler` | Yes      | Event handler.    |
| `options` | No       | Listener options. |

```javascript
mse.subscribe.recsUnitRender(handler, options);
```

#### `mse.subscribe.recsUnitView`

Subscribes to the `recsUnitView` event.

| Name      | Required | Description       |
| --------- | -------- | ----------------- |
| `handler` | Yes      | Event handler.    |
| `options` | No       | Listener options. |

```javascript
mse.subscribe.recsUnitView(handler, options);
```

#### `mse.subscribe.referrerUrl`

Subscribes to the `referrerUrl` event.

| Name      | Required | Description       |
| --------- | -------- | ----------------- |
| `handler` | Yes      | Event handler.    |
| `options` | No       | Listener options. |

```javascript
mse.subscribe.referrerUrl(handler, options);
```

#### `mse.subscribe.removeFromCart`

Subscribes to the `removeFromCart` event.

| Name      | Required | Description       |
| --------- | -------- | ----------------- |
| `handler` | Yes      | Event handler.    |
| `options` | No       | Listener options. |

```javascript
mse.subscribe.removeFromCart(handler, options);
```

#### `mse.subscribe.searchCategoryClick`

Subscribes to the `searchCategoryClick` event.

| Name      | Required | Description       |
| --------- | -------- | ----------------- |
| `handler` | Yes      | Event handler.    |
| `options` | No       | Listener options. |

```javascript
mse.subscribe.searchCategoryClick(handler, options);
```

#### `mse.subscribe.searchProductClick`

Subscribes to the `searchProductClick` event.

| Name      | Required | Description       |
| --------- | -------- | ----------------- |
| `handler` | Yes      | Event handler.    |
| `options` | No       | Listener options. |

```javascript
mse.subscribe.searchProductClick(handler, options);
```

#### `mse.subscribe.searchRequestSent`

Subscribes to the `searchRequestSent` event.

| Name      | Required | Description       |
| --------- | -------- | ----------------- |
| `handler` | Yes      | Event handler.    |
| `options` | No       | Listener options. |

```javascript
mse.subscribe.searchRequestSent(handler, options);
```

#### `mse.subscribe.searchResponseReceived`

Subscribes to the `searchResponseReceived` event.

| Name      | Required | Description       |
| --------- | -------- | ----------------- |
| `handler` | Yes      | Event handler.    |
| `options` | No       | Listener options. |

```javascript
mse.subscribe.searchResponseReceived(handler, options);
```

#### `mse.subscribe.searchResultsView`

Subscribes to the `searchResultsView` event.

| Name      | Required | Description       |
| --------- | -------- | ----------------- |
| `handler` | Yes      | Event handler.    |
| `options` | No       | Listener options. |

```javascript
mse.subscribe.searchResultsView(handler, options);
```

#### `mse.subscribe.searchSuggestionClick`

Subscribes to the `searchSuggestionClick` event.

| Name      | Required | Description       |
| --------- | -------- | ----------------- |
| `handler` | Yes      | Event handler.    |
| `options` | No       | Listener options. |

```javascript
mse.subscribe.searchSuggestionClick(handler, options);
```

#### `mse.subscribe.shoppingCartView`

Subscribes to the `shoppingCartView` event.

| Name      | Required | Description       |
| --------- | -------- | ----------------- |
| `handler` | Yes      | Event handler.    |
| `options` | No       | Listener options. |

```javascript
mse.subscribe.shoppingCartView(handler, options);
```

#### `mse.subscribe.signIn`

Subscribes to the `signIn` event.

| Name      | Required | Description       |
| --------- | -------- | ----------------- |
| `handler` | Yes      | Event handler.    |
| `options` | No       | Listener options. |

```javascript
mse.subscribe.signIn(handler, options);
```

#### `mse.subscribe.signOut`

Subscribes to the `signOut` event.

| Name      | Required | Description       |
| --------- | -------- | ----------------- |
| `handler` | Yes      | Event handler.    |
| `options` | No       | Listener options. |

```javascript
mse.subscribe.signOut(handler, options);
```

#### `mse.subscribe.updateCart`

Subscribes to the `updateCart` event.

| Name      | Required | Description       |
| --------- | -------- | ----------------- |
| `handler` | Yes      | Event handler.    |
| `options` | No       | Listener options. |

```javascript
mse.subscribe.updateCart(handler, options);
```

### Unsubscribe

These functions unsubscribe from events.

#### `mse.unsubscribe.addToCart`

Unsubscribes from the `addToCart` event.

| Name      | Required | Description    |
| --------- | -------- | -------------- |
| `handler` | Yes      | Event handler. |

```javascript
mse.unsubscribe.addToCart(handler);
```

#### `mse.unsubscribe.customUrl`

Unsubscribes from the `customUrl` event.

| Name      | Required | Description    |
| --------- | -------- | -------------- |
| `handler` | Yes      | Event handler. |

```javascript
mse.unsubscribe.customUrl(handler);
```

#### `mse.unsubscribe.dataLayerChange`

Unsubscribes from the `dataLayerChange` event.

| Name      | Required | Description    |
| --------- | -------- | -------------- |
| `handler` | Yes      | Event handler. |

```javascript
mse.unsubscribe.dataLayerChange(handler);
```

#### `mse.unsubscribe.dataLayerEvent`

Unsubscribes from the `dataLayerEvent` event.

| Name      | Required | Description    |
| --------- | -------- | -------------- |
| `handler` | Yes      | Event handler. |

```javascript
mse.unsubscribe.dataLayerEvent(handler);
```

#### `mse.unsubscribe.initiateCheckout`

Unsubscribes from the `initiateCheckout` event.

| Name      | Required | Description    |
| --------- | -------- | -------------- |
| `handler` | Yes      | Event handler. |

```javascript
mse.unsubscribe.initiateCheckout(handler);
```

#### `mse.unsubscribe.instantPurchase`

Unsubscribes from the `instantPurchase` event.

| Name      | Required | Description    |
| --------- | -------- | -------------- |
| `handler` | Yes      | Event handler. |

```javascript
mse.unsubscribe.instantPurchase(handler);
```

#### `mse.unsubscribe.pageActivitySummary`

Unsubscribes from the `pageActivitySummary` event.

| Name      | Required | Description    |
| --------- | -------- | -------------- |
| `handler` | Yes      | Event handler. |

```javascript
mse.unsubscribe.pageActivitySummary(handler);
```

#### `mse.unsubscribe.pageView`

Unsubscribes from the `pageView` event.

| Name      | Required | Description    |
| --------- | -------- | -------------- |
| `handler` | Yes      | Event handler. |

```javascript
mse.unsubscribe.pageView(handler);
```

#### `mse.unsubscribe.placeOrder`

Unsubscribes from the `placeOrder` event.

| Name      | Required | Description    |
| --------- | -------- | -------------- |
| `handler` | Yes      | Event handler. |

```javascript
mse.unsubscribe.placeOrder(handler);
```

#### `mse.unsubscribe.productPageView`

Unsubscribes from the `productPageView` event.

| Name      | Required | Description    |
| --------- | -------- | -------------- |
| `handler` | Yes      | Event handler. |

```javascript
mse.unsubscribe.productPageView(handler);
```

#### `mse.unsubscribe.recsItemAddToCartClick`

Unsubscribes from the `recsItemAddToCartClick` event.

| Name      | Required | Description    |
| --------- | -------- | -------------- |
| `handler` | Yes      | Event handler. |

```javascript
mse.unsubscribe.recsItemAddToCartClick(handler);
```

#### `mse.unsubscribe.recsItemClick`

Unsubscribes from the `recsItemClick` event.

| Name      | Required | Description    |
| --------- | -------- | -------------- |
| `handler` | Yes      | Event handler. |

```javascript
mse.unsubscribe.recsItemClick(handler);
```

#### `mse.unsubscribe.recsRequestSent`

Unsubscribes from the `recsRequestSent` event.

| Name      | Required | Description    |
| --------- | -------- | -------------- |
| `handler` | Yes      | Event handler. |

```javascript
mse.unsubscribe.recsRequestSent(handler);
```

#### `mse.unsubscribe.recsResponseReceived`

Unsubscribes from the `recsResponseReceived` event.

| Name      | Required | Description    |
| --------- | -------- | -------------- |
| `handler` | Yes      | Event handler. |

```javascript
mse.unsubscribe.recsResponseReceived(handler);
```

#### `mse.unsubscribe.recsUnitRender`

Unsubscribes from the `recsUnitRender` event.

| Name      | Required | Description    |
| --------- | -------- | -------------- |
| `handler` | Yes      | Event handler. |

```javascript
mse.unsubscribe.recsUnitRender(handler);
```

#### `mse.unsubscribe.recsUnitView`

Unsubscribes from the `recsUnitView` event.

| Name      | Required | Description    |
| --------- | -------- | -------------- |
| `handler` | Yes      | Event handler. |

```javascript
mse.unsubscribe.recsUnitView(handler);
```

#### `mse.unsubscribe.referrerUrl`

Unsubscribes from the `referrerUrl` event.

| Name      | Required | Description    |
| --------- | -------- | -------------- |
| `handler` | Yes      | Event handler. |

```javascript
mse.unsubscribe.referrerUrl(handler);
```

#### `mse.unsubscribe.removeFromCart`

Unsubscribes from the `removeFromCart` event.

| Name      | Required | Description    |
| --------- | -------- | -------------- |
| `handler` | Yes      | Event handler. |

```javascript
mse.unsubscribe.removeFromCart(handler);
```

#### `mse.unsubscribe.searchCategoryClick`

Unsubscribes from the `searchCategoryClick` event.

| Name      | Required | Description    |
| --------- | -------- | -------------- |
| `handler` | Yes      | Event handler. |

```javascript
mse.unsubscribe.searchCategoryClick(handler);
```

#### `mse.unsubscribe.searchProductClick`

Unsubscribes from the `searchProductClick` event.

| Name      | Required | Description    |
| --------- | -------- | -------------- |
| `handler` | Yes      | Event handler. |

```javascript
mse.unsubscribe.searchProductClick(handler);
```

#### `mse.unsubscribe.searchRequestSent`

Unsubscribes from the `searchRequestSent` event.

| Name      | Required | Description    |
| --------- | -------- | -------------- |
| `handler` | Yes      | Event handler. |

```javascript
mse.unsubscribe.searchRequestSent(handler);
```

#### `mse.unsubscribe.searchResponseReceived`

Unsubscribes from the `searchResponseReceived` event.

| Name      | Required | Description    |
| --------- | -------- | -------------- |
| `handler` | Yes      | Event handler. |

```javascript
mse.unsubscribe.searchResponseReceived(handler);
```

#### `mse.unsubscribe.searchResultsView`

Unsubscribes from the `searchResultsView` event.

| Name      | Required | Description    |
| --------- | -------- | -------------- |
| `handler` | Yes      | Event handler. |

```javascript
mse.unsubscribe.searchResultsView(handler);
```

#### `mse.unsubscribe.searchSuggestionClick`

Unsubscribes from the `searchSuggestionClick` event.

| Name      | Required | Description    |
| --------- | -------- | -------------- |
| `handler` | Yes      | Event handler. |

```javascript
mse.unsubscribe.searchSuggestionClick(handler);
```

#### `mse.unsubscribe.shoppingCartView`

Unsubscribes from the `shoppingCartView` event.

| Name      | Required | Description    |
| --------- | -------- | -------------- |
| `handler` | Yes      | Event handler. |

```javascript
mse.unsubscribe.shoppingCartView(handler);
```

#### `mse.unsubscribe.signIn`

Unsubscribes from the `signIn` event.

| Name      | Required | Description    |
| --------- | -------- | -------------- |
| `handler` | Yes      | Event handler. |

```javascript
mse.unsubscribe.signIn(handler);
```

#### `mse.unsubscribe.signOut`

Unsubscribes from the `signOut` event.

| Name      | Required | Description    |
| --------- | -------- | -------------- |
| `handler` | Yes      | Event handler. |

```javascript
mse.unsubscribe.signOut(handler);
```

#### `mse.unsubscribe.updateCart`

Unsubscribes from the `updateCart` event.

| Name      | Required | Description    |
| --------- | -------- | -------------- |
| `handler` | Yes      | Event handler. |

```javascript
mse.unsubscribe.updateCart(handler);
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
