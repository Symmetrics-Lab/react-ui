import React from 'react';
import { Story, Meta } from '@storybook/react';
import { EnvelopeIcon } from '@heroicons/react/20/solid';

import Button from './Button';
import { ButtonProps } from './Button.types';

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
} as Meta;

const Template: Story<ButtonProps> = (args: any) => <Button {...args} />;

export const Primary = Template.bind({});
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
