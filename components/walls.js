// Constants
const wallWidth = 0.3;
const wallHeight = 3;

// Walls implementation
var wallObjects = new THREE.Group();

// Texture setup
var texture = new THREE.TextureLoader().load(brickTile);

texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set(5, 2);
texture.anisotropy = MAX_ANISOTROPY;

var wallMaterial = new THREE.MeshPhongMaterial({ shininess: 150, map: texture});

// First wall
var firstGeometry = new THREE.BoxGeometry(wallWidth, wallHeight, 8);
    
var firstWall = new THREE.Mesh(firstGeometry, wallMaterial);

// X -> Moves to left-right
// Y -> Moves up-down
// Z -> Moves front-back
firstWall.position.set(6.845, 1.45, 0);
firstWall.receiveShadow = true;
firstWall.castShadow = true;

// Second window - in First wall
var secondWindowGeometry = new THREE.BoxGeometry(1, 1.4, 3);

// Window hole mesh
var secondWindowMesh = new THREE.Mesh(secondWindowGeometry);
secondWindowMesh.position.set(6.845, 1.5, 0);

var thirdCSG = new CSG();
thirdCSG.subtract( [firstWall, secondWindowMesh] );

var firstWallWithWindow = thirdCSG.toMesh();
firstWallWithWindow.material = wallMaterial;

// Second wall
var secondGeometry = new THREE.BoxGeometry(wallWidth, wallHeight, 8);
    
var secondWall = new THREE.Mesh(secondGeometry, wallMaterial);

// X -> Moves to left-right
// Y -> Moves up-down
// Z -> Moves front-back
secondWall.position.set(-6.845, 1.45, 0);
secondWall.receiveShadow = true;
secondWall.castShadow = true;

// First door - in Second wall
var firstDoorGeometry = new THREE.BoxGeometry(1, 2.5, 1);

// Door hole mesh
var firstDoorMesh = new THREE.Mesh(firstDoorGeometry);
firstDoorMesh.position.set(-6.845, 0.8, -2);

var firstCSG = new CSG();
firstCSG.subtract( [secondWall, firstDoorMesh] );

var secondWallWithDoor = firstCSG.toMesh();
secondWallWithDoor.material = wallMaterial;

// Third wall
var thirdGeometry = new THREE.BoxGeometry(wallWidth, wallHeight, 8);
    
var thirdWall = new THREE.Mesh(thirdGeometry, wallMaterial);

// X -> Moves to left-right
// Y -> Moves up-down
// Z -> Moves front-back
thirdWall.position.set(2, 1.45, -4.845);
thirdWall.rotation.y = Math.PI / 2;
thirdWall.receiveShadow = true;
thirdWall.castShadow = true;

// First window - in Third wall
var firstWindowGeometry = new THREE.BoxGeometry(4, 2, 1);

// Window hole mesh
var firstWindowMesh = new THREE.Mesh(firstWindowGeometry);
firstWindowMesh.position.set(2, 1.45, -4.845);

var secondCSG = new CSG();
secondCSG.subtract( [thirdWall, firstWindowMesh] );

var thirdWallWithWindow = secondCSG.toMesh();
thirdWallWithWindow.material = wallMaterial;

// Fourth wall
var fourthGeometry = new THREE.BoxGeometry(wallWidth, wallHeight, 8);
    
var fourthWall = new THREE.Mesh(fourthGeometry, wallMaterial);

// X -> Moves to left-right
// Y -> Moves up-down
// Z -> Moves front-back
fourthWall.position.set(2, 1.45, 6.845);
fourthWall.rotation.y = Math.PI / 2;
fourthWall.receiveShadow = true;
fourthWall.castShadow = true;

// Fifth wall
var fifthGeometry = new THREE.BoxGeometry(wallWidth, wallHeight, 12);
    
var fifthWall = new THREE.Mesh(fifthGeometry, wallMaterial);

// X -> Moves to left-right
// Y -> Moves up-down
// Z -> Moves front-back
fifthWall.position.set(-1.845, 1.45, 1);
fifthWall.receiveShadow = true;
fifthWall.castShadow = true;

// Second door - in Fifth wall
var secondDoorGeometry = new THREE.BoxGeometry(1, 2.5, 1);

// Door hole mesh
var secondDoorMesh = new THREE.Mesh(secondDoorGeometry);
secondDoorMesh.position.set(-1.845, 0.8, 2);

// Third door - in Fifth wall
var thirdDoorGeometry = new THREE.BoxGeometry(1, 2.5, 1);

// Door hole mesh
var thirdDoorMesh = new THREE.Mesh(secondDoorGeometry);
thirdDoorMesh.position.set(-1.845, 0.8, -2);

var fourthCSG = new CSG();
fourthCSG.subtract( [fifthWall, secondDoorMesh, thirdDoorMesh] );

var fifthWallWithDoors = fourthCSG.toMesh();
fifthWallWithDoors.material = wallMaterial;

// Sixth wall
var sixthGeometry = new THREE.BoxGeometry(wallWidth, wallHeight, 5);
    
var sixthWall = new THREE.Mesh(sixthGeometry, wallMaterial);

// X -> Moves to left-right
// Y -> Moves up-down
// Z -> Moves front-back
sixthWall.position.set(-4.5, 1.45, 3.845);
sixthWall.rotation.y = Math.PI / 2;
sixthWall.receiveShadow = true;
sixthWall.castShadow = true;

// Seventh wall
var seventhGeometry = new THREE.BoxGeometry(wallWidth, wallHeight, 5);
    
var seventhWall = new THREE.Mesh(seventhGeometry, wallMaterial);

// X -> Moves to left-right
// Y -> Moves up-down
// Z -> Moves front-back
seventhWall.position.set(-4.3, 1.45, -3.845);
seventhWall.rotation.y = Math.PI / 2;
seventhWall.receiveShadow = true;
seventhWall.castShadow = true;

// Eigth wall
var eigthGeometry = new THREE.BoxGeometry(wallWidth, wallHeight, 3);
    
var eigthWall = new THREE.Mesh(eigthGeometry, wallMaterial);

// X -> Moves to left-right
// Y -> Moves up-down
// Z -> Moves front-back
eigthWall.position.set(5.845, 1.45, 5.5);
eigthWall.receiveShadow = true;
eigthWall.castShadow = true;

// Ninth wall
var ninthGeometry = new THREE.BoxGeometry(wallWidth, wallHeight, 1.05);
    
var ninthWall = new THREE.Mesh(ninthGeometry, wallMaterial);

// X -> Moves to left-right
// Y -> Moves up-down
// Z -> Moves front-back
ninthWall.position.set(5.845, 1.45, -4.45);
ninthWall.receiveShadow = true;
ninthWall.castShadow = true;

// Tenth wall
var tenthGeometry = new THREE.BoxGeometry(wallWidth, wallHeight, 1.1);
    
var tenthWall = new THREE.Mesh(tenthGeometry, wallMaterial);

// X -> Moves to left-right
// Y -> Moves up-down
// Z -> Moves front-back
tenthWall.position.set(6.25, 1.45, -3.845);
tenthWall.rotation.y = Math.PI / 2;
tenthWall.receiveShadow = true;
tenthWall.castShadow = true;

// Eleventh wall
var eleventhGeometry = new THREE.BoxGeometry(wallWidth, wallHeight, 9);
    
var eleventhWall = new THREE.Mesh(eleventhGeometry, wallMaterial);

// X -> Moves to left-right
// Y -> Moves up-down
// Z -> Moves front-back
eleventhWall.position.set(2.5, 1.45, 3.845);
eleventhWall.rotation.y = Math.PI / 2;
eleventhWall.receiveShadow = true;
eleventhWall.castShadow = true;

// Fourth door - in Eleventh wall
var fourthDoorGeometry = new THREE.BoxGeometry(1, 2.5, 1);

// Door hole mesh
var fourthDoorMesh = new THREE.Mesh(fourthDoorGeometry);
fourthDoorMesh.rotation.y = Math.PI / 2;
fourthDoorMesh.position.set(2, 0.8, 4);

var fifthCSG = new CSG();
fifthCSG.subtract( [eleventhWall, fourthDoorMesh] );

var eleventhWallWithDoor = fifthCSG.toMesh();
eleventhWallWithDoor.material = wallMaterial;

// Twelth wall
var twelthGeometry = new THREE.BoxGeometry(wallWidth, wallHeight, 5.2);
    
var twelthWall = new THREE.Mesh(twelthGeometry, wallMaterial);

// X -> Moves to left-right
// Y -> Moves up-down
// Z -> Moves front-back
twelthWall.position.set(4, 1.45, -2);
twelthWall.rotation.y = -Math.PI / 4;
twelthWall.receiveShadow = true;
twelthWall.castShadow = true;

// This one was hard to setup >_> :
// Thirteenth wall
var thirteenthGeometry = new THREE.BoxGeometry(wallWidth, wallHeight, 4.1);
    
var thirteenthWall = new THREE.Mesh(thirteenthGeometry, wallMaterial);

// X -> Moves to left-right
// Y -> Moves up-down
// Z -> Moves front-back
thirteenthWall.position.set(0.22, 1.45, -0.2);
thirteenthWall.rotation.y = Math.PI / 2;
thirteenthWall.receiveShadow = true;
thirteenthWall.castShadow = true;

// Fifth door - in Thirteenth wall
var fifthDoorGeometry = new THREE.BoxGeometry(1, 2.5, 1);

// Door hole mesh
var fifthDoorMesh = new THREE.Mesh(fifthDoorGeometry);
fifthDoorMesh.rotation.y = Math.PI / 2;
fifthDoorMesh.position.set(0.22, 0.8, 0);

var sixthCSG = new CSG();
sixthCSG.subtract( [thirteenthWall, fifthDoorMesh] );

var thirteenthWallWithDoor = sixthCSG.toMesh();
thirteenthWallWithDoor.material = wallMaterial;


// Wall objects group additure
wallObjects.add(firstWallWithWindow);
wallObjects.add(secondWallWithDoor);
wallObjects.add(thirdWallWithWindow);
wallObjects.add(fourthWall);
wallObjects.add(fifthWallWithDoors);
wallObjects.add(sixthWall);
wallObjects.add(seventhWall);
wallObjects.add(eigthWall);
wallObjects.add(ninthWall);
wallObjects.add(tenthWall);
wallObjects.add(eleventhWallWithDoor);
wallObjects.add(twelthWall);
wallObjects.add(thirteenthWallWithDoor);

scene.add(wallObjects);