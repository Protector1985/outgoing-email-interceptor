require("dotenv").config()

import App from "./App";
import Smtp from "./Smtp";

const port = Number(process.env.PORT) || 5000
try {
    //instantiates the Smtp server
    const smtp = new Smtp();
    //instantiates the application
    const app = new App({
        port: port
    })

    //starts the server
    app.startServer()
    
    //starts the smtp server
    smtp.startSmtpServer();

} catch(err) {
    console.error(err)
}
