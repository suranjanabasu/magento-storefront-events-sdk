import { Base } from "./Base";
import events from "./events";
import { CustomContext } from "./types/contexts";
import {
    RecommendationUnit,
    RecommendedProduct,
    SearchResultUnit,
    SearchResultCategory,
    SearchResultProduct,
    SearchResultSuggestion,
} from "./types/schemas";

export default class PublishManager extends Base {
    /**
     * Publish Add to Cart event
     */
    addToCart(context?: CustomContext): void {
        this.pushEvent(events.ADD_TO_CART, { customContext: context });
    }

    /**
     * Publish Custom Url event
     */
    customUrl(context?: CustomContext): void {
        this.pushEvent(events.CUSTOM_URL, { customContext: context });
    }

    /**
     * Publish Initiate Checkout event
     */
    initiateCheckout(context?: CustomContext): void {
        this.pushEvent(events.INITIATE_CHECKOUT, { customContext: context });
    }

    /**
     * Publish Instant Purchase event
     */
    instantPurchase(context?: CustomContext): void {
        this.pushEvent(events.INSTANT_PURCHASE, { customContext: context });
    }

    /**
     * Publish Page Activity Summary event
     */
    pageActivitySummary(context?: CustomContext): void {
        this.pushEvent(events.PAGE_ACTIVITY_SUMMARY, {
            customContext: context,
        });
    }

    /**
     * Publish Page View event
     */
    pageView(context?: CustomContext): void {
        this.pushEvent(events.PAGE_VIEW, { customContext: context });
    }

    /**
     * Publish Place Order event
     */
    placeOrder(context?: CustomContext): void {
        this.pushEvent(events.PLACE_ORDER, { customContext: context });
    }

    /**
     * Publish Product Page View event
     */
    productPageView(context?: CustomContext): void {
        this.pushEvent(events.PRODUCT_PAGE_VIEW, { customContext: context });
    }

    /**
     * Publish Recommended Item Add to Cart Click event
     */
    recsItemAddToCartClick(
        unitId: RecommendationUnit["unitId"],
        productId: RecommendedProduct["productId"],
        context?: CustomContext,
    ): void {
        this.pushEvent(events.RECS_ITEM_ADD_TO_CART_CLICK, {
            unitId,
            productId,
            customContext: context,
        });
    }

    /**
     * Publish Recommended Item Click event
     */
    recsItemClick(
        unitId: RecommendationUnit["unitId"],
        productId: RecommendedProduct["productId"],
        context?: CustomContext,
    ): void {
        this.pushEvent(events.RECS_ITEM_CLICK, {
            unitId,
            productId,
            customContext: context,
        });
    }

    /**
     * Publish Recommendations API Request event
     */
    recsRequestSent(context?: CustomContext): void {
        this.pushEvent(events.RECS_REQUEST_SENT, { customContext: context });
    }

    /**
     * Publish Recommendations Response Received event
     */
    recsResponseReceived(context?: CustomContext): void {
        this.pushEvent(events.RECS_RESPONSE_RECEIVED, {
            customContext: context,
        });
    }

    /**
     * Publish Recommended Unit Render Event
     */
    recsUnitRender(
        unitId: RecommendationUnit["unitId"],
        context?: CustomContext,
    ): void {
        this.pushEvent(events.RECS_UNIT_RENDER, {
            unitId,
            customContext: context,
        });
    }

    /**
     * Publish Recommended Unit View event
     */
    recsUnitView(
        unitId: RecommendationUnit["unitId"],
        context?: CustomContext,
    ): void {
        this.pushEvent(events.RECS_UNIT_VIEW, {
            unitId,
            customContext: context,
        });
    }

    /**
     * Publish Referrer Url event
     */
    referrerUrl(context?: CustomContext): void {
        this.pushEvent(events.REFERRER_URL, { customContext: context });
    }

    /**
     * Publish Remove from Cart event
     */
    removeFromCart(context?: CustomContext): void {
        this.pushEvent(events.REMOVE_FROM_CART, { customContext: context });
    }

    /**
     * Publish Search Category Click event
     */
    searchCategoryClick(
        searchUnitId: SearchResultUnit["searchUnitId"],
        name: SearchResultCategory["name"],
        context?: CustomContext,
    ): void {
        this.pushEvent(events.SEARCH_CATEGORY_CLICK, {
            searchUnitId,
            name,
            customContext: context,
        });
    }

    /**
     * Publish Search Product Click event
     */
    searchProductClick(
        searchUnitId: SearchResultUnit["searchUnitId"],
        sku: SearchResultProduct["sku"],
        context?: CustomContext,
    ): void {
        this.pushEvent(events.SEARCH_PRODUCT_CLICK, {
            searchUnitId,
            sku,
            customContext: context,
        });
    }

    /**
     * Publish Search Request Sent event
     */
    searchRequestSent(
        searchUnitId: SearchResultUnit["searchUnitId"],
        context?: CustomContext,
    ): void {
        this.pushEvent(events.SEARCH_REQUEST_SENT, {
            searchUnitId,
            customContext: context,
        });
    }

    /**
     * Publish Search Response Received event
     */
    searchResponseReceived(
        searchUnitId: SearchResultUnit["searchUnitId"],
        context?: CustomContext,
    ): void {
        this.pushEvent(events.SEARCH_RESPONSE_RECEIVED, {
            searchUnitId,
            customContext: context,
        });
    }

    /**
     * Publish Search Results View event
     */
    searchResultsView(
        searchUnitId: SearchResultUnit["searchUnitId"],
        context?: CustomContext,
    ): void {
        this.pushEvent(events.SEARCH_RESULTS_VIEW, {
            searchUnitId,
            customContext: context,
        });
    }

    /**
     * Publish Search Suggestion Click event
     */
    searchSuggestionClick(
        searchUnitId: SearchResultUnit["searchUnitId"],
        suggestion: SearchResultSuggestion["suggestion"],
        context?: CustomContext,
    ): void {
        this.pushEvent(events.SEARCH_SUGGESTION_CLICK, {
            searchUnitId,
            suggestion,
            customContext: context,
        });
    }

    /**
     * Publish Shopping Cart View event
     */
    shoppingCartView(context?: CustomContext): void {
        this.pushEvent(events.SHOPPING_CART_VIEW, { customContext: context });
    }

    /**
     * Publish Sign In event
     */
    signIn(context?: CustomContext): void {
        this.pushEvent(events.SIGN_IN, { customContext: context });
    }

    /**
     * Publish Sign Out event
     */
    signOut(context?: CustomContext): void {
        this.pushEvent(events.SIGN_OUT, { customContext: context });
    }

    /**
     * Publish Cart Update events
     */
    updateCart(context?: CustomContext): void {
        this.pushEvent(events.UPDATE_CART, { customContext: context });
    }
}
