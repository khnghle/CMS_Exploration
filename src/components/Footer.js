import { storyblokEditable } from "@storyblok/react";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  flexColumn: {
    display: "flex",
    flexDirection: "column",
    marginTop: "60px",
    fontFamily: "Effra Pro",
    fontStyle: "normal",
  },
  addButtonContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  headlineText: {
    fontWeight: "400",
    fontSize: "11px",
    lineHeight: "16px",
    letterSpacing: "0.3px",
    color: "#496079",
  },
  subHeadlineText: {
    fontWeight: "700",
    fontSize: "10px",
    lineHeight: "19px",
    letterSpacing: " 0.22px",
    textTransform: "capitalize",
    color: "#496079",
  },
};

const SelectRecent = ({ blok, classes }) => {
  return (
    <div className={classes.flexColumn} {...storyblokEditable(blok)}>
      <div className={classes.headlineText}>{blok.headline}</div>
      <div className={classes.subHeadlineText}>{blok.subHeadline}</div>
    </div>
  );
};

export default withStyles(styles)(SelectRecent);
