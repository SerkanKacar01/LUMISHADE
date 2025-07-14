import { Badge } from "@/components/ui/badge";

interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
  status: "Available" | "Coming Soon";
  onClick?: () => void;
}

export default function CategoryCard({ title, description, image, status, onClick }: CategoryCardProps) {
  return (
    <div 
      className="group relative bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg"
      onClick={onClick}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <Badge 
            variant={status === "Available" ? "default" : "secondary"}
            className={status === "Available" ? "bg-green-500 hover:bg-green-600" : "bg-gray-400 hover:bg-gray-500"}
          >
            {status}
          </Badge>
        </div>
        
        <p className="text-gray-600 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}