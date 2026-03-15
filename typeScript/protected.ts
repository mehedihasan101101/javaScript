class user {
    name: string
    email: string
    protected age: number = 25;

    constructor(name: string, email: string) {
        this.name = name
        this.email = email
    }
}

class paidUser extends user {
    isStudent: boolean
    constructor(name: string, email: string, isStudent: boolean,) {
        super(name, email)
        this.isStudent = isStudent
        this.age = 33 // here as you can see we can use the age within the inheritance of the user class, this value can not be accessed from outer scope
    }
}

export { }