import Header from "./components/Header";

export default function App() { 
  return (
    <div className="bg-background min-h-screen text-foreground">
      <Header />
      <main className="container mx-auto px-6 py-4">
        <p className="text-lg">Welcome to the README Design Kit!</p>
      </main>
    </div>
  );
}