import React from 'react';
import { Icon } from 'semantic-ui-react';

import HeaderStyled from './HeaderStyled';

const HeaderIcon = () => {
  return (
    <HeaderStyled>
      <div className='header-icon'>
        <Icon size='big' name='github' alt='github' />
        <h1>Github</h1>
      </div>
    </HeaderStyled>
  );
};

export default HeaderIcon;
