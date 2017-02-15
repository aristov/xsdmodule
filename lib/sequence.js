import { XSDDOMAssembler } from './assembler'

export class Sequence extends XSDDOMAssembler {}

export function sequence(init) {
    return new Sequence(init)
}
