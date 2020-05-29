// eslint-disable-next-line @typescript-eslint/no-var-requires
const aws = require('aws-sdk');
const ses = new aws.SES();
const senderEmail = process.env.EMAIL;
const corsOrigin = process.env.CORS_ORIGIN;

function generateResponse(code, payload) {
    return {
        statusCode: code,
        headers: {
            'Access-Control-Allow-Origin': corsOrigin,
            'Access-Control-Allow-Headers': 'x-requested-with',
            'Access-Control-Allow-Credentials': true,
        },
        body: JSON.stringify(payload),
    };
}

function generateError(code, err) {
    console.log(err);
    return {
        statusCode: code,
        headers: {
            'Access-Control-Allow-Origin': corsOrigin,
            'Access-Control-Allow-Headers': 'x-requested-with',
            'Access-Control-Allow-Credentials': true,
        },
        body: JSON.stringify(err),
    };
}

function generateEmailParams(body) {
    const { email, name, content } = JSON.parse(body);
    console.log(email, name, content);

    if (!(email && name && content)) {
        throw new Error("Missing parameters! Make sure to add parameters 'email', 'name', 'content'.");
    }

    return {
        Source: senderEmail,
        Destination: { ToAddresses: [senderEmail] },
        ReplyToAddresses: [email],
        Message: {
            Body: {
                Text: {
                    Charset: 'UTF-8',
                    Data: `Email: ${email} \nName: ${name} \nMessage:\n${content}`,
                },
            },
            Subject: {
                Charset: 'UTF-8',
                Data: `Contact: ${name}`,
            },
        },
    };
}

module.exports.send = async (event) => {
    try {
        const emailParams = generateEmailParams(event.body);
        const data = await ses.sendEmail(emailParams).promise();
        return generateResponse(200, data);
    } catch (err) {
        return generateError(400, { error: err.message });
    }
};
