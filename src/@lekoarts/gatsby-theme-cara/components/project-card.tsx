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
  const [isHovered, setIsHovered] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const onEnter = () => {
    setIsHovered(true);
  };

  const onLeave = () => {
    setIsHovered(false);
  };

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
  }

  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={incrementIndex}
      sx={{
        width: `100%`,
        cursor: `pointer`,
        boxShadow: `lg`,
        position: `relative`,
        textDecoration: `none`,
        borderRadius: `lg`,
        px: isHovered ? 3 : [3, 4, 5],
        py: [4, 5],
        background: bg || `none`,
        transition: `all 0.25s linear !important`,
      }}
    >
      <div
        sx={{
          textTransform: `uppercase`,
          letterSpacing: `wide`,
          fontSize: isHovered ? [1, 2] : [4, 5],
          py: isHovered ? [1, 2] : [4, 5],
          px: isHovered ? 4 : 1,
          fontWeight: `medium`,
          lineHeight: 1,
        }}
      >
        {title}
      </div>
      {!isHovered && (
        <div
          sx={{
            opacity: 0.85,
            textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)`,
          }}
        >
          {children}
        </div>
      )}
      {isHovered && (
        <ImageCarousel
          links={links}
          onMouseEnter={onEnter}
          currentIndex={currentIndex}
          decrementIndex={decrementIndex}
          incrementIndex={incrementIndex}
        />
      )}
    </div>
  );
};

export default ProjectCard;
