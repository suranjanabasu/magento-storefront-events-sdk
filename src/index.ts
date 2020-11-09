type ContextName = "shopper-context";
type EventName = "add-to-cart";

class MagentoDataLayer {
  constructor() {
    // ensure event array is available
    window.adobeDataLayer = window.adobeDataLayer || [];
  }
  // Set a context on ACDL
  private setContext<T>(name: ContextName, context: T) {
    window.adobeDataLayer.push({
      [name]: context,
    });
  }
  // Get a context from ACDL
  private getContext<T>(name: ContextName): T {
    return window.adobeDataLayer.getState(name);
  }
  // Add event listener to ACDL
  private addEventListener(name: EventName, handler: Function) {
    window.adobeDataLayer.push((dl: AdobeClientDataLayer) => {
      dl.addEventListener(name, handler);
    });
  }
  // Remove event listener from ACDL
  private removeEventListener() {}
  // Push event to ACDL
  private pushEvent() {}

  /**
   * Get shopper context
   **/
  public getShopperContext() {
    return this.getContext<Shopper>("shopper-context");
  }

  /**
   * Set shopper context
   **/
  public setShopperContext(context: Shopper) {
    this.setContext<Shopper>("shopper-context", context);
  }
}

export default new MagentoDataLayer();
