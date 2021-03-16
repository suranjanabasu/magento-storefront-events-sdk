# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.1.1](https://github.com/adobe/magento-data-layer-sdk/compare/v0.1.0...v0.1.1) (2021-03-16)


### Bug Fixes

* **events:** event context was in data layer. Change to "eventInfo" object that won't be persisted ([e1de784](https://github.com/adobe/magento-data-layer-sdk/commit/e1de784ef6920c629ab3b738d2a1e9eb1acbdcce))

## [0.1.0](https://github.com/adobe/magento-data-layer-sdk/compare/v0.0.9...v0.1.0) (2021-03-16)


### ⚠ BREAKING CHANGES

* handlers no longer receive a reference to mdl as a second argument

### Features

* add initial order context ([d2078b2](https://github.com/adobe/magento-data-layer-sdk/commit/d2078b260d2b2db328a93cb687376e8734722a26))


* send copy of the entire data layer context with handler rather than a reference to mdl ([37ba49a](https://github.com/adobe/magento-data-layer-sdk/commit/37ba49af6073abe351a3c466d3080962d2b727f0)), closes [#8](https://github.com/adobe/magento-data-layer-sdk/issues/8)

### [0.0.9](https://github.com/adobe/magento-data-layer-sdk/compare/v0.0.8...v0.0.9) (2021-03-15)


### Features

* add missing unsubscribe support for generic event listeners ([f8ee42e](https://github.com/adobe/magento-data-layer-sdk/commit/f8ee42e079e9c861be0295e47135eb3d80077a2a))
