# cordsquard-test step-1

먼저 prompt를 사용하여 입력값을 한번에 받은 뒤  
이를 split을 사용해 배열로 나눈다.
각 split 된 값들의 데이터타입을 맞게 지정해주고 
첫번째 조건문에서 만약 입력된 숫자가 음수인 경우, 
숫자를 양수로 바꾸고 방향을 바꾸게 처리한다.
두번째 조건문에서는 첫번째 조건문에 의해 결정된 방향에 따라, 
입력된 문자를 어떻게 나눌지 결정하고 
넘어가는 문자를 a, 그 외의 문자를 b로 정의 한 뒤 
방향에 따라 a와 b를 조합한 결과를 출력한다.