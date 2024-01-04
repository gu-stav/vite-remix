import { InputText } from './InputText';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'InputText',
  component: InputText,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

export const Primary = {
  args: {
    value: 'test',
  },
};
