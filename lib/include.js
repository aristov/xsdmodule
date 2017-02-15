import { XSDDOMAssembler } from 'assembler'

export class Include extends XSDDOMAssembler {}

export function include(init) {
    return new Include(init)
}
