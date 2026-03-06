// src/components/Services.tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Trees,
  CheckCircle2
} from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      icon: Trees,
      tagline: "Appreciation + Income",
      title: "Investment & Rental Potential",
      description:
        "Independent floors in a core Gurugram location with strong capital appreciation and rental demand.",
      features: [
        "End-users & investors",
      ],
      color: "from-emerald-600 to-teal-600",
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#fdfdfd]">
      <div className="container mx-auto px-6 flex justify-center">

        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="w-full max-w-xl"
          >
            <Card className="h-full border-none shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.12)] transition-all duration-500 rounded-[2rem] overflow-hidden group bg-white">
              
              <div className={`h-2 w-full bg-gradient-to-r ${service.color}`} />

              <CardHeader className="pt-10">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <service.icon size={28} className="text-slate-800" />
                </div>

                <span className="text-[10px] font-bold text-yellow-600 uppercase tracking-widest">
                  {service.tagline}
                </span>

                <CardTitle className="text-2xl font-bold text-slate-900 mt-1">
                  {service.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3">
                  {service.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-sm font-semibold text-slate-700"
                    >
                      <CheckCircle2 size={16} className="text-yellow-500" />
                      {feature}
                    </div>
                  ))}
                </div>

              </CardContent>
            </Card>
          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default Services;