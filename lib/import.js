import { XSDDOMAssembler } from 'assembler'

export class Import extends XSDDOMAssembler {}

export function xsdImport(init) {
    return new Import(init)
}
