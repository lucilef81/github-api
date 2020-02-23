import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

const PageIndexButton = ({ setPageIndex, label, isNext }) => (
  <Button
    color='purple'
    icon
    onClick={setPageIndex}
    labelPosition={isNext ? 'right' : 'left'}
  >
    <Icon name={`arrow ${isNext ? 'right' : 'left'}`} />
    {label}
  </Button>
);

export default PageIndexButton;
