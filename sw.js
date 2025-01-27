self.addEventListener('install', event => {
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('push', function (event) {
    const data = event.data.json();
    const options = {
        body: data.body,
        icon: data.icon || 'LOGOTIPOICON.png',
        vibrate: data.vibrate || [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: data.primaryKey || '2'
        },
        actions: data.actions || [
            { action: 'explore', title: 'Explore this new world', icon: 'images/checkmark.png' },
            { action: 'close', title: 'Close', icon: 'images/xmark.png' },
        ]
    };
    event.waitUntil(
        self.registration.showNotification(data.title, options)
    );
});