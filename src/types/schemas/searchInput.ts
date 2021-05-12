/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

export type SearchInput = {
    units: Array<SearchInputUnit>;
};

export type SearchInputUnit = {
    searchUnitId: string;
    searchRequestId: string;
    queryTypes: Array<"products" | "suggestions" | "categories">;
    phrase: string;
    pageSize: number;
    currentPage: number;
    filter: Array<SearchFilter>;
    sort: Array<SearchSort>;
};

export type SearchFilter = {
    attribute: string;
    eq?: string;
    in?: Array<string>;
    range?: {
        from?: number;
        to?: number;
    };
};

export type SearchSort = {
    attribute: string;
    direction: "ASC" | "DESC";
};
