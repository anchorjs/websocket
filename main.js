define(['exports', 'module',
        'events',
        'class'],
function(exports, module, Emitter, clazz) {
  
  function WebSocket(url, callback) {
    Emitter.call(this);
    
    var self = this
      , ws = new global.WebSocket(url);
    ws.onopen = function(e) {
      self.emit('open');
    };
    ws.onmessage = function(e) {
      self.emit('message', e.data); 
    }
    ws.onclose = function(e) {
      // TODO: Pass reason and code.
      self.emit('close'); 
    }
    ws.onerror = function(e) {
      // TODO: Pass reason, if any.
      self.emit('error');
    }
    
    if (callback) this.on('open', callback);
    this._ws = ws;
  }
  clazz.inherits(WebSocket, Emitter);
  
  WebSocket.prototype.send = function(data) {
    this._ws.send(data);
  }
  
  WebSocket.prototype.close = function() {
    this._ws.close();
  }
  
  
  exports = module.exports = WebSocket;
  exports.WebSocket = WebSocket;
});
