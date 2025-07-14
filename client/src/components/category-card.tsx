interface CategoryCardProps {
  title: string;
  image: string;
  status: "Available" | "Coming Soon";
  onClick?: () => void;
}

export default function CategoryCard({ title, image, status, onClick }: CategoryCardProps) {
  const isClickable = status === "Available";
  
  return (
    <div 
      className={`relative h-64 rounded-lg overflow-hidden transition-all duration-300 ${
        isClickable 
          ? "cursor-pointer hover:scale-105" 
          : "cursor-default"
      }`}
      onClick={isClickable ? onClick : undefined}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30" />
      
      {/* Coming Soon badge */}
      {status === "Coming Soon" && (
        <div className="absolute top-4 right-4 bg-gray-500 text-white text-xs font-medium px-3 py-1 rounded">
          Coming Soon
        </div>
      )}
      
      {/* Centered title */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h3 className="text-white text-lg font-bold text-center px-4">
          {title}
        </h3>
      </div>
    </div>
  );
}