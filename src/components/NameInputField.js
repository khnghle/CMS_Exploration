import { storyblokEditable } from "@storyblok/react";
import { withStyles } from "@material-ui/core/styles";
import { useState } from "react";
import { Link } from "react-router-dom";

const styles = {
  flexColumn: {
    display: "flex",
    flexDirection: "column",
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
  },
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
  labelText: {
    fontFamily: "Effra Pro",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "15px",
    lineHeight: "19px",
    display: "flex",
    alignItems: "flex-end",
    color: "#496079",
  },
  inputField: {
    padding: "7px 15px",
    gap: "24px",
    width: "188px",
    height: "26px",
    background: "#FFFFFF",
    border: "1px solid #E9ECEE",
    boxShadow: "inset 0px 2px 1px rgba(181, 187, 197, 0.5)",
    borderRadius: "5px",
  },
  buttonStyling: {
    height: "17px",
    fontFamily: "Effra Pro",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "17px",
    textAlign: "center",
    color: "#FFFFFF",
    padding: "12px 35px 11px",
    gap: "10px",
    height: "40px",
    background: " #1A2555",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
};

const SelectRecent = ({ blok, classes }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  return (
    <div className={classes.flexColumn} {...storyblokEditable(blok)}>
      <form
        type="submit"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className={classes.flexRow}>
          <div
            className={classes.flexColumn}
            style={{ marginRight: "30px", marginBottom: "30px" }}
          >
            <label className={`${classes.smallMargin} ${classes.labelText}`}>
              {blok.first_name}
            </label>
            <input
              type="text"
              className={classes.inputField}
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />
          </div>

          <div className={classes.flexColumn}>
            <label className={`${classes.smallMargin} ${classes.labelText}`}>
              {blok.last_name}
            </label>
            <input
              type="text"
              className={classes.inputField}
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
          </div>
        </div>

        <button type="submit" className={classes.buttonStyling}>
          <Link to="#" style={{ textDecoration: "none", color: "white" }}>
            {blok.button_text}
          </Link>
        </button>
      </form>
    </div>
  );
};

export default withStyles(styles)(SelectRecent);
