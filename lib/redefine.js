import { XSDDOMAssembler } from 'assembler'

export class Redefine extends XSDDOMAssembler {}

export function redefine(init) {
    return new Redefine(init)
}
