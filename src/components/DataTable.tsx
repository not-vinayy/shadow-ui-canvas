import { useState } from "react";
import { ArrowUpDown, MapPin, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface ServerOffer {
  id: string;
  name: string;
  provider: "aws" | "azure" | "gcp";
  cpu: number;
  ram: string;
  disk: string;
  bandwidth: string;
  networkSpeed: string;
  location: string;
  price: number;
}

const sampleData: ServerOffer[] = [
  {
    id: "1",
    name: "b2tsv2-standard",
    provider: "azure",
    cpu: 2,
    ram: "1 GB",
    disk: "0 MB",
    bandwidth: "0 MBps",
    networkSpeed: "0 MBps",
    location: "US East",
    price: 0.00143
  },
  {
    id: "2",
    name: "t4g.nano Linux",
    provider: "aws",
    cpu: 2,
    ram: "536 MB",
    disk: "0 MB",
    bandwidth: "0 MBps",
    networkSpeed: "625 MBps",
    location: "US East",
    price: 0.0028
  },
  {
    id: "3",
    name: "t4g.nano SUSE",
    provider: "aws",
    cpu: 2,
    ram: "536 MB",
    disk: "0 MB",
    bandwidth: "0 MBps",
    networkSpeed: "625 MBps",
    location: "US East",
    price: 0.0028
  },
  {
    id: "4",
    name: "t4g.nano Linux",
    provider: "aws",
    cpu: 2,
    ram: "536 MB",
    disk: "0 MB",
    bandwidth: "0 MBps",
    networkSpeed: "625 MBps",
    location: "US East",
    price: 0.0028
  },
  {
    id: "5",
    name: "t4g.nano SUSE",
    provider: "aws",
    cpu: 2,
    ram: "536 MB",
    disk: "0 MB",
    bandwidth: "0 MBps",
    networkSpeed: "625 MBps",
    location: "US East",
    price: 0.0028
  },
  {
    id: "6",
    name: "t3a.nano SUSE",
    provider: "aws",
    cpu: 2,
    ram: "536 MB",
    disk: "0 MB",
    bandwidth: "0 MBps",
    networkSpeed: "625 MBps",
    location: "US East",
    price: 0.0031
  },
  {
    id: "7",
    name: "t3a.nano Windows",
    provider: "aws",
    cpu: 2,
    ram: "536 MB",
    disk: "0 MB",
    bandwidth: "0 MBps",
    networkSpeed: "625 MBps",
    location: "US East",
    price: 0.0031
  },
  {
    id: "8",
    name: "t3a.nano Linux",
    provider: "aws",
    cpu: 2,
    ram: "536 MB",
    disk: "0 MB",
    bandwidth: "0 MBps",
    networkSpeed: "625 MBps",
    location: "US East",
    price: 0.0031
  }
];

const getProviderLogo = (provider: string) => {
  const logos = {
    aws: "🟧",
    azure: "🔵", 
    gcp: "🔴"
  };
  return logos[provider as keyof typeof logos] || "☁️";
};

export function DataTable() {
  const [data] = useState<ServerOffer[]>(sampleData);
  const [sortField, setSortField] = useState<keyof ServerOffer | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const handleSort = (field: keyof ServerOffer) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const SortableHeader = ({ field, children }: { field: keyof ServerOffer; children: React.ReactNode }) => (
    <Button
      variant="ghost"
      className="h-auto p-0 font-medium text-muted-foreground hover:text-foreground"
      onClick={() => handleSort(field)}
    >
      {children}
      <ArrowUpDown className="ml-2 h-4 w-4" />
    </Button>
  );

  return (
    <div className="flex-1 p-6">
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-foreground">
            257,942 offers found
          </h1>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <AlertTriangle className="w-4 h-4" />
            Change currency to EUR to see more offers
          </div>
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="border-border hover:bg-muted/50">
              <TableHead className="w-12">
                <input type="checkbox" className="rounded border-border" />
              </TableHead>
              <TableHead>
                <SortableHeader field="name">Name</SortableHeader>
              </TableHead>
              <TableHead>
                <SortableHeader field="cpu">CPU</SortableHeader>
              </TableHead>
              <TableHead>
                <SortableHeader field="ram">RAM</SortableHeader>
              </TableHead>
              <TableHead>
                <SortableHeader field="disk">Disk</SortableHeader>
              </TableHead>
              <TableHead>
                <SortableHeader field="bandwidth">Bandwidth</SortableHeader>
              </TableHead>
              <TableHead>
                <SortableHeader field="networkSpeed">Network Speed</SortableHeader>
              </TableHead>
              <TableHead>
                <SortableHeader field="location">Location</SortableHeader>
              </TableHead>
              <TableHead className="text-right">
                <SortableHeader field="price">Price</SortableHeader>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((offer) => (
              <TableRow 
                key={offer.id} 
                className="border-border hover:bg-muted/30 transition-colors"
              >
                <TableCell>
                  <input type="checkbox" className="rounded border-border" />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <span className="text-lg">{getProviderLogo(offer.provider)}</span>
                    <span className="font-medium text-foreground">{offer.name}</span>
                  </div>
                </TableCell>
                <TableCell className="text-foreground">{offer.cpu}</TableCell>
                <TableCell className="text-foreground">{offer.ram}</TableCell>
                <TableCell className="text-foreground">{offer.disk}</TableCell>
                <TableCell className="text-foreground">{offer.bandwidth}</TableCell>
                <TableCell className="text-foreground">{offer.networkSpeed}</TableCell>
                <TableCell>
                  <Badge variant="secondary" className="flex items-center gap-1 w-fit">
                    <MapPin className="w-3 h-3" />
                    {offer.location}
                  </Badge>
                </TableCell>
                <TableCell className="text-right font-medium text-foreground">
                  ${offer.price.toFixed(5)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}