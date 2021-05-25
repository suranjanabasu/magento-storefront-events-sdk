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

#### `mse.context.getCustomUrl`

Gets the `CustomUrl` context.

#### `mse.context.getMagentoExtension`

Gets the `MagentoExtension` context.

#### `mse.context.getOrder`

Gets the `Order` context.

#### `mse.context.getPage`

Gets the `Page` context.

#### `mse.context.getProduct`

Gets the `Product` context.

#### `mse.context.getRecommendations`

Gets the `Recommendations` context.

#### `mse.context.getReferrerUrl`

Gets the `ReferrerUrl` context.

#### `mse.context.getSearchInput`

Gets the `SearchInput` context.

#### `mse.context.getSearchResults`

Gets the `SearchResults` context.

#### `mse.context.getShopper`

Gets the `Shopper` context.

#### `mse.context.getShoppingCart`

Gets the `ShoppingCart` context.

#### `mse.context.getStorefrontInstance`

Gets the `StorefrontInstance` context.

#### `mse.context.getContext`

Gets a generic `Context`.

#### `mse.context.setCategory`

Sets the `Category` context.

#### `mse.context.setCustomUrl`

Sets the `CustomUrl` context.

#### `mse.context.setMagentoExtension`

Sets the `MagentoExtension` context.

#### `mse.context.setOrder`

Sets the `Order` context.

#### `mse.context.setPage`

Sets the `Page` context.

#### `mse.context.setProduct`

Sets the `Product` context.

#### `mse.context.setRecommendations`

Sets the `Recommendations` context.

#### `mse.context.setReferrerUrl`

Sets the `ReferrerUrl` context.

#### `mse.context.setSearchInput`

Sets the `SearchInput` context.

#### `mse.context.setSearchResults`

Sets the `SearchResults` context.

#### `mse.context.setShopper`

Sets the `Shopper` context.

#### `mse.context.setShoppingCart`

Sets the `ShoppingCart` context.

#### `mse.context.setStorefrontInstance`

Sets the `StorefrontInstance` context.

#### `mse.context.setContext`

Sets a generic `Context`.

### Publish

These functions publish events which notify all of the subscribers.

#### `mse.publish.addToCart`

Publishes the `addToCart` event.

#### `mse.publish.customUrl`

Publishes the `customUrl` event.

#### `mse.publish.initiateCheckout`

Publishes the `initiateCheckout` event.

#### `mse.publish.instantPurchase`

Publishes the `instantPurchase` event.

#### `mse.publish.pageActivitySummary`

Publishes the `pageActivitySummary` event.

#### `mse.publish.pageView`

Publishes the `pageView` event.

#### `mse.publish.placeOrder`

Publishes the `placeOrder` event.

#### `mse.publish.productPageView`

Publishes the `productPageView` event.

#### `mse.publish.recsItemAddToCartClick`

Publishes the `recsItemAddToCartClick` event.

#### `mse.publish.recsItemClick`

Publishes the `recsItemClick` event.

#### `mse.publish.recsRequestSent`

Publishes the `recsRequestSent` event.

#### `mse.publish.recsResponseReceived`

Publishes the `recsResponseReceived` event.

#### `mse.publish.recsUnitRender`

Publishes the `recsUnitRender` event.

#### `mse.publish.recsUnitView`

Publishes the `recsUnitView` event.

#### `mse.publish.referrerUrl`

Publishes the `referrerUrl` event.

#### `mse.publish.removeFromCart`

Publishes the `removeFromCart` event.

#### `mse.publish.searchCategoryClick`

Publishes the `searchCategoryClick` event.

#### `mse.publish.searchProductClick`

Publishes the `searchProductClick` event.

#### `mse.publish.searchRequestSent`

Publishes the `searchRequestSent` event.

#### `mse.publish.searchResponseReceived`

Publishes the `searchResponseReceived` event.

#### `mse.publish.searchResultsView`

Publishes the `searchResultsView` event.

#### `mse.publish.searchSuggestionClick`

Publishes the `searchSuggestionClick` event.

#### `mse.publish.shoppingCartView`

Publishes the `shoppingCartView` event.

#### `mse.publish.signIn`

Publishes the `signIn` event.

#### `mse.publish.signOut`

Publishes the `signOut` event.

#### `mse.publish.updateCart`

Publishes the `updateCart` event.

### Subscribe

These functions subscribe to events.

#### `mse.subscribe.addToCart`

Subscribes to the `addToCart` event.

#### `mse.subscribe.customUrl`

Subscribes to the `customUrl` event.

#### `mse.subscribe.dataLayerChange`

Subscribes to the `dataLayerChange` event.

#### `mse.subscribe.dataLayerEvent`

Subscribes to the `dataLayerEvent` event.

#### `mse.subscribe.initiateCheckout`

Subscribes to the `initiateCheckout` event.

#### `mse.subscribe.instantPurchase`

Subscribes to the `instantPurchase` event.

#### `mse.subscribe.pageActivitySummary`

Subscribes to the `pageActivitySummary` event.

#### `mse.subscribe.pageView`

Subscribes to the `pageView` event.

#### `mse.subscribe.placeOrder`

Subscribes to the `placeOrder` event.

#### `mse.subscribe.productPageView`

Subscribes to the `productPageView` event.

#### `mse.subscribe.recsItemAddToCartClick`

Subscribes to the `recsItemAddToCartClick` event.

#### `mse.subscribe.recsItemClick`

Subscribes to the `recsItemClick` event.

#### `mse.subscribe.recsRequestSent`

Subscribes to the `recsRequestSent` event.

#### `mse.subscribe.recsResponseReceived`

Subscribes to the `recsResponseReceived` event.

#### `mse.subscribe.recsUnitRender`

Subscribes to the `recsUnitRender` event.

#### `mse.subscribe.recsUnitView`

Subscribes to the `recsUnitView` event.

#### `mse.subscribe.referrerUrl`

Subscribes to the `referrerUrl` event.

#### `mse.subscribe.removeFromCart`

Subscribes to the `removeFromCart` event.

#### `mse.subscribe.searchCategoryClick`

Subscribes to the `searchCategoryClick` event.

#### `mse.subscribe.searchProductClick`

Subscribes to the `searchProductClick` event.

#### `mse.subscribe.searchRequestSent`

Subscribes to the `searchRequestSent` event.

#### `mse.subscribe.searchResponseReceived`

Subscribes to the `searchResponseReceived` event.

#### `mse.subscribe.searchResultsView`

Subscribes to the `searchResultsView` event.

#### `mse.subscribe.searchSuggestionClick`

Subscribes to the `searchSuggestionClick` event.

#### `mse.subscribe.shoppingCartView`

Subscribes to the `shoppingCartView` event.

#### `mse.subscribe.signIn`

Subscribes to the `signIn` event.

#### `mse.subscribe.signOut`

Subscribes to the `signOut` event.

#### `mse.subscribe.updateCart`

Subscribes to the `updateCart` event.

### Unsubscribe

These functions unsubscribe from events.

#### `mse.unsubscribe.addToCart`

Unsubscribes from the `addToCart` event.

#### `mse.unsubscribe.customUrl`

Unsubscribes from the `customUrl` event.

#### `mse.unsubscribe.dataLayerChange`

Unsubscribes from the `dataLayerChange` event.

#### `mse.unsubscribe.dataLayerEvent`

Unsubscribes from the `dataLayerEvent` event.

#### `mse.unsubscribe.initiateCheckout`

Unsubscribes from the `initiateCheckout` event.

#### `mse.unsubscribe.instantPurchase`

Unsubscribes from the `instantPurchase` event.

#### `mse.unsubscribe.pageActivitySummary`

Unsubscribes from the `pageActivitySummary` event.

#### `mse.unsubscribe.pageView`

Unsubscribes from the `pageView` event.

#### `mse.unsubscribe.placeOrder`

Unsubscribes from the `placeOrder` event.

#### `mse.unsubscribe.productPageView`

Unsubscribes from the `productPageView` event.

#### `mse.unsubscribe.recsItemAddToCartClick`

Unsubscribes from the `recsItemAddToCartClick` event.

#### `mse.unsubscribe.recsItemClick`

Unsubscribes from the `recsItemClick` event.

#### `mse.unsubscribe.recsRequestSent`

Unsubscribes from the `recsRequestSent` event.

#### `mse.unsubscribe.recsResponseReceived`

Unsubscribes from the `recsResponseReceived` event.

#### `mse.unsubscribe.recsUnitRender`

Unsubscribes from the `recsUnitRender` event.

#### `mse.unsubscribe.recsUnitView`

Unsubscribes from the `recsUnitView` event.

#### `mse.unsubscribe.referrerUrl`

Unsubscribes from the `referrerUrl` event.

#### `mse.unsubscribe.removeFromCart`

Unsubscribes from the `removeFromCart` event.

#### `mse.unsubscribe.searchCategoryClick`

Unsubscribes from the `searchCategoryClick` event.

#### `mse.unsubscribe.searchProductClick`

Unsubscribes from the `searchProductClick` event.

#### `mse.unsubscribe.searchRequestSent`

Unsubscribes from the `searchRequestSent` event.

#### `mse.unsubscribe.searchResponseReceived`

Unsubscribes from the `searchResponseReceived` event.

#### `mse.unsubscribe.searchResultsView`

Unsubscribes from the `searchResultsView` event.

#### `mse.unsubscribe.searchSuggestionClick`

Unsubscribes from the `searchSuggestionClick` event.

#### `mse.unsubscribe.shoppingCartView`

Unsubscribes from the `shoppingCartView` event.

#### `mse.unsubscribe.signIn`

Unsubscribes from the `signIn` event.

#### `mse.unsubscribe.signOut`

Unsubscribes from the `signOut` event.

#### `mse.unsubscribe.updateCart`

Unsubscribes from the `updateCart` event.

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
