self.addEventListener('install', event => {
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('push', function (event) {
    var options = {
        body: 'Esta é uma notificação de teste do FlowTime',
        icon: 'LOGOTIPOICON.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: '2'
        },
        actions: [
            { action: 'explore', title: 'Explore this new world', icon: 'images/checkmark.png' },
            { action: 'close', title: 'Close', icon: 'images/xmark.png' },
        ]
    };
    event.waitUntil(
        self.registration.showNotification('Olá Teste', options)
    );
});