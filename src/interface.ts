export interface IMatch {
  id: {
    r: number;
    s: number;
    m: number;
  };
  number: number;
  participant: IParticipant;
  score: number[];
  seed: number[];
  isfinal: boolean;
}
export interface IRound {
  round1: IMatch[];
  round2: IMatch[];
  round3: IMatch[];
}
export interface IParticipant {
  _id: string;
  seed: number;
  name: string;
  score: number;
  winner: boolean;
}
