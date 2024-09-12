import { Controller } from "stimulus";
import About from "../svelte/About.svelte";
import Inventory from "../svelte/Inventory.svelte";
import Home from "../svelte/Home.svelte";
import Lists from "../svelte/Lists.svelte";
import Error from "../svelte/Error.svelte";

export default class extends Controller {
  async connect() {
    const componentName = this.element.dataset.component;
    let Component;

    switch (componentName) {
      case "App":
        Component = Home;
        break;
      case "About":
        Component = About;
        break;
      case "Inventory":
        Component = Inventory;
        break;
      case "Lists":
        Component = Lists;
        break;
      case "Error":
        Component = Error;
        break;
    }

    this.app = new Component({
      target: this.element
    });
  }

  disconnect() {
    if (this.app) {
      this.app.$destroy();
      this.app = null;
    }
  }
}