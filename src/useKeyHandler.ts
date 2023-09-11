import { KeyEntity } from "./entities/KeyEntity";
import KeyPluginOptions from "./types/KeyPluginOptions";

export default function useKeyHandler(
  e: KeyboardEvent,
  options?: KeyPluginOptions
) {
  const isKeyEntityBlacklisted = (key: KeyEntity) => {
    if (options?.blackList) {
      let isBlackListed = false;
      options.blackList.every((keyEntity: KeyEntity) => {
        if (keyEntity.isEqual(key)) {
          isBlackListed = true;
          return false;
        }
      });
      return isBlackListed;
    }
  };
  const getKeyEntityBoundToEvent = (key: KeyEntity) => {
    if (options?.events) {
      let keyEntityFound: KeyEntity | undefined;
      options.events.every((keyEntity: KeyEntity) => {
        if (keyEntity.isEqual(key)) {
          keyEntityFound = keyEntity;
          return false;
        }
      });
      return keyEntityFound;
    }
  };
  let keyEntity = new KeyEntity(e.key, {
    altPressed: e.altKey,
    ctrlPressed: e.ctrlKey,
    shiftPressed: e.shiftKey,
  });

  if (keyEntity.isEmpty()) {
    return;
  }
  if (isKeyEntityBlacklisted(keyEntity)) {
    return;
  }
  const keyEntityFromEvents = getKeyEntityBoundToEvent(keyEntity);
  if (keyEntityFromEvents) {
    keyEntityFromEvents._callback?.();
    return keyEntityFromEvents;
  }
  if (!keyEntityFromEvents && options?.displayOnEventCallOnly) {
    return;
  }
  return keyEntity;
}
