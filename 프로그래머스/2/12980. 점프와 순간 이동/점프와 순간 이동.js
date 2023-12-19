function solution(n)
{
    let ans = n.toString(2).split("").filter(v=>v==="1").length;
    return ans;
}