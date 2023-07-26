function solution(s) {
    var answer = 0;
    s=replaceAll(s,'zero',0);
    s=replaceAll(s,'one',1);
    s=replaceAll(s,'two',2);
    s=replaceAll(s,'three',3);
    s=replaceAll(s,'four',4);
    s=replaceAll(s,'five',5);
    s=replaceAll(s,'six',6);
    s=replaceAll(s,'seven',7);
    s=replaceAll(s,'eight',8);
    s=replaceAll(s,'nine',9);
    return Number(s);
}
// serchStr을 기준으로 쪼갠 후 그 곳에 대체 텍스트를 넣고 합쳐준다.
function replaceAll(str, searchStr, replaceStr) {
  return str.split(searchStr).join(replaceStr);
}