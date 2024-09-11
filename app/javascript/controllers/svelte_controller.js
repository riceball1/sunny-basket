import { Controller } from "@hotwired/stimulus"
import Container from "../svelte/Container.svelte"

// Connects to data-controller="svelte"
export default class extends Controller {
  connect() {
    console.log("Hello, Stimulus!", this.element);

    const app = new Container({
      target: this.element,
      props: {
        target: "world"
      }
    })
  }
}
