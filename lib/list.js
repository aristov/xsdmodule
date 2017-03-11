import { XSDDOMAssembler } from 'assembler'

export class List extends XSDDOMAssembler {
    /**
     *
     * @param {string} itemType
     */
    set itemType(itemType) {
        this.node.setAttribute('itemType', itemType)
    }

    /**
     *
     * @returns {string}
     */
    get itemType() {
        return this.node.getAttribute('itemType')
    }
}

/**
 * 
 * @param {*} init
 * @returns {List}
 */
export function list(init) {
    return new List(init)
}
