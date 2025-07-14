import CategoryCard from "./category-card";

const categories = [
  {
    id: "roller-blinds",
    title: "Roller Blinds",
    status: "Available" as const,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800"
  },
  {
    id: "duo-roller-blinds", 
    title: "Duo Roller Blinds",
    status: "Available" as const,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800"
  },
  {
    id: "sheer-curtains",
    title: "Sheer Curtains", 
    status: "Coming Soon" as const,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800"
  },
  {
    id: "blackout-curtains",
    title: "Blackout Curtains",
    status: "Coming Soon" as const,
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800"
  },
  {
    id: "inbetween-curtains",
    title: "Inbetween Curtains",
    status: "Coming Soon" as const,
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=800"
  }
];

export default function CategorySection() {
  const handleCategoryClick = (categoryId: string) => {
    // Navigate to category page based on availability
    if (categoryId === "roller-blinds") {
      window.location.href = "/rolgordijnen";
    } else if (categoryId === "duo-roller-blinds") {
      window.location.href = "/duo-rolgordijnen";
    }
    // Coming soon categories don't navigate
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Popular Window Coverings
          </h2>
        </div>
        
        {/* Grid Layout - 2 rows × 3 columns max on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              title={category.title}
              image={category.image}
              status={category.status}
              onClick={() => handleCategoryClick(category.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}