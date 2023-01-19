import React from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  FacebookIcon,
  EmailIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "react-share";

import './share.css'
// const { FacebookShareButton, TwitterShareButton } = ShareButtons;
// const FacebookIcon = generateShareIcon('facebook');
// const TwitterIcon = generateShareIcon('twitter');

const Share = (props) => {
//   console.log(props);
  const shareUrl = "http://www.example.com";
  const title = "Example title";

  return (
    <div className="share_icons_wrapper">
    <h6>Share on Socials</h6>
    <div className="icons">
    <FacebookShareButton url={shareUrl} quote={title}>
    <FacebookIcon size={32} round />
    </FacebookShareButton>
    <LinkedinShareButton url={'https://www.linkedin.com'} quote={title}>
    <LinkedinIcon size={32} round />
    </LinkedinShareButton>
    <EmailShareButton url={'mailto:ermohdsharif.com'}>
    <EmailIcon size={32} round />
    </EmailShareButton>
    <WhatsappShareButton>
    <WhatsappIcon size={32} round />
    </WhatsappShareButton>
    </div>
    </div>
  );
};

export default Share;
