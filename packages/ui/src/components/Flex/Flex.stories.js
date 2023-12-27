import { Flex } from './Flex';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Flex',
  component: Flex,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

export const Primary = {
  args: {
    children: [
        'Test',
        'Test'
    ]
  },
};

export const Colored = {
    args: {
        backgroundColor: 'blue',
        children: 'Test',
        color: 'white'
    },
  };
