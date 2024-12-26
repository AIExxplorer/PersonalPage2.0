import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { FaHome, FaUser, FaCog, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="text-2xl font-bold text-white">
          AIExxplorer
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem icon={<FaHome />} label="Home" href="/" />
          <SidebarMenuItem icon={<FaUser />} label="About Me" href="/about" />
          <SidebarMenuItem icon={<FaProjectDiagram />} label="Projects" href="/projects" />
          <SidebarMenuItem icon={<FaEnvelope />} label="Contact Me" href="/contact" />
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <p className="text-sm text-gray-400">Artificial Universe © 2024</p>
      </SidebarFooter>
    </Sidebar>
  );
}
