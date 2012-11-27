define(['exports', 'module',
        './lib/websocket'],
function(exports, module, WebSocket) {
  exports = module.exports = WebSocket;
  exports.WebSocket = WebSocket;
});
