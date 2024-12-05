import { Stethoscope, Syringe, Heart, House, Bandage, PawPrint } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: <Stethoscope className="h-6 w-6" />,
    name: "Atendimento Clínico",
    description: "Consultas completas para seu pet",
  },
  {
    icon: <PawPrint className="h-6 w-6" />,
    name: "Exames",
    description: "Diagnóstico preciso e cuidadoso",
  },
  {
    icon: <Syringe className="h-6 w-6" />,
    name: "Vacinas",
    description: "Proteção e prevenção para seu pet",
  },
  {
    icon: <Heart className="h-6 w-6" />,
    name: "Eutanásia",
    description: "Cuidado e respeito em momentos difíceis",
  },
  {
    icon: <House className="h-6 w-6" />,
    name: "Limpeza de Miíase",
    description: "Tratamento especializado",
  },
  {
    icon: <Bandage className="h-6 w-6" />,
    name: "Curativos",
    description: "Cuidados com ferimentos",
  },
];

export const Services = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="mb-4 text-primary flex justify-center">{service.icon}</div>
                <h3 className="font-semibold text-xl mb-2">{service.name}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};