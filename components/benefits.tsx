import { CheckCircle, Clock, Award, Wrench } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { MotionDiv } from '@/components/ui/motion-div';

export function Benefits() {
  const benefits = [
    {
      icon: Award,
      title: 'Professioneel',
      description: 'Hoogwaardige websites gebouwd met de nieuwste technologieën en best practices.'
    },
    {
      icon: Clock,
      title: 'Snel',
      description: 'Efficiënte ontwikkeling zonder concessies aan kwaliteit. Uw project wordt op tijd opgeleverd.'
    },
    {
      icon: Wrench,
      title: 'Op Maat Gemaakt',
      description: 'Elke website wordt speciaal voor uw bedrijf en doelstellingen ontwikkeld.'
    },
    {
      icon: CheckCircle,
      title: 'Betrouwbaar',
      description: 'Stabiele, veilige websites met continue ondersteuning en updates.'
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>

      <div className="container mx-auto px-4 relative z-10">
        <MotionDiv delay={0.2} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Waarom Kiezen Voor MetaCraft?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Wij combineren expertise, creativiteit en betrouwbaarheid om uw online succes te garanderen.
          </p>
        </MotionDiv>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <MotionDiv key={index} delay={0.3 + index * 0.1}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.description}
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