import { XSDDOMAssembler } from './assembler'

export class Annotation extends XSDDOMAssembler {}

export function annotation(init) {
    return new Annotation(init)
}
