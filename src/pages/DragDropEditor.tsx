import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  MousePointer, 
  Clock,
  ArrowLeft
} from 'lucide-react';

export default function DragDropEditor() {
  return (
    <div className="min-h-screen bg-background">
      {/* Editor Header */}
      <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back
                </Link>
              </Button>
              <span className="text-muted-foreground">•</span>
              <h1 className="text-xl font-semibold">Drag & Drop Editor</h1>
              <Badge variant="secondary">Coming Soon</Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Coming Soon Content */}
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center px-6">
          <div className="mb-8">
            <div className="relative inline-flex items-center justify-center">
              <MousePointer className="h-16 w-16 text-primary animate-pulse" />
              <div className="absolute -top-2 -right-2">
                <Clock className="h-6 w-6 text-yellow-500 animate-bounce" />
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Drag & Drop Editor
            <br />
            <span className="text-primary">Coming Soon</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're building an amazing drag & drop editor for creating README files visually.
            This feature will be available in the next update!
          </p>

          <div className="text-sm text-muted-foreground">
            <p>🚧 Under Development | Next PR Coming Soon</p>
          </div>
        </div>
      </div>
    </div>
  );
}
