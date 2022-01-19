/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import { Base } from "./Base";
import contexts from "./contexts";
import {
    AEP,
    Category,
    CustomUrl,
    EventForwarding,
    MagentoExtension,
    Order,
    Page,
    Product,
    Shopper,
    ShoppingCart,
    StorefrontInstance,
    Recommendations,
    ReferrerUrl,
    SearchInput,
    SearchResults,
} from "./types/schemas";

export default class ContextManager extends Base {
    /**
     * Get Adobe Experience Platform context
     */
    getAEP(): AEP {
        return this.getContext<AEP>(contexts.AEP_CONTEXT);
    }

    /**
     * Set Adobe Experience Platform context
     * @param context
     */
    setAEP(context: AEP): void {
        this.setContext<AEP>(contexts.AEP_CONTEXT, context);
    }

    /**
     * Get category context
     */
    getCategory(): Category {
        return this.getContext<Category>(contexts.CATEGORY_CONTEXT);
    }

    /**
     * Set category context
     * @param context
     */
    setCategory(context: Category): void {
        this.setContext<Category>(contexts.CATEGORY_CONTEXT, context);
    }

    /**
     * Get event forwarding context
     */
    getEventForwarding(): EventForwarding {
        return this.getContext<EventForwarding>(contexts.EVENT_FORWARDING_CONTEXT);
    }

    /**
     * Set Adobe Experience Platform context
     * @param context
     */
     setEventForwarding(context: EventForwarding): void {
        this.setContext<EventForwarding>(contexts.EVENT_FORWARDING_CONTEXT, context);
    }

    /**
     * Get url context
     */
    getCustomUrl(): CustomUrl {
        return this.getContext<CustomUrl>(contexts.CUSTOM_URL_CONTEXT);
    }

    /**
     * Set url context
     * @param context
     */
    setCustomUrl(context: CustomUrl): void {
        this.setContext<CustomUrl>(contexts.CUSTOM_URL_CONTEXT, context);
    }

    /**
     * Get shopper context
     **/
    getShopper(): Shopper {
        return this.getContext<Shopper>(contexts.SHOPPER_CONTEXT);
    }

    /**
     * Set shopper context
     * @param context
     **/
    setShopper(context: Shopper): void {
        this.setContext<Shopper>(contexts.SHOPPER_CONTEXT, context);
    }

    /**
     * Get Magento extension context
     */
    getMagentoExtension(): MagentoExtension {
        return this.getContext<MagentoExtension>(
            contexts.MAGENTO_EXTENSION_CONTEXT,
        );
    }

    /**
     * Set Magento extension context
     * @param context
     */
    setMagentoExtension(context: MagentoExtension): void {
        this.setContext<MagentoExtension>(
            contexts.MAGENTO_EXTENSION_CONTEXT,
            context,
        );
    }

    /**
     * Get order context
     */
    getOrder(): Order {
        return this.getContext<Order>(contexts.ORDER_CONTEXT);
    }

    /**
     * Set order context
     * @param context
     */
    setOrder(context: Order): void {
        this.setContext<Order>(contexts.ORDER_CONTEXT, context);
    }

    /**
     * Get page offset context
     */
    getPage(): Page {
        return this.getContext<Page>(contexts.PAGE_CONTEXT);
    }

    /**
     * Set page offset context
     * @param context
     */
    setPage(context: Page): void {
        this.setContext<Page>(contexts.PAGE_CONTEXT, context);
    }

    /**
     * Get product context
     */
    getProduct(): Product {
        return this.getContext<Product>(contexts.PRODUCT_CONTEXT);
    }

    /**
     * Set product context
     * @param context
     */
    setProduct(context: Product): void {
        this.setContext<Product>(contexts.PRODUCT_CONTEXT, context);
    }

    /**
     * Get recommendations context
     */
    getRecommendations(): Recommendations {
        return this.getContext<Recommendations>(
            contexts.RECOMMENDATIONS_CONTEXT,
        );
    }

    /**
     * Set recommendations context
     * @param context
     */
    setRecommendations(context: Recommendations): void {
        this.setContext<Recommendations>(
            contexts.RECOMMENDATIONS_CONTEXT,
            context,
        );
    }

    /**
     * Get referrer url context
     */
    getReferrerUrl(): ReferrerUrl {
        return this.getContext<ReferrerUrl>(contexts.REFERRER_URL_CONTEXT);
    }

    /**
     * Set referrer url context
     * @param context
     */
    setReferrerUrl(context: ReferrerUrl): void {
        this.setContext<ReferrerUrl>(contexts.REFERRER_URL_CONTEXT, context);
    }

    /**
     * Get search input context
     */
    getSearchInput(): SearchInput {
        return this.getContext<SearchInput>(contexts.SEARCH_INPUT_CONTEXT);
    }

    /**
     * Set search input context
     * @param context
     */
    setSearchInput(context: SearchInput): void {
        this.setContext<SearchInput>(contexts.SEARCH_INPUT_CONTEXT, context);
    }

    /**
     * Get search results context
     */
    getSearchResults(): SearchResults {
        return this.getContext<SearchResults>(contexts.SEARCH_RESULTS_CONTEXT);
    }

    /**
     * Set search results context
     * @param context
     */
    setSearchResults(context: SearchResults): void {
        this.setContext<SearchResults>(
            contexts.SEARCH_RESULTS_CONTEXT,
            context,
        );
    }

    /**
     * Get shopping cart context
     */
    getShoppingCart(): ShoppingCart {
        return this.getContext<ShoppingCart>(contexts.SHOPPING_CART_CONTEXT);
    }

    /**
     * Set shopping cart context
     * @param context
     */
    setShoppingCart(context: ShoppingCart): void {
        this.setContext<ShoppingCart>(contexts.SHOPPING_CART_CONTEXT, context);
    }

    /**
     * Get storefront instance context
     */
    getStorefrontInstance(): StorefrontInstance {
        return this.getContext<StorefrontInstance>(
            contexts.STOREFRONT_INSTANCE_CONTEXT,
        );
    }

    /**
     * Set storefront instance context
     * @param context
     */
    setStorefrontInstance(context: StorefrontInstance): void {
        this.setContext<StorefrontInstance>(
            contexts.STOREFRONT_INSTANCE_CONTEXT,
            context,
        );
    }

    /**
     * Get custom context
     * @param name
     */
    getContext<T>(name?: string): T {
        return super.getContext<T>(name);
    }

    /**
     * Set custom context
     * @param name
     * @param context
     */
    setContext<T>(name: string, context: T): void {
        super.setContext<T>(name, context);
    }
}
