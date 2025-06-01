export class SignupDto {
    constructor(
        public readonly name: string,
        public readonly email: string,
        public readonly photo: string,
        public readonly birthyear: number,
        public readonly member_type: number,
        public readonly hpid: string,
        public readonly pregnent: number,
        public readonly allergy: number,
        public readonly hypertension: number,
        public readonly diabetes: number,
        public readonly heartDisease: number,
        public readonly liverDisease: number,
        public readonly kidneyDisease: number
    ) {}

    getFormData() {
        return {
            member_type: this.member_type,
            birthyear: this.birthyear,
            hpid: this.hpid,
            pregnent: this.pregnent,
            allergy: this.allergy,
            hypertension: this.hypertension,
            diabetes: this.diabetes,
            heartDisease: this.heartDisease,
            liverDisease: this.liverDisease,
            kidneyDisease: this.kidneyDisease
        };
    }

    getTokenData() {
        return {
            name: this.name,
            photo: this.photo,
            email: this.email
        };
    }

}