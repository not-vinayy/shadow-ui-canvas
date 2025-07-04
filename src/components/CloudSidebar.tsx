import { useState } from "react";
import { Search, DollarSign, MapPin, Cloud, Cpu, HardDrive } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  useSidebar,
} from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

export function CloudSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const [priceRange, setPriceRange] = useState([0.001, 1]);
  const [cpuRange, setCpuRange] = useState([0, 16]);
  const [ramRange, setRamRange] = useState([0, 64]);

  if (collapsed) {
    return (
      <Sidebar className="w-14 bg-sidebar border-r border-sidebar-border">
        <SidebarContent className="p-2">
          <div className="flex flex-col gap-4">
            <Search className="w-5 h-5 text-sidebar-foreground mx-auto" />
            <DollarSign className="w-5 h-5 text-sidebar-foreground mx-auto" />
            <MapPin className="w-5 h-5 text-sidebar-foreground mx-auto" />
            <Cloud className="w-5 h-5 text-sidebar-foreground mx-auto" />
            <Cpu className="w-5 h-5 text-sidebar-foreground mx-auto" />
            <HardDrive className="w-5 h-5 text-sidebar-foreground mx-auto" />
          </div>
        </SidebarContent>
      </Sidebar>
    );
  }

  return (
    <Sidebar className="w-80 bg-sidebar border-r border-sidebar-border">
      <SidebarContent className="p-6">
        <SidebarGroup>
          <SidebarGroupLabel className="text-lg font-semibold text-sidebar-foreground mb-4">
            Filters
          </SidebarGroupLabel>
          
          <SidebarGroupContent className="space-y-6">
            {/* Currency */}
            <div className="space-y-2">
              <Label className="text-sidebar-foreground font-medium flex items-center gap-2">
                <DollarSign className="w-4 h-4" />
                Currency
              </Label>
              <Select defaultValue="usd">
                <SelectTrigger className="bg-sidebar-accent border-sidebar-border text-sidebar-foreground">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-sidebar-accent border-sidebar-border">
                  <SelectItem value="usd">$ USD</SelectItem>
                  <SelectItem value="eur">€ EUR</SelectItem>
                  <SelectItem value="gbp">£ GBP</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Price Range */}
            <div className="space-y-3">
              <Label className="text-sidebar-foreground font-medium">Price</Label>
              <div className="space-y-2">
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={5}
                  min={0.001}
                  step={0.001}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>${priceRange[0].toFixed(3)}</span>
                  <span>${priceRange[1].toFixed(3)}</span>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="space-y-2">
              <Label className="text-sidebar-foreground font-medium flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Location
              </Label>
              <Select>
                <SelectTrigger className="bg-sidebar-accent border-sidebar-border text-sidebar-foreground">
                  <SelectValue placeholder="Select locations" />
                </SelectTrigger>
                <SelectContent className="bg-sidebar-accent border-sidebar-border">
                  <SelectItem value="us-east-1">US East (N. Virginia)</SelectItem>
                  <SelectItem value="us-west-2">US West (Oregon)</SelectItem>
                  <SelectItem value="eu-west-1">Europe (Ireland)</SelectItem>
                  <SelectItem value="ap-southeast-1">Asia Pacific (Singapore)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Provider */}
            <div className="space-y-2">
              <Label className="text-sidebar-foreground font-medium flex items-center gap-2">
                <Cloud className="w-4 h-4" />
                Provider
              </Label>
              <Select>
                <SelectTrigger className="bg-sidebar-accent border-sidebar-border text-sidebar-foreground">
                  <SelectValue placeholder="Select providers" />
                </SelectTrigger>
                <SelectContent className="bg-sidebar-accent border-sidebar-border">
                  <SelectItem value="aws">Amazon Web Services</SelectItem>
                  <SelectItem value="azure">Microsoft Azure</SelectItem>
                  <SelectItem value="gcp">Google Cloud Platform</SelectItem>
                  <SelectItem value="digitalocean">DigitalOcean</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Name Search */}
            <div className="space-y-2">
              <Label className="text-sidebar-foreground font-medium">Name</Label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input 
                  placeholder="Search..." 
                  className="pl-10 bg-sidebar-accent border-sidebar-border text-sidebar-foreground"
                />
              </div>
            </div>

            {/* CPU Range */}
            <div className="space-y-3">
              <Label className="text-sidebar-foreground font-medium flex items-center gap-2">
                <Cpu className="w-4 h-4" />
                CPU
              </Label>
              <div className="space-y-2">
                <Slider
                  value={cpuRange}
                  onValueChange={setCpuRange}
                  max={128}
                  min={0}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{cpuRange[0]}</span>
                  <span>{cpuRange[1]}</span>
                </div>
              </div>
            </div>

            {/* RAM Range */}
            <div className="space-y-3">
              <Label className="text-sidebar-foreground font-medium flex items-center gap-2">
                <HardDrive className="w-4 h-4" />
                RAM
              </Label>
              <div className="space-y-2">
                <Slider
                  value={ramRange}
                  onValueChange={setRamRange}
                  max={1024}
                  min={0}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{ramRange[0]} GB</span>
                  <span>{ramRange[1]} GB</span>
                </div>
              </div>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}