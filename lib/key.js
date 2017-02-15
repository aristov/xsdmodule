import { XSDDOMAssembler } from 'assembler'

export class Key extends XSDDOMAssembler {}

export function key(init) {
    return new Key(init)
}
