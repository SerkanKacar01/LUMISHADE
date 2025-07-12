import { Award, Truck, Wrench, Phone, Shield, DollarSign } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: Award,
      title: "Hoogwaardige Kwaliteit",
      description:
        "Wij gebruiken uitsluitend zorgvuldig geselecteerde materialen en afwerkingen. Elk product wordt met oog voor detail geproduceerd.",
    },
    {
      icon: Truck,
      title: "Snelle Levering",
      description:
        "Bestellingen worden snel verwerkt en betrouwbaar aan huis geleverd – klaar voor directe installatie.",
    },
    {
      icon: Wrench,
      title: "Eenvoudige Montage",
      description:
        "Dankzij duidelijke instructies en meegeleverde montagematerialen is zelf installeren eenvoudig en snel gedaan.",
    },
    {
      icon: Phone,
      title: "Persoonlijke Service",
      description:
        "Heb je vragen of advies nodig? Ons team staat klaar om je professioneel te begeleiden bij je keuze.",
    },
    {
      icon: Shield,
      title: "Gemoedsrust met Garantie",
      description:
        "Op al onze producten geldt een transparante garantie. Zo ben je zeker van een zorgeloze aankoop.",
    },
    {
      icon: DollarSign,
      title: "De Beste Prijs-Kwaliteit",
      description:
        "Wij bieden scherpe prijzen zonder in te boeten op kwaliteit, zodat je altijd waar krijgt voor je geld.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Waarom kiezen voor LUMISHADE?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Bij LUMISHADÉ geloven we in raamdecoratie die niet alleen mooi is,
            maar ook functioneel, duurzaam en betaalbaar. Onze producten zijn
            zorgvuldig samengesteld om comfort, stijl en eenvoud samen te
            brengen in elk interieur.
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
