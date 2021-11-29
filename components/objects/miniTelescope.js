// Mini telescope implementation
var miniTelescopeObject = new THREE.Group();

var upperBody = new THREE.Group();
var legBody = new THREE.Group();

var upperMaterial = new THREE.MeshPhongMaterial({ shininess: 500, color: "white" });
var blackMaterial = new THREE.MeshPhongMaterial({ shininess: 500, color: "black" });
var transparentMaterial = new THREE.MeshPhongMaterial({opacity: 0.6, transparent: true, color: "white"});

var upperCylinderGeometry = new THREE.CylinderGeometry(0.1, 0.1, 0.8, 64);
var blackCylinderGeometry = new THREE.CylinderGeometry(0.11, 0.11, 0.2, 64);
var transCylinderGeometry = new THREE.CylinderGeometry(0.09, 0.09, 0.2, 64);

var upperCylBody = new THREE.Mesh(upperCylinderGeometry, upperMaterial);
var blackCylBody = new THREE.Mesh(blackCylinderGeometry, blackMaterial);

upperCylBody.rotation.x = Math.PI / 2 + Math.PI / 4;
upperCylBody.rotation.z = - Math.PI / 4 + Math.PI / 8;
blackCylBody.rotation.x = Math.PI / 2 + Math.PI / 4;
blackCylBody.rotation.z = - Math.PI / 4 + Math.PI / 8;

var cylHoleGeometry = new THREE.CylinderGeometry(0.08, 0.08, 0.8, 64);
var blackHoleGeometry = new THREE.CylinderGeometry(0.09, 0.09, 0.2, 64);

var upperCylHole = new THREE.Mesh(cylHoleGeometry);
var blackCylHole = new THREE.Mesh(blackHoleGeometry);

upperCylHole.rotation.x = Math.PI / 2 + Math.PI / 4;
upperCylHole.rotation.z = - Math.PI / 4 + Math.PI / 8;
blackCylHole.rotation.x = Math.PI / 2 + Math.PI / 4;
blackCylHole.rotation.z = - Math.PI / 4 + Math.PI / 8;

var firstCSG = new CSG();
firstCSG.subtract( [upperCylBody, upperCylHole] );

var upperCylBodyWithHole = firstCSG.toMesh();
upperCylBodyWithHole.material = upperMaterial;

var secondCSG = new CSG();
secondCSG.subtract( [blackCylBody, blackCylHole] );

var blackCylBodyWithHole = secondCSG.toMesh();
blackCylBodyWithHole.material = blackMaterial;

blackCylBodyWithHole.position.set(-0.187, 0.32, -0.317);

var transBody = new THREE.Mesh(transCylinderGeometry, transparentMaterial);
transBody.position.set(-0.187, 0.32, -0.317);

transBody.rotation.x = Math.PI / 2 + Math.PI / 4;
transBody.rotation.z = - Math.PI / 4 + Math.PI / 8;

// Upper body additure
upperBody.add(upperCylBodyWithHole);
upperBody.add(blackCylBodyWithHole);
upperBody.add(transBody);

var mainLegCylinderGeometry = new THREE.CylinderGeometry(0.05, 0.05, 1, 64);
var standCylinderGeometry = new THREE.CylinderGeometry(0.3, 0.3, 0.1, 64);

var mainLegBody = new THREE.Mesh(mainLegCylinderGeometry, blackMaterial);
var standBody = new THREE.Mesh(standCylinderGeometry, blackMaterial);

mainLegBody.position.set(0, -0.5, -0.1);
standBody.position.set(0, -1, -0.1);

// Leg body additure
legBody.add(mainLegBody);
legBody.add(standBody);

legBody.position.set(-0.06, 0, 0);

// Mini telescope objects additure
miniTelescopeObject.add(upperBody);
miniTelescopeObject.add(legBody);

miniTelescopeObject.position.set(2, 1, -4);

scene.add(miniTelescopeObject);