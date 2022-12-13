import { shallowMount } from "@vue/test-utils";
import { IDummyProps } from "./_Dummy.interface";

import Dummy from "./_Dummy.vue";

describe("Dummy", () => {
  test("Should cheer up", () => {
    const wrapper = shallowMount(
      Dummy,
      {
        props: {
          msg: "dummy"
        } as IDummyProps
      },
    );
    expect("☺️").toEqual("☺️");
  });
});