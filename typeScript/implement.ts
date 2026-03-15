interface takePhoto {
    cameraMode: string
    filter: string
    brustClick: number
}
class takeInstPhoto implements takePhoto {
    cameraMode: string        
    filter: string
    brustClick: number
    constructor(cameraMode: string, filter: string, brustClick: number) {
        this.cameraMode = cameraMode
        this.filter = filter
        this.brustClick = brustClick
    }
}

// this constructor  use the take phot interface