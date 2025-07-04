import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Database, Server, BarChart3 } from "lucide-react";

export function Header() {
  return (
    <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="hover:bg-accent" />
        
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <Database className="w-4 h-4 text-white" />
          </div>
          <span className="text-xl font-bold text-foreground">CloudOffer</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button variant="secondary" className="flex items-center gap-2">
          <Server className="w-4 h-4" />
          Compute
        </Button>
        
        <Button variant="outline" className="flex items-center gap-2">
          <Database className="w-4 h-4" />
          Storage
        </Button>
        
        <Button className="bg-gradient-primary hover:opacity-90 flex items-center gap-2">
          <BarChart3 className="w-4 h-4" />
          Visualize & optimize cloud spend
        </Button>
      </div>
    </header>
  );
}