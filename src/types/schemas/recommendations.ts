/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import { Product } from "./product";

export type RecUnit = {
    unitName: string;
    unitId: string;
    totalProducts: number;
    backupProducts: number;
    configType: "preconfigured" | "ad-hoc";
    source: "api" | "cdn-backup";
    typeId: string;
    pageType?: string;
};

export type RecProduct = Product & {
    unitId: string;
};
