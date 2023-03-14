export default interface Cat {
  id?: string;
  name: string;
  species: string;
  favFoods: Array<string>; // or string[]
  birthYear: number;
}

export type Cats = Array<Cat>; // or Cat[]
