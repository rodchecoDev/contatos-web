import { Company } from "./company.model";

export class Contact {
    constructor(public id: number,
        public fullName: string,
        public email: string,
        public phone: string,
        public company: Company) { }
}