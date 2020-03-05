import {
    EmailShareButton,
    FacebookShareButton,
    RedditShareButton,
    TwitterShareButton
} from "react-share";
import React, { Component } from 'react'
import './ShareButtons.css'

export default class ShareButtons extends Component {
    render() {
        return (
            <div>
                <div class="share-btn">
                <a class="btn-mail" data-id="mail">EMail</a>
                <a class="btn-facebook" data-id="fb">Facebook</a>
                <a class="btn-telegram" data-id="tg">Reddit</a>
                <a class="btn-twitter" data-id="tw">Twitter</a>
                </div>
            </div>
            <FacebookShareCount url={tmURL} />

        )
    }
}
