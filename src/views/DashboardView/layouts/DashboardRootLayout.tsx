import { Grid, GridItem, Text } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const DashboardRootLayout = () => {
  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
      {/* sidebar */}
      <GridItem
        as="aside"
        colSpan={{ base: 6, lg: 1 }}
        minHeight={{ lg: "100vh" }}
        p={{ base: "20px", lg: "30px" }}
      >
        <Sidebar />
      </GridItem>

      {/* main content & navbar */}
      <GridItem as="main" colSpan={{ base: 6, lg: 4, xl: 5 }} p="40px">
        {/* <Navbar /> */}
        <Outlet />
      </GridItem>
    </Grid>
  );
};

export default DashboardRootLayout;
