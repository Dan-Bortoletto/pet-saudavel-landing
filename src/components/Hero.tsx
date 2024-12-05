import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-primary/10 to-white py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Dra. Giselda Santos
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          Seu pet merece atendimento responsável
        </p>
        <Button
          size="lg"
          className="bg-primary hover:bg-primary-dark text-white"
          onClick={() => window.location.href = "https://wa.me/5511947707175"}
        >
          Agende uma consulta
        </Button>
      </div>
    </section>
  );
};