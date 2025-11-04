import { imagePool36to270 } from './imagePool';

export const getProductImage = (product: {
  brand?: string;
  category: string;
  subcategory?: string;
  title: string;
  oemNumber?: string;
  id?: string;
}): string => {
  const { title, oemNumber } = product;

  const identifiers: string[] = [];
  if (oemNumber) {
    const normalizedOEM = oemNumber.replace(/[\s\-.]/g, '').toUpperCase();
    identifiers.push(normalizedOEM, oemNumber.toUpperCase());
  }

  title.match(/[A-Z]{2,}\d{2,}[A-Z]?/g)?.forEach((m) => {
    identifiers.push(m.replace(/[\s\-.]/g, '').toUpperCase());
  });
  title.match(/\b(\d{3,6})\b/g)?.forEach((m) => identifiers.push(m));

  // Broad match first
  const upperIds = identifiers.map((x) => x.toUpperCase());
  for (const path of imagePool36to270) {
    const up = path.toUpperCase();
    if (upperIds.some((id) => id && up.includes(id))) return path;
  }

  // Deterministic fallback across pool
  const baseKey = (product.id || oemNumber || title || '').toString();
  let hash = 0;
  for (let i = 0; i < baseKey.length; i++) {
    hash = ((hash << 5) - hash) + baseKey.charCodeAt(i);
    hash |= 0;
  }
  if (imagePool36to270.length > 0) {
    const index = Math.abs(hash) % imagePool36to270.length;
    return imagePool36to270[index];
  }

  return '/Logos/farmpartsproductimages/imgi_3_Farmparts-Name-website.png';
};


