import { XSDDOMAssembler } from './assembler'

export class Extension extends XSDDOMAssembler {
    /**
     *
     * @param {String} base
     */
    set base(base) {
        this.node.setAttribute('base', base)
    }

    /**
     *
     * @returns {String}
     */
    get base() {
        return this.node.getAttribute('base')
    }
}
