import { getProductImage } from './imageMapper';
import { imagePool36to270 } from './imagePool';

// Shared products data structure
export interface Product {
  id: string;
  title: string;
  price: string;
  image: string;
  inStock: boolean;
  oemNumber?: string;
  category: string;
  subcategory: string;
  description?: string;
  specifications?: Record<string, string>;
  brand?: string;
  warranty?: string;
  weight?: string;
  dimensions?: string;
}

// Helper function to assign images to products
const assignProductImage = (product: Omit<Product, 'image'> & { image?: string }): Product => {
  if (product.image && (product.image.startsWith('/') || product.image.startsWith('http'))) {
    return product as Product;
  }
  return {
    ...product,
    image: getProductImage(product),
  };
};

// Extended products list with IDs
const productsData: Array<Omit<Product, 'image'> & { image?: string }> = [
  // Tractor Parts
  {
    id: '1',
    title: 'Perkins 2644H501 Fuel Filter - Genuine OEM',
    price: 'KSh 3,450',
    inStock: true,
    oemNumber: '2644H501',
    category: 'Tractor Parts',
    subcategory: 'Engine Components',
    description: 'Genuine OEM Perkins fuel filter designed for optimal engine performance. High-quality construction ensures reliable filtration and engine protection.',
    brand: 'Perkins',
    warranty: '12 months',
    specifications: {
      'Part Number': '2644H501',
      'Compatibility': 'Perkins 400 Series Engines',
      'Filter Type': 'Fuel Filter',
      'Material': 'Synthetic Media',
    },
  },
  {
    id: '2',
    title: 'CNH Case IH Air Filter 84257511',
    price: 'KSh 6,750',
    inStock: true,
    oemNumber: '84257511',
    category: 'Tractor Parts',
    subcategory: 'Filters & Fluids',
    description: 'Original Case IH air filter providing superior air filtration for tractor engines. Maintains optimal airflow and engine performance.',
    brand: 'Case IH',
    warranty: '6 months',
    specifications: {
      'Part Number': '84257511',
      'Compatibility': 'Case IH Tractors',
      'Filter Type': 'Air Filter',
      'Material': 'Pleated Paper',
    },
  },
  {
    id: '3',
    title: 'Sparex S.67425 Hydraulic Filter Element',
    price: 'KSh 4,100',
    inStock: true,
    oemNumber: 'S.67425',
    category: 'Tractor Parts',
    subcategory: 'Hydraulic Systems',
    description: 'Premium hydraulic filter element designed to remove contaminants from hydraulic fluid, ensuring smooth operation of hydraulic systems.',
    brand: 'Sparex',
    warranty: '12 months',
    specifications: {
      'Part Number': 'S.67425',
      'Compatibility': 'Universal Hydraulic Systems',
      'Filter Type': 'Hydraulic Filter Element',
      'Filtration': '10 Micron',
    },
  },
  {
    id: '4',
    title: 'Massey Ferguson Transmission Seal Kit',
    price: 'KSh 8,900',
    inStock: true,
    oemNumber: 'MF-TRK-001',
    category: 'Tractor Parts',
    subcategory: 'Transmission Parts',
    description: 'Complete transmission seal kit for Massey Ferguson tractors. Includes all necessary seals and gaskets for transmission overhaul.',
    brand: 'Massey Ferguson',
    warranty: '12 months',
    specifications: {
      'Part Number': 'MF-TRK-001',
      'Compatibility': 'Massey Ferguson Tractors',
      'Kit Type': 'Seal Kit',
      'Components': 'Multiple Seals & Gaskets',
    },
  },
  {
    id: '5',
    title: 'Deutz Alternator 12V 70A',
    price: 'KSh 15,500',
    inStock: true,
    oemNumber: 'DEUTZ-ALT-70',
    category: 'Tractor Parts',
    subcategory: 'Electrical Parts',
    description: 'High-output alternator for Deutz engines. Provides reliable electrical power for all tractor systems.',
    brand: 'Deutz',
    warranty: '24 months',
    specifications: {
      'Part Number': 'DEUTZ-ALT-70',
      'Voltage': '12V',
      'Amperage': '70A',
      'Compatibility': 'Deutz Engines',
    },
  },
  // Vehicle Parts
  {
    id: '6',
    title: 'Bosch 0 986 494 294 Brake Pad Set - Front',
    price: 'KSh 5,200',
    inStock: true,
    oemNumber: '0986494294',
    category: 'Vehicle Parts',
    subcategory: 'Brake Systems',
    description: 'Premium Bosch brake pads offering excellent braking performance and durability. Designed for reliable stopping power.',
    brand: 'Bosch',
    warranty: '12 months',
    specifications: {
      'Part Number': '0 986 494 294',
      'Position': 'Front',
      'Type': 'Ceramic',
      'Compatibility': 'Various Vehicle Models',
    },
  },
  {
    id: '7',
    title: 'Front Shock Absorber - Isuzu D-Max',
    price: 'KSh 12,800',
    inStock: true,
    oemNumber: 'ISUZU-SHOCK-F',
    category: 'Vehicle Parts',
    subcategory: 'Suspension & Steering',
    description: 'Original quality front shock absorber for Isuzu D-Max. Ensures smooth ride and optimal handling.',
    brand: 'Isuzu',
    warranty: '12 months',
    specifications: {
      'Part Number': 'ISUZU-SHOCK-F',
      'Vehicle': 'Isuzu D-Max',
      'Position': 'Front',
      'Type': 'Gas Filled',
    },
  },
  {
    id: '8',
    title: 'Ford Engine Oil Pump',
    price: 'KSh 9,500',
    inStock: true,
    oemNumber: 'FORD-OP-001',
    category: 'Vehicle Parts',
    subcategory: 'Engine Parts',
    description: 'High-quality engine oil pump for Ford vehicles. Ensures proper engine lubrication and cooling.',
    brand: 'Ford',
    warranty: '12 months',
    specifications: {
      'Part Number': 'FORD-OP-001',
      'Compatibility': 'Ford Engines',
      'Type': 'Gear Pump',
      'Material': 'Steel',
    },
  },
  {
    id: '9',
    title: 'Radiator Fan Motor - Universal',
    price: 'KSh 6,200',
    inStock: true,
    oemNumber: 'RAD-FAN-001',
    category: 'Vehicle Parts',
    subcategory: 'Cooling System',
    description: 'Universal radiator fan motor providing reliable cooling system operation for various vehicle models.',
    brand: 'Universal',
    warranty: '12 months',
    specifications: {
      'Part Number': 'RAD-FAN-001',
      'Voltage': '12V',
      'Type': 'Electric Fan Motor',
      'Compatibility': 'Universal',
    },
  },
  {
    id: '10',
    title: 'Exhaust Manifold Gasket Set',
    price: 'KSh 2,800',
    inStock: true,
    oemNumber: 'EXH-GSK-001',
    category: 'Vehicle Parts',
    subcategory: 'Exhaust Systems',
    description: 'High-temperature exhaust manifold gasket set ensuring proper seal and exhaust system performance.',
    brand: 'Universal',
    warranty: '6 months',
    specifications: {
      'Part Number': 'EXH-GSK-001',
      'Type': 'Gasket Set',
      'Material': 'Graphite Composite',
      'Temperature Rating': 'Up to 800°C',
    },
  },
  // Power Tools
  {
    id: '11',
    title: 'Makita DHP484Z Cordless Hammer Driver Drill 18V',
    price: 'KSh 28,900',
    inStock: true,
    oemNumber: 'DHP484Z',
    category: 'Power Tools',
    subcategory: 'Makita Tools',
    description: 'Professional-grade cordless hammer driver drill from Makita. Powerful 18V battery system with variable speed control.',
    brand: 'Makita',
    warranty: '12 months',
    specifications: {
      'Part Number': 'DHP484Z',
      'Voltage': '18V',
      'Type': 'Hammer Driver Drill',
      'Battery': 'Not Included',
      'Chuck Size': '13mm',
    },
  },
  {
    id: '12',
    title: 'Bosch Professional GSR 18V-21 Cordless Drill',
    price: 'KSh 24,500',
    inStock: true,
    oemNumber: 'GSR-18V-21',
    category: 'Power Tools',
    subcategory: 'Bosch Professional',
    description: 'Bosch Professional cordless drill with powerful motor and ergonomic design. Ideal for professional applications.',
    brand: 'Bosch',
    warranty: '12 months',
    specifications: {
      'Part Number': 'GSR-18V-21',
      'Voltage': '18V',
      'Type': 'Cordless Drill',
      'Torque': '65 Nm',
      'Chuck Size': '13mm',
    },
  },
  {
    id: '13',
    title: 'STIHL MS 250 Chainsaw 18" Bar Professional',
    price: 'KSh 42,500',
    inStock: true,
    oemNumber: 'MS250-18',
    category: 'Power Tools',
    subcategory: 'STIHL Equipment',
    description: 'Professional-grade STIHL chainsaw with 18" bar. Perfect for heavy-duty cutting and forestry work.',
    brand: 'STIHL',
    warranty: '24 months',
    specifications: {
      'Part Number': 'MS250-18',
      'Engine': '45.4cc',
      'Bar Length': '18"',
      'Chain Pitch': '3/8"',
      'Weight': '4.9 kg',
    },
  },
  {
    id: '14',
    title: 'Makita Circular Saw 7-1/4" 5007MG',
    price: 'KSh 18,900',
    inStock: true,
    oemNumber: '5007MG',
    category: 'Power Tools',
    subcategory: 'Cutting Tools',
    description: 'Heavy-duty circular saw from Makita. Features powerful motor and precision cutting capabilities.',
    brand: 'Makita',
    warranty: '12 months',
    specifications: {
      'Part Number': '5007MG',
      'Blade Size': '7-1/4"',
      'Power': '2400W',
      'Max Depth': '65mm',
      'Type': 'Circular Saw',
    },
  },
  // Workshop Items
  {
    id: '15',
    title: 'Federal-Mogul Champion RC12YC Spark Plug',
    price: 'KSh 850',
    inStock: true,
    oemNumber: 'RC12YC',
    category: 'Workshop Items',
    subcategory: 'Hand Tools',
    description: 'High-quality spark plug ensuring optimal engine ignition and performance.',
    brand: 'Champion',
    warranty: '6 months',
    specifications: {
      'Part Number': 'RC12YC',
      'Type': 'Spark Plug',
      'Thread Size': '14mm',
      'Gap': '0.7-0.8mm',
    },
  },
  {
    id: '16',
    title: 'OBD2 Diagnostic Scanner',
    price: 'KSh 15,000',
    inStock: true,
    oemNumber: 'OBD2-PRO',
    category: 'Workshop Items',
    subcategory: 'Diagnostic Equipment',
    description: 'Professional OBD2 diagnostic scanner for reading and clearing vehicle fault codes. Compatible with most vehicles.',
    brand: 'Generic',
    warranty: '12 months',
    specifications: {
      'Part Number': 'OBD2-PRO',
      'Protocol': 'OBD-II',
      'Compatibility': '1996+ Vehicles',
      'Display': 'LCD Screen',
    },
  },
  {
    id: '17',
    title: 'Castrol GTX 20W-50 Engine Oil 5L',
    price: 'KSh 3,200',
    inStock: true,
    oemNumber: 'GTX-20W50',
    category: 'Workshop Items',
    subcategory: 'Lubricants & Oils',
    description: 'Premium engine oil providing excellent protection and performance for gasoline engines.',
    brand: 'Castrol',
    warranty: 'N/A',
    specifications: {
      'Part Number': 'GTX-20W50',
      'Viscosity': '20W-50',
      'Volume': '5 Liters',
      'Type': 'Mineral Oil',
    },
  },
  {
    id: '18',
    title: 'Safety Helmet & Goggles Set',
    price: 'KSh 2,500',
    inStock: true,
    oemNumber: 'SAFE-SET-001',
    category: 'Workshop Items',
    subcategory: 'Safety Equipment',
    description: 'Complete safety set including hard hat and protective goggles for workshop and construction work.',
    brand: 'Generic',
    warranty: '6 months',
    specifications: {
      'Part Number': 'SAFE-SET-001',
      'Components': 'Helmet & Goggles',
      'Standard': 'ANSI Certified',
      'Material': 'ABS Plastic',
    },
  },
  {
    id: '19',
    title: 'Workshop Tool Organizer',
    price: 'KSh 4,800',
    inStock: true,
    oemNumber: 'WS-ORG-001',
    category: 'Workshop Items',
    subcategory: 'Workshop Supplies',
    description: 'Organized storage solution for workshop tools. Keeps tools accessible and workspace tidy.',
    brand: 'Generic',
    warranty: '6 months',
    specifications: {
      'Part Number': 'WS-ORG-001',
      'Type': 'Tool Organizer',
      'Material': 'Steel & Plastic',
      'Compartments': 'Multiple',
    },
  },
];

// Pretty naming and price ranges based on OEM Code/Model provided
const prettyMap: Record<string, { title: string; price: string; brand?: string; category?: string; subcategory?: string }> = {
  GA9020: { title: 'Makita GA9020 5" (125mm) Angle Grinder 2000W', price: 'KSh 12,500 - 15,000', brand: 'Makita', category: 'Power Tools' },
  GB602: { title: 'Makita GB602 6" (150mm) Bench Grinder', price: 'KSh 9,000 - 11,000', brand: 'Makita', category: 'Power Tools' },
  GB801: { title: 'Makita GB801 8" (205mm) Bench Grinder', price: 'KSh 15,000 - 18,000', brand: 'Makita', category: 'Power Tools' },
  '9046': { title: 'Makita 9046 4" (100mm) Belt Sander 940W', price: 'KSh 10,000 - 12,500', brand: 'Makita', category: 'Power Tools' },
  LW1401: { title: 'Makita LW1401 10" Compound Mitre Saw', price: 'KSh 45,000 - 55,000', brand: 'Makita', category: 'Power Tools' },
  'LC1230 METAL': { title: 'Makita LC1230 Metal Cutting Saw', price: 'KSh 95,000 - 115,000', brand: 'Makita', category: 'Power Tools' },
  LS1040: { title: 'Makita LS1040 10" Compound Mitre Saw', price: 'KSh 35,000 - 42,000', brand: 'Makita', category: 'Power Tools' },
  LS1219L: { title: 'Makita LS1219L 12" Slide Compound Mitre Saw', price: 'KSh 65,000 - 78,000', brand: 'Makita', category: 'Power Tools' },
  '2712': { title: 'Makita 2712 10" Contractor Table Saw', price: 'KSh 75,000 - 90,000', brand: 'Makita', category: 'Power Tools' },
  UB1103: { title: 'Makita UB1103 18V LXT Cordless Blower (Body Only)', price: 'KSh 8,500 - 10,500', brand: 'Makita', category: 'Power Tools' },
  HG5012: { title: 'Makita HG5012 5" Random Orbit Sander', price: 'KSh 7,000 - 9,000', brand: 'Makita', category: 'Power Tools' },
  HG6030: { title: 'Makita HG6030 6" Random Orbit Sander', price: 'KSh 9,000 - 11,000', brand: 'Makita', category: 'Power Tools' },
  HG651CK: { title: 'Makita HG651CK 6" Random Orbit Sander Kit', price: 'KSh 12,000 - 15,000', brand: 'Makita', category: 'Power Tools' },
  RP0900: { title: 'Makita RP0900 ¼ Sheet Orbital Sander', price: 'KSh 5,500 - 7,000', brand: 'Makita', category: 'Power Tools' },
  EM2650UH: { title: 'Makita EM2650UH 26cc 2-Stroke Engine Multi Tool', price: 'KSh 85,000 - 100,000', brand: 'Makita', category: 'Power Tools' },
  TM3000C: { title: 'Makita TM3000C 3" Planer 420W', price: 'KSh 6,500 - 8,000', brand: 'Makita', category: 'Power Tools' },
  DGA900Z: { title: 'Makita DGA900Z 18V LXT 5" Angle Grinder (Body Only)', price: 'KSh 9,000 - 11,000', brand: 'Makita', category: 'Power Tools' },
  DJR187Z: { title: 'Makita DJR187Z 18V LXT Recipro Saw (Body Only)', price: 'KSh 10,000 - 12,500', brand: 'Makita', category: 'Power Tools' },
  DJV180Z: { title: 'Makita DJV180Z 18V LXT Jig Saw (Body Only)', price: 'KSh 8,000 - 10,000', brand: 'Makita', category: 'Power Tools' },
  DPO600Z: { title: 'Makita DPO600Z 18V LXT Planer (Body Only)', price: 'KSh 12,000 - 14,500', brand: 'Makita', category: 'Power Tools' },
  DTR180Z: { title: 'Makita DTR180Z 18V LXT Impact Driver (Body Only)', price: 'KSh 7,500 - 9,500', brand: 'Makita', category: 'Power Tools' },
  DTW1001Z: { title: 'Makita DTW1001Z 18V LXT Impact Wrench (High Torque)', price: 'KSh 25,000 - 30,000', brand: 'Makita', category: 'Power Tools' },
  DTW300Z: { title: 'Makita DTW300Z 18V LXT Impact Wrench (Mid Torque)', price: 'KSh 15,000 - 18,000', brand: 'Makita', category: 'Power Tools' },
  DTW450Z: { title: 'Makita DTW450Z 18V LXT Impact Wrench (Compact)', price: 'KSh 12,000 - 15,000', brand: 'Makita', category: 'Power Tools' },
  HP457DWE: { title: 'Makita HP457DWE 18V LXT Drill Driver Kit (2x Batteries)', price: 'KSh 18,000 - 22,000', brand: 'Makita', category: 'Power Tools' },
  JV183DZ: { title: 'Makita JV183DZ 18V LXT Cordless Drill/Driver (Body Only)', price: 'KSh 6,500 - 8,000', brand: 'Makita', category: 'Power Tools' },
  '6906': { title: 'Makita 6906 ½" Heavy Duty Drill', price: 'KSh 8,000 - 10,000', brand: 'Makita', category: 'Power Tools' },
  HP2050: { title: 'Makita HP2050 10mm Drill Driver', price: 'KSh 4,000 - 5,000', brand: 'Makita', category: 'Power Tools' },
  HR2475: { title: 'Makita HR2475 ½" Rotary Hammer', price: 'KSh 13,000 - 16,000', brand: 'Makita', category: 'Power Tools' },
  D24153: { title: 'Unknown Model (Possibly a part or accessory)', price: 'Price on Request' },
  'Flap Disc 01': { title: 'Flap Discs for Angle Grinders (Assorted Grits)', price: 'KSh 300 - 600 each' },
  'S0099 Air Filter': { title: 'Air Filter (Generic/Vehicle)', price: 'KSh 500 - 1,500' },
  'P7155 Oil Filter': { title: 'Oil Filter (Generic/Vehicle)', price: 'KSh 400 - 1,200' },
  'Tie Rod LH': { title: 'Vehicle Tie Rod End (Left Hand)', price: 'KSh 1,500 - 4,000' },
  '140987 Pic1': { title: 'Unknown Spare Part (Reference 140987)', price: 'Price on Request' },
  '11 2': { title: 'Unknown Part/Accessory (Code 11-2)', price: 'Price on Request' },
  'S.41938': { title: 'Spare Part (Bushing, Bearing, or Seal)', price: 'Price on Request' },
  'S.41542': { title: 'Spare Part (Bushing, Bearing, or Seal)', price: 'Price on Request' },
  'S.41571': { title: 'Spare Part (Bushing, Bearing, or Seal)', price: 'Price on Request' },
  'S.41932': { title: 'Spare Part (Bushing, Bearing, or Seal)', price: 'Price on Request' },
  'V Groove Bit': { title: 'V-Groove Router Bit', price: 'KSh 1,200 - 2,000' },
  'Bim Hole Saw': { title: 'BIM Brand Hole Saw Kit or Individual Saw', price: 'KSh 800 - 3,500' },
  'Ear Muff': { title: 'Safety Ear Muffs', price: 'KSh 800 - 1,500' },
  'MAKITA ANGLE GRINDER 4 1 2 840W': { title: 'Makita 4.5" Angle Grinder 840W (Model likely GA4530)', price: 'KSh 7,000 - 9,000', brand: 'Makita', category: 'Power Tools' },
  'Finishing Sander': { title: 'Finishing Sander (Generic or Makita BO3700)', price: 'KSh 4,000 - 6,000' },
  'Handle Jig Saw': { title: 'Jig Saw Handle / D-Handle', price: 'KSh 1,000 - 2,000' },
  Blower: { title: 'Makita UB1103 Blower (see above)', price: 'KSh 8,500 - 10,500', brand: 'Makita', category: 'Power Tools' },
  '6723DW': { title: 'Makita 6723DW 2-Speed Impact Driver Kit', price: 'KSh 15,000 - 18,000', brand: 'Makita', category: 'Power Tools' },
  DF347DWE: { title: 'Makita DF347DWE 18V LXT Drill Driver Kit', price: 'KSh 16,000 - 20,000', brand: 'Makita', category: 'Power Tools' },
  CL105DWX: { title: 'Makita CL105DWX 18V LXT Work Light', price: 'KSh 5,000 - 7,000', brand: 'Makita', category: 'Power Tools' },
  GA7020: { title: 'Makita GA7020 7" (180mm) Angle Grinder 2200W', price: 'KSh 15,000 - 18,000', brand: 'Makita', category: 'Power Tools' },
};

// Attempt to extract known codes from a filename for pretty mapping
const extractCodesFromFilename = (fileName: string): string[] => {
  const withoutPrefix = fileName.replace(/^imgi_\d+_?/, '').replace(/\.[a-zA-Z0-9]+$/, '');
  const tokens = withoutPrefix.replace(/[-_]+/g, ' ').toUpperCase();
  const candidates: string[] = [];
  // Alphanumeric model codes
  const alphaNumMatches = tokens.match(/\b[A-Z]{2,}\d+[A-Z]?\b/g) || [];
  candidates.push(...alphaNumMatches);
  // Pure numbers like 2712, 9046, 6906
  const numberMatches = tokens.match(/\b\d{3,6}\b/g) || [];
  candidates.push(...numberMatches);
  // Special named items present in prettyMap keys
  Object.keys(prettyMap).forEach((key) => {
    if (tokens.includes(key.toUpperCase())) candidates.push(key);
  });
  return Array.from(new Set(candidates));
};

// Exclude logos, banners, and non-product images from placeholder generation
const excludedImagePatterns: RegExp[] = [
  /farmparts1/i,
  /farmparts2/i,
  /top[_-]?brands[_-]?emblem/i,
  /agri[-_]?1/i,
  /hqdefault/i,
  /bladwin|baldwin/i,
  /bosch\.png$/i,
  /deutz\.jpg$/i,
  /ford\.jpg$/i,
  /heyco\.jpg$/i,
  /isuzu\.jpg$/i,
  /banner[-_]?\d/i,
  /banner1/i,
  /whatsapp-button/i,
  /logos?-bush/i,
  /IMG-20230925-WA0013/i,
];

const filteredImagePool = imagePool36to270.filter((p) => !excludedImagePatterns.some((re) => re.test(p)));

// Generate placeholder products from image pool (imgi_36..imgi_270)
const placeholderProducts: Array<Omit<Product, 'image'> & { image?: string }> = filteredImagePool.map((imgPath) => {
  // Extract numeric id from filename
  const match = imgPath.match(/imgi_(\d+)/);
  const numericId = match ? match[1] : Math.floor(Math.random() * 100000).toString();

  // Derive a readable title from filename
  const fileName = imgPath.split('/').pop() || imgPath;
  const baseName = fileName.replace(/^imgi_\d+_?/, '').replace(/\.[a-zA-Z0-9]+$/, '');
  let title = baseName
    .replace(/[-_]+/g, ' ')
    .replace(/\b(\w)/g, (m) => m.toUpperCase())
    .trim() || `Product ${numericId}`;

  // Try pretty mapping
  const candidateCodes = extractCodesFromFilename(fileName);
  let price = 'KSh —';
  let oemNumber: string | undefined = undefined;
  let brand: string | undefined = undefined;
  let category: string = 'Farm Parts';
  let subcategory: string = 'General';

  for (const code of candidateCodes) {
    const pretty = prettyMap[code as keyof typeof prettyMap];
    if (pretty) {
      title = pretty.title;
      price = pretty.price;
      oemNumber = code;
      brand = pretty.brand ?? brand;
      category = pretty.category ?? category;
      break;
    }
  }

  // Normalize price: if it's a range like "KSh A - B", keep only the first part
  if (price.includes('-')) {
    price = price.split('-')[0].trim();
  }

  return {
    id: `IMG-${numericId}`,
    title,
    price,
    inStock: true,
    category,
    subcategory,
    brand,
    oemNumber,
    image: imgPath,
  };
});

// Merge authored products with placeholders and assign images for authored where needed
export const allProducts: Product[] = [
  ...placeholderProducts.map((p) => p as Product),
];

export const getProductById = (id: string): Product | undefined => {
  return allProducts.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === 'All Categories') return allProducts;
  return allProducts.filter(product => product.category === category);
};

export const getProductsBySubcategory = (subcategory: string): Product[] => {
  return allProducts.filter(product => product.subcategory === subcategory);
};

export const getRelatedProducts = (productId: string, limit: number = 4): Product[] => {
  const product = getProductById(productId);
  if (!product) return [];
  
  return allProducts
    .filter(p => p.id !== productId && p.category === product.category)
    .slice(0, limit);
};

