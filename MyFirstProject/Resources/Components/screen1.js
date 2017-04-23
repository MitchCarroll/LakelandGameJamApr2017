"atomic component";

const BROWSER_WIDTH = 1024;
const BROWSER_HEIGHT = 1024;
const BROWSER_URL = "http://www.google.com/";

// First create a web texture and set filtering mode
var webTexture = new WebView.WebTexture2D();

var texture2D = webTexture.texture2D;
texture2D.filterMode = Atomic.TextureFilterMode.FILTER_TRILINEAR;

// Setup a simple material for the web texture
var webMaterial = new Atomic.Material();
webMaterial.setTechnique(0, Atomic.cache.getResource("Technique", "Techniques/DiffEmissive.xml"));
webMaterial.setTexture(Atomic.TextureUnit.TU_EMISSIVE, texture2D);
webMaterial.setShaderParameter("MatEmissiveColor", "1 1 1 1");

// Create web client with pluggable handlers
var webClient = new WebView.WebClient();
// Set our render handler to be the WebTexture2D we created above
webClient.webRenderHandler = webTexture;
// Create the browser!
webClient.createBrowser(BROWSER_URL, BROWSER_WIDTH, BROWSER_HEIGHT);

exports.component = function(self) {

  var camera = self.node.scene.getComponent("Camera", true);
//  var octree = self.node.scene.getComponent("Octree", true);

  // assign the web material to our model component
  var model = self.node.getComponent("StaticModel");
  model.setMaterial(webMaterial);

  // update function
  self.update = function(timeStep) {

  };
};
