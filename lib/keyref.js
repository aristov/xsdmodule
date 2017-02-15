import { XSDDOMAssembler } from 'assembler'

export class Keyref extends XSDDOMAssembler {
    set refer(refer) {
        this.node.setAttribute('refer', refer)
    }
    get refer() {
        return this.node.getAttribute('refer')
    }
}

export function keyref(init) {
    return new Keyref(init)
}
