// Name: Approaches!
// ID: approaches
// Description: None(not completed yet)
// By: DL_Grass <https://github.com/DLGrass>
// Original: Blue3 <https://space.bilibili.com/25786611>
// License: MIT

(function (Scratch) {
    'use strict';

    // 暂时还有一些没改完的东西(比如国际化翻译)，所以先不要用这个扩展

    const block_icon = "https://m.ccw.site/creator-college/images/95c1d774ecfb8191c9b58c6ae4faae8a.png";
    const rebound_constant = 0.46410161513775444;
    let max_number = 1e+10;
    // function test1(a,b,c){
    //     let t = Number(a);let t2 = Number(b);let t3 = Number(c);
    //     return (t2 - t) * Math.sin(((Math.PI /2) / 100 * t3));       
    // }
    function log(a,b){
        return Math.log(b) / Math.log(a);
    }
    function nitian(a){
        return a ** a ** a
    }
    function gamma(z) {
    const p = [
        676.5203681218851, -1259.1392167224028, 771.32342877765313,
        -176.61502916214059, 12.507343278686905, -0.13857109526572012,
        9.9843695780195716e-6, 1.5056327351493116e-7
    ];
    let x = z;
    let y = x;
    if (x < 0.5) {
        return Math.PI / (Math.sin(Math.PI * x) * gamma(1 - x));
    }
    x -= 1;
    let a = p[0];
    const t = x + 7 + 0.5;
    for (let i = 1; i < p.length; i++) {
        a += p[i] / (x + i);
    }
    return Math.sqrt(2 * Math.PI) * Math.pow(t, x + 0.5) * Math.exp(-t) * a;
    }

    // function factorialDecimal(n) {
    // if (n < 0) return undefined; // Gamma 对负数非整数有定义，但这里简单限制
    // return gamma(n + 1);
    // }

    class approaches {
        getInfo() {
            return{
                id:"approaches",
                name:"接近!",
                description:"非线性接近函数",
                
                color1:"#5b15cc",
                color2:"#5b15cc",
                color3:"#6717e7",
                blockIconURI:block_icon,

                blocks:[
                    {
                        opcode:'label2',
                        blockType:Scratch.BlockType.LABEL,  
                        text:'🔁递归接近',
                    },    
                    {
                        opcode:'block1',
                        blockType:Scratch.BlockType.REPORTER,  
                        text:'常规接近让[temp]接近[temp2]，递归速率为[temp3]',
                        arguments:{
                            temp:{
                                type:Scratch.ArgumentType.NUMBER,
                                defaultValue:0,
                            },
                            temp2:{
                                type:Scratch.ArgumentType.NUMBER,
                                defaultValue:10,
                            },
                            temp3:{
                                type:Scratch.ArgumentType.NUMBER,
                                defaultValue:5,
                            },
                        }
                    },
                    
                    {
                        opcode:'label2',
                        blockType:Scratch.BlockType.LABEL,  
                        text:'🔁递归回弹',
                    },    
                    {
                        opcode:'block2_1',
                        blockType:Scratch.BlockType.REPORTER,  
                        text:'通过正弦接近算法让[temp]回弹到[temp2]，递归速率为[temp3]',
                        arguments:{
                            temp:{
                                type:Scratch.ArgumentType.NUMBER,
                                defaultValue:0,
                            },
                            temp2:{
                                type:Scratch.ArgumentType.NUMBER,
                                defaultValue:10,
                            },
                            temp3:{
                                type:Scratch.ArgumentType.NUMBER,
                                defaultValue:5,
                            },
                        }
                    },
                    {
                        opcode:'label3',
                        blockType:Scratch.BlockType.LABEL,  
                        text:'📈函数曲线接近（搭配上面任意一个递归块套入第三个参数递归使用）',
                    },   
                    {
                        opcode:'blockHeyiwei',
                        blockType:Scratch.BlockType.REPORTER,  
                        text:'线性让[temp]接近[temp2]，接近到[temp3]%',
                        arguments:{
                            temp:{
                                type:Scratch.ArgumentType.NUMBER,
                                defaultValue:0,
                            },
                            temp2:{
                                type:Scratch.ArgumentType.NUMBER,
                                defaultValue:10,
                            },
                            temp3:{
                                type:Scratch.ArgumentType.NUMBER,
                                defaultValue:50,
                            },
                        }
                    }, 
                    {
                        opcode:'block2',
                        blockType:Scratch.BlockType.REPORTER,  
                        text:'通过正弦接近算法让[temp]接近[temp2]，接近到[temp3]%',
                        arguments:{
                            temp:{
                                type:Scratch.ArgumentType.NUMBER,
                                defaultValue:0,
                            },
                            temp2:{
                                type:Scratch.ArgumentType.NUMBER,
                                defaultValue:10,
                            },
                            temp3:{
                                type:Scratch.ArgumentType.NUMBER,
                                defaultValue:50,
                            },
                        }
                    },
                    {
                        opcode:'block3',
                        blockType:Scratch.BlockType.REPORTER,  
                        text:'通过对数接近算法让[temp]接近[temp2]，接近到[temp3]%',
                        arguments:{
                            temp:{
                                type:Scratch.ArgumentType.NUMBER,
                                defaultValue:0,
                            },
                            temp2:{
                                type:Scratch.ArgumentType.NUMBER,
                                defaultValue:10,
                            },
                            temp3:{
                                type:Scratch.ArgumentType.NUMBER,
                                defaultValue:50,
                            },
                        }
                    },
                    {
                        opcode:'block4',
                        blockType:Scratch.BlockType.REPORTER,  
                        text:'通过指数接近算法让[temp]接近[temp2]，接近到[temp3]%',
                        arguments:{
                            temp:{
                                type:Scratch.ArgumentType.NUMBER,
                                defaultValue:0,
                            },
                            temp2:{
                                type:Scratch.ArgumentType.NUMBER,
                                defaultValue:10,
                            },
                            temp3:{
                                type:Scratch.ArgumentType.NUMBER,
                                defaultValue:75,
                            },
                        }
                    },
                    {
                        opcode:'block5',
                        blockType:Scratch.BlockType.REPORTER,  
                        text:'通过幂指函数接近算法让[temp]接近[temp2]，接近到[temp3]%',
                        arguments:{
                            temp:{
                                type:Scratch.ArgumentType.NUMBER,
                                defaultValue:0,
                            },
                            temp2:{
                                type:Scratch.ArgumentType.NUMBER,
                                defaultValue:10,
                            },
                            temp3:{
                                type:Scratch.ArgumentType.NUMBER,
                                defaultValue:90,
                            },
                        }
                    },
                    {
                        opcode:'block6',
                        blockType:Scratch.BlockType.REPORTER,  
                        text:'通过二次函数接近算法让[temp]接近[temp2]，接近到[temp3]%',
                        arguments:{
                            temp:{
                                type:Scratch.ArgumentType.NUMBER,
                                defaultValue:0,
                            },
                            temp2:{
                                type:Scratch.ArgumentType.NUMBER,
                                defaultValue:10,
                            },
                            temp3:{
                                type:Scratch.ArgumentType.NUMBER,
                                defaultValue:50,
                            },
                        }
                    },
                    {
                        opcode:'block7',
                        blockType:Scratch.BlockType.REPORTER,  
                        text:'通过反正弦接近算法让[temp]接近[temp2]，接近到[temp3]%',
                        arguments:{
                            temp:{
                                type:Scratch.ArgumentType.NUMBER,
                                defaultValue:0,
                            },
                            temp2:{
                                type:Scratch.ArgumentType.NUMBER,
                                defaultValue:10,
                            },
                            temp3:{
                                type:Scratch.ArgumentType.NUMBER,
                                defaultValue:50,
                            },
                        }
                    },
                    {
                        opcode:'block8',
                        blockType:Scratch.BlockType.REPORTER,  
                        text:'通过双曲正切接近算法让[temp]接近[temp2]，接近到[temp3]%',
                        arguments:{
                            temp:{
                                type:Scratch.ArgumentType.NUMBER,
                                defaultValue:0,
                            },
                            temp2:{
                                type:Scratch.ArgumentType.NUMBER,
                                defaultValue:10,
                            },
                            temp3:{
                                type:Scratch.ArgumentType.NUMBER,
                                defaultValue:50,
                            },
                        }
                    },
                    {
                        opcode:'label4',
                        blockType:Scratch.BlockType.LABEL,  
                        text:'🔧其他工具',
                    },   
                    
                    {
                        opcode:'other1',
                        blockType:Scratch.BlockType.BOOLEAN,  
                        text:'[temp]的数据存在溢出或合法？',
                        arguments:{
                            temp:{
                                type:Scratch.ArgumentType.NUMBER,
                                defaultValue:111111111111,
                            },
                        }
                    },
                    {
                        opcode:'other2',
                        blockType:Scratch.BlockType.COMMAND,  
                        text:'设置数据溢出的大小为[temp]',
                        arguments:{
                            temp:{
                                type:Scratch.ArgumentType.NUMBER,
                                defaultValue:1e+20,
                            },
                        }
                    },
                    {
                        opcode:'other3',
                        blockType:Scratch.BlockType.REPORTER,  
                        text:'在[temp]~[temp2]之间时返回值[temp3]',
                        arguments:{
                            temp:{
                                type:Scratch.ArgumentType.NUMBER,
                                defaultValue:2000,
                            },
                            temp2:{
                                type:Scratch.ArgumentType.NUMBER,
                                defaultValue:3000,
                            },
                            temp3:{
                                type:Scratch.ArgumentType.NUMBER,
                                defaultValue:4000,
                            },
                        }
                    },
                    {
                        opcode:'label5',
                        blockType:Scratch.BlockType.LABEL,  
                        text:'🔧其他工具',
                    },   
                    {
                        opcode:'caidan1',
                        blockType:Scratch.BlockType.REPORTER,  
                        text:'通过幂幂指函数接近算法让[temp]接近[temp2]，接近到[temp3]%',
                        arguments:{
                            temp:{
                                type:Scratch.ArgumentType.NUMBER,
                                defaultValue:1391,
                            },
                            temp2:{
                                type:Scratch.ArgumentType.NUMBER,
                                defaultValue:2233,
                            },
                            temp3:{
                                type:Scratch.ArgumentType.NUMBER,
                                defaultValue:97.8,
                            },
                        }
                    },

                ],
                menus:{
                    sanjiao:{
                        acceptReporters:false,
                        items:['正弦','余弦']
                    }
                }
            }
        }
        block1(args){
            let t = Number(args.temp);let t2 = Number(args.temp2);let t3 = Number(args.temp3);
            return t + (t2 - t) / t3;
        }    
        block2(args){
            let t = Number(args.temp);let t2 = Number(args.temp2);let t3 = Number(args.temp3);
            
            return (t2 - t) * Math.sin(((Math.PI /2) / 100 * t3)) + t;
        }   

        blockHeyiwei(args){
            let t = Number(args.temp);let t2 = Number(args.temp2);let t3 = Number(args.temp3);
            return (t2 - t) * (t3 / 100) + t;
        }
        block3(args){
            let t = Number(args.temp);let t2 = Number(args.temp2);let t3 = Number(args.temp3);let t4 =10;
            return (t2 - t) * (log(t4,104 / 100 * t3) / log(t4,104)) + t;

        }     
        block4(args){
            let t = Number(args.temp);let t2 = Number(args.temp2);let t3 = Number(args.temp3);
            return (t2 - t) *  (2 ** (8 / 100 * t3) / (2**8)) + t;
        }
        block5(args){
            let t = Number(args.temp);let t2 = Number(args.temp2);let t3 = Number(args.temp3);
            return (t2 - t) *  (((4 / 100 * t3) ** (4 / 100 * t3)) / (4 ** 4)) + t;
        }     
        block6(args){
            let t = Number(args.temp);let t2 = Number(args.temp2);let t3 = Number(args.temp3);
            return  (t2 - t) *  ( (12 / 100 * t3)**2/ 12**2) + t;
        }
        block7(args){
            let t = Number(args.temp);let t2 = Number(args.temp2);let t3 = Number(args.temp3);
            return ((t2 - t) * Math.asin((1 / 100 * t3)) + t) / (Math.PI * 0.5);
        }
        block8(args){
            let t = Number(args.temp);let t2 = Number(args.temp2);let t3 = Number(args.temp3);
            return ((t2 - t) * Math.tanh(20 / 100 * t3)) + t;
        }
        block2_1(args){
            let t = Number(args.temp);let t2 = Number(args.temp2) / rebound_constant;let t3 = Number(args.temp3);
            return (t2 - t) * Math.sin(((Math.PI /2) / t3)) + t;
        }    
        caidan1(args){
            let t = Number(args.temp);let t2 = Number(args.temp2);let t3 = Number(args.temp3);let t4 =10;
            return (t2 - t) *  ((nitian(2.3 / 100 * t3)) / (nitian(2.3))) + t;
        }    
        other1(args){
            if(Number(args.temp) > max_number || Number(args.temp) < (max_number * -1) || Number.isNaN(args.temp)){
                return true;
            }else{
                return false;
            }
        }
        other2(args){
            max_number = args.temp;
        }
        other3(args){
            let t1 = Number(args.temp);let t2 = Number(args.temp2);let t3 = Number(args.temp3);
            if(t3 <= t2 && t3 > t1){
                return t3;
            }else{
                if(t3 > t2){
                    return t2;
                }else{
                    return t1;
                }
            }
            
        }

    }
    Scratch.extensions.register(new approaches())

})(Scratch);