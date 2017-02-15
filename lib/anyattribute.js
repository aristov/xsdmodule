import { XSDDOMAssembler } from './assembler'

export class AnyAttribute extends XSDDOMAssembler {}

export function anyAttribute(init) {
    return new AnyAttribute(init)
}
