import type { Preview } from '@storybook/react'

import '../src/components/style/typography.css';
import "../src/components/variables.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;