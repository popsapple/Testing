import { LevelUp } from "./MonsterFnc";

describe("Basic Test", () => {
  it("피카츄 진화와 점수 테스트", () => {
    expect(LevelUp(1, 12)).toBe(500);
    expect(LevelUp(13, 144)).toBe(6500);
    expect(LevelUp(10, 63)).toBe(3000);
    expect(LevelUp(1, 63)).toBe(500);
    expect(LevelUp(63, 1)).toBe(2500);
    expect(LevelUp(0, 0)).toBe(0);
    expect(LevelUp(3, 9)).toBe(0);
    expect(LevelUp(4, 9)).toBe(500);
  });
});
