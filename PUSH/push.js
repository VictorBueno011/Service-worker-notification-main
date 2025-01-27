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

let subscription = {}
push.sendNotification(subscription, 'test message');