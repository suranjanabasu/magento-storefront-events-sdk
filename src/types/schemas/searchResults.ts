/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

type SearchResultProduct = {
    name: string;
    sku: string;
    url: string;
    imageUrl: string;
    price: string;
    rank: number;
};

type SearchResultCategory = {
    name: string;
    url: string;
    rank: number;
};

type SearchResultSuggestion = {
    query: string;
    rank: number;
};

export type SearchResults = {
    products: Array<SearchResultProduct>;
    categories: Array<SearchResultCategory>;
    suggestions: Array<SearchResultSuggestion>;
    productCount: number;
    categoryCount: number;
    suggestionCount: number;
    page: number;
    perPage: number;
};
