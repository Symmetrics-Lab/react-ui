import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { EnvelopeIcon } from '@heroicons/react/20/solid';

import Button from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    isDisabled: {
      type: 'boolean',
    },
  },
  args: {
    children: 'Click Me',
    onPress: () => console.log('click'),
    'arial-label': 'Click me',
    iconPosition: 'left',
    type: 'button',
    size: 'md',
  },

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args: any) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  variant: 'primary',
  icon: EnvelopeIcon,
};
