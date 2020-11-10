# Magento Data Layer SDK

## Purpose

This repository provides a strongly-typed interface for interacting with the [Adobe Client Data Layer](https://github.com/adobe/adobe-client-data-layer) or ACDL, the central event hub for applications within Data Solutions. ACDL is a very flexible library that is capable of holding context datay, processing events asynchronously, and handling many to many relationships of publishers and subscribers. ACDL relies on getters, setters, publishers, and subscribers that are indexed by strings. It also accepts/returns objects of arbitrary shape and size. These two aspects make it somewhat prone to errors like misspellings or data loss as one object with the wrong shape clobbers another.

## Architecture

The SDK takes the shape of a Typescript class that includes getters and setters for all of the contexts used in Data Solutions events, as well as publishers and subscribers for all events used in Data Solutions data collection.

Our tests provide numerous examples of usage. But by what of illustration, here is what the syntax looks like.

```ts
/**
 *  Set a context
 *  These setters abstract the string key for the context away from the
 *  user and enforces the correct shape and type of the context object
 **/
MagentoDataLayer.setShopperContext({ shopperId: "loggedIn" });
/**
 *  Get a context
 *  These getters will mostly be used internally, but they'll be available
 *  publicly in case there's a use for them
 **/
MagentoDataLayer.getShopperContext();
/**
 *  Publish an event
 *  The current design is to avoid accepting arguments when an event is published.
 *  Any data that should be published with an event should be put into a context and
 *  packaged with the event prior to notifying the subscribers
 **/
MagentoDataLayer.publishAddToCart();
/**
 *  Subscribe to an event
 *  The event will be strongly typed so the consumer knows what shape of data they will get
 **/
MagentoDataLayer.subscribeToAddToCart((event) => {});
```

## Usage

```sh
# Install dependencies
npm install

# Run tests
npm test
npm run test:watch # Run tests in watch mode for development
```
