import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <Image
            src="https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/man-svgrepo-com.svg"
            alt="man-svgrepo"
          />
          <div className="AboutBio">
            Hello! My name is <strong>Aditya Kumar </strong> .A results-driven Full Stack Web Developer with hands-on experience in crafting and deploying innovative solutions. Proficient in developing dynamic React components and integrating backend systems using Express.js and MongoDB. Adept at implementing robust REST APIs with authentication and authorization. Currently pursuing a Bachelor's degree in Electronics and Telecommunication, showcasing strong academic performance and a passion for technology. Demonstrated expertise through diverse projects, including a platform for second-hand transactions and a path-finding algorithm visualizer. Recognized for academic excellence with scholarships and notable awards in competitive coding events. Enthusiastic about contributing to cutting-edge projects and driving technological advancements.
          </div>
          <div className="AboutBio tagline2">
            I have become confident using the following technologies.
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
