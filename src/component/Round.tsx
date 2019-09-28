import React from "react";
import { IRound, IMatch, IParticipantData, IParticipant } from "./../interface";
import { MatchData } from "./../MatchData";
import * as actions from "../actions/winner.action";
import { connect } from "react-redux";
import "./Round.scss";

// store 안의 state 값을 props 로 연결해줍니다. - 가져와서 뿌릴것
const mapStateToProps = (state: any) => ({
  hover_id: state._id
});

/* 
    액션 생성자를 사용하여 액션을 생성하고,
    해당 액션을 dispatch 하는 함수를 만들은 후, 이를 props 로 연결해줍니다. - 내가 변경하기 위해 사용할 action 함수
*/

const mapDispatchToProps = (dispatch: any) => ({
  onHover: (_id: number) => dispatch(actions.addHover(_id)),
  onOut: () => dispatch(actions.removeHover())
});

export class Participant extends React.Component<
  IParticipant & {
    idx: number;
    round: string;
    hover_id: number;
    onHover: (_id: number) => void;
    onOut: () => void;
  }
> {
  render() {
    let {
      _id,
      name,
      seed,
      score,
      matches,
      idx,
      hover_id,
      onHover,
      onOut,
      round
    } = this.props;
    let is_winner_idx = 0;
    if (score[0] < score[1]) {
      is_winner_idx = 1;
    }
    return (
      <li
        className={
          (hover_id === _id ? " hovering" : "") +
          (matches[is_winner_idx] === _id && round === "round3"
            ? " winner"
            : "")
        }
        onPointerEnter={() => {
          console.log("마우스오버", _id);
          onHover(_id);
        }}
        onPointerLeave={() => {
          onOut();
        }}
      >
        <span className="seed">{seed}</span>
        <span className="name">{name}</span>
        <span className="score">{score[idx]}</span>
        <span
          className="winner_cup"
          style={{
            display:
              matches[is_winner_idx] !== _id || round !== "round3"
                ? "block"
                : "none"
          }}
        >
          승리
        </span>
      </li>
    );
  }
}

// Participant 컴포넌트를 어플리케이션의 데이터 레이어와 묶는 역할을 합니다.
const ParticipantConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(Participant);

export class Math extends React.Component<IMatch> {
  constructor(props: IMatch) {
    super(props);
  }
  settingMatch() {
    let { seed, score, participant, number, id } = this.props;
    return participant.map((item, idx) => {
      return (
        <ParticipantConnected
          matches={participant.map(item => item._id)}
          seed={seed[idx]}
          score={score}
          idx={idx}
          round={"round" + id.r}
          key={"Participant" + item._id}
          {...item}
        />
      );
    });
  }
  render() {
    let { number } = this.props;
    return (
      <div className="match">
        <i>{number}</i>
        <ul>{this.settingMatch()}</ul>
      </div>
    );
  }
}
export class RoundList extends React.Component {
  public Rounds: IRound | null = null;

  componentWillMount() {
    let match_round1: IMatch[] = [];
    let match_round2: IMatch[] = [];
    let match_round3: IMatch[] = [];

    MatchData.match.map((item: IMatch) => {
      switch (item.id.r) {
        case 1:
          match_round1.push(item);
          break;
        case 2:
          match_round2.push(item);
          break;
        case 3:
          match_round3.push(item);
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
  roundMatch(round: "round1" | "round2" | "round3") {
    if (this.Rounds == null) return <></>;

    let Matches: JSX.Element[] = [];
    let Matche: JSX.Element[] = [];
    let divLength: number = round === "round1" ? 2 : 1;

    let matches = this.Rounds[round];
    matches.map((item, idx) => {
      if (idx % divLength === 0 || divLength === 1) {
        Matche = [];
      }
      Matche.push(<Math {...item} key={"Match" + round + idx} />);
      if (idx % divLength === 1 || divLength === 1) {
        Matches.push(
          <div className={"wapper"} key={"MatchWapper" + round + idx}>
            <hr
              className="vertical_line"
              hidden={round === "round3"}
              tabIndex={-1}
            />
            <hr
              className="horizon_line"
              hidden={round === "round3"}
              tabIndex={-1}
            />
            <hr
              className="horizon_line middle"
              hidden={round === "round3"}
              tabIndex={-1}
            />
            <hr
              className="horizon_line bottom"
              hidden={round === "round3"}
              tabIndex={-1}
            />
            {[...Matche]}
          </div>
        );
      }
    });
    return Matches;
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
    let round1: JSX.Element[] = this.roundMatch("round1") as JSX.Element[];
    let round2: JSX.Element[] = this.roundMatch("round2") as JSX.Element[];
    let round3: JSX.Element[] = this.roundMatch("round3") as JSX.Element[];
    return (
      <div className="RoundList">
        <h1>Stage 1 - Pool1</h1>
        {this.roundTab()}
        <section className="Matches">
          <div className={"MathDetail one"}>{round1}</div>
          <div className={"MathDetail two  auto_margin"}>{round2}</div>
          <div className={"MathDetail three auto_margin"}>{round3}</div>
        </section>
      </div>
    );
  }
}
