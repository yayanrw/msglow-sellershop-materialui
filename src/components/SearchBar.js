import {
  Container,
  IconButton,
  InputBase,
  makeStyles,
  Paper,
} from "@material-ui/core";
import React from "react";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "72px",
  },
  searchField: {
    marginBottom: "8px",
    padding: "2px",
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

function SearchBar() {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Paper component="form" className={classes.searchField}>
        <InputBase
          className={classes.input}
          placeholder="Search..."
          inputProps={{ "aria-label": "search..." }}
        />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </Container>
  );
}

export default SearchBar;
