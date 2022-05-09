import React from 'react';

import { Grid } from './styles';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => (
  <Grid>{children}</Grid>
);

export default Layout;
