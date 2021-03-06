define(['websocket'],
function(websocket) {

  describe("websocket", function() {
    
    it('shoud export WebSocket constructor', function() {
      expect(websocket.WebSocket).to.exist;
      expect(websocket.WebSocket).to.be.a('function');
    });
    
    it('shoud export WebSocket via module', function() {
      expect(websocket).to.equal(websocket.WebSocket);
    });
    
  });
  
  return { name: "test.websocket" }
});
