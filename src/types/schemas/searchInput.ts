/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

export interface SearchInput {
  searchType?: "popover" | "plp" | null;
  query: string;
  refinementAttribute: string | null;
  refinementSelection: string | null;
}
