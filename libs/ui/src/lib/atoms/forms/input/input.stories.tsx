import type { Meta } from "@storybook/react";
import Input from "./index";

const meta: Meta<typeof Input> = {
  component: Input,
  title: "Atoms/Forms/Input",
  args: {
    placeholder: "Input",
    className:
      "border-[2px] border-slate-200 font-primary text-slate-200 rounded-[5px] w-[150px] shrink flex p-[5px]",
  },
  parameters: {},
};
export default meta;

export const Default = {
  args: {},
};
