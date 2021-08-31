/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

export type SearchResults = {
    units: Array<SearchResultUnit>;
};

export type SearchResultUnit = {
    searchUnitId: string;
    searchRequestId: string;
    products: Array<SearchResultProduct>;
    categories: Array<SearchResultCategory>;
    suggestions: Array<SearchResultSuggestion>;
    page: number;
    perPage: number;
    facets: Array<SearchFacet> | null;
};

export type SearchResultProduct = {
    name: string;
    sku: string;
    url: string;
    imageUrl: string;
    price?: number;
    rank: number;
};

export type SearchResultCategory = {
    name: string;
    url: string;
    rank: number;
};

export type SearchResultSuggestion = {
    suggestion: string;
    rank: number;
};

export type SearchFacet = {
    attribute: string;
    buckets: Array<SearchBucket>;
    title: string;
    type: "PINNED" | "INTELLIGENT" | "POPULAR";
};

export type SearchBucket = RangeBucket | ScalarBucket | StatsBucket;

export type RangeBucket = {
    count: number;
    from: number;
    title: string;
    to?: number;
};

export type ScalarBucket = {
    count: number;
    title: string;
};

export type StatsBucket = {
    min: number;
    max: number;
    title: string;
};
