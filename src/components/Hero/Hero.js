import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          Hi! I'm a Full Stack Web Developer leveraging my background in the oil
          sector to build more intuitive user experiences on the web. Recently
          earned a certificate in Full Stack Development from the University of
          Toronto and developed skills in MERN stack, Redux, and TypeScript.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
