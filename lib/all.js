import { XSDDOMAssembler } from './assembler'

const DEFAULT_MIN_OCCURS_VALUE = 1

export class All extends XSDDOMAssembler {
    /**
     * Optional. Specifies the maximum number of times the element can occur. The value must be 1.
     * @param {Number=1} maxOccurs
     */
    set maxOccurs(maxOccurs) {
        this.node.setAttribute('maxOccurs', String(maxOccurs))
    }

    /**
     * @returns {Number}
     */
    get maxOccurs() {
        return Number(this.node.getAttribute('maxOccurs') || NaN)
    }

    /**
     * Optional. Specifies the minimum number of times the element can occur.
     * @param {0|Number=1} minOccurs
     */
    set minOccurs(minOccurs) {
        this.node.setAttribute('minOccurs', String(minOccurs))
    }

    /**
     * The value can be 0 or 1. Default value is 1.
     * @returns {0|Number}
     */
    get minOccurs() {
        return Number(this.node.getAttribute('minOccurs') || DEFAULT_MIN_OCCURS_VALUE)
    }
}

/**
 * All assembler factory
 * @param {*} init
 * @returns {All}
 */
export function all(init) {
    return new All('xs:all', init)
}
