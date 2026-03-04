// void and never in ts. void means a function return nothing useful. never means it never return nothing at all not even undefined

function showError(err: string): void {

    console.log(err)
}

function handleError(err:string): never {
    throw new Error(err);
}

export { }