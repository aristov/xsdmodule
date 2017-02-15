import { XSDDOMAssembler } from 'assembler'

export class Restriction extends XSDDOMAssembler {}

export function restriction(init) {
    return new Restriction(init)
}
