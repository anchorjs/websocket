define(['websocket/main',
        'chai'],
function(websocket, chai) {
  var expect = chai.expect;

  describe("websocket", function() {
    
    it('shoud export WebSocket constructor', function() {
      expect(websocket.WebSocket).to.exist;
      expect(websocket.WebSocket).to.be.a('function');
    });
    
  });
  
  return { name: "test.websocket" }
});
