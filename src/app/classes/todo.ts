export class Todo {
  constructor(private _title: string , private _details: string , private _type: number , private _imagePath: string) {}


  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get details(): string {
    return this._details;
  }

  set details(value: string) {
    this._details = value;
  }

  get type(): number {
    return this._type;
  }

  set type(value: number) {
    this._type = value;
  }

  get imagePath(): string {
    return this._imagePath;
  }

  set imagePath(value: string) {
    this._imagePath = value;
  }
}
