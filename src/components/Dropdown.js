import { storyblokEditable } from "@storyblok/react";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@mui/material/IconButton";
import addButton from "../assets/addButton.svg";

import { useState } from "react";

const styles = {
  flexColumn: {
    display: "flex",
    flexDirection: "column",
    marginTop: "60px",
  },
  addButtonContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  selectText: {
    fontFamily: "Effra Pro",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "15px",
    lineHeight: "19px",
    display: "flex",
    alignItems: "flex-end",
    color: "#496079",
    marginBottom: "8px",
  },
  selectStyling: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "9px 15px",
    gap: "10px",
    width: "466px",
    height: "40px",
    background:
      "linear-gradient(180deg, rgba(255, 255, 255, 0) 38.3%, #F9F9F9 100%), #FFFFFF",
    boxShadow: "inset 0px -1px 1px rgba(181, 187, 197, 0.7)",
    borderRadius: " 5px",
    width: "466px",
    height: "40px",
    marginBottom: "30px",
  },
};

const Dropdown = ({ blok, classes }) => {
  return (
    <div className={classes.flexColumn} {...storyblokEditable(blok)}>
      <div className={classes.flexColumn}>
        <label className={classes.selectText}>{blok.label}</label>
        <select className={classes.selectStyling}>
          {/* <option value="" disabled selected>
            {blok.label}
          </option> */}
          {blok.options.map((currOption) => (
            <option value={currOption.value}>{currOption.label}</option>
          ))}
        </select>
      </div>

    </div>
  );
};

export default withStyles(styles)(Dropdown);
