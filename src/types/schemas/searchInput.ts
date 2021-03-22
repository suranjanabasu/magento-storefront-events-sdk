/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

type SearchInput = {
    source: "search-bar" | "results-page" | "custom" | null;
    query: string;
    page: number;
    perPage: number;
    refinementAttribute?: string;
    refinementSelection?: string;
    sortType: string;
    sortOrder: "ascending" | "descending";
};

export { SearchInput };
