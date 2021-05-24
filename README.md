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

-   [context][context] - set context data
-   [publish][publish] - publish events
-   [subscribe][subscribe] - subscribe to events
-   [unsubscribe][unsubscribe] - unsubscribe from events

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

### Context

### Publish

### Subscribe

### Unsubscribe

## Support

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
