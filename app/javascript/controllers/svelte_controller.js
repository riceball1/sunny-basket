import { Controller } from "stimulus";
import App from "../svelte/App.svelte";

export default class extends Controller {
  connect() {
    this.app = new App({
      target: this.element,
      props: {
        name: this.data.get("name"),
      },
    });
  }
}