import { storyblokEditable } from "@storyblok/react";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  title: {
    fontFamily: "Effra Pro",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "56px",
    lineHeight: "60px",
    color: "#1F2D3C",
  },
  appTitle: {
    color: "#496079",
  },
  titleContainer: {
    width: "333px",
  },
  smallMargin: {
    marginBottom: "8px",
  },
  largeMargin: {
    marginBottom: "40px",
  },
};

const NameForm = ({ blok, classes }) => {
  return (
    <div
      className={`${classes.title} ${classes.titleContainer} ${classes.largeMargin}`}
      {...storyblokEditable(blok)}
    >
      {`${blok.headline} `}{" "}
      <span className={classes.appTitle}>{blok.title}</span>
    </div>
  );
};

export default withStyles(styles)(NameForm);
