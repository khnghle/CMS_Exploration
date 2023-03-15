import { storyblokEditable } from "@storyblok/react";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import profileImage from "../assets/profileImage.svg";

const styles = {
  container: {
    width: "45%",
    flexDirection: "column",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    color: "#FFFFFF",
    fontFamily: "Effra Pro",
    fontStyle: "normal",
    fontSize: "14px",
    lineHeight: "24px",
    position: "relative",
    background:
      "linear-gradient(92.05deg, #1F2D3C 0%, #1A2555 0.01%, #233B64 31.07%, #428C9C 100%)",
  },
  profileImage: {
    borderRadius: "50%",
    marginBottom: "10px",
  },
  infoContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  phoneNumbers: {
    display: "flex",
    gap: "21px",
  },
};

const SelectRecent = ({ blok, classes }) => {
  const name = "Janice Johnson";
  const title = "Financial Professional,";
  const company = "New York Life Insurance Company";
  const license =
    "[CA/AR] Insurance License #: [XXXXXX, only applies to CA and AR agents]";
  const email = "bangulo@newyorklife.com";
  const officeNumber = "Office 917-634-7023";
  const mobileNumber = "Mobile 917-634-2171";
  const office = "420 Lexington Ave, 15th Floor, New York, NY 10170";

  return (
    <div className={classes.container}>
      <Logo blok={blok} />

      <div
        className={classes.infoContainer}
        style={{ width: "300px", marginTop: "197px" }}
      >
        <img
          src={profileImage}
          alt="profile-image"
          className={classes.profileImage}
        />
        <div
          style={{
            fontWeight: "700",
            fontSize: "16px",
            lineHeight: "26px",
            marginBottom: "10px",
          }}
        >
          {name}
        </div>
        <div>{title}</div>
        <div style={{ marginBottom: "10px" }}>{company}</div>
        <div>{license}</div>
      </div>

      <div
        className={classes.infoContainer}
        style={{ position: "absolute", bottom: "60px" }}
      >
        <div>{email}</div>
        <div className={classes.phoneNumbers}>
          <div>{officeNumber}</div>
          <div>{mobileNumber}</div>
        </div>
        <div>{office}</div>
      </div>
    </div>
  );
};

export default withStyles(styles)(SelectRecent);
