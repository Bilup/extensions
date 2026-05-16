// Name: String Tools
// ID: stringtools
// Description: Make handling strings more convenient
// By: DL_Grass <https://github.com/DLGrass>
// License: MIT

(function (Scratch) {
    // String Tools
    var startPosition = 0;

    class StringTools {

        constructor(runtime) {
            this.runtime = runtime;
        }

        getInfo() {
            return {
                id: 'stringtools',
                name: Scratch.translate({ default: 'String Tools', id: 'extensionName' }),
                description: Scratch.translate({ default: 'Make handling strings more convenient', id: 'extensionDescription' }),
                color1: '#6200ff',
                color2: '#360f9e',
                color3: '#300661',

                blocks: [
                    {blockType: Scratch.BlockType.LABEL, text: Scratch.translate({ default: 'Tools', id: 'group.tools' })},
                    {
                        blockType: Scratch.BlockType.BOOLEAN,
                        opcode: 'isEqual',
                        text: '[Str1] === [Str2]',
                        arguments: {
                            Str1: {
                                type: Scratch.ArgumentType.STRING,
                            },
                            Str2: {
                                type: Scratch.ArgumentType.STRING,
                            }
                        },
                    },
                    {
                        blockType: Scratch.BlockType.BOOLEAN,
                        opcode: 'isInclude',
                        text: Scratch.translate({ default: '[Str1] contains [Str2]?', id: 'block.isInclude' }),
                        arguments: {
                            Str1: {
                                type: Scratch.ArgumentType.STRING,
                            },
                            Str2: {
                                type: Scratch.ArgumentType.STRING,
                            }
                        },
                    },
                    {
                        blockType: Scratch.BlockType.REPORTER,
                        opcode: 'reverse',
                        text: Scratch.translate({ default: 'Reverse [Str]', id: 'block.reverse' }),
                        arguments: {
                            Str: {
                                type: Scratch.ArgumentType.STRING,
                            }
                        },
                    },
                    {
                        blockType: Scratch.BlockType.BOOLEAN,
                        opcode: 'isSymmetry',
                        text: Scratch.translate({ default: '[Str] is symmetric?', id: 'block.isSymmetry' }),
                        arguments: {
                            Str: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'strts'
                            }
                        },
                    },
                    {
                        blockType: Scratch.BlockType.REPORTER,
                        opcode: 'toCase',
                        text: Scratch.translate({ default: 'Convert [Str] to [Type]', id: 'block.toCase' }),
                        arguments: {
                            Str: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'apple'
                            },
                            Type: {
                                type: Scratch.ArgumentType.STRING,
                                menu: 'constCase'
                            }
                        },
                    },
                    {
                        blockType: Scratch.BlockType.BOOLEAN,
                        opcode: 'isCase',
                        text: Scratch.translate({ default: '[Str] is [Type]?', id: 'block.isCase' }),
                        arguments: {
                            Str: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'apple'
                            },
                            Type: {
                                type: Scratch.ArgumentType.STRING,
                                menu: 'constCase'
                            }
                        },
                    },
                    {
                        blockType: Scratch.BlockType.REPORTER,
                        opcode: 'deleteSpace',
                        text: Scratch.translate({ default: 'Delete all spaces in [Str]', id: 'block.deleteSpace' }),
                        arguments: {
                            Str: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'a p p l e'
                            }
                        },
                    },
                    {
                        blockType: Scratch.BlockType.REPORTER,
                        opcode: 'deleteSpace2',
                        text: Scratch.translate({ default: 'Delete spaces at the beginning and end of [Str]', id: 'block.deleteSpace2' }),
                        arguments: {
                            Str: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: '   apple   '
                            }
                        },
                    },
                    {
                        blockType: Scratch.BlockType.REPORTER,
                        opcode: 'deleteChar',
                        text: Scratch.translate({ default: 'Delete [Char] in [Str]', id: 'block.deleteChar' }),
                        arguments: {
                            Str: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'apple'
                            },
                            Char: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'p'
                            }
                        },
                    },
                    {
                        blockType: Scratch.BlockType.REPORTER,
                        opcode: 'deleteCharRange',
                        text: Scratch.translate({ default: 'Delete characters [num1] to [num2] in [Str]', id: 'block.deleteCharRange' }),
                        arguments: {
                            Str: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'apple'
                            },
                            num1: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 1
                            },
                            num2: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 3
                            }
                        },
                    },
                    {
                        blockType: Scratch.BlockType.REPORTER,
                        opcode: 'deleteCharRange2',
                        text: Scratch.translate({ default: 'Delete character [num] in [Str]', id: 'block.deleteCharRange2' }),
                        arguments: {
                            Str: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'apple'
                            },
                            num: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 2
                            }
                        },
                    },
                    {
                        blockType: Scratch.BlockType.REPORTER,
                        opcode: 'replaceChar',
                        text: Scratch.translate({ default: 'Replace [Char] in [Str] with [Char2]', id: 'block.replaceChar' }),
                        arguments: {
                            Str: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'apple'
                            },
                            Char: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'p'
                            },
                            Char2: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'P'
                            }
                        },
                    },
                    {
                        blockType: Scratch.BlockType.REPORTER,
                        opcode: 'returnStringRange',
                        text: Scratch.translate({ default: 'Return characters [num1] to [num2] in [Str]', id: 'block.returnStringRange' }),
                        arguments: {
                            Str: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'apple'
                            },
                            num1: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 1
                            },
                            num2: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 3
                            }
                        },
                    },

                    {blockType: Scratch.BlockType.LABEL, text: Scratch.translate({ default: 'Setting', id: 'group.setting' })},
                    {
                        blockType: Scratch.BlockType.COMMAND,
                        opcode: 'setStringStart',
                        text: Scratch.translate({ default: 'Set first character of String to [num]', id: 'block.setStringStart' }),
                        arguments: {
                            num: {
                                type: Scratch.ArgumentType.NUMBER,
                                menu: 'stringStartPosition'
                            }
                        },
                    },
                    {
                        blockType: Scratch.BlockType.REPORTER,
                        opcode: 'getStringStart',
                        text: Scratch.translate({ default: 'Return first character of String', id: 'block.getStringStart' }),
                    },
                ],

                menus: {
                    constCase: [
                        { text: Scratch.translate({ default: 'UpperCase', id: 'menu.upperCase' }), value: 'upperCase' },
                        { text: Scratch.translate({ default: 'LowerCase', id: 'menu.lowerCase' }), value: 'lowerCase' },
                    ],
                    stringStartPosition: [
                        { text: '0', value: 0 },
                        { text: '1', value: 1 },
                        
                    ]
                },

            };
        }

        setStringStart(args) {
            let { num } = args;
            startPosition = num;
        }

        getStringStart() {
            return startPosition;
        }

        isEqual(args) {
            let { Str1, Str2 } = args;
            Str1 = Str1.toString();
            Str2 = Str2.toString();
            return Str1 === Str2;
        }

        isInclude(args) {
            let { Str1, Str2 } = args;
            Str1 = Str1.toString();
            Str2 = Str2.toString();
            if (Str2.length === 0) {
                return false;
            }
            return Str1.includes(Str2);
        }

        reverse(args) {
            let { Str } = args;
            Str = Str.toString();
            return Str.split('').reverse().join('');
        }

        isSymmetry(args) {
            let { Str } = args;
            Str = Str.toString();
            return Str === this.reverse({ Str });
        }

        toCase(args) {
            let { Str, Type } = args;
            Str = Str.toString();
            if (Type === 'upperCase') return Str.toUpperCase();
            if (Type === 'lowerCase') return Str.toLowerCase();
            return Str;
        }

        isCase(args) {
            let { Str, Type } = args;
            Str = Str.toString();
            if (Type === 'upperCase') return Str === Str.toUpperCase();
            if (Type === 'lowerCase') return Str === Str.toLowerCase();
            return false;
        }

        deleteSpace(args) {
            let { Str } = args;
            Str = Str.toString();
            return Str.replace(/\s+/g, '');
        }

        deleteSpace2(args) {
            let { Str } = args;
            Str = Str.toString();
            return Str.trim();
        }
        
        deleteChar(args) {
            let { Str, Char } = args;
            Str = Str.toString();
            return Str.replace(new RegExp(Char, 'g'), '');
        }
        
        deleteCharRange(args) {
            let { Str, num1, num2 } = args;
            Str = Str.toString();
            return Str.slice(0, num1 - startPosition) + Str.slice(num2 + 1);
        }
        
        deleteCharRange2(args) {
            let { Str, num } = args;
            Str = Str.toString();
            return Str.slice(0, num - startPosition) + Str.slice(num - startPosition + 1);
        }
        
        replaceChar(args) {
            let { Str, Char, Char2 } = args;
            Str = Str.toString();
            return Str.replace(new RegExp(Char, 'g'), Char2);
        }
        
        returnStringRange(args) {
            let { Str, num1, num2 } = args;
            Str = Str.toString();
            return Str.slice(num1 - startPosition, num2 + 1 - startPosition);
        }


    }

    Scratch.extensions.register(new StringTools());
})(Scratch)
