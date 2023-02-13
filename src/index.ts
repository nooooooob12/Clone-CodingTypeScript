import crypto from "crypto";

interface BlockShape {
    hash:string
    prevHash:string;
    height:number;
    data:string;
}
class Block implements BlockShape {
    public hash: string;
    constructor(
        public prevHash:string,
        public height:number,
        public data : string // 블록 생성
    ){
        this.hash = Block.calculateHash(prevHash,height,data); //해쉬값 받기
    }
    static calculateHash(prevHash:string, height:number,data:string){

        const toHash = `${prevHash}${height}${data}`
        return crypto.createHash("sha256").update(toHash).digest("hex") // 데이터의 해쉬값은 여기서 생성.
     };
}

//Project로써는 바보같을 수 있지만, ts에 대한 정의서? 패키지에 대한 오류를 설명하는 단계였다고 함.



class BlockChain {
    private blocks:Block[];
    constructor(){
        this.blocks = []
    }
    private getPrevHash(){
        if(this.blocks.length === 0) return ""
        return this.blocks[this.blocks.length -1].hash;
    }
    public addBlocks(data:string){
        const Newblock = new Block(this.getPrevHash(),this.blocks.length +1, data)
        this.blocks.push(Newblock);
    }
    public getBlocks(){
        return [...this.blocks]
    }
}


const blockchain = new BlockChain();
blockchain.addBlocks("First one");
blockchain.addBlocks("Second one");
blockchain.addBlocks("Third one");
blockchain.getBlocks().push(new Block("xxxx",1111,"HACKEDDDDDD"))

console.log(blockchain.getBlocks());