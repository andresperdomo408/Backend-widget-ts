export class RemoveByIDConversationDto {
    constructor(public _id: String) {}
  
    static removeByID(object: { [key: string]: any }): [string?, RemoveByIDConversationDto?] {
      const { _id } = object;
      if (!_id) return ["Missing _id"];
  
      return [undefined, new RemoveByIDConversationDto(_id)];
    }
  }
  