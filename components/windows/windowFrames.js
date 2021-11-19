// Constants
const windowFrameWidth = 0.45;

// Window Frames implementation
var windowFrames = new THREE.Group();
var windowFrameMaterial = new THREE.MeshPhongMaterial({color: 'white'});

// First window frame - in First window
var firstWindowFrameGeometry = new THREE.BoxGeometry(4, 2, windowFrameWidth);

// Window frame mesh
var firstWindowFrameMesh = new THREE.Mesh(firstWindowFrameGeometry, windowFrameMaterial);
firstWindowFrameMesh.position.set(2, 1.45, -4.845);

// First window hole - in First window frame
var firstWindowHoleGeometry = new THREE.BoxGeometry(1.85, 1.7, 1);

// Window hole mesh
var firstWindowHoleMesh = new THREE.Mesh(firstWindowHoleGeometry);
firstWindowHoleMesh.position.set(1, 1.45, -4.845);

// Second window hole - in First window frame
var secondWindowHoleGeometry = new THREE.BoxGeometry(1.85, 1.7, 1);

// Window hole mesh
var secondWindowHoleMesh = new THREE.Mesh(secondWindowHoleGeometry);
secondWindowHoleMesh.position.set(3, 1.45, -4.845);

var firstCSG = new CSG();
firstCSG.subtract( [firstWindowFrameMesh, firstWindowHoleMesh, secondWindowHoleMesh] );

var firstWindowFrameWithHoles = firstCSG.toMesh();
firstWindowFrameWithHoles.material = windowFrameMaterial;

// Second window frame - in Second window
var secondWindowFrameGeometry = new THREE.BoxGeometry(windowFrameWidth, 1.4, 3);

// Window frame mesh
var secondWindowFrameMesh = new THREE.Mesh(secondWindowFrameGeometry, windowFrameMaterial);
secondWindowFrameMesh.position.set(6.845, 1.5, 0);

// Third window hole - in Second window frame
var thirdWindowHoleGeometry = new THREE.BoxGeometry(1, 1.1, 1.35);

// Window hole mesh
var thirdWindowHoleMesh = new THREE.Mesh(thirdWindowHoleGeometry);
thirdWindowHoleMesh.position.set(6.845, 1.5, -0.75);

// Fourth window hole - in Second window frame
var fourthWindowHoleGeometry = new THREE.BoxGeometry(1, 1.1, 1.35);

// Window hole mesh
var fourthWindowHoleMesh = new THREE.Mesh(fourthWindowHoleGeometry);
fourthWindowHoleMesh.position.set(6.845, 1.5, 0.75);

var secondCSG = new CSG();
secondCSG.subtract( [secondWindowFrameMesh, thirdWindowHoleMesh, fourthWindowHoleMesh] );

var secondWindowFrameWithHoles = secondCSG.toMesh();
secondWindowFrameWithHoles.material = windowFrameMaterial;

// Window frame objects additure
windowFrames.add(firstWindowFrameWithHoles);
windowFrames.add(secondWindowFrameWithHoles);

scene.add(windowFrames);