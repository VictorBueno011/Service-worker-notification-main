var push = require('web-push');

let vapidKeys = {
    publicKey: 'BIY1vnxdH88Ew2z9voj7tQgwgSo-XInOk0HYb4hCmxaB711ONZue23HkWQhRBU1RqeklmzWw8Kjq_GvOBAuJe3Y',
    privateKey: 'UGU0W1CXL_iKCJIg9FeEsnboTTpZj9l3faoNJGLhNkA'
}

push.setVapidDetails(
    'mailto:victorbueno2003@hotmail.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);

let subscriptions = [
    { "endpoint": "https://fcm.googleapis.com/fcm/send/fnMq2ozqP2s:APA91bHWrA7jB-xXObPQzk_O3Bl-XF1mrPj5X1KT3hxL-NSkf9y63zrpERvLkaoxNRUEMF-1wJ61mPZ0d03uECQfyleGBfONq79mLagb8dl8q_lrgkqilOhpXI1WVRX2MBlEkUShTvjQ", "expirationTime": null, "keys": { "p256dh": "BCMRZuyh-S7uQHv1IIBgcMN_DNOAvmLU9Cgg5tdsjgoc2y8QrGUE9w6ucrtMla3XhhHAQDw6Yc5mDwNa-9-4NKU", "auth": "xh1cUNcORQEDYr0Q6qOotg" } },
    { "endpoint": "https://fcm.googleapis.com/fcm/send/d2gmvv_vUCw:APA91bE06xLf6C2cBlkI1jkqLOpp0mjdwTPaTQklidnbHcEG-uhDjeb9cCsxrHEeq8NTLgrblcUVIa9MTwESKxQqSHNxL0dDVxmlY2ryp6jOdGHdunlBUtGimLgejBB6O8hgSkrnXz4b", "expirationTime": null, "keys": { "p256dh": "BEMelFc3ZtP8n_BblhUHZTQTPJLW0192l5frSyATWhDouvl0E-Z-cCkZ0E63su2qbP4Dv5Lu6RCSnWUIoK3tC-8", "auth": "_ZLWMi_s5pf1c-NUdwJkrQ" } },
    { "endpoint": "https://fcm.googleapis.com/fcm/send/fFTovr16Eng:APA91bEuErH-GSMH8CDNl8PYjl_GGec_4SpcSDIplsECEmsSSMnZyocNSpmEj62dv7Cmg4avrAIXVz_109jQOxT8C8j2AAFevZTur8pkpHAg-x6pPIs8txl8uWd9dxkLOU9vUAjgzz-R", "expirationTime": null, "keys": { "p256dh": "BLlfdmiO9fFBi3LFMi5rWUoRtjJAFbUARdePlKQmaV-NPFxNP9bExiIx0M1a-_L6wzLItqjOzrD-KaeFNneRjRc", "auth": "I_3xFPFKyodrInR7THj5Aw" } }
];

let notificationPayload = {
    title: 'Nova Notificação',
    body: 'Esta é uma notificação personalizada',
    icon: 'LOGOTIPOICON.png',
    vibrate: [100, 50, 100],
    primaryKey: '1',
    actions: [
        { action: 'explore', title: 'Explore this new world', icon: 'images/checkmark.png' },
        { action: 'close', title: 'Close', icon: 'images/xmark.png' },
    ]
};

subscriptions.forEach(subscription => {
    push.sendNotification(subscription, JSON.stringify(notificationPayload));
});