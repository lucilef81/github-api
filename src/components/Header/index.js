import React from 'react';
import { Icon } from 'semantic-ui-react';

import HeaderStyled from './HeaderStyled';

const HeaderIcon = ({ isDark }) => {
  return (
    <HeaderStyled isDark={isDark}>
      <Icon size='big' name='github' alt='github' />
      <h1>Github</h1>
    </HeaderStyled>
  );
};

export default HeaderIcon;
