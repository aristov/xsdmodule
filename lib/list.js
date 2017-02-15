import { XSDDOMAssembler } from 'assembler'

export class List extends XSDDOMAssembler {
    set itemType(itemType) {
        this.node.setAttribute('itemType', itemType)
    }
    get itemType() {
        return this.node.getAttribute('itemType')
    }
}

export function list(init) {
    return new List(init)
}
