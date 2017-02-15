import { XSDDOMAssembler } from './assembler'

export class Selector extends XSDDOMAssembler {}

export function selector(init) {
    return new Selector(init)
}
