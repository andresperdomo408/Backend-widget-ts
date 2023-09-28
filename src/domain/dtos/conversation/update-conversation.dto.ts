export class UpdateConversationDto {
  constructor(
    public _id: string,
    public from: string,
    public text: string,
    public image?: string,
    public name?: string,
    public icon?: string,
    public file?: string
  ) {}

  static update(object: { [key: string]: any }): [string?, UpdateConversationDto?] {
    const { _id, from, text, image, name, icon, file } = object;
    if (!_id) return ["Missing _id"];
    if (!from) return ["Missing from"];

    return [undefined, new UpdateConversationDto(_id, from, text, image, name, icon, file)];
  }
}
