/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

interface SearchResultItem {
  title: string;
  url: string;
  rank: number;
  resultType: "category" | "suggestion" | "product";
  sku?: string;
  imageUrl?: string;
  price?: string;
}

export interface SearchResults {
  products: Array<SearchResultItem>;
  suggestions?: Array<SearchResultItem>;
  categories?: Array<SearchResultItem>;
  page: number;
  perPage: number;
}
