/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import ContextManager from "./contextManager";
import PublishManager from "./publishManager";
import SubscribeManager from "./subscribeManager";
import UnsubscribeManager from "./unsubscribeManager";

class MagentoStorefrontEvents {
    constructor() {
        // ensure event array is available
        window.adobeDataLayer = window.adobeDataLayer || [];
    }

    /**
     * Methods for interacting with context data
     */
    public context = new ContextManager();

    /**
     * Methods for publishing events
     */
    public publish = new PublishManager();

    /**
     * Methods for subscribing to events
     */
    public subscribe = new SubscribeManager();

    /**
     * Methods for unsubscribing from events
     */
    public unsubscribe = new UnsubscribeManager();
}

export default MagentoStorefrontEvents;
