import React from "react";
import { IRound, IMatch } from "./../interface";
import { MatchData } from "./../MatchData";
import "./Round.scss";

export class RoundList extends React.Component {
  public Rounds: IRound | null = null;
  componentDidCatch() {
    let match_round1: IMatch[] = [];
    let match_round2: IMatch[] = [];
    let match_round3: IMatch[] = [];
    MatchData.match.map((item: IMatch) => {});
    this.Rounds = {
      round1: match_round1,
      round2: match_round2,
      round3: match_round3
    };
  }
  render() {
    return <div className="RoundList">{this.Rounds}</div>;
  }
}
