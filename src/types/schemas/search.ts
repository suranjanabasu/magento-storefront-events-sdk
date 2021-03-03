/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

interface SearchItem {
  title: string;
  url: string;
  rank: number;
  resultType: "category" | "suggestion" | "product";
  sku?: string;
  imageUrl?: string;
  price?: string;
}

export interface Search {
  query: string;
  products: Array<SearchItem>;
  suggestions?: Array<SearchItem>;
  categories?: Array<SearchItem>;
  page: number;
  perPage: number;
}
