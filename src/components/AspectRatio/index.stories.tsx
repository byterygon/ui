import type { Meta, StoryObj } from "@storybook/react";
import { AspectRatio } from ".";

const meta: Meta<typeof AspectRatio> = {
  component: AspectRatio,
};

export default meta;

type Story = StoryObj<typeof AspectRatio>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (props) => (
    <AspectRatio ratio={16 / 9} className="bg-muted">
      <img
        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
        alt="Photo by Drew Beamer"
        style={{
          borderRadius: "calc(0.5rem - 2px)",
          objectFit: "cover",
          maxWidth: "100%",
          position: "absolute",
          height: "100%",
          width: "100%",
          inset: "0%",
          color: "transparent",
        }}
      />
    </AspectRatio>
  ),
  name: "AspectRatio",
};
