function solution(code) {
    let ret = '';
    let mode = 0;

    for (let i = 0; i < code.length; i += 1) {
      if (Number(code[i]) === 1) {
          if(mode == 1)
              mode = 0
          else mode = 1
      }
      if (Number(code[i]) !== 1 && i % 2 === mode) {
        ret += code[i];
      }
    }
    if(ret.length > 0)
        return ret;
    else return "EMPTY"
}