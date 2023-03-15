import { storyblokEditable } from "@storyblok/react";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const styles = {
  button: {
    all: "unset",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  label: {
    fontFamily: "Effra Pro",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "17px",
    color: "#1A2555",
  },
};

const SelectRecent = ({ blok, classes }) => {
  return (
    <button className={classes.button} {...storyblokEditable(blok)}>
      <img src={blok.Icon.filename} />

      <Link to="#" style={{ textDecoration: "none", color: "white" }}>
        <div className={classes.label}>{blok.label}</div>
      </Link>
    </button>
  );
};

export default withStyles(styles)(SelectRecent);
