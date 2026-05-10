// Name: Easy Block+
// ID: easyblock
// Description: Make Scratch users more convenient
// By: DL_Grass <https://github.com/DLGrass>
// License: MIT

(function (Scratch) {
    'use strict';

    // 检查是否在非沙箱环境运行
    if (!Scratch.extensions.unsandboxed) {
        throw new Error('This extension must run unsandboxed');
    }

    class EasyBlock {
        constructor(runtime) {
            this.runtime = runtime;
        }

        getInfo() {
            return {
                id: 'easyblock',
                name: this.translate('EasyBlock+', 'extensionName'),
                color1: '#00d1ff',
                color2: '#06b9ff',
                description: this.translate(
                    'Provide convenient blocks for Scratch users',
                    'extensionDescription'
                ),

                blocks: [
                    // ========== 布尔值操作 ==========
                    this.createLabel('Boolean Operation', 'groupName1'),

                    // 判断布尔值
                    {
                        blockType: Scratch.BlockType.BOOLEAN,
                        text: this.translate('[Bool]', 'block_boolCheck'),
                        opcode: 'boolCheck',
                        arguments: {
                            Bool: {
                                type: Scratch.ArgumentType.STRING,
                            }
                        }
                    },

                    // 返回指定布尔值
                    {
                        blockType: Scratch.BlockType.BOOLEAN,
                        text: this.translate('Return[TypeBool]', 'block_boolType'),
                        opcode: 'boolType',
                        arguments: {
                            TypeBool: {
                                type: Scratch.ArgumentType.STRING,
                                menu: 'ConstBool',
                            }
                        }
                    },

                    // 随机布尔值（概率）
                    {
                        blockType: Scratch.BlockType.BOOLEAN,
                        text: this.translate('Probability[num]', 'block_returnRandomBool'),
                        opcode: 'returnRandomBool',
                        arguments: {
                            num: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 0.5,
                            }
                        }
                    },

                    // 条件选择
                    {
                        blockType: Scratch.BlockType.REPORTER,
                        text: this.translate(
                            'If [Bool],then [valueA], else [valueB]',
                            'block_valueIfElse'
                        ),
                        opcode: 'valueIfElse',
                        arguments: {
                            Bool: { type: Scratch.ArgumentType.BOOLEAN },
                            valueA: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'apple',
                            },
                            valueB: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'banana',
                            }
                        }
                    },

                    // 布尔值变化触发
                    {
                        blockType: Scratch.BlockType.HAT,
                        text: this.translate(
                            'When [Bool] come to [TypeBool]',
                            'block_whenBoolCome'
                        ),
                        opcode: 'whenBoolCome',
                        isEdgeActivated: true,
                        arguments: {
                            Bool: { type: Scratch.ArgumentType.BOOLEAN },
                            TypeBool: {
                                type: Scratch.ArgumentType.STRING,
                                menu: 'ConstBool',
                            }
                        }
                    },

                    // ========== 数值操作 & 数学运算 ==========
                    this.createLabel('Number Operation & Math Operation', 'groupName2'),

                    // 上限限制
                    {
                        blockType: Scratch.BlockType.REPORTER,
                        text: this.translate('[Num], highest is [high]', 'block_numHighest'),
                        opcode: 'numHighest',
                        arguments: {
                            Num: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 90,
                            },
                            high: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 60,
                            }
                        }
                    },

                    // 下限限制
                    {
                        blockType: Scratch.BlockType.REPORTER,
                        text: this.translate('[Num], lowest is [low]', 'block_numLowest'),
                        opcode: 'numLowest',
                        arguments: {
                            Num: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 60,
                            },
                            low: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 90,
                            }
                        }
                    },

                    // 保留小数位
                    {
                        blockType: Scratch.BlockType.REPORTER,
                        text: this.translate(
                            '[Num], keep [decimal] decimal places',
                            'block_numDecimal'
                        ),
                        opcode: 'numDecimal',
                        arguments: {
                            Num: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 11.45,
                            },
                            decimal: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 2,
                            }
                        }
                    },

                    // 取最大/最小值
                    {
                        blockType: Scratch.BlockType.REPORTER,
                        text: this.translate(
                            'The [Type] value of [Num1] and [Num2]',
                            'block_numBigSmall'
                        ),
                        opcode: 'numBigSmall',
                        arguments: {
                            Num1: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 100,
                            },
                            Num2: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 200,
                            },
                            Type: {
                                type: Scratch.ArgumentType.STRING,
                                menu: 'ConstTypeBigSmall',
                            }
                        }
                    },

                    // 大于等于比较
                    {
                        blockType: Scratch.BlockType.BOOLEAN,
                        text: this.translate('[Num1]>=[Num2]', 'block_numBigEqual'),
                        opcode: 'numBigEqual',
                        arguments: {
                            Num1: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 100,
                            },
                            Num2: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 200,
                            }
                        }
                    },

                    // 小于等于比较
                    {
                        blockType: Scratch.BlockType.BOOLEAN,
                        text: this.translate('[Num1]<=[Num2]', 'block_numSmallEqual'),
                        opcode: 'numSmallEqual',
                        arguments: {
                            Num1: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 100,
                            },
                            Num2: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 200,
                            }
                        }
                    },

                    // 近似相等
                    {
                        blockType: Scratch.BlockType.BOOLEAN,
                        text: this.translate(
                            '[Num1]=[Num2], error is [Num3]',
                            'block_numNearEqual'
                        ),
                        opcode: 'numNearEqual',
                        arguments: {
                            Num1: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 30,
                            },
                            Num2: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 50,
                            },
                            Num3: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 25,
                            }
                        }
                    },

                    // 幂运算
                    {
                        blockType: Scratch.BlockType.REPORTER,
                        text: this.translate('[Num1] to the power of [Num2]', 'block_numPower'),
                        opcode: 'numPower',
                        arguments: {
                            Num1: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 2,
                            },
                            Num2: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 3,
                            }
                        }
                    },

                    // 开方运算
                    {
                        blockType: Scratch.BlockType.REPORTER,
                        text: this.translate('[Num] of [Sqrt]th root', 'block_numSqrt'),
                        opcode: 'numSqrt',
                        arguments: {
                            Num: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 9,
                            },
                            Sqrt: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 2,
                            }
                        }
                    },

                    // 阶乘
                    {
                        blockType: Scratch.BlockType.REPORTER,
                        text: this.translate('factorial of [Num]', 'block_numFactorial'),
                        opcode: 'numFactorial',
                        arguments: {
                            Num: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 5,
                            }
                        }
                    },

                    // ========== 字符串操作 ==========
                    this.createLabel('String Operation', 'groupName3'),

                    // 默认值处理
                    {
                        blockType: Scratch.BlockType.REPORTER,
                        text: this.translate(
                            '[Str], default value is [defaultValue]',
                            'block_stringDefault'
                        ),
                        opcode: 'stringDefault',
                        arguments: {
                            Str: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: '',
                            },
                            defaultValue: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'apple',
                            }
                        }
                    },

                    // 字符串相等比较
                    {
                        blockType: Scratch.BlockType.BOOLEAN,
                        text: this.translate('[Str1]===[Str2]', 'block_stringEqual'),
                        opcode: 'stringEqual',
                        arguments: {
                            Str1: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'apple',
                            },
                            Str2: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'APPLE',
                            }
                        }
                    },

                    // 字符串大小写转换
                    {
                        blockType: Scratch.BlockType.REPORTER,
                        text: this.translate('Convert[Str] to [Type]', 'block_stringTurn'),
                        opcode: 'stringTurn',
                        arguments: {
                            Str: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'apple',
                            },
                            Type: {
                                type: Scratch.ArgumentType.STRING,
                                menu: 'ConstStrType',
                            }
                        }
                    },

                    // Unicode转字符
                    {
                        blockType: Scratch.BlockType.REPORTER,
                        text: this.translate(
                            '[Unicode] corresponds to Str',
                            'block_unicodeToString'
                        ),
                        opcode: 'unicodeToString',
                        arguments: {
                            Unicode: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 97,
                            },
                        }
                    },

                    // 字符转Unicode
                    {
                        blockType: Scratch.BlockType.REPORTER,
                        text: this.translate(
                            '[Str] corresponds to Unicode',
                            'block_stringToUnicode'
                        ),
                        opcode: 'stringToUnicode',
                        arguments: {
                            Str: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'a',
                            },
                        }
                    },

                    // 字符串截取
                    {
                        blockType: Scratch.BlockType.REPORTER,
                        text: this.translate(
                            '[Str] of [num1] to [num2]',
                            'block_returnStringRange'
                        ),
                        opcode: 'returnStringRange',
                        arguments: {
                            Str: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'apple',
                            },
                            num1: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 1,
                            },
                            num2: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 4,
                            }
                        }
                    },

                    // ========== 其他操作 ==========
                    this.createLabel('Other Operation', 'groupName4'),

                    // 返回数学常数
                    {
                        blockType: Scratch.BlockType.REPORTER,
                        text: this.translate('Return[Value]', 'block_constNum'),
                        opcode: 'constNum',
                        arguments: {
                            Value: {
                                type: Scratch.ArgumentType.STRING,
                                menu: 'ConstNum',
                            }
                        }
                    },

                    // 返回特殊字符串
                    {
                        blockType: Scratch.BlockType.REPORTER,
                        text: this.translate('Return[Value]', 'block_constString'),
                        opcode: 'constString',
                        arguments: {
                            Value: {
                                type: Scratch.ArgumentType.STRING,
                                menu: 'ConstString',
                            }
                        }
                    },

                    // 返回特殊类型值
                    {
                        blockType: Scratch.BlockType.REPORTER,
                        text: this.translate('Return[Value]', 'block_constType'),
                        opcode: 'constType',
                        arguments: {
                            Value: {
                                type: Scratch.ArgumentType.STRING,
                                menu: 'ConstValueType',
                            }
                        }
                    },

                    // 类型转换
                    {
                        blockType: Scratch.BlockType.REPORTER,
                        text: this.translate('Convert[Value] to [Type]', 'block_toValue'),
                        opcode: 'toValue',
                        arguments: {
                            Value: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: '',
                            },
                            Type: {
                                type: Scratch.ArgumentType.STRING,
                                menu: 'ConstType',
                            }
                        }
                    },

                    // 生成随机ID
                    {
                        blockType: Scratch.BlockType.REPORTER,
                        text: this.translate(
                            'Return the new id with [num] digits',
                            'block_returnNewId'
                        ),
                        opcode: 'returnNewId',
                        arguments: {
                            num: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 6,
                            },
                        }
                    },

                    // 复制到剪贴板
                    {
                        blockType: Scratch.BlockType.COMMAND,
                        text: this.translate('Copy[Str] to Clipboard', 'block_copyString'),
                        opcode: 'copyString',
                        arguments: {
                            Str: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: '',
                            },
                        }
                    },

                    // 读取剪贴板
                    {
                        blockType: Scratch.BlockType.REPORTER,
                        text: this.translate('Clipboard Content', 'block_clipboardString'),
                        opcode: 'clipboardString',
                    },
                ],

                menus: this._createMenus()
            };
        }

        createLabel(defaultText, id) {
            return {
                blockType: Scratch.BlockType.LABEL,
                text: this.translate(defaultText, id),
            };
        }

        translate(defaultText, id) {
            return Scratch.translate({
                default: defaultText,
                id: id,
            });
        }

        _createMenus() {
            return {
                // 布尔值常量菜单
                ConstBool: [
                    { text: 'true', value: 'true' },
                    { text: 'false', value: 'false' },
                ],

                // 数学常数菜单
                ConstNum: [
                    { text: 'π', value: 'pi' },
                    { text: 'e', value: 'e' },
                    { text: 'φ', value: 'phi' },
                    { text: 'γ', value: 'gamma' },
                ],

                // 特殊字符串菜单
                ConstString: [
                    { text: 'Enter', value: 'newline' },
                    { text: 'Space', value: 'space' },
                    { text: 'Tab', value: 'tab' },
                ],

                // 数据类型菜单
                ConstType: [
                    { text: this.translate('Number', 'menu_typeNumber'), value: 'Number' },
                    { text: this.translate('String', 'menu_typeString'), value: 'String' },
                ],

                // 最大/最小类型菜单
                ConstTypeBigSmall: [
                    { text: this.translate('Highest', 'menu_typeBig'), value: 'Highest' },
                    { text: this.translate('Lowest', 'menu_typeSmall'), value: 'Lowest' },
                ],

                // 特殊值类型菜单
                ConstValueType: [
                    { text: 'null', value: 'null' },
                    { text: 'undefined', value: 'undefined' },
                    { text: 'NaN', value: 'NaN' },
                    { text: 'Infinity', value: 'Infinity' },
                    { text: '-Infinity', value: '-Infinity' },
                ],

                // 字符串转换类型菜单
                ConstStrType: [
                    {
                        text: this.translate('Uppercase', 'menu_typeStrBig'),
                        value: 'Uppercase',
                    },
                    {
                        text: this.translate('Lowercase', 'menu_typeStrSmall'),
                        value: 'Lowercase',
                    },
                ],
            };
        }

        // ==================== 布尔值操作方法 ====================

        boolCheck(args) {
            const { Bool = '' } = args;
            const boolStr = String(Bool).toLowerCase().trim();
            
            // 检查常见的真值表示
            if (boolStr === 'true' || boolStr === 'yes' || boolStr === 'y') {
                return true;
            }
            
            // 检查数值是否大于0
            const numValue = Scratch.Cast.toNumber(Bool);
            return !isNaN(numValue) && numValue > 0;
        }

        boolType(args) {
            const { TypeBool = '' } = args;
            return TypeBool === 'true';
        }

        returnRandomBool(args) {
            const { num = 0.5 } = args;
            const probability = Scratch.Cast.toNumber(num);
            
            // 边界处理
            if (probability >= 1) return true;
            if (probability <= 0) return false;
            
            return Math.random() < probability;
        }

        valueIfElse(args) {
            const { Bool = false, valueA = '', valueB = '' } = args;
            return Bool ? valueA : valueB;
        }

        whenBoolCome(args) {
            const { Bool = false, TypeBool = '' } = args;
            const targetState = TypeBool === 'true';
            const currentState = Scratch.Cast.toBoolean(Bool);
            
            return currentState === targetState;
        }

        // ==================== 数值操作方法 ====================

        numHighest(args) {
            const { Num = 0, high = 0 } = args;
            return Math.min(Scratch.Cast.toNumber(Num), Scratch.Cast.toNumber(high));
        }

        numLowest(args) {
            const { Num = 0, low = 0 } = args;
            return Math.max(Scratch.Cast.toNumber(Num), Scratch.Cast.toNumber(low));
        }

        numDecimal(args) {
            const { Num = 0, decimal = 0 } = args;
            const numValue = Scratch.Cast.toNumber(Num);
            const decimalPlaces = Math.max(0, Scratch.Cast.toNumber(decimal));
            
            return Number(numValue.toFixed(decimalPlaces));
        }

        numBigSmall(args) {
            const { Num1 = 0, Num2 = 0, Type = '' } = args;
            const num1 = Scratch.Cast.toNumber(Num1);
            const num2 = Scratch.Cast.toNumber(Num2);
            
            if (Type === 'Highest') {
                return Math.max(num1, num2);
            } else if (Type === 'Lowest') {
                return Math.min(num1, num2);
            }
            
            return 0;
        }

        numBigEqual(args) {
            const { Num1 = 0, Num2 = 0 } = args;
            return Scratch.Cast.toNumber(Num1) >= Scratch.Cast.toNumber(Num2);
        }

        numSmallEqual(args) {
            const { Num1 = 0, Num2 = 0 } = args;
            return Scratch.Cast.toNumber(Num1) <= Scratch.Cast.toNumber(Num2);
        }

        numNearEqual(args) {
            const { Num1 = 0, Num2 = 0, Num3 = 0 } = args;
            const diff = Math.abs(Scratch.Cast.toNumber(Num1) - Scratch.Cast.toNumber(Num2));
            return diff <= Scratch.Cast.toNumber(Num3);
        }

        numPower(args) {
            const { Num1 = 0, Num2 = 0 } = args;
            return Math.pow(Scratch.Cast.toNumber(Num1), Scratch.Cast.toNumber(Num2));
        }

        numSqrt(args) {
            const { Num = 0, Sqrt = 2 } = args;
            const numValue = Scratch.Cast.toNumber(Num);
            const sqrtValue = Scratch.Cast.toNumber(Sqrt);
            
            if (sqrtValue === 0) return NaN;
            return Math.pow(numValue, 1 / sqrtValue);
        }

        numFactorial(args) {
            const { Num = 0 } = args;
            const numValue = Math.floor(Scratch.Cast.toNumber(Num));
            
            // 边界处理
            if (numValue < 0) return 0;
            if (numValue === 0 || numValue === 1) return 1;
            
            // 计算阶乘
            let result = 1;
            for (let i = 2; i <= numValue; i++) {
                result *= i;
            }
            
            return result;
        }

        // ==================== 字符串操作方法 ====================

        stringDefault(args) {
            const { Str = '', defaultValue = '' } = args;
            
            // 检查是否为空
            if (!Str || Str === '' || Str === null || Str === undefined) {
                return defaultValue;
            }
            
            return Str;
        }

        stringEqual(args) {
            const { Str1 = '', Str2 = '' } = args;
            return Str1 === Str2;
        }


        stringTurn(args) {
            const { Str = '', Type = '' } = args;
            
            if (Type === 'Uppercase') {
                return Str.toUpperCase();
            } else if (Type === 'Lowercase') {
                return Str.toLowerCase();
            }
            
            return Str;
        }

        /**
         * Unicode码转字符
         * @param {object} args - 参数对象
         * @param {number} args.Unicode - Unicode码
         * @returns {string} 对应的字符
         */
        unicodeToString(args) {
            const { Unicode = 0 } = args;
            return String.fromCharCode(Scratch.Cast.toNumber(Unicode));
        }

        stringToUnicode(args) {
            const { Str = '' } = args;
            
            // 检查输入有效性
            if (!Str || Str.length !== 1) {
                return 0;
            }
            
            return Str.charCodeAt(0);
        }

        returnStringRange(args) {
            const { Str = '', num1 = 0, num2 = 0 } = args;
            const start = Math.max(0, Scratch.Cast.toNumber(num1));
            const end = Scratch.Cast.toNumber(num2);
            
            // 边界检查
            if (start >= Str.length || end <= 0 || start >= end) {
                return '';
            }
            
            return Str.substring(start, end);
        }

        // ==================== 其他操作方法 ====================

        constNum(args) {
            const { Value = '' } = args;
            
            switch (Value) {
                case 'pi':
                    return Math.PI;
                case 'e':
                    return Math.E;
                case 'phi':
                    return (1 + Math.sqrt(5)) / 2; // 黄金比例
                case 'gamma':
                    return 0.5772156649015329; // 欧拉-马歇罗尼常数
                default:
                    return 0;
            }
        }

        constString(args) {
            const { Value = '' } = args;
            
            switch (Value) {
                case 'newline':
                    return '\n';
                case 'space':
                    return ' ';
                case 'tab':
                    return '\t';
                default:
                    return '';
            }
        }

        constType(args) {
            const { Value = '' } = args;
            
            switch (Value) {
                case 'null':
                    return null;
                case 'undefined':
                    return undefined;
                case 'NaN':
                    return NaN;
                case 'Infinity':
                    return Infinity;
                case '-Infinity':
                    return -Infinity;
                default:
                    return Value;
            }
        }

        toValue(args) {
            const { Value = '', Type = '' } = args;
            
            if (Type === 'Number') {
                return Scratch.Cast.toNumber(Value);
            } else if (Type === 'String') {
                return Scratch.Cast.toString(Value);
            }
            
            return Value;
        }

        returnNewId(args) {
            const { num = 6 } = args;
            const length = Math.max(1, Math.floor(Scratch.Cast.toNumber(num)));
            
            const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let result = '';
            
            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * chars.length);
                result += chars[randomIndex];
            }
            
            return result;
        }

        copyString(args) {
            const { Str = '' } = args;
            
            // 检查输入有效性
            if (!Str || Str === '' || Str === null || Str === undefined) {
                return;
            }
            
            // 检查浏览器支持
            if (typeof navigator === 'undefined' || !navigator.clipboard) {
                return;
            }
            
            // 尝试复制
            try {
                navigator.clipboard.writeText(Str);
            } catch (error) {
                // 复制失败时不抛出异常
            }
        }

        clipboardString() {
            // 检查浏览器支持
            if (typeof navigator === 'undefined' || !navigator.clipboard) {
                return '';
            }
            
            try {
                return Scratch.Cast.toString(navigator.clipboard.readText());
            } catch (error) {
                return '';
            }
        }
    }

    // 注册扩展
    Scratch.extensions.register(new EasyBlock());

})(Scratch);
