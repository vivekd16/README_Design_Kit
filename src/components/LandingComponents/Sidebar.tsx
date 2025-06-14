import { Layout, Settings, BarChart2, Users, CreditCard } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Sidebar() {
    return (
      <div id="sidebar" className="w-[300px] border-r border-dashed hidden md:block">
        <div className="flex flex-col divide-y border-b border-dashed">
          <Button variant="ghost" className="border-dashed h-14 text-left justify-start pl-8" asChild>
            <Link href="/dashboard">
              <Layout />
              <span>Dashboard</span>
            </Link>
          </Button>
          <Button variant="ghost" className="border-dashed h-14 text-left justify-start pl-8 opacity-50 cursor-not-allowed" disabled asChild>
            <Link href="/settings">
              <Settings />
              <span>Settings</span>
            </Link>
          </Button>
          <Button variant="ghost" className="border-dashed h-14 text-left justify-start pl-8 opacity-50 cursor-not-allowed" disabled asChild>
            <Link href="/analytics">
              <BarChart2 />
              <span>Analytics</span>
            </Link>
          </Button>
          <Button variant="ghost" className="border-dashed h-14 text-left justify-start pl-8 opacity-50 cursor-not-allowed" disabled asChild>
            <Link href="/billing">
              <CreditCard />
              <span>Billing</span>
            </Link>
          </Button>
        </div>
      </div>
    )
  }