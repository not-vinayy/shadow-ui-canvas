import { SidebarProvider } from "@/components/ui/sidebar";
import { Header } from "@/components/Header";
import { CloudSidebar } from "@/components/CloudSidebar";
import { DataTable } from "@/components/DataTable";

const Index = () => {
  return (
    <div className="dark">
      <SidebarProvider>
        <div className="min-h-screen flex flex-col w-full bg-background">
          <Header />
          <div className="flex flex-1 w-full">
            <CloudSidebar />
            <DataTable />
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Index;
