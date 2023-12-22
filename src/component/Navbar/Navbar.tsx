import { Group, Burger, Anchor } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Navbar.module.css";

const links = [
  { link: "/architecture", label: "architecture" },
  { link: "/photography", label: "photgraphy" },
  { link: "/ui-ux", label: "ui/ux" },
];

export const Navbar = () => {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      onClick={(event) => event.preventDefault()}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
          <Anchor fz={"2rem"} underline="never" fw={"bold"} c={"black"}>
            melonpundesign
          </Anchor>
        </Group>

        <Group>
          <Group
            ml={50}
            gap={5}
            className={classes.links}
            visibleFrom="sm"
            fz={"1.5rem"}
          >
            {items}
          </Group>
        </Group>
      </div>
    </header>
  );
}
