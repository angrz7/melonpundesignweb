import { Anchor, Group, Text, Box, Flex } from "@mantine/core";
import classes from "./Footer.module.css";
import { GoLinkExternal } from "react-icons/go";

const links = [
    { link: "#", label: "linkedin" },
  { link: "#", label: "instagram" },
];

export const Footer = () => {
  const items = links.map((link) => (
    <Flex justify={'center'} align={'center'} gap={'xs'}>
        <GoLinkExternal />
        <Anchor
        className={classes.link}
        underline="never"
        c={"black"}
        key={link.label}
        href={link.link}
        onClick={(event) => event.preventDefault()}
        fz={"1rem"}
        >
            {link.label}
        </Anchor>
    </Flex>
  ));

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <Text fz={"1rem"}>ivandesignstudio</Text>
        <Group className={classes.links}>{items}</Group>

        <Box className={classes.contact} py={'1rem'} px={'2rem'}>
          <Text fz={"1rem"}>contact</Text>
        </Box>
      </div>
    </div>
  );
}
