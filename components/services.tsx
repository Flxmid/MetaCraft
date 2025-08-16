import { Globe, Palette, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { MotionDiv } from '@/components/ui/motion-div';

export function Services() {
  const services = [
    {
      icon: Globe,
      title: 'Website Ontwikkeling',
      description: 'Wij creëren moderne, responsive websites die perfect aansluiten bij uw bedrijf en doelgroep.'
    },
    {
      icon: Palette,
      title: 'Website Vernieuwing',
      description: 'Geef uw bestaande website een frisse, moderne uitstraling met verbeterde functionaliteit.'
    },
    {
      icon: Zap,
      title: 'Performance Optimalisatie',
      description: 'Verhoog de snelheid en prestaties van uw website voor een betere gebruikerservaring.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <MotionDiv delay={0.2} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Wat Wij Doen
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Wij specialiseren ons in het maken van professionele websites en het vernieuwen van bestaande websites om uw online aanwezigheid te versterken.
          </p>
        </MotionDiv>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <MotionDiv key={index} delay={0.3 + index * 0.1}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <service.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}