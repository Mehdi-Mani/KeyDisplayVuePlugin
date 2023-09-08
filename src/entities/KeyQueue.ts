import { Ref } from "vue";
import { KeyEntity } from "./KeyEntity";
import KeyPluginOptions from "../types/KeyPluginOptions";

export class KeyQueue {
  constructor(
    private queue: Ref<KeyEntity[]>,
    private options?: KeyPluginOptions
  ) {}
  public addToQueue(keyEntity: KeyEntity) {
    this.queue.value.unshift(keyEntity);
    this.timedRemoval(this.options?.fadeDelay || 2000);
  }
  public addKeyToQueue(e: KeyboardEvent) {
    const keyEntity = new KeyEntity(e.key, e.altKey, e.ctrlKey, e.shiftKey);
    if (!keyEntity.isEmpty() && !this.isKeyEntityBlacklisted(keyEntity)) {
      this.addToQueue(keyEntity);
    }
  }
  public addMessageKeyToQueue(msg: string) {
    this.addToQueue(new KeyEntity(msg));
  }
  public isKeyEntityBlacklisted(key: KeyEntity) {
    if (this.options?.blackList) {
      let isBlackListed = false;
      this.options.blackList.every((keyEntity: KeyEntity) => {
        if (keyEntity.isEqual(key)) {
          isBlackListed = true;
          return false;
        }
      });
      return isBlackListed;
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
