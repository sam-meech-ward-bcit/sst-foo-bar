import { SSTConfig } from "sst";
import { API } from "./stacks/MyStack";

export default {
  config(_input) {
    return {
      name: "foo-bar",
      region: "us-west-2",
      profile: "meech-ward"
    };
  },
  stacks(app) {
    app.stack(API);
  }
} satisfies SSTConfig;
