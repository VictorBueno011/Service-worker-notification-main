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

let subscription = { "endpoint": "https://fcm.googleapis.com/fcm/send/d2gmvv_vUCw:APA91bE06xLf6C2cBlkI1jkqLOpp0mjdwTPaTQklidnbHcEG-uhDjeb9cCsxrHEeq8NTLgrblcUVIa9MTwESKxQqSHNxL0dDVxmlY2ryp6jOdGHdunlBUtGimLgejBB6O8hgSkrnXz4b", "expirationTime": null, "keys": { "p256dh": "BEMelFc3ZtP8n_BblhUHZTQTPJLW0192l5frSyATWhDouvl0E-Z-cCkZ0E63su2qbP4Dv5Lu6RCSnWUIoK3tC-8", "auth": "_ZLWMi_s5pf1c-NUdwJkrQ" } }
push.sendNotification(subscription, 'test message');