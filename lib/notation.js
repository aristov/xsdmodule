import { XSDDOMAssembler } from 'assembler'

export class Notation extends XSDDOMAssembler {
    /**
     *
     * @param {string} xsdPublic
     */
    set xsdPublic(xsdPublic) {
        this.node.setAttribute('public', xsdPublic)
    }

    /**
     *
     * @returns {string}
     */
    get xsdPublic() {
        return this.node.getAttribute('public')
    }

    /**
     *
     * @param {string} system
     */
    set system(system) {
        this.node.setAttribute('system', system)
    }

    /**
     *
     * @returns {string}
     */
    get system() {
        return this.node.getAttribute('system')
    }
}

/**
 * 
 * @param {*} init
 * @returns {Notation}
 */
export function notation(init) {
    return new Notation(init)
}
