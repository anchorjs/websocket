define(['anchor/class',
        'anchor/events'],
function(clazz, events) {
  
  function WS(url, callback) {
    events.EventEmitter.call(this);
    
    var self = this
      , ws = new WebSocket(url);
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
  clazz.inherits(WS, events.EventEmitter);
  
  WS.prototype.send = function(data) {
    this._ws.send(data);
  }
  
  WS.prototype.close = function() {
    this._ws.close();
  }
  
  
  var exports = {}
  exports.WebSocket = WS;
  
  return WS;
});
