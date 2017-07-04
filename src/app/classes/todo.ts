export class Todo {
  constructor(private _title: string , private _details: string , private _type: string , private _imagePath: string) {}


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

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  get imagePath(): string {
    return this._imagePath;
  }

  set imagePath(value: string) {
    this._imagePath = value;
  }
  public clone(): Todo{
    return new Todo(this._title,this._details,this._type,this._imagePath);
  }
}
