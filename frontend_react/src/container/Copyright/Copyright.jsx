import React from "react";
import "./Copyright.scss";

const Copyright = () => {
    return (
        <div className="footer">
            <p>
                Copyright © {new Date().getFullYear()}&nbsp;
                <a
                    href="https://github.com/chrisstef"
                    target="_blank"
                    rel="noreferrer"
                    className="github-link"
                >
                    chrisstef
                </a>{" "}
                | All Rights Reserved.
            </p>
        </div>
    );
};

export default Copyright;
