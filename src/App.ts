import express, { Application } from "express";


class App {
    private app: Application
    private port: number 
    

    constructor(props: {port:number}) {
        this.app = express()
        this.port = props.port
    }


    public startServer():void {
        this.app.listen(this.port, () => {
            console.log(`Server running on ${this.port}`)
        })
    }
}

export default App