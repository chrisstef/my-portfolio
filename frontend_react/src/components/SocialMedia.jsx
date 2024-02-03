import React from "react";
import { BsGithub, BsLinkedin, BsTelegram } from "react-icons/bs";

const SocialMedia = () => (
    <div className="app__social">
        <div>
            <a
                href="https://github.com/chrisstef"
                target="_blank"
                rel="noreferrer"
                aria-label="Github Profile"
            >
                <BsGithub />
            </a>
        </div>
        <div>
            <a
                href="https://www.linkedin.com/in/christos-stefanis"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
            >
                <BsLinkedin />
            </a>
        </div>
        <div>
            <a
                href="https://t.me/chrisstefff"
                target="_blank"
                rel="noreferrer"
                aria-label="Telegram Profile"
            >
                <BsTelegram />
            </a>
        </div>
    </div>
);

export default SocialMedia;
