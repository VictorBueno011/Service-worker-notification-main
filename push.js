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

let subscriptions = [
    { "endpoint": "https://fcm.googleapis.com/fcm/send/fnMq2ozqP2s:APA91bHWrA7jB-xXObPQzk_O3Bl-XF1mrPj5X1KT3hxL-NSkf9y63zrpERvLkaoxNRUEMF-1wJ61mPZ0d03uECQfyleGBfONq79mLagb8dl8q_lrgkqilOhpXI1WVRX2MBlEkUShTvjQ", "expirationTime": null, "keys": { "p256dh": "BCMRZuyh-S7uQHv1IIBgcMN_DNOAvmLU9Cgg5tdsjgoc2y8QrGUE9w6ucrtMla3XhhHAQDw6Yc5mDwNa-9-4NKU", "auth": "xh1cUNcORQEDYr0Q6qOotg" } },
    { "endpoint": "https://fcm.googleapis.com/fcm/send/d2gmvv_vUCw:APA91bE06xLf6C2cBlkI1jkqLOpp0mjdwTPaTQklidnbHcEG-uhDjeb9cCsxrHEeq8NTLgrblcUVIa9MTwESKxQqSHNxL0dDVxmlY2ryp6jOdGHdunlBUtGimLgejBB6O8hgSkrnXz4b", "expirationTime": null, "keys": { "p256dh": "BEMelFc3ZtP8n_BblhUHZTQTPJLW0192l5frSyATWhDouvl0E-Z-cCkZ0E63su2qbP4Dv5Lu6RCSnWUIoK3tC-8", "auth": "_ZLWMi_s5pf1c-NUdwJkrQ" } },
    { "endpoint": "https://fcm.googleapis.com/fcm/send/dPDskURY1uc:APA91bHP7DBoOfXG1HobN4v6NtUIHld75ZyzlwHpGwn9JPmv6mwmD91zMPYG2oP5E_roP2M28I2T5wXbWbHgxqkS1G2PxqI4rFL9Af5gmmN83qoO3dyez9v2OcEoV97XX7-rss_OVPW5", "expirationTime": null, "keys": { "p256dh": "BE3HDMZVunXiWVZYbYInu3KTL2RrTMYONQUpAMuX83ViAML7gdG-KRQ7AzqxsaqqpKtS0sbyIFikHka9wy2UZZE", "auth": "rHBAjL0GeSNBBHZ8vvs9fw" } }
];

subscriptions.forEach(subscription => {
    push.sendNotification(subscription, 'test message');
});