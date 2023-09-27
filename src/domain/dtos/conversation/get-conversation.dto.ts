export class GetByIDConversationDto {
  constructor(public _id: String) {}

  static getByID(object: { [key: string]: any }): [string?, GetByIDConversationDto?] {
    const { _id } = object;
    if (!_id) return ["Missing _id"];

    return [undefined, new GetByIDConversationDto(_id)];
  }
}
