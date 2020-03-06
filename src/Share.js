import React, { Component } from 'react'
import {
  EmailShareButton,
  FacebookShareButton,
  RedditShareButton,
  TwitterShareButton
} from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  RedditIcon,
  TwitterIcon
} from "react-share";


export default class Share extends Component {
  render() {
    return (
      <>
      <FacebookShareButton
            url={this.props.concert.url}
            title={this.props.concert.title}
            className="share-button">
            <FacebookIcon size={32} round />
          </FacebookShareButton>

        <EmailShareButton
          url={this.props.concert.url}
          title={this.props.concert.title}
          className="share-button">
          <EmailIcon size={32} round />
        </EmailShareButton>

        <TwitterShareButton
          url={this.props.concert.url}
          title={this.props.concert.title}
          className="share-button">
          <TwitterIcon size={32} round />
        </TwitterShareButton>

      <RedditShareButton
        url={this.props.concert.url}
        title={this.props.concert.title}
        className="share-button">
        <RedditIcon size={32} round />
      </RedditShareButton>
    </>
    )
  }
}


