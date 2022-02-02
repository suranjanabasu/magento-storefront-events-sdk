import { Base } from "./Base";
import events from "./events";
import { EventHandler } from "./types/events";

export default class UnsubscribeManager extends Base {
    /**
     *  Unsubscribe from Add to Cart event
     */
    addToCart(handler: EventHandler): void {
        this.removeEventListener(events.ADD_TO_CART, handler);
    }

    /**
     * Unsubscribe from Custom Url event
     */
    customUrl(handler: EventHandler): void {
        this.removeEventListener(events.CUSTOM_URL, handler);
    }

    /**
     * Unsubscribe from Data Layer Change event
     */
    dataLayerChange(handler: EventHandler): void {
        this.removeEventListener(events.DATA_LAYER_CHANGE, handler);
    }

    /**
     * Unsubscribe from Data Layer Event event
     */
    dataLayerEvent(handler: EventHandler): void {
        this.removeEventListener(events.DATA_LAYER_EVENT, handler);
    }

    /**
     * Unsubscribe from Initiate Checkout event
     */
    initiateCheckout(handler: EventHandler): void {
        this.removeEventListener(events.INITIATE_CHECKOUT, handler);
    }

    /**
     * Unsubscribe from Instant Purchase event
     */
    instantPurchase(handler: EventHandler): void {
        this.removeEventListener(events.INSTANT_PURCHASE, handler);
    }

    /**
     * Unsubscribe from Page Activity Summary event
     */
    pageActivitySummary(handler: EventHandler): void {
        this.removeEventListener(events.PAGE_ACTIVITY_SUMMARY, handler);
    }

    /**
     * Unsubscribe from Page View event
     */
    pageView(handler: EventHandler): void {
        this.removeEventListener(events.PAGE_VIEW, handler);
    }

    /**
     * Unsubscribe from Place Order event
     */
    placeOrder(handler: EventHandler): void {
        this.removeEventListener(events.PLACE_ORDER, handler);
    }

    /**
     * Unsubscribe from Product Page View event
     */
    productPageView(handler: EventHandler): void {
        this.removeEventListener(events.PRODUCT_PAGE_VIEW, handler);
    }

    /**
     * Unsubscribe to Recommended Item Add to Cart Click event
     */
    recsItemAddToCartClick(handler: EventHandler): void {
        this.removeEventListener(events.RECS_ITEM_ADD_TO_CART_CLICK, handler);
    }

    /**
     * Unsubscribe to Recommended Item Click event
     */
    recsItemClick(handler: EventHandler): void {
        this.removeEventListener(events.RECS_ITEM_CLICK, handler);
    }

    /**
     * Unsubscribe to Recommendations API Request event
     */
    recsRequestSent(handler: EventHandler): void {
        this.removeEventListener(events.RECS_REQUEST_SENT, handler);
    }

    /**
     * Unsubscribe to Recommendations Response Received event
     */
    recsResponseReceived(handler: EventHandler): void {
        this.removeEventListener(events.RECS_RESPONSE_RECEIVED, handler);
    }

    /**
     * Unsubscribe to Recommended Unit Render Event
     */
    recsUnitRender(handler: EventHandler): void {
        this.removeEventListener(events.RECS_UNIT_RENDER, handler);
    }

    /**
     * Unsubscribe to Recommended Unit View event
     */
    recsUnitView(handler: EventHandler): void {
        this.removeEventListener(events.RECS_UNIT_VIEW, handler);
    }

    /**
     * Unsubscribe from Referrer Url event
     */
    referrerUrl(handler: EventHandler): void {
        this.removeEventListener(events.REFERRER_URL, handler);
    }

    /**
     * Unsubscribe from Remove from Cart event
     */
    removeFromCart(handler: EventHandler): void {
        this.removeEventListener(events.REMOVE_FROM_CART, handler);
    }

    /**
     * Unsubscribe from Search Category Click event
     */
    searchCategoryClick(handler: EventHandler): void {
        this.removeEventListener(events.SEARCH_CATEGORY_CLICK, handler);
    }

    /**
     * Unsubscribe from Search Product Click event
     */
    searchProductClick(handler: EventHandler): void {
        this.removeEventListener(events.SEARCH_PRODUCT_CLICK, handler);
    }

    /**
     * Unsubscribe from Search Request Sent event
     */
    searchRequestSent(handler: EventHandler): void {
        this.removeEventListener(events.SEARCH_REQUEST_SENT, handler);
    }

    /**
     * Unsubscribe from Search Response Received event
     */
    searchResponseReceived(handler: EventHandler): void {
        this.removeEventListener(events.SEARCH_RESPONSE_RECEIVED, handler);
    }

    /**
     * Unsubscribe from Search Results View event
     */
    searchResultsView(handler: EventHandler): void {
        this.removeEventListener(events.SEARCH_RESULTS_VIEW, handler);
    }

    /**
     * Unsubscribe from Search Suggestion Click event
     */
    searchSuggestionClick(handler: EventHandler): void {
        this.removeEventListener(events.SEARCH_SUGGESTION_CLICK, handler);
    }

    /**
     * Unsubscribe from Shopping Cart View event
     */
    shoppingCartView(handler: EventHandler): void {
        this.removeEventListener(events.SHOPPING_CART_VIEW, handler);
    }

    /**
     * Unsubscribe from Sign In event
     */
    signIn(handler: EventHandler): void {
        this.removeEventListener(events.SIGN_IN, handler);
    }

    /**
     * Unsubscribe from Sign Out event
     */
    signOut(handler: EventHandler): void {
        this.removeEventListener(events.SIGN_OUT, handler);
    }

    /**
     * Unsubscribe from Update Cart event
     */
    updateCart(handler: EventHandler): void {
        this.removeEventListener(events.UPDATE_CART, handler);
    }
}
