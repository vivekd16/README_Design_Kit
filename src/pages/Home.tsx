import { Construction, Clock } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center px-6">
        <div className="mb-8">
          <div className="relative inline-flex items-center justify-center">
            <Construction className="h-16 w-16 text-primary animate-pulse" />
            <div className="absolute -top-2 -right-2">
              <Clock className="h-6 w-6 text-yellow-500 animate-bounce" />
            </div>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
          Home Page
          <br />
          <span className="text-primary">Coming Soon</span>
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Our team is working hard to bring you an amazing home page experience.
          In the meantime, explore our other features!
        </p>

        <div className="text-sm text-muted-foreground">
          <p>🚧 Under Development | Expected Launch: Soon</p>
        </div>
      </div>
    </div>
  );
}
