require("dotenv").config()

import { SMTPServer, SMTPServerSession, SMTPServerDataStream } from 'smtp-server';


class Smtp {
    public startSmtpServer(): void {
        const server = new SMTPServer({
            secure: false, // No TLS on the server side for simplicity
            authOptional: true, // No authentication required
            onData(stream: SMTPServerDataStream, session: SMTPServerSession, callback: (err?: Error) => void) {
                let emailData = '';
                stream.on('data', (chunk: Buffer) => {
                    emailData += chunk.toString();
                });
                stream.on('end', async () => {
                    console.log('Received email:', emailData);
                    callback();
                });
            }
        });

        server.listen(2525, () => {
            console.log('SMTP server is listening on port 2525');
        });
    }
}


export default Smtp


