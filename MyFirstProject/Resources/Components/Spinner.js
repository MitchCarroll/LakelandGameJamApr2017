"atomic component";

var input = Atomic.getInput();
var vis = false


var inspectorFields = {
  mouse_damper: 1.0
}

exports.component = function(self) {

  self.update = function(timeStep) {
    if(Atomic.input.getKeyDown(Atomic.KEY_SPACE)) {
        vis? vis = false : vis = true;
    }
    input.setMouseVisible(vis);
    if(!vis) {
        self.node.yaw(input.getMouseMoveX()/self.mouse_damper,Atomic.TransformSpace.TS_WORLD);
        self.node.pitch(input.getMouseMoveY()/self.mouse_damper,Atomic.TransformSpace.TS_LOCAL);
    }
    if(Atomic.input.getKeyDown(Atomic.KEY_ESCAPE)) {
        Atomic.getEngine().exit();
    }
  }
}
