import { XSDDOMAssembler } from './assembler'

export class Appinfo extends XSDDOMAssembler {}

export function appinfo(init) {
    return new Appinfo(init)
}
