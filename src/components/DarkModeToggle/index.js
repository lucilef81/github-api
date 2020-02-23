import React from 'react';
import { Radio } from 'semantic-ui-react';

const DarkModeToggle = ({ darkMode, setDarkMode }) => (
  <Radio
    checked={darkMode}
    onChange={() => setDarkMode(!darkMode)}
    toggle
    label='Dark mode'
  />
);

export default DarkModeToggle;
