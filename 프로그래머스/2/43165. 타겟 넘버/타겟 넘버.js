function solution(numbers, target) {
  let answer = 0;
  const length = numbers.length;

  function dfs(count, sum) {
    if (count === length) {
      if (target === sum) {
        answer++;
      }
      return;
    }

    dfs(count + 1, sum + numbers[count]);
    dfs(count + 1, sum - numbers[count]);
  }

  dfs(0, 0);

  return answer;
}
// function solution(numbers, target) {
//     var answer = 0;
//     var answer = 0;

//         //BST에 numbers값 넣기
//     let root = new BinarySearchTree();
//     root.insert(0);
//     numbers.forEach(function(val) {
//        root.insert(val); 
//     });

//         // 탐색 함수 실행
//     answer = root.DFSPreOrder(target);
//     return answer;
// }

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// class BinarySearchTree {
//     constructor() {
//         this.root = null;
//     }

//     insert(value) { //값 삽입하기
//         let newNode = new Node(value);

//         if(this.root === null) { 
//             this.root = newNode;
//             return this;
//         } else {
//             let current = this.root;

//             function traverse(node) {
//                 //값이 있으면 재귀
//                 if(node.left) traverse(node.left); 
//                 if(node.right) traverse(node.right); 
//                 //값이 비어있음 == 끝 ? 왼쪽 음수, 오른쪽 양수 채워주기
//                 if(node.left === null) {
//                     let leftNode = new Node(-value);
//                     let rightNode = new Node(value);
//                     node.left = leftNode;
//                     node.right = rightNode;
//                 }
//             }

//             // root 노드부터 탐색시작
//             traverse(current);
//             // insert를 호출한 객체(BST의 인스턴스)를 반환
//             return this;
//         }
//     }

//     DFSPreOrder(target) { // 탐색하기
//         let count = 0;
//         let sum = 0;
//         let current = this.root;
                
//         function traverse(node) {
            
//             sum = sum + node.value; 
//             console.log(sum,1)
//             if(node.left) traverse(node.left);
//             if(node.right) traverse(node.right);
//             if(node.left === null) { // 끝이면 
//                 if(sum === target) {
//                     count++;
//                 }
//             }
//             sum = sum - node.value;
//             console.log(sum,2)
//         }

//         traverse(current);
//         return count;
//     }
// }
