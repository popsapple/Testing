import React from "react";

enum LevelUP {
  INIT,
  CANUP,
  NONE
}
class PoketMon {
  public monster: number;
  public candy: number;
  public point: number;
  public canup: LevelUP = LevelUP.INIT;

  constructor(monster: number, candy: number) {
    this.monster = monster;
    this.candy = candy;
    this.point = 0;
    this.canup = LevelUP.INIT;
  }
  reset(monster: number, candy: number) {
    this.monster = monster;
    this.candy = candy;
    this.point = 0;
    this.canup = LevelUP.INIT;
  }
  cellMonseter(cellmoster: number, callback: () => void) {
    this.monster -= cellmoster;
    this.candy += cellmoster;
    callback();
  }
  checkCanUp() {
    if (this.monster > 0) {
      if (this.candy >= 12) {
        this.canup = LevelUP.CANUP;
        this.Leveling();
      } else {
        if (this.monster > 12 - this.candy) {
          this.canup = LevelUP.CANUP;
          this.cellMonseter(12 - this.candy, () => this.Leveling());
        } else {
          this.canup = LevelUP.NONE;
          return this.LevelEnd();
        }
      }
    } else {
      this.canup = LevelUP.NONE;
      return this.LevelEnd();
    }
  }
  LevelUp() {
    let returnVal = this.checkCanUp();
    console.log("더이상 반복하지 않는가 ", returnVal);
  }
  Leveling() {
    this.point += 500;
    this.monster -= 1;
    this.candy -= 11;
    this.checkCanUp();
  }
  LevelEnd() {
    console.log("더이상 반복하지 않는가 end", this.point);
    return this.point;
  }
}
