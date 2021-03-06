const path = require('path');
const fs = require('fs');
module.exports = app => {
    const exports = {};

    exports.siteFile = {
        '/favicon.ico': fs.readFileSync(path.join(app.baseDir, 'app/web/asset/images/favicon.ico'))
    };

    exports.view = {
        cache: false
    };

    exports.vuessr = {
        layout: path.join(app.baseDir, 'app/web/view/layout.html')
    };

    exports.logger = {
        consoleLevel: 'DEBUG',
        dir: path.join(app.baseDir, 'logs')
    };

    exports.static = {
        prefix: '/public/',
        dir: path.join(app.baseDir, 'public')
    };

    exports.keys = '123456';
    exports.security = {
        csrf: {
            headerName: 'x-csrf-token', // 通过 header 传递 CSRF token 的默认字段为 x-csrf-token
        },
    };

    exports.middleware = [
        'access'
    ];


    return exports;
};