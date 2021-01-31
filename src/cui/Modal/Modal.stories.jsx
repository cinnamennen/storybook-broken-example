import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import Modal from "./Modal";

storiesOf("Components|CUI/Modal", module)
  .addDecorator(withKnobs)
  .addWithJSX("default", () => (
    <div>
      <p>
        TEST
      </p>
      <Modal visible size="large">
        <Modal.Header>I am a header</Modal.Header>
      </Modal>
    </div>
  ));
