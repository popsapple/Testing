export interface IMatch {
  id: {
    r: number;
    s: number;
    m: number;
  };
  number: number;
  participant: IParticipantData[];
  score: number[];
  seed: number[];
}
export interface IRound {
  round1: IMatch[];
  round2: IMatch[];
  round3: IMatch[];
}
export interface IParticipantData {
  _id: number;
  name: string;
}

export interface IParticipant extends IParticipantData {
  seed: number;
  score: number;
  winner: boolean;
}
