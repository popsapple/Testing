export const LevelUp = (monster: number, candy: number) => {
  let point = 0;
  let checkCanUp = () => {
    if (monster > 0) {
      if (candy >= 12) {
        // 피카츄, 캔디 모두 조건 충족일때
        Leveling();
      } else {
        if (monster > 12 - candy) {
          // 만약 캔디가 모자라면 피카츄를 모자란 갯수만큼 판다
          cellMonseter(12 - candy, () => Leveling());
        } else {
          // 필요한 캔디보다 피카츄가 모자라면 재귀 종료
        }
      }
    } else {
      // 애초에 피카츄가 있음 성립하지 않으므로 종료
    }
  };
  let cellMonseter = (cellmoster: number, callback: () => void) => {
    monster -= cellmoster;
    candy += cellmoster;
    callback();
  };
  let Leveling = () => {
    point += 500;
    monster -= 1;
    candy -= 11;
    // 레벨 후에 재귀로 레벨링 가능한지 체크 후 레벨업
    checkCanUp();
  };

  checkCanUp();
  return point;
};
