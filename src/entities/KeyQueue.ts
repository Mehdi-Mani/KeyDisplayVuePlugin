import { Ref } from "vue";
import { KeyEntity } from "./KeyEntity";
import KeyPluginOptions from "../types/KeyPluginOptions";

export class KeyQueue {
  constructor(
    private queue: Ref<KeyEntity[]>,
    private options?: KeyPluginOptions
  ) {}
  public addToQueue(keyEntity: KeyEntity) {
    let keyToAdd = keyEntity;
    if (keyEntity.message && keyEntity._callback) {
      /**  Currently using KeyEntity as basic way to output message in the queue.
       Should consider updating the display process to differentiate keys output and messages output */
      keyToAdd = keyEntity.getOutputKeyEntity();
    }
    this.queue.value.unshift(keyToAdd);
    this.timedRemoval(this.options?.fadeDelay || 2000);
  }

  public timedRemoval(time: number) {
    setTimeout(() => {
      this.queue.value.pop();
    }, time);
  }
  public get size(): number {
    return this.queue.value.length;
  }
  public get values() {
    return this.queue.value;
  }
  public isEmpty() {
    return this.queue.value.length;
  }
}
