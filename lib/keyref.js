import { XSDDOMAssembler } from 'assembler'

export class Keyref extends XSDDOMAssembler {
    /**
     *
     * @param {string} refer
     */
    set refer(refer) {
        this.node.setAttribute('refer', refer)
    }

    /**
     *
     * @returns {string}
     */
    get refer() {
        return this.node.getAttribute('refer')
    }
}

/**
 *
 * @param {*} init
 * @returns {Keyref}
 */
export function keyref(init) {
    return new Keyref(init)
}
