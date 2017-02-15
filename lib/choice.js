import { XSDDOMAssembler } from 'assembler'

export class Choice extends XSDDOMAssembler {}

export function choice(init) {
    return new Choice(init)
}
