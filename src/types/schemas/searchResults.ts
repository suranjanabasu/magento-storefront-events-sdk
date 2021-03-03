/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

export interface SearchResults {
  query: string;
  productResults: number;
  suggestionResults?: number;
  categoryResults?: number;
  resultsPage: number;
  resultsPerPage: number;
}
