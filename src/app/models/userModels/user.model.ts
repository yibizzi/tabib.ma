export class User {


    constructor(
        public email: string,
        public userId?: string | undefined | null,
        public firstName?: string | undefined | null,
        public lastName?: string | undefined | null,
        public age?: number | undefined | null,
        public phoneNumber?: string | undefined | null) {
    }
}
