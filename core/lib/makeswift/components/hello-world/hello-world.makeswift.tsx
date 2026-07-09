import { runtime } from "~/lib/makeswift/runtime";

import { HelloWorld } from "~/components/hello-world";

import { TextInput, TextArea } from "@makeswift/runtime/controls";

runtime.registerComponent(HelloWorld, {
  type: "hello-world",
  label: "Custom / Custom Text",
  icon: "text",
  props: {
    name: TextInput({
      label: "Name",
      defaultValue: "World",
    }),
    code: TextArea({ 
        label: "Code",
        defaultValue: "test code",
    })
  },
});
