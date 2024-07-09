import { CompilerConfig } from '@ton/blueprint';

export const compile: CompilerConfig = {
    lang: 'tact',
    target: 'contracts/bettle_contract.tact',
    options: {
        debug: false,
    },
};
