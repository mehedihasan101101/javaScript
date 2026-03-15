class user {
    name: string
    Email: string
    private readonly age: string = "25" // now this readonly can not be access out of this class constructor
    constructor(name: string, Email: string) {
        this.name = name,
            this.Email = Email
    }
    get isSignedIn(): boolean {      // getter and setter
        return true
    }
}

const userMehedi = new user("mehedi", "asfas")

userMehedi.age

export { }