// Custom pricing for Klassieke Rolgordijn Wit
// Fixed height: 210cm
// You can easily edit these prices by changing the values below

export const classicWhitePrices = {
  40: 63,
  45: 63,
  50: 63,
  55: 63,
  60: 63,
  65: 63,
  70: 63,
  75: 63,
  80: 63,
  85: 63,
  90: 63,
  95: 63,
  100: 63,
  110: 69,
  120: 76,
  130: 82,
  140: 88,
  150: 95,
  160: 101,
  170: 107,
  180: 113,
  190: 120,
  200: 126,
  205: 129,
  210: 132,
  215: 135,
  220: 139,
  225: 142,
  230: 145,
  235: 149,
  240: 151,
  245: 154,
  250: 158,
  255: 161,
  260: 164,
  265: 167,
  270: 170,
  275: 173,
  280: 176,
};

// Get available widths for this product
export const getAvailableWidths = (): number[] => {
  return Object.keys(classicWhitePrices)
    .map(Number)
    .sort((a, b) => a - b);
};

// Get price for specific width
export const getPriceForWidth = (width: number): number => {
  return classicWhitePrices[width] || 0;
};

// Format size string (always with 210cm height)
export const formatSizeString = (width: number): string => {
  return `${width} x 200 cm`;
};
