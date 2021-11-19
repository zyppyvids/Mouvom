// BBQ introducement
var bbqObject = new THREE.Group();

// Object material
var material = new THREE.MeshPhongMaterial({color:'black', specular: 'white'});

// Object geometries
var ringGeometry = new THREE.TorusGeometry(0.3, 0.05, 16, 64);
var sphereGeometry = new THREE.SphereGeometry(1, 64, 64);
var firstCylinderGeometry = new THREE.CylinderGeometry(1.03, 0.9, 0.1, 64);
var secondCylinderGeometry = new THREE.CylinderGeometry(0.9, 1.03, 0.1, 64);
var legCylinderGeometry = new THREE.CylinderGeometry(0.1, 0.1, 0.6, 64);
var baseCylinderGeometry = new THREE.CylinderGeometry(0.5, 0.5, 0.05, 64)

// Hole geometries
var firstBoxGeometry = new THREE.BoxGeometry(2, 2, 2);
var secondBoxGeometry = new THREE.BoxGeometry(2, 1, 2);

// Object bodies
var ringBody = new THREE.Mesh(ringGeometry, material);
ringBody.position.y = 0.7;

var topBBQBody = new THREE.Mesh(sphereGeometry);

var bottomCylBody = new THREE.Mesh(firstCylinderGeometry, material);
bottomCylBody.position.y = -0.3 + 0.57;

var topCylBody = new THREE.Mesh(secondCylinderGeometry, material);
topCylBody.position.y = -0.2 + 0.57;

var bottomBBQBody = new THREE.Mesh(sphereGeometry);

var legBody = new THREE.Mesh(legCylinderGeometry, material);
legBody.position.y = -0.5;

var baseBody = new THREE.Mesh(baseCylinderGeometry, material);
baseBody.position.y = -0.8;

// Hole bodies
var firstHole = new THREE.Mesh(firstBoxGeometry);
firstHole.position.set( 0, 0.7, 0 );

var secondHole = new THREE.Mesh(firstBoxGeometry);
secondHole.position.set(0, -0.6, 0);

var thirdHole = new THREE.Mesh(secondBoxGeometry);
thirdHole.position.set(0, 1.35, 0);

// Hole implementation 1
var firstCSG = new CSG();
firstCSG.subtract( [bottomBBQBody, firstHole] );

var bottomBody = firstCSG.toMesh();
bottomBody.material = material;

bottomBody.position.y = 0.57;

// Hole implementation 1
var secondCSG = new CSG();
secondCSG.subtract([topBBQBody, secondHole, thirdHole]);

var topBody = secondCSG.toMesh();
topBody.material = material;


// BBQ Object additure
bbqObject.add(ringBody);
bbqObject.add(topBody);
bbqObject.add(topCylBody);
bbqObject.add(bottomCylBody);
bbqObject.add(bottomBody);
bbqObject.add(legBody);
bbqObject.add(baseBody);

bbqObject.scale.set(0.5, 0.5, 0.5);
bbqObject.position.set(-6.7, 0.37, 6.7);

// Scene additure
scene.add(bbqObject);