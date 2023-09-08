import { ModifierKeysEnum } from "../enums/ModifierKeysEnum";

export class KeyEntity {
  private readonly _id: number;

  constructor(
    private readonly _content: string,
    private readonly _altPressed: boolean,
    private readonly _ctrlPressed: boolean,
    private readonly _shiftPressed: boolean
  ) {
    this._content = _content.toUpperCase();
    if (this.isKeyAModifier()) {
      this._content = "";
    }
    this._id = Math.floor(Math.random() * 999);
  }
  public get id(): number {
    return this._id;
  }
  public get shiftPressed(): boolean {
    return this._shiftPressed;
  }
  public get ctrlPressed(): boolean {
    return this._ctrlPressed;
  }
  public get altPressed(): boolean {
    return this._altPressed;
  }
  public get content(): string {
    return this._content;
  }
  public isEmpty(): boolean {
    return (
      this._content.length === 0 &&
      !this._altPressed &&
      !this._ctrlPressed &&
      !this.shiftPressed
    );
  }
  public isKeyAModifier() {
    return Object.values(ModifierKeysEnum).includes(
      this._content as ModifierKeysEnum
    );
  }
  public shouldBeDisplayed() {
    return !this.isEmpty();
  }
}
