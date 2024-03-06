import { Alert, AlertDescription, AlertTitle } from '.';
import type { Meta, StoryObj } from '@storybook/react';
import { RocketIcon } from '@radix-ui/react-icons';

const meta: Meta<typeof Alert> = {
  component: Alert,
};

export default meta;

type Story = StoryObj<typeof Alert>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (props) => <AccordionDemo {...props} />,
  name: 'Accordion',
};

export function AccordionDemo() {
  return (
    <Alert>
      <RocketIcon className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>You can add components to your app using the cli.</AlertDescription>
    </Alert>
  );
}
