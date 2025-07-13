// Width-based pricing configuration (Height fixed at 210cm)
// You can easily update these prices by changing the values below

export interface WidthPrice {
  width: number;
  price: number;
}

// Standard pricing for light-filtering roller blinds
export const lichtdoorlatendPrices: Record<number, number> = {
  40: 29.99,
  45: 34.99,
  50: 38.99,
  55: 41.99,
  60: 44.99,
  65: 48.99,
  70: 51.99,
  75: 54.99,
  80: 55.99,
  85: 57.99,
  90: 58.99,
  95: 60.99,
  100: 62.99,
  110: 66.99,
  120: 70.99,
  130: 74.99,
  140: 78.99,
  150: 82.99,
  160: 86.99,
  170: 90.99,
  180: 94.99,
  190: 98.99,
  200: 102.99,
};

// Premium pricing for blackout/thermal roller blinds (typically higher)
export const verduisterendPrices: Record<number, number> = {
  40: 39.99,
  45: 44.99,
  50: 48.99,
  55: 51.99,
  60: 54.99,
  65: 58.99,
  70: 61.99,
  75: 64.99,
  80: 65.99,
  85: 67.99,
  90: 68.99,
  95: 70.99,
  100: 72.99,
  110: 76.99,
  120: 80.99,
  130: 84.99,
  140: 88.99,
  150: 92.99,
  160: 96.99,
  170: 100.99,
  180: 104.99,
  190: 108.99,
  200: 112.99,
};

// Duo-rolgordijnen pricing (premium category)
export const duoRolgordijnenPrices: Record<number, number> = {
  40: 49.99,
  45: 54.99,
  50: 58.99,
  55: 61.99,
  60: 64.99,
  65: 68.99,
  70: 71.99,
  75: 74.99,
  80: 75.99,
  85: 77.99,
  90: 78.99,
  95: 80.99,
  100: 82.99,
  110: 86.99,
  120: 90.99,
  130: 94.99,
  140: 98.99,
  150: 102.99,
  160: 106.99,
  170: 110.99,
  180: 114.99,
  190: 118.99,
  200: 122.99,
};

// Get price based on product type and width
export const getPriceByWidth = (fabricType: 'lichtdoorlatend' | 'verduisterend' | 'duo-rolgordijnen', width: number): number => {
  let priceMap: Record<number, number>;
  
  switch (fabricType) {
    case 'lichtdoorlatend':
      priceMap = lichtdoorlatendPrices;
      break;
    case 'verduisterend':
      priceMap = verduisterendPrices;
      break;
    case 'duo-rolgordijnen':
      priceMap = duoRolgordijnenPrices;
      break;
    default:
      priceMap = lichtdoorlatendPrices;
  }
  
  return priceMap[width] || 0;
};

// Get all available widths
export const getAvailableWidths = (): number[] => {
  return Object.keys(lichtdoorlatendPrices).map(Number).sort((a, b) => a - b);
};

// Format size string with fixed height
export const formatSize = (width: number): string => {
  return `${width} x 210 cm`;
};