import { Sidebar, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarHeader, SidebarFooter } from "@/components/common/ui/sidebar";
import Tooltip from "@/components/common/ui/tooltip";
import Image from "next/image";
import { Home, User, Briefcase, Layers, Mail } from "lucide-react";

const menuItems = [
  { title: "Home", icon: Home, url: "/home" },
  { title: "About Me", icon: User, url: "/about" },
  { title: "Services", icon: Briefcase, url: "/services" },
  { title: "Projects", icon: Layers, url: "/projects" },
  { title: "Contact Me", icon: Mail, url: "/contact" },
];

export function AppSidebar() {
  return (
    <Sidebar side="left" className="bg-gray-900 text-white">
      {/* Header */}
      <SidebarHeader>
        <Image
          src="/assets/images/LOGO_AIEXXPLORER.png"
          alt="AIExxplorer Logo"
          width={150}
          height={50}
        />
      </SidebarHeader>

      {/* Menu */}
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <Tooltip content={item.title}>
                <a href={item.url} className="flex items-center gap-3 p-2 hover:bg-gray-800 rounded">
                  <item.icon />
                  <span>{item.title}</span>
                </a>
              </Tooltip>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="flex justify-center">
        <Image
          src="/assets/images/LOGO_AU.png"
          alt="Artificial Universe Logo"
          width={100}
          height={50}
        />
      </SidebarFooter>
    </Sidebar>
  );
}
