export class AddEditCompany {
    constructor(public type: string,
        public name: string,
        public phone: string,
        public addressLogradouro: string,
        public addressNumero: string,
        public addressComplemento: string,
        public addressBairro: string,
        public addressCidade: string,
        public addressUf: string,
        public addressCep: string) { }
}