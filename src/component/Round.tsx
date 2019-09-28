import React from "react";
import { IRound, IMatch } from "./../interface";
import { MatchData } from "./../MatchData";
import "./Round.scss";

export class RoundList extends React.Component {
  public Rounds: IRound | null = null;
  componentWillMount() {
    let match_round1: IMatch[] = [];
    let match_round2: IMatch[] = [];
    let match_round3: IMatch[] = [];
    MatchData.match.map((item: IMatch) => {
      switch (item.id.r) {
        case 1:
          match_round1.unshift(item);
          break;
        case 2:
          match_round2.unshift(item);
          break;
        case 3:
          match_round3.unshift(item);
          break;
        default:
          break;
      }
    });
    this.Rounds = {
      round1: match_round1,
      round2: match_round2,
      round3: match_round3
    };
  }
  roundTab() {
    if (this.Rounds == null) return <></>;
    return (
      <section className="RoundTabs">
        <ul>
          <li>Round 1</li>
          <li>Semifinals</li>
          <li>Finals</li>
        </ul>
      </section>
    );
  }
  render() {
    return (
      <div className="RoundList">
        <h1>Stage 1 - Pool1</h1>
        {this.roundTab()}
      </div>
    );
  }
}
