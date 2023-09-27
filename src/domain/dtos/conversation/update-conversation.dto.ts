export class UpdateConversationDto {
  constructor(public _id: string, public from: string, public text: string) {}

  static update(object: { [key: string]: any }): [string?, UpdateConversationDto?] {
    const { _id, from, text } = object;
    if (!_id) return ["Missing _id"];
    if (!from) return ["Missing from"];
    if (!text) return ["Missing text"];

    return [undefined, new UpdateConversationDto(_id, from, text)];
  }
}
