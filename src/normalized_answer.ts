export default class NormalizedAnswer {
    constructor(private readonly message: string, private readonly data: any) {}
  
    public toJSON() {
      return {
        message: this.message,
        data: this.data,
      };
    }
  }