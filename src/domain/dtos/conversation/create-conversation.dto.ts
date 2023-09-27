export class CreateConversationDto {
  constructor(public name: String) {}

  static create(object: { [key: string]: any }): [string?, CreateConversationDto?] {
    const { name } = object;
    if (!name) return ["Missing name"];

    return [undefined, new CreateConversationDto(name)];
  }
}
