import React from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";

import { images } from "../../constants";
import "./Header.scss";

const scaleVariants = {
    whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
            duration: 1,
            ease: "easeInOut",
        },
    },
};

const Header = () => (
    <div className="app__header app__flex">
        <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="app__header-info"
        >
            <div className="app__header-badge">
                <div className="badge-cmp app__flex">
                    <span>👋</span>
                    <div style={{ marginLeft: 20 }}>
                        <p className="p-text">Hello, It's</p>
                        <h1 className="head-text">Chris</h1>
                    </div>
                </div>

                <div className="tag-cmp app__flex">
                    <p className="p-text">
                        I am a <strong>software</strong> developer with an
                        <br /> affinity for <strong>blockchain & Web3.</strong>
                    </p>
                </div>
                <div className="tag-cmp app__flex">
                    <p className="p-text">
                        I enjoy creating <strong>interactive</strong> <br />
                        interfaces, bringing products to life.
                    </p>
                </div>
            </div>
        </motion.div>

        <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
            className="app__header-img"
        >
            <img src={images.profile} alt="profile_bg" />
            <motion.img
                whileInView={{ scale: [0, 1] }}
                transition={{ duration: 1, ease: "easeInOut" }}
                src={images.circle}
                alt="profile_circle"
                className="overlay_circle"
            />
        </motion.div>

        <motion.div
            variants={scaleVariants}
            whileInView={scaleVariants.whileInView}
            className="app__header-circles"
        >
            {[images.python, images.next, images.solidity].map(
                (circle, index) => (
                    <div
                        className="circle-cmp app__flex"
                        key={`circle-${index}`}
                    >
                        <img src={circle} alt="profile_bg" />
                    </div>
                )
            )}
        </motion.div>
    </div>
);

export default AppWrap(Header, "home");
