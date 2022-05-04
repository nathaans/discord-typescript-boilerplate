import { randomUUID } from 'crypto';

export abstract class Entity <T = any> {
  public id: string;
  public data: T;

  constructor (data: T, id?: string) {
    this.id = id ?? randomUUID();
    this.data = data;
  }

  public equals (object?: Entity<T>): boolean {
    if (!object) return false;

    if (this === object) return true;
    if (!(object instanceof Entity)) return false;

    return this.id === object.id;
  }
}
