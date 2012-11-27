define(['events',
        'class'],
function(Emitter, clazz) {

  function WebSocket(url, cb) {
    Emitter.call(this);

    var self = this
      , ws = new window.WebSocket(url);
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

    if (cb) this.on('open', cb);
    this._ws = ws;
  }
  clazz.inherits(WebSocket, Emitter);

  WebSocket.prototype.send = function(data) {
    this._ws.send(data);
  }

  WebSocket.prototype.close = function() {
    this._ws.close();
  }

  return WebSocket;
});
