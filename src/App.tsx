
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-blue-600">Welcome to Vite + React + Tailwind CSS</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-gray-700 mb-4">
            This is a simple setup to get you started with Vite, React, and Tailwind CSS.
          </p>
          <Button>Get Started</Button>
        </CardContent>
      </Card>
    </div>
  );
}