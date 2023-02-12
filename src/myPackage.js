//@ts-check
/**
 * Initializes the project
 * @param {object} config
 * @param {boolean} config.debug
 * @param {string} config.url 
 * @returns boolean
 */
export function init(config){
    return true;
}
/**
 * Exit the program
 * @param {number} code 
 * @returns number
 */
export function exit(code){
    return code +1;
}

//이건 자바스크립트코드로 타입스크립트가 알 수 없음. index.ts로 가서 패키지인것처럼 사용해 볼 것임