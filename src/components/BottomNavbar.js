import {
  BottomNavigation,
  BottomNavigationAction,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import {
  HomeOutlined,
  CategoryOutlined,
  ShoppingCartOutlined,
  PersonOutline,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    zIndex: 100,
  },
});

function BottomNavbar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        label="Home"
        icon={<HomeOutlined />}
        component={Link}
        to="/home"
      />
      <BottomNavigationAction
        label="Category"
        icon={<CategoryOutlined />}
        component={Link}
        to="/category"
      />
      <BottomNavigationAction
        label="My Cart"
        icon={<ShoppingCartOutlined />}
        component={Link}
        to="/cart"
      />
      <BottomNavigationAction
        label="Account"
        icon={<PersonOutline />}
        component={Link}
        to="/account"
      />
    </BottomNavigation>
  );
}

export default BottomNavbar;
