import { storyblokInit, apiPlugin } from "@storyblok/react";
import Button from "../components/Button";
import Dropdown from "../components/Dropdown";
import Footer from "../components/Footer";
import NameInputField from "../components/NameInputField";
import Page from "../components/Page";
import TextSection from "../components/TextSection";
import Logo from "../components/Logo"
import LeftSectionPage from "../components/LeftSectionPage";

const SPACE_ID = process.env.REACT_APP_STORY_BLOK_SPACE_ID;
const ACCESS_TOKEN = process.env.REACT_APP_STORY_BLOK_ACCESS_TOKEN;
const OAUTH_TOKEN = process.env.REACT_APP_STORY_BLOK_OAUTH_TOKEN;

const initStoryBlok = () => {
  storyblokInit({
    accessToken: ACCESS_TOKEN,
    use: [apiPlugin],
    apiOptions: { region: "us" },
    components: {
      "Right Section": Page,
      "Left Section": Page,
      "Home Page": Page,
      "Text section": TextSection,
      "Name Input Form": NameInputField,
      Dropdown: Dropdown,
      Button: Button,
      Footer: Footer,
      Logo: Logo,
    },
  });
};

export default initStoryBlok;
