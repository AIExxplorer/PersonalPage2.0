import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
  } from "@/components/ui/sidebar";
  
  export function AppSidebar() {
    return (
      <Sidebar>
        <SidebarHeader>Header Content</SidebarHeader>
        <SidebarContent>
          <div>Sidebar Content</div>
        </SidebarContent>
        <SidebarFooter>Footer Content</SidebarFooter>
      </Sidebar>
    );
  }
  