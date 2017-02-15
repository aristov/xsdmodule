import { XSDDOMAssembler } from 'assembler'

export class Notation extends XSDDOMAssembler {
    set xsdPublic(xsdPublic) {
        this.node.setAttribute('public', xsdPublic)
    }
    get xsdPublic() {
        return this.node.getAttribute('public')
    }
    set system(system) {
        this.node.setAttribute('system', system)
    }
    get system() {
        return this.node.getAttribute('system')
    }
}

export function notation(init) {
    return new Notation(init)
}
