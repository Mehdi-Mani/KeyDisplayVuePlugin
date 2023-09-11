import ModifiersKeysState from "../types/ModifiersKeyState";
import { ModifierKeysEnum } from "../enums/ModifierKeysEnum";

export class KeyEntity {
  private readonly _id: number;

  constructor(
    private _content: string,
    private _modifiersKeyState: ModifiersKeysState = {
      altPressed: false,
      ctrlPressed: false,
      shiftPressed: false,
    },
    readonly _callback?: (...params: any) => void,
    private readonly _message?: string
  ) {
    this._content = _content.toUpperCase();
    if (this.isKeyAModifier()) {
      this._content = "";
    }
    this._id = Math.floor(Math.random() * 999);
  }
  public get modifiersKeyState(): ModifiersKeysState {
    return this._modifiersKeyState;
  }
  public set modifiersKeyState(value: ModifiersKeysState) {
    this._modifiersKeyState = value;
  }
  public get message(): string {
    return this._message ?? "";
  }
  public get id(): number {
    return this._id;
  }
  public get content(): string {
    return this._content;
  }
  public set content(value: string) {
    this._content = value;
  }
  public isEmpty(): boolean {
    return (
      this._content.length === 0 &&
      !this.modifiersKeyState.altPressed &&
      !this.modifiersKeyState.ctrlPressed &&
      !this.modifiersKeyState.shiftPressed
    );
  }
  public resetModifiers() {
    this.modifiersKeyState = {
      altPressed: false,
      shiftPressed: false,
      ctrlPressed: false,
    };
  }
  public getOutputKeyEntity() {
    return new KeyEntity(
      this._message ?? "",
      { altPressed: false, shiftPressed: false, ctrlPressed: false },
      undefined,
      ""
    );
  }
  public isKeyAModifier() {
    return Object.values(ModifierKeysEnum).includes(
      this._content as ModifierKeysEnum
    );
  }
  public isEqual(keyEntity: KeyEntity) {
    return (
      keyEntity.modifiersKeyState.altPressed ===
        this.modifiersKeyState.altPressed &&
      keyEntity.modifiersKeyState.ctrlPressed ===
        this.modifiersKeyState.ctrlPressed &&
      this.modifiersKeyState.shiftPressed ===
        keyEntity.modifiersKeyState.shiftPressed &&
      this._content === keyEntity._content
    );
  }
}
