/** @jsx jsx */
import { Box, Flex, Link, jsx } from "theme-ui"

const Footer = () => {

  return (
    <Box as="footer" variant="footer">
      <Flex
        sx={{
          justifyContent: `center`,
          alignItems: `center`,
          mt: 3,
          color: `text`,
          fontWeight: `semibold`,
          a: { color: `text` },
        }}
      >
        Checkout my{" "}
        <Link
          aria-label="Link to my GitHub"
          href="http://github.com/shmkane"
        >
          GitHub
        </Link>
      </Flex>
    </Box>
  )
}

export default Footer
