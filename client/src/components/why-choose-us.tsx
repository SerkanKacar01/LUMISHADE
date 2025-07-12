import { Award, Truck, Wrench, Phone, Shield, DollarSign } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Only the finest materials and craftsmanship go into our products.'
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Quick dispatch and reliable delivery to your door nationwide.'
    },
    {
      icon: Wrench,
      title: 'Easy Installation',
      description: 'Simple fitting instructions and all necessary hardware included.'
    },
    {
      icon: Phone,
      title: 'Expert Support',
      description: 'Our team is always ready to help with product selection and advice.'
    },
    {
      icon: Shield,
      title: 'Warranty',
      description: 'Comprehensive warranty coverage for peace of mind.'
    },
    {
      icon: DollarSign,
      title: 'Best Value',
      description: 'Competitive pricing without compromising on quality.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose SunShade & Co.?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're committed to providing exceptional window solutions with unmatched quality and service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="text-primary w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
