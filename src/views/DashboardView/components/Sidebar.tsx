import { List, ListItem, ListIcon } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <List color="white" fontSize="1.2em" spacing={4} border="1px">
      {[
        {
          name: "Dashboard",
          // icon: CalendarIcon,
          path: "",
        },
        {
          name: "Learning Circles",
          // icon: EditIcon,
          path: "learning-circles",
        },
        {
          name: "MuLearn Admin",
          // icon: AtSignIcon,
          path: "admin",
        },
      ].map((item, index) => (
        <ListItem key={index}>
          <NavLink to={item.path}>
            {/* <ListIcon as={item.icon} color="white" /> */}
            {item.name}
          </NavLink>
        </ListItem>
      ))}
    </List>
  );
}
