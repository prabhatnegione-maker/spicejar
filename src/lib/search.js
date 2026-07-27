import { products } from "./data";

export function performSearch(query) {
  if (!query || query.trim() === "") return [];
  
  const searchTerms = query.toLowerCase().split(/\s+/).filter(Boolean);
  
  const scoredProducts = products.map((product) => {
    let score = 0;
    const name = product.name.toLowerCase();
    const subtitle = product.subtitle.toLowerCase();
    const category = product.category.toLowerCase();
    const tags = product.tags.map(t => t.toLowerCase());
    const description = product.description.toLowerCase();

    // The full string containing everything searchable for this product
    const searchableText = [name, subtitle, category, ...tags, description].join(" ");
    
    // Strict AND logic: ALL terms must be present somewhere in the searchable text
    const allTermsMatch = searchTerms.every(term => searchableText.includes(term));
    
    if (!allTermsMatch) {
      return { product, score: 0 };
    }

    // If they all match, assign a score based on WHERE they match
    searchTerms.forEach((term) => {
      // High priority: Name and subtitle
      if (name === term || name.includes(term)) {
        score += 10;
        if (name.startsWith(term)) score += 5;
      }
      if (subtitle.includes(term)) {
        score += 8;
      }

      // Medium priority: Category and tags
      if (category.includes(term)) {
        score += 5;
      }
      if (tags.some(t => t.includes(term))) {
        score += 5;
      }

      // Low priority: Description
      if (description.includes(term)) {
        score += 2;
      }
    });

    return { product, score };
  });

  return scoredProducts
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((item) => item.product);
}
