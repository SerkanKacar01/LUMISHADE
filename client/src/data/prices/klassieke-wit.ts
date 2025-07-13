// Custom pricing for Klassieke Rolgordijn Wit
// Fixed height: 210cm
// You can easily edit these prices by changing the values below

export const classicWhitePrices = {
  40: 28.99,
  45: 31.99,
  50: 34.99,
  55: 37.99,
  60: 39.99,
  65: 41.99,
  70: 43.99,
  75: 45.99,
  80: 46.99,
  85: 47.99,
  90: 48.99,
  95: 49.99,
  100: 51.99,
  110: 54.99,
  120: 57.99,
  130: 60.99,
  140: 63.99,
  150: 66.99,
  160: 69.99,
  170: 72.99,
  180: 75.99,
  190: 78.99,
  200: 81.99,
};

// Get available widths for this product
export const getAvailableWidths = (): number[] => {
  return Object.keys(classicWhitePrices).map(Number).sort((a, b) => a - b);
};

// Get price for specific width
export const getPriceForWidth = (width: number): number => {
  return classicWhitePrices[width] || 0;
};

// Format size string (always with 210cm height)
export const formatSizeString = (width: number): string => {
  return `${width} x 210 cm`;
};