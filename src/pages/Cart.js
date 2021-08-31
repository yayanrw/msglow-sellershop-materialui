import { Box, Grid } from "@material-ui/core";
import React from "react";
import Appbar from "../components/Appbar";
import { Skeleton } from "@material-ui/lab";

function Cart() {
  return (
    <div>
      <Appbar isLogo={false} isBack={false} title="My Cart" color="primary" />
      <Grid container wrap="nowrap">
        <Box width={210} marginRight={0.5} my={5}>
          <Skeleton variant="rect" width={210} height={118} />
        </Box>
      </Grid>
    </div>
  );
}

export default Cart;
