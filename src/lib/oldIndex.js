//niAL3U0P3GJ6VBv96nITWgtt

import StoryblokClient from "storyblok-js-client";

// const SPACE_ID = process.env.REACT_APP_STORY_BLOK_SPACE_ID;
const ACCESS_TOKEN = process.env.REACT_APP_STORY_BLOK_ACCESS_TOKEN;
const OAUTH_TOKEN = process.env.REACT_APP_STORY_BLOK_OAUTH_TOKEN;

const StoryBlok = new StoryblokClient({
  accessToken: ACCESS_TOKEN,
  oauthToken: OAUTH_TOKEN,
  region: "us",
  cache: {
    clear: "auto",
    type: "memory",
  },
});

export default StoryBlok;

/*
  useEffect(() => {
    const fetchData = async () => {
      await StoryBlok.get("cdn/stories/landing-page", {
        version: "draft",
        cv: Date.now(),
      })
        .then((response) => {
          setData(response.data.story.content.body[0]);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchData();
  }, []);

*/
