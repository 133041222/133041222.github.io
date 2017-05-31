/**
 * Created by Diligent on 2017/5/10.
 */
/*
* 生命
* 关卡
* 下一关
* 重新开始
* 去重
* 位置去重
* 文字换成图片
*
* */


function Game (){  //构造函数写属性
    this.charArr=[
        ['A','img/a.jpg'],
        ['B','img/b.jpg'],
        ['C','img/c.jpg'],
        ['D','img/d.jpg'],
        ['E','img/e.jpg'],
        ['F','img/f.jpg'],
        ['G','img/g.jpg'],
        ['H','img/h.jpg'],
        ['I','img/i.jpg'],
        ['J','img/j.jpg'],
        ['K','img/k.jpg'],
        ['L','img/l.jpg'],
        ['M','img/m.jpg'],
        ['N','img/n.jpg'],
        ['O','img/o.jpg'],
        ['P','img/p.jpg'],
        ['Q','img/q.jpg'],
        ['R','img/r.jpg'],
        ['S','img/s.jpg'],
        ['T','img/t.jpg'],
        ['U','img/u.jpg'],
        ['V','img/v.jpg'],
        ['W','img/w.jpg'],
        ['X','img/x.jpg'],
        ['Y','img/y.jpg'],
        ['Z','img/z.jpg']
    ]; // 字母图片
    this.charLength=5; // 同时允许存在的字母数
    this.cw=window.innerWidth;//获取浏览器宽度
    this.currentEle=[]; // 当前的元素
    this.currentpos=[]; // 当前元素的位置
    this.speed=10;  // 速度、步进值
    this.sm=10;  // 生命
    this.score=0; // 分数
    this.guan=1; // 关卡
    this.go=10; //
    this.smelement=document.querySelector('.sm1');
    this.scoreelement=document.querySelector('.score');
    this.guanelement=document.querySelector('.guan');
}
Game.prototype={ //方法
    start:function(){
        // 产生了五个随机的元素
        this.getElements(this.charLength);
        this.drop();
        this.key();
    },
    getElements:function(length){
        for(let i=0;i<length;i++){
            // 每次产生一个随机的元素，
            this.getChar();
        }
    },
    checkRepeat:function(text){
        return this.currentEle.some(function(value){
            return value.innerText==text;
        })
    },
    checkposition:function(lefts){
        return this.currentpos.some(function(value){
            return value+90>lefts&&lefts+90>value;
        })
    },
    getChar:function(){
        let num=Math.floor(Math.random()*this.charArr.length);
        while(this.checkRepeat(this.charArr[num][0])){
            num=Math.floor(Math.random()*this.charArr.length);
        }
        let ele=document.createElement('div');
        let tops=Math.random()*100,lefts=Math.random()*(this.cw-400)+200;
        while(this.checkposition(lefts)){
            lefts=Math.random()*(this.cw-400)+200;
        };
        ele.style.cssText=`width:80px;height:80px;border-radius:5px;background-image:url(${this.charArr[num][1]});background-position:center;background-size:cover;font-size:0px;text-align:center;line-height:80px;position:absolute;left:${lefts}px;top:${tops}px`
        //console.log(ele);

        ele.innerText=this.charArr[num][0];
        document.body.appendChild(ele);
        this.currentEle.push(ele);
        this.currentpos.push(lefts);
    },
    drop:function(){
        let self=this;
        self.t=setInterval(function(){
            for(let i=0;i<self.currentEle.length;i++){
                let tops=self.currentEle[i].offsetTop+self.speed;
                self.currentEle[i].style.top=tops+'px';
                if(tops>500){
                    document.body.removeChild(self.currentEle[i]);
                    self.currentEle.splice(i,1);
                    self.currentpos.splice(i,1);
                    self.sm--;
                    self.smelement.style.width=self.sm/10*100+'%';
                    // self.smelement.innerText=self.sm;
                    //重新开始
                    if(self.sm==0){
                     let flag=window.confirm('游戏结束是否继续')
                        if(flag){
                         self.restart();
                        }else{
                            close();
                        }
                    }
                }
                if(self.currentEle.length<self.charLength){
                    self.getChar();
            }
        }
    },200)
},
    key:function(){
        let self=this;
        document.body.onkeydown=function(e){
            let code=String.fromCharCode(e.keyCode);
           for(let i=0;i<self.currentEle.length;i++){
               if(code==self.currentEle[i].innerText){
                   document.body.removeChild(self.currentEle[i]);   1
                   self.currentEle.splice(i,1);
                   self.currentpos.splice(i,1);
                   self.score++;
                   self.scoreelement.innerText=self.score;
                  //下一关
                   if(self.score==self.go){
                       self.next();
                       self.guan++;
                       self.guanelement.innerText=self.guan;
                   }
               }
           }
           if(self.currentEle.length<this.charLength){
               self.getChar();
           }
        }//.bind(this);
    },
    restart:function(){
        //停止落下 元素删除  数据清空  生命初始值 分数归零  重新开始
        clearInterval(this.t);
        for(let i=0;i<this.currentEle.length;i++){
            document.body.removeChild(this.currentEle[i]);
        }
        this.currentEle=[];
        this.currentpos=[];
         this.sm=10;
        // this.smelement.innerText=this.sm;
        this.score=0;
        this.scoreelement.innerText=this.score;
        this.start();
    },
    next:function(){
        clearInterval(this.t);
        for(let i=0;i<this.currentEle.length;i++){
            document.body.removeChild(this.currentEle[i]);
        }
        this.currentEle=[];
        this.currentpos=[];
        this.charLength++;
        console.log(this.charLength)
        this.go+=15;
        this.start();
    },
}












