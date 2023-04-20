import { Grid, GridItem, Text } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const DashboardRootLayout = () => {
  return (
    <Grid
      templateColumns="repeat(12, 1fr)"
      bg="gray.50"
      p={{ base: "20px", lg: "30px" }}
      gap={6}
      minHeight={{ lg: "100vh" }}
    >
      {/* sidebar */}
      <GridItem as="aside" colSpan={{ base: 12, lg: 3, xl: 2 }}>
        <Sidebar />
      </GridItem>

      {/* main content & navbar */}
      <GridItem as="main" colSpan={{ base: 12, lg: 9, xl: 10 }}>
        {/* <Navbar /> */}
        <Outlet />
      </GridItem>
    </Grid>
  );
};

export default DashboardRootLayout;
