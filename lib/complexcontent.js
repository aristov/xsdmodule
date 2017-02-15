import { XSDDOMAssembler } from './assembler'

export class ComplexContent extends XSDDOMAssembler {}

export function complexContent(init) {
    return new ComplexContent(init)
}
