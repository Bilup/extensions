// Name: Easy Block+
// ID: easyblock
// Description: Provide convenient blocks for Scratch users
// By: DL_Grass <https://github.com/DLGrass>
// License: MIT

(function (_Scratch) {
    'use strict';

    const { ArgumentType, BlockType, TargetType, Cast, translate, extensions, } = _Scratch;

    class EasyBlock {
        constructor(_runtime) {
            this._runtime = _runtime;
        }

        getInfo() {
            return {
                id: 'easyblock',
                name: Scratch.translate({ default: "EasyBlock+", id: "extensionName" }),

                color1: '#00d1ff',
                color2: '#06b9ff',

                description: Scratch.translate({ default: "Provide convenient blocks for Scratch users", id: "extensionDescription" }),

                blocks: [
                    // Boolean Operation
                    {
                        blockType: 'label',
                        text: Scratch.translate({ default: "Boolean Operation", id: "groupName1" }),
                    },
                    {
                        blockType: BlockType.BOOLEAN,
                        text: Scratch.translate({ default: "[Bool]", id: "block_boolCheck" }),
                        opcode: 'boolCheck',
                        arguments: {
                            Bool: {
                                type: ArgumentType.STRING,
                            }
                        }
                    },
                    {
                        blockType: BlockType.BOOLEAN,
                        text: Scratch.translate({ default: "Return[TypeBool]", id: "block_boolType" }),
                        opcode: 'boolType',
                        arguments: {
                            TypeBool: {
                                type: ArgumentType.STRING,
                                menu: 'ConstBool',
                            }
                        }
                    },
                    {
                        blockType: BlockType.BOOLEAN,
                        text: Scratch.translate({ default: "Probability[num]", id: "block_returnRandomBool" }),
                        opcode: 'returnRandomBool',
                        arguments: {
                            num: {
                                type: ArgumentType.NUMBER,
                                defaultValue: 0.5,
                            }
                        }
                    },
                    {
                        blockType: BlockType.REPORTER,
                        text: Scratch.translate({ default: "If [Bool],then [valueA], else [valueB]", id: "block_valueIfElse" }),
                        opcode: 'valueIfElse',
                        arguments: {
                            Bool: {
                                type: ArgumentType.BOOLEAN,
                            },
                            valueA: {
                                type: ArgumentType.STRING,
                                defaultValue: 'apple',
                            },
                            valueB: {
                                type: ArgumentType.STRING,
                                defaultValue: 'banana',
                            }
                        }
                    },
                    {
                        blockType: BlockType.HAT,
                        text: Scratch.translate({ default: "When [Bool] come to [TypeBool]", id: "block_whenBoolCome" }),
                        opcode: 'whenBoolCome',
                        arguments: {
                            Bool: {
                                type: ArgumentType.BOOLEAN,
                            },
                            TypeBool: {
                                type: ArgumentType.STRING,
                                menu: 'ConstBool',
                            }
                        }
                    },
                    // Number Operation & Math Operation
                    {
                        blockType: 'label',
                        text: Scratch.translate({ default: "Number Operation & Math Operation", id: "groupName2" }),
                    },
                    {
                        blockType: BlockType.REPORTER,
                        text: Scratch.translate({ default: "[Num], highest is [high]", id: "block_numHighest" }),
                        opcode: 'numHighest',
                        arguments: {
                            Num: {
                                type: ArgumentType.NUMBER,
                                defaultValue: 90,
                            },
                            high: {
                                type: ArgumentType.NUMBER,
                                defaultValue: 60,
                            }
                        }
                    },
                    {
                        blockType: BlockType.REPORTER,
                        text: Scratch.translate({ default: "[Num], lowest is [low]", id: "block_numLowest" }),
                        opcode: 'numLowest',
                        arguments: {
                            Num: {
                                type: ArgumentType.NUMBER,
                                defaultValue: 60,
                            },
                            low: {
                                type: ArgumentType.NUMBER,
                                defaultValue: 90,
                            }
                        }
                    },
                    {
                        blockType: BlockType.REPORTER,
                        text: Scratch.translate({ default: "[Num], keep [decimal] decimal places", id: "block_numDecimal" }),
                        opcode: 'numDecimal',
                        arguments: {
                            Num: {
                                type: ArgumentType.NUMBER,
                                defaultValue: 11.45,
                            },
                            decimal: {
                                type: ArgumentType.NUMBER,
                                defaultValue: 2,
                            }
                        }
                    },
                    {
                        blockType: BlockType.REPORTER,
                        text: Scratch.translate({ default: "The [Type] value of [Num1] and [Num2]", id: "block_numBigSmall" }),
                        opcode: 'numBigSmall',
                        arguments: {
                            Num1: {
                                type: ArgumentType.NUMBER,
                                defaultValue: 100,
                            },
                            Num2: {
                                type: ArgumentType.NUMBER,
                                defaultValue: 200,
                            },
                            Type: {
                                type: ArgumentType.STRING,
                                menu: 'ConstTypeBigSmall',
                            }
                        }
                    },
                    {
                        blockType: BlockType.BOOLEAN,
                        text: Scratch.translate({ default: "[Num1]>=[Num2]", id: "block_numBigEqual" }),
                        opcode: 'numBigEqual',
                        arguments: {
                            Num1: {
                                type: ArgumentType.NUMBER,
                                defaultValue: 100,
                            },
                            Num2: {
                                type: ArgumentType.NUMBER,
                                defaultValue: 200,
                            }
                        }
                    },
                    {
                        blockType: BlockType.BOOLEAN,
                        text: Scratch.translate({ default: "[Num1]<=[Num2],", id: "block_numSmallEqual" }),
                        opcode: 'numSmallEqual',
                        arguments: {
                            Num1: {
                                type: ArgumentType.NUMBER,
                                defaultValue: 100,
                            },
                            Num2: {
                                type: ArgumentType.NUMBER,
                                defaultValue: 200,
                            }
                        }
                    },
                    {
                        blockType: BlockType.BOOLEAN,
                        text: Scratch.translate({ default: "[Num1]=[Num2], error is [Num3]", id: "block_numNearEqual" }),
                        opcode: 'numNearEqual',
                        arguments: {
                            Num1: {
                                type: ArgumentType.NUMBER,
                                defaultValue: 30,
                            },
                            Num2: {
                                type: ArgumentType.NUMBER,
                                defaultValue: 50,
                            },
                            Num3: {
                                type: ArgumentType.NUMBER,
                                defaultValue: 25,
                            }
                        }
                    },
                    {
                        blockType: BlockType.REPORTER,
                        text: Scratch.translate({ default: "[Num1] to the power of [Num2]", id: "block_numPower" }),
                        opcode: 'numPower',
                        arguments: {
                            Num1: {
                                type: ArgumentType.NUMBER,
                                defaultValue: 2,
                            },
                            Num2: {
                                type: ArgumentType.NUMBER,
                                defaultValue: 3,
                            }
                        }
                    },
                    {
                        blockType: BlockType.REPORTER,
                        text: Scratch.translate({ default: "[Num]of [Sqrt]th root", id: "block_numSqrt" }),
                        opcode: 'numSqrt',
                        arguments: {
                            Num: {
                                type: ArgumentType.NUMBER,
                                defaultValue: 9,
                            },
                            Sqrt: {
                                type: ArgumentType.NUMBER,
                                defaultValue: 2,
                            }
                        }
                    },
                    // String Operation
                    {
                        blockType: 'label',
                        text: Scratch.translate({ default: "String Operation", id: "groupName3" }),
                    },
                    {
                        blockType: BlockType.REPORTER,
                        text: Scratch.translate({ default: "[Str], default value is [defaultValue]", id: "block_stringDefault" }),
                        opcode: 'stringDefault',
                        arguments: {
                            Str: {
                                type: ArgumentType.STRING,
                                defaultValue: '',
                            },
                            defaultValue: {
                                type: ArgumentType.STRING,
                                defaultValue: 'apple',
                            }
                        }
                    },
                    {
                        blockType: BlockType.BOOLEAN,
                        text: Scratch.translate({ default: "[Str1]===[Str2]", id: "block_stringEqual" }),
                        opcode: 'stringEqual',
                        arguments: {
                            Str1: {
                                type: ArgumentType.STRING,
                                defaultValue: 'apple',
                            },
                            Str2: {
                                type: ArgumentType.STRING,
                                defaultValue: 'APPLE',
                            }
                        }
                    },
                    {
                        blockType: BlockType.REPORTER,
                        text: Scratch.translate({ default: "Convert[Str] to [Type]", id: "block_stringTurn" }),
                        opcode: 'stringTurn',
                        arguments: {
                            Str: {
                                type: ArgumentType.STRING,
                                defaultValue: 'apple',
                            },
                            Type: {
                                type: ArgumentType.STRING,
                                menu: 'ConstStrType',
                            }
                        }
                    },
                    {
                        blockType: BlockType.REPORTER,
                        text: Scratch.translate({ default: "[Unicode] corresponds to Str", id: "block_unicodeToString" }),
                        opcode: 'unicodeToString',
                        arguments: {
                            Unicode: {
                                type: ArgumentType.NUMBER,
                                defaultValue: 97,
                            },
                        }
                    },
                    {
                        blockType: BlockType.REPORTER,
                        text: Scratch.translate({ default: "[Str] corresponds to Unicode", id: "block_stringToUnicode" }),
                        opcode: 'stringToUnicode',
                        arguments: {
                            Str: {
                                type: ArgumentType.STRING,
                                defaultValue: 'a',
                            },
                        }
                    },
                    {
                        blockType: BlockType.REPORTER,
                        text: Scratch.translate({ default: "[Str] of [num1] to [num2]", id: "block_returnStringRange" }),
                        opcode: 'returnStringRange',
                        arguments: {
                            Str: {
                                type: ArgumentType.STRING,
                                defaultValue: 'apple',
                            },
                            num1: {
                                type: ArgumentType.NUMBER,
                                defaultValue: 1,
                            },
                            num2: {
                                type: ArgumentType.NUMBER,
                                defaultValue: 4,
                            }
                        }
                    },
                    // Other Operation
                    {
                        blockType: 'label',
                        text: Scratch.translate({ default: "Other Operation", id: "groupName4" }),
                    },
                    

                    {
                        blockType: BlockType.REPORTER,
                        text: Scratch.translate({ default: "Return[Value]", id: "block_constNum" }),
                        opcode: 'constNum',
                        arguments: {
                            Value: {
                                type: ArgumentType.STRING,
                                menu: 'ConstNum',
                            }
                        }
                    },
                    {
                        blockType: BlockType.REPORTER,
                        text: Scratch.translate({ default: "Return[Value]", id: "block_constString" }),
                        opcode: 'constString',
                        arguments: {
                            Value: {
                                type: ArgumentType.STRING,
                                menu: 'ConstString',
                            }
                        }
                    },
                    {
                        blockType: BlockType.REPORTER,
                        text: Scratch.translate({ default: "Return[Value]", id: "block_constType" }),
                        opcode: 'constType',
                        arguments: {
                            Value: {
                                type: ArgumentType.STRING,
                                menu: 'ConstValueType',
                            }
                        }
                    },
                    {
                        blockType: BlockType.REPORTER,
                        text: Scratch.translate({ default: "Convert[Value] to [Type]", id: "block_toValue" }),
                        opcode: 'toValue',
                        arguments: {
                            Value: {
                                type: ArgumentType.STRING,
                                defaultValue: '',
                            },
                            Type: {
                                type: ArgumentType.STRING,
                                menu: 'ConstType',
                            }
                        }
                    },

                    {
                        blockType: BlockType.REPORTER,
                        text: Scratch.translate({ default: "Return the new id with [num] digits", id: "block_returnNewId" }),
                        opcode: 'returnNewId',
                        arguments: {
                            num: {
                                type: ArgumentType.NUMBER,
                                defaultValue: 6,
                            },
                        }
                    },
                    {
                        blockType: BlockType.COMMAND,
                        text: Scratch.translate({ default: "Copy[Str] to Clipboard", id: "block_copyString" }),
                        opcode: 'copyString',
                        arguments: {
                            Str: {
                                type: ArgumentType.STRING,
                                defaultValue: '',
                            },
                        }
                    },
                    {
                        blockType: BlockType.REPORTER,
                        text: Scratch.translate({ default: "Clipboard Content", id: "block_clipboardString" }),
                        opcode: 'clipboardString',
                    },
                ],

                menus: {
                    ConstBool: [
                        { text: 'true', value: 'true' },
                        { text: 'false', value: 'false' },
                    ],
                    ConstNum: [
                        { text: 'π', value: 'pi' },
                        { text: 'e', value: 'e' },
                        { text: 'φ', value: 'phi' },
                        { text: 'γ', value: 'gamma' },
                    ],
                    ConstString: [
                        { text: 'Enter', value: 'newline' },
                        { text: 'Space', value: 'space' },
                        { text: 'Tab', value: 'tab' },
                    ],
                    ConstType: [
                        { text: Scratch.translate({ default: "Number", id: "menu_typeNumber" }), value: 'Number' },
                        { text: Scratch.translate({ default: "String", id: "menu_typeString" }), value: 'String' },
                    ],
                    ConstTypeBigSmall: [
                        { text: Scratch.translate({ default: "Highest", id: "menu_typeBig" }), value: 'Highest' },
                        { text: Scratch.translate({ default: "Lowest", id: "menu_typeSmall" }), value: 'Lowest' },
                    ],
                    ConstValueType: [
                        { text: 'null', value: 'null' },
                        { text: 'undefined', value: 'undefined' },
                        { text: 'NaN', value: 'NaN' },
                        { text: 'Infinity', value: 'Infinity' },
                        { text: '-Infinity', value: '-Infinity' },
                    ],
                    ConstStrType: [
                        { text: Scratch.translate({ default: "Uppercase", id: "menu_typeStrBig" }), value: 'Uppercase' },
                        { text: Scratch.translate({ default: "Lowercase", id: "menu_typeStrSmall" }), value: 'Lowercase' },
                    ],
                }

            };
        }

        boolCheck(args) {
            const { Bool = '' } = args;
            return Bool == 'true' || Cast.toNumber(Bool) > 0 || Bool == 'yes' || Bool == 'y';
        }

        boolType(args) {
            const { TypeBool = '' } = args;
            return TypeBool == 'true';
        }

        numHighest(args) {
            let { Num = 0, high = 0 } = args;
            Num = Cast.toNumber(Num);
            high = Cast.toNumber(high);
            if (Num > high) {
                return high;
            }
            return Num;
        }

        numLowest(args) {
            let { Num = 0, low = 0 } = args;
            Num = Cast.toNumber(Num);
            low = Cast.toNumber(low);
            if (Num < low) {
                return low;
            }
            return Num;
        }

        numDecimal(args) {
            let { Num = 0, decimal = 0 } = args;
            Num = Cast.toNumber(Num);
            decimal = Cast.toNumber(decimal);
            return Number(Num.toFixed(decimal));
        }

        constNum(args) {
            const { Value = '' } = args;
            if (Value === 'pi') return Math.PI;
            if (Value === 'e') return Math.E;
            if (Value === 'phi') return (1 + Math.sqrt(5)) / 2;
            if (Value === 'gamma') return 0.5772156649015329;
            return 0;
        }

        constString(args) {
            const { Value = '' } = args;
            if (Value === 'newline') return '\n';
            if (Value === 'space') return ' ';
            if (Value === 'tab') return '\t';
            return '';
        }

        constType(args) {
            const { Value = '' } = args;
            if (Value === 'null') return null;
            if (Value === 'undefined') return undefined;
            if (Value === 'NaN') return NaN;
            if (Value === 'Infinity') return Infinity;
            if (Value === '-Infinity') return -Infinity;
            return Value;
        }

        toValue(args) {
            const { Value = '', Type = '' } = args;
            if (Type == 'Number') {
                return Cast.toNumber(Value);
            }
            if (Type == 'String') {
                return Cast.toString(Value);
            }
            return Value;
        }

        valueIfElse(args) {
            const { Bool = false, valueA = '', valueB = '' } = args;
            if (Bool) {
                return valueA;
            }
            return valueB;
        }

        numBigSmall(args) {
            let { Num1 = 0, Num2 = 0, Type = '' } = args;
            Num1 = Cast.toNumber(Num1);
            Num2 = Cast.toNumber(Num2);
            if (Type === 'Highest') {
                return Math.max(Num1, Num2);
            }
            if (Type === 'Lowest') {
                return Math.min(Num1, Num2);
            }
            return 0;
        }

        stringDefault(args) {
            const { Str = '', defaultValue = '' } = args;
            if (Str == '' || Str == null || Str == undefined) {
                return defaultValue;
            }
            return Str;
        }

        numBigEqual(args) {
            let { Num1 = 0, Num2 = 0 } = args;
            Num1 = Cast.toNumber(Num1);
            Num2 = Cast.toNumber(Num2);
            return Num1 >= Num2;
        }

        numSmallEqual(args) {
            let { Num1 = 0, Num2 = 0 } = args;
            Num1 = Cast.toNumber(Num1);
            Num2 = Cast.toNumber(Num2);
            return Num1 <= Num2;
        }

        numNearEqual(args) {
            let { Num1 = 0, Num2 = 0, Num3 = 0 } = args;
            Num1 = Cast.toNumber(Num1);
            Num2 = Cast.toNumber(Num2);
            Num3 = Cast.toNumber(Num3);
            return Math.abs(Num1 - Num2) <= Num3;
        }

        numPower(args) {
            let { Num1 = 0, Num2 = 0 } = args;
            Num1 = Cast.toNumber(Num1);
            Num2 = Cast.toNumber(Num2);
            return Math.pow(Num1, Num2);
        }

        numSqrt(args) {
            let { Num = 0, Sqrt = 0 } = args;
            Num = Cast.toNumber(Num);
            Sqrt = Cast.toNumber(Sqrt);
            return Math.pow(Num, 1 / Sqrt);
        }

        stringTurn(args) {
            const { Str = '', Type = '' } = args;
            if (Type === 'Uppercase') {
                return Str.toUpperCase();
            }
            if (Type === 'Lowercase') {
                return Str.toLowerCase();
            }
            return Str;
        }

        stringEqual(args) {
            const { Str1 = '', Str2 = '' } = args;
            return Str1 === Str2;
        }

        unicodeToString(args) {
            const { Unicode = 0 } = args;
            return String.fromCharCode(Unicode);
        }

        stringToUnicode(args) {
            const { Str = '' } = args;
            if (Str == '' || Str == null || Str == undefined) {
                return 0;
            } else if (Str.length > 1) {
                return 0;
            }
            return Str.charCodeAt(0);

        }

        returnNewId(args) {
            const { num = 6 } = args;
            let result = '';
            const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            for (let i = 0; i < num; i++) {
                result += chars[Math.floor(Math.random() * chars.length)];
            }
            return result;
        }

        copyString(args) {
            const { Str = '' } = args;
            if (Str == '' || Str == null || Str == undefined) {
                return;
            }
            if (typeof navigator !== 'undefined' && navigator.clipboard && navigator.clipboard.writeText) {
                try {
                    navigator.clipboard.writeText(Str);
                } catch (e) {
                    // if failed, do nothing.
                }
            }
        }

        clipboardString() {
            if (typeof navigator !== 'undefined' && navigator.clipboard && navigator.clipboard.readText) {
                try {
                    return navigator.clipboard.readText();
                } catch (e) {
                    return '';
                }
            }
            return '';
        }

        returnRandomBool(args) {
            const { num = 0.5 } = args;
            if (num < 0) return false;
            if (num > 1) return true;
            return Math.random() < num;
        }

        returnStringRange(args) {
            const { Str = '', num1 = 0, num2 = 0 } = args;
            if (num1 < 0 || num1 >= Str.length) {
                return '';
            }
            if (num2 < 0 || num2 >= Str.length) {
                return '';
            }
            return Str.substring(num1, num2);
            //Tips: The first character is the 0th character.
        }

        whenBoolCome(args) {
            const { Bool = false, TypeBool = '' } = args;
            if (Bool && TypeBool === 'True') {
                Scratch.vm.runtime.startHats('easyblock_whenBoolCome');
            }else if(!Bool && TypeBool === 'False'){
                Scratch.vm.runtime.startHats('easyblock_whenBoolCome');
            }

        }
    }

    extensions.register(new EasyBlock());
}(Scratch));
