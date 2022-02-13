/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import ImageCarousel from "./image-carousel";

type ProjectCardProps = {
  links: string[];
  title: string;
  children: React.ReactNode;
  bg: string;
};

const ProjectCard = ({ links, title, children, bg }: ProjectCardProps) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const isInfoPage = currentIndex === 0;

  const decrementIndex = () => {
    if (currentIndex === 0) {
      setCurrentIndex(links.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const incrementIndex = () => {
    if (currentIndex === links.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div
      onClick={() => {
          incrementIndex();
      }}
      sx={{
        width: `100%`,
        cursor: `pointer`,
        boxShadow: `lg`,
        position: `relative`,
        textDecoration: `none`,
        borderRadius: `lg`,
        px: isInfoPage ? [3, 4, 5] : 3,
        background: bg || `none`,
        transition: `all 0.2s linear !important`,
        "&:hover": {
          boxShadow: `lg`,
          transform: `translateY(-10px)`,
        },
      }}
    >
      <div
        sx={{
          textTransform: isInfoPage ? `uppercase` : `none`,
          letterSpacing: `wide`,
          fontSize: isInfoPage ? [4, 5] : [2, 3],
          paddingTop: 5,
          px: isInfoPage ? 0 : 4,
          fontWeight: `medium`,
          lineHeight: 1,
        }}
      >
        {title}
      </div>
      <div sx={{paddingBottom: 5, mt: 3}}>
        {currentIndex !== 0 ? (
          <ImageCarousel
            links={links}
            currentIndex={currentIndex - 1}
            decrementIndex={decrementIndex}
            incrementIndex={incrementIndex}
          />
        ) : (
          <div
            sx={{
              opacity: 0.85,
              textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)`,
            }}
          >
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
