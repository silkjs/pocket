export class Map {
  private readonly key: string;
  constructor(options: { key: string }) {
    this.key = options.key;
  }
  geocoder(options: { address: string; region?: string }) {
    fetch(
      `https://apis.map.qq.com/ws/geocoder/v1/?smart_address=${options.address}&region=${options.region}&key=${this.key}`,
    );
  }
}
