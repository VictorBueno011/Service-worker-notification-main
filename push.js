var push = require('web-push');

let vapidKeys = {
    publicKey: 'BIY1vnxdH88Ew2z9voj7tQgwgSo-XInOk0HYb4hCmxaB711ONZue23HkWQhRBU1RqeklmzWw8Kjq_GvOBAuJe3Y',
    privateKey: 'UGU0W1CXL_iKCJIg9FeEsnboTTpZj9l3faoNJGLhNkA'
}

push.setVapidDetails(
    'mailto:victorbueno2003@hotmail.com)',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);

let subscription = {
    endpoint: "https://fcm.googleapis.com/fcm/send/dwqMU533BtE:APA91bHIgap8nj6P4qKdgkwczxFqlQj5ca0oWZO7EAi48iYVPYkmKZDzxgw14X_XD1F5TxPTBlDr-h1nfnRDbU9oHuFk-PGL-IZ5gBeldAXtmtIULlYnI1RGbj7vWUV0G9GSYmHxmte0",
    expirationTime: null,
    keys: {
        p256dh: "BIYC6YlI7JaguqWLpRwmEpTUcMDw0lsRLqYWhBM21IAUDbomH4Z1ZrCf1F7KUFodGTybZkIg8KsH5lGagrdNeHc",
        auth: "gzTKwAMvQCG7IEL6Mr6Fcg"
    }
}
push.sendNotification(subscription, 'test message');