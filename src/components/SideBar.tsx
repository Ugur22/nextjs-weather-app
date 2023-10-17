import { useState } from 'react';
import { Center, Tooltip, Stack, rem } from '@mantine/core';
import { IconHome2, IconMap, IconCloudFog } from '@tabler/icons-react';
import classes from './SideBar.module.css';
import Image from 'next/image';
import Link from 'next/link';

interface NavbarLinkProps {
  icon: typeof IconHome2;
  label: string;
  active?: boolean;
  onClick?(): void;
}

function NavbarLink({ icon: Icon, label }: NavbarLinkProps) {
  return (
    <Tooltip label={label} position='right' transitionProps={{ duration: 0 }}>
      <Link href={label.toLocaleLowerCase() === 'home' ? '/' : label.toLocaleLowerCase()} className={classes.link}>
        <Icon style={{ width: rem(40), height: rem(40) }} stroke={1.5} />
      </Link>
    </Tooltip>
  );
}

const linksdata = [
  { icon: IconHome2, label: 'Home' },
  { icon: IconCloudFog, label: 'weather' },
  { icon: IconMap, label: 'Map' },
];

export function SideBar() {
  const [active, setActive] = useState(2);

  function handleClick() {}

  const links = linksdata.map((link, index) => (
    <NavbarLink {...link} key={link.label} active={index === active} onClick={handleClick} />
  ));

  return (
    <nav className={classes.navbar}>
      <Center>
        <Image
          src='https://upload.wikimedia.org/wikipedia/commons/b/bf/Circle-icons-weather.svg'
          width={50}
          height={50}
          priority
          alt='Weather app'
        />
      </Center>

      <div className={classes.navbarMain}>
        <Stack justify='center' gap={0}>
          {links}
        </Stack>
      </div>
    </nav>
  );
}
