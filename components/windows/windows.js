// Constants
const windowWidth = 0.3;

// Windows implementation
var windowObjects = new THREE.Group();
var windowMaterial = new THREE.MeshPhongMaterial({color: 'gray', opacity: 0.6, transparent: true});

// First window - in Third wall
var firstWindowGeometry = new THREE.BoxGeometry(4, 2, windowWidth);

// Window hole mesh
var firstWindowMesh = new THREE.Mesh(firstWindowGeometry, windowMaterial);
firstWindowMesh.position.set(2, 1.45, -4.845);

// Second window - in First wall
var secondWindowGeometry = new THREE.BoxGeometry(windowWidth, 1.4, 3);

// Window hole mesh
var secondWindowMesh = new THREE.Mesh(secondWindowGeometry, windowMaterial);
secondWindowMesh.position.set(6.845, 1.5, 0);

// Window objects additure
windowObjects.add(firstWindowMesh);
windowObjects.add(secondWindowMesh);

scene.add(windowObjects);


