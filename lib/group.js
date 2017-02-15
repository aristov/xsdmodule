import { XSDDOMAssembler } from './assembler'

export class Group extends XSDDOMAssembler {}

export function group(init) {
    return new Group(init)
}
