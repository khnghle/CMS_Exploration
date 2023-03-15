import { storyblokEditable } from "@storyblok/react";


const Logo = ({ blok }) => {
  return <img {...storyblokEditable(blok)} src={blok?.image?.filename} style={{left: 15.5, top: 15.5, position: 'absolute'}}/>
};

export default Logo;
