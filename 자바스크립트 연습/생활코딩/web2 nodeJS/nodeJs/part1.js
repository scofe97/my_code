var M ={
    v:'v',
    f:function(){
        console.log(this.v);
    }
}

// 모듈밖에서 사용할수있도록 설정하는 것
module.exports = M;