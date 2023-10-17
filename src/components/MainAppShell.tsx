'use client';

import { AppShell, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { SideBar } from './SideBar';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import store from '../app/redux/store';

export default function MainAppShell({ children }: { children: ReactNode }) {
  const [opened, { toggle }] = useDisclosure();
  return (
    <Provider store={store}>
      <AppShell
        header={{ height: 60 }}
        navbar={{ width: '80', breakpoint: 'sm', collapsed: { mobile: !opened } }}
        padding='md'
      >
        <AppShell.Header>
          <Title order={3} style={{ padding: 10 }}>
            Weater app
          </Title>
        </AppShell.Header>

        <AppShell.Navbar>
          <SideBar />
        </AppShell.Navbar>

        <AppShell.Main>{children}</AppShell.Main>
      </AppShell>
    </Provider>
  );
}
