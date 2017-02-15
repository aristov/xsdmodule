import { XSDDOMAssembler } from './assembler'

export class Extension extends XSDDOMAssembler {}

export function extenstion(init) {
    return new Extension(init)
}
