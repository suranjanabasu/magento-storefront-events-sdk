# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [0.3.0](https://github.com/adobe/magento-storefront-events-sdk/compare/v0.2.3...v0.3.0) (2021-03-22)


### ⚠ BREAKING CHANGES

* Removed the SEARCH_RESULT_CLICK event.

### Features

* support search result click events ([1759ba0](https://github.com/adobe/magento-storefront-events-sdk/commit/1759ba055286ab501ff80d5aeb00bf690ac31e56))

### [0.2.3](https://github.com/adobe/magento-storefront-events-sdk/compare/v0.2.2...v0.2.3) (2021-03-19)

### [0.2.2](https://github.com/adobe/magento-storefront-events-sdk/compare/v0.2.1...v0.2.2) (2021-03-18)

### [0.2.1](https://github.com/adobe/magento-storefront-events-sdk/compare/v0.2.0...v0.2.1) (2021-03-18)


### Features

* **recommendations:** enables recommendations events ([cd76752](https://github.com/adobe/magento-storefront-events-sdk/commit/cd767529c0afaa24df5d2f7362057b1e47838b44))


### Bug Fixes

* **filename:** fixed recomendations.js to reocmmendations.js ([b6d7e13](https://github.com/adobe/magento-storefront-events-sdk/commit/b6d7e136242ca64e3fc64a95e2da09ea05aa2f9e))

## [0.2.0](https://github.com/adobe/magento-storefront-events-sdk/compare/v0.1.1...v0.2.0) (2021-03-17)

### ⚠ BREAKING CHANGES

-   **rename:** Changing the package name to @adobe/magento-storefront-events-sdk.
-   **webpack:** window.magentoDataLayer.default is now window.MagentoDataLayer.

### build

-   **webpack:** include default export on window ([839d9d9](https://github.com/adobe/magento-storefront-events-sdk/commit/839d9d9ec4c077d8e6784b24bdbd9d1be8aae54a))

-   **rename:** change the package name ([9598d98](https://github.com/adobe/magento-storefront-events-sdk/commit/9598d98e3b3fa3ee48657252d8e6b2bf85a49205))

### [0.1.1](https://github.com/adobe/magento-storefront-events-sdk/compare/v0.1.0...v0.1.1) (2021-03-16)

### Bug Fixes

-   **events:** event context was in data layer. Change to "eventInfo" object that won't be persisted ([e1de784](https://github.com/adobe/magento-storefront-events-sdk/commit/e1de784ef6920c629ab3b738d2a1e9eb1acbdcce))

## [0.1.0](https://github.com/adobe/magento-storefront-events-sdk/compare/v0.0.9...v0.1.0) (2021-03-16)

### ⚠ BREAKING CHANGES

-   handlers no longer receive a reference to mdl as a second argument

### Features

-   add initial order context ([d2078b2](https://github.com/adobe/magento-storefront-events-sdk/commit/d2078b260d2b2db328a93cb687376e8734722a26))

-   send copy of the entire data layer context with handler rather than a reference to mdl ([37ba49a](https://github.com/adobe/magento-storefront-events-sdk/commit/37ba49af6073abe351a3c466d3080962d2b727f0)), closes [#8](https://github.com/adobe/magento-storefront-events-sdk/issues/8)

### [0.0.9](https://github.com/adobe/magento-storefront-events-sdk/compare/v0.0.8...v0.0.9) (2021-03-15)

### Features

-   add missing unsubscribe support for generic event listeners ([f8ee42e](https://github.com/adobe/magento-storefront-events-sdk/commit/f8ee42e079e9c861be0295e47135eb3d80077a2a))
