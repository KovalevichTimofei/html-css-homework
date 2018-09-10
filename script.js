const a = 0.5;
let w1 = w2 = T1 = t = S1 = j = 0, y, flag;

const set = [[1, 1, 0],[-1, 1, 0],[-1, -1, 1],[1, -1, 0]];
do {
  console.log('Epoch 1: ' + j);
  flag = true;
  for(let i = 0; i < 4; i++){
    S1 = S(T1, w1, w2, set[i][0], set[i][1]);
    y = Y(S1);
    console.log('y: ' + y);
    console.log('e: ' + set[i][2]);
    if(y !== set[i][2]){
      flag = false;
      w1 = W(w1, set[i][0], y, set[i][2]);
      w2 = W(w2, set[i][1], y, set[i][2]);
      T1 = T(T1, y, set[i][2]);
    }
  }
  console.log('w1: ' + w1);
  console.log('w2: ' + w2);
  console.log('Result: ' + flag);
  j++;
} while(!flag && j < 100);

console.log('Порог: ' + T1);
console.log('w1: ' + w1);
console.log('w2: ' + w2);

function S(T, w1, w2, x1, x2)
{
  return w1 * x1 + w2 * x2 - T;
}

function W(w, x, y, e){
  return w - a * x* (y - e);
}

function T(T, y, e){
  return T + a * (y - e);
}

function Y(S){
  return S < 0 ? 0 : 1;
}