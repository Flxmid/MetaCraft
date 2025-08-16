import { Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MotionDiv } from '@/components/ui/motion-div';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <MotionDiv delay={0.2} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Klaar Om Te Beginnen?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Neem contact met ons op en ontdek hoe wij uw online aanwezigheid kunnen verbeteren.
          </p>
        </MotionDiv>

        <MotionDiv delay={0.4} className="max-w-2xl mx-auto">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-white">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <Mail className="h-10 w-10 text-white" />
              </div>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Stuur Ons Een Bericht
              </h3>
              
              <p className="text-gray-600 mb-8">
                Heeft u vragen over onze services of wilt u een offerte aanvragen? 
                We horen graag van u!
              </p>
              
              <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <span className="text-lg font-medium text-gray-900">
                    contact.metacraft@gmail.com
                  </span>
                </div>
              </div>
              
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <a href="mailto:contact.metacraft@gmail.com">
                  Contact Opnemen
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </MotionDiv>
      </div>
    </section>
  );
}