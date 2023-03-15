import { useStoryblok, StoryblokComponent } from "@storyblok/react";
import LeftSectionPage from "./components/LeftSectionPage";
import { withStyles } from "@material-ui/core/styles";

const style = {
  container: {
    display: "flex",
  },
  rightSide: {
    display: "flex",
    justifyContent: "center",
    // marginLeft: '125px',
    alignItems: "center",
    width: "65%",
  },
};

function LandingPage({ classes }) {
  let slug =
    window.location.pathname === "/"
      ? "home-page"
      : window.location.pathname.replace("/", "");

  const story = useStoryblok(slug, { version: "draft" });

  if (!story || !story.content) {
    return <div>Loading...</div>;
  }

  return (
    <div className={classes.container}>
      <LeftSectionPage blok={story.content}/>
      <div className={classes.rightSide}>
        <StoryblokComponent blok={story.content} />;
      </div>
    </div>
  );
}
export default withStyles(style)(LandingPage);
