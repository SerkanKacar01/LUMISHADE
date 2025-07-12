export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  shortDescription: string;
  category: 'blinds' | 'sunshades' | 'curtains' | 'screens';
  features: string[];
  sizes: string[];
}

export const products: Product[] = [
  {
    id: 'blackout-roller-blind',
    name: 'Premium Blackout Roller Blind',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
    shortDescription: 'Complete light blocking for perfect sleep. Easy installation with premium materials.',
    description: 'Our premium blackout roller blind is perfect for bedrooms and media rooms where complete darkness is essential. Made from high-quality fabric with thermal properties to help regulate room temperature.',
    category: 'blinds',
    features: ['100% blackout fabric', 'Thermal insulation', 'Easy installation', 'Child-safe mechanism', 'Available in multiple colours'],
    sizes: ['100x150', '120x180', '140x200', '160x220']
  },
  {
    id: 'textile-window-film',
    name: 'Decorative Window Film',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
    shortDescription: 'Stylish privacy solution with UV protection. Self-adhesive, easy to apply.',
    description: 'Transform your windows with our decorative film that provides privacy whilst allowing natural light to filter through. Easy to apply and remove without residue.',
    category: 'sunshades',
    features: ['UV protection', 'Privacy enhancement', 'Self-adhesive', 'Residue-free removal', 'Multiple patterns available'],
    sizes: ['100x150', '120x180', '140x200', '160x220']
  },
  {
    id: 'venetian-blind',
    name: 'Classic Venetian Blind',
    price: 64.99,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
    shortDescription: 'Timeless design with adjustable slats. Perfect light control for any room.',
    description: 'Timeless venetian blinds with adjustable slats for precise light control. Available in wood, aluminium, and PVC options to suit any interior style.',
    category: 'blinds',
    features: ['Adjustable slats', 'Durable construction', 'Easy cleaning', 'Cordless options available', 'Multiple finishes'],
    sizes: ['100x150', '120x180', '140x200', '160x220']
  },
  {
    id: 'mosquito-screen',
    name: 'Retractable Mosquito Screen',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
    shortDescription: 'Keep insects out while letting fresh air in. Durable and easy to use.',
    description: 'Keep insects out whilst enjoying fresh air with our retractable mosquito screen. Suitable for doors and windows with smooth operation.',
    category: 'screens',
    features: ['Retractable mechanism', 'Fine mesh', 'Weather resistant', 'Smooth operation', 'Custom sizes available'],
    sizes: ['100x150', '120x180', '140x200', '160x220']
  },
  {
    id: 'thermal-curtains',
    name: 'Thermal Blackout Curtains',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
    shortDescription: 'Energy-efficient curtains that block light and reduce heat loss.',
    description: 'Energy-efficient thermal curtains that provide excellent insulation, reducing heat loss in winter and keeping rooms cool in summer.',
    category: 'curtains',
    features: ['Thermal insulation', 'Blackout lining', 'Energy saving', 'Machine washable', 'Multiple hanging options'],
    sizes: ['100x150', '120x180', '140x200', '160x220']
  },
  {
    id: 'roman-blind',
    name: 'Designer Roman Blind',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
    shortDescription: 'Elegant pleated design that adds sophistication to any space.',
    description: 'Elegant roman blinds with beautiful pleated folds that add sophistication to any room. Available in a range of fabrics and patterns.',
    category: 'blinds',
    features: ['Elegant pleated design', 'Premium fabrics', 'Smooth operation', 'Child-safe mechanism', 'Custom patterns available'],
    sizes: ['100x150', '120x180', '140x200', '160x220']
  },
  {
    id: 'external-awning',
    name: 'Retractable Awning',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
    shortDescription: 'Perfect outdoor shade solution for patios and terraces.',
    description: 'Perfect outdoor shade solution for patios, terraces, and balconies. Weather-resistant fabric with manual or motorised operation options.',
    category: 'sunshades',
    features: ['Weather-resistant fabric', 'Motorised options', 'UV protection', 'Wind resistant', 'Multiple colours available'],
    sizes: ['100x150', '120x180', '140x200', '160x220']
  },
  {
    id: 'vertical-blind',
    name: 'Vertical Blind System',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
    shortDescription: 'Ideal for large windows and patio doors. Professional appearance.',
    description: 'Ideal for large windows and patio doors, these vertical blinds provide excellent light control and privacy with a professional appearance.',
    category: 'blinds',
    features: ['Perfect for large windows', 'Easy light control', 'Professional appearance', 'Durable materials', 'Multiple colours'],
    sizes: ['100x150', '120x180', '140x200', '160x220']
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === 'all') return products;
  return products.filter(product => product.category === category);
};
