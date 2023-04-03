import { Image } from "antd";
import "./Story.scss";
import "antd/dist/antd.css";
import { Col, Divider, Row } from "antd";
import React from "react";
const StoryItem = ({ userStory }) => {
  return (
    <>
      <div className="story-container">
        <div className="story-info">
          <div className="desc">
            <Image
              width={66}
              src="https://devplus.edu.vn/assets/images/testimonial/style5/quote2.png"
            />
            <p className="story-item-desc">{userStory?.description}</p>

            <div className="desc-img">
              <Image
                width={70}
                height={70}
                src={userStory.avatar_student}
                className="item-img"
              />
            </div>
          </div>
        </div>

        <div className="user-info-container">
          <p className="username">{userStory?.name_student}</p>
          <p className="dev-plus-member">{userStory.role}</p>
        </div>
      </div>
    </>
  );
};

export default StoryItem;
