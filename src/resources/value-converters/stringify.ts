export class StringifyValueConverter {
  public toView(value) {
    return JSON.stringify(value);
  }
}
