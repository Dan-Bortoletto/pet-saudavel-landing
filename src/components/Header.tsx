import { PawPrint } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <PawPrint className="h-8 w-8 text-primary" />
          <span className="text-xl font-semibold">Pet Saudável</span>
        </div>
        <a
          href="tel:11947707175"
          className="text-primary-dark font-medium hover:text-primary transition-colors"
        >
          (11) 94770-7175
        </a>
      </div>
    </header>
  );
};