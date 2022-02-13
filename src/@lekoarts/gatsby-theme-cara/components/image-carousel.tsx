/** @jsx jsx */
import { jsx } from "theme-ui";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";

interface ImageCarouselProps {
  links: string[];
  onMouseEnter: () => void;
  currentIndex: number;
  incrementIndex: () => void;
  decrementIndex: () => void;
}


const ImageCarousel = ({ links, currentIndex, onMouseEnter, incrementIndex, decrementIndex }: ImageCarouselProps) => {
  // Given a list of links to images, have a carousel of images
  // that can be scrolled through.
  //
  // The images are rendered as StaticImages, which are a Gatsby
  // component that can be used to render images.

  // If there's more than one image, render a carousel.
  const data = useStaticQuery(graphql`
    query {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `);

  const img = data.images.edges.find((edge) => {
    return edge.node.relativePath.includes(links[currentIndex]);
  });

  const image = getImage(img.node.childImageSharp);

  const leftArrow = (
    <div
      style={{
        flex: 1,
      }}
    >
      <div
        sx={{
          cursor: `pointer`,
          opacity: currentIndex === 0 ? 0.3 : 1,
          transition: `all 0.25s linear !important`,
        }}
        onClick={decrementIndex}
      >
        <svg
          sx={{
            width: `24px`,
            height: `24px`,
            fill: `currentColor`,
          }}
        >
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
      </div>
    </div>
  );

  const rightArrow = (
    <div
      style={{
        flex: 1,
      }}
    >
      <div
        sx={{
          cursor: `pointer`,
          opacity: currentIndex === links.length - 1 ? 0.3 : 1,
          transition: `all 0.25s linear !important`,
        }}
        onClick={incrementIndex}
      >
        <svg
          sx={{
            width: `24px`,
            height: `24px`,
            fill: `currentColor`,
          }}
        >
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
        </svg>
      </div>
    </div>
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      {leftArrow}
      <div
        style={{
          flex: 10,
        }}
      >
        <GatsbyImage
          alt={"Loading..."}
          image={image}
          onMouseEnter={onMouseEnter}
        />
      </div>
      {/* Create a centered right arrow */}
      {rightArrow}
    </div>
  );
};

export default ImageCarousel;
