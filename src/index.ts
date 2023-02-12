import {init,exit} from './myPackage';

//타입스크립트는 init을 불러왔지만, 전혀 알지 못함. 그래서 사용하더라도 어떠한 보호도 제공하지 않음.
//그렇기 떄문에, config.json으로 돌아가 이 문제에 대해 해결할것임. => "strict"를 활성화 함으로써 해결.
//정의파일이 필요하므로 .d.ts파일을 만들어 정의할것임. => 해결


init({
    url:"true"
})

exit(1)

