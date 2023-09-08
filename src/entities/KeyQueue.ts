import { Ref } from "vue";
import { KeyEntity } from "./KeyEntity";
import KeyPluginOptions from "../type/KeyPluginOptions";

export class KeyQueue {
  constructor(
    private queue: Ref<KeyEntity[]>,
    private options?: KeyPluginOptions
  ) {}
  public addToQueue(e: KeyboardEvent) {
    const keyEntity = new KeyEntity(e.key, e.altKey, e.ctrlKey, e.shiftKey);
    if (keyEntity.shouldBeDisplayed()) {
      this.queue.value.unshift(keyEntity);
      this.timedRemoval(this.options?.fadeDelay || 2000);
    }
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
