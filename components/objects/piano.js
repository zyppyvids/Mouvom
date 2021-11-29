// Piano implementation
var pianoObjects = new THREE.Group();

var outerMaterial = new THREE.MeshPhongMaterial({ color: "#242424" });
var keyMaterial = new THREE.MeshPhongMaterial({ color: "white" });

// Outer box
var firstGeometry = new THREE.BoxGeometry(2, 0.5, 1);
    
var outerBox = new THREE.Mesh(firstGeometry, outerMaterial);

outerBox.position.set(6, 1.3, 0);
outerBox.rotation.y = Math.PI / 2;

// Outer box hole
var firstHoleGeometry = new THREE.BoxGeometry(1.8, 0.3, 0.8);

var firstHoleMesh = new THREE.Mesh(firstHoleGeometry);

firstHoleMesh.position.set(5.9, 1.5, 0);
firstHoleMesh.rotation.y = Math.PI / 2;

var firstCSG = new CSG();
firstCSG.subtract( [outerBox, firstHoleMesh] );

var outerBoxWithHole = firstCSG.toMesh();
outerBoxWithHole.material = outerMaterial;

// First key
var secondGeometry = new THREE.BoxGeometry(0.1, 0.13, 0.8);
    
var firstKey = new THREE.Mesh(secondGeometry, keyMaterial);

firstKey.position.set(5.85, 1.5, -0.75);
firstKey.rotation.y = Math.PI / 2;

// Second key
var thirdGeometry = new THREE.BoxGeometry(0.1, 0.13, 0.8);
    
var secondKey = new THREE.Mesh(thirdGeometry, keyMaterial);

secondKey.position.set(5.85, 1.5, -0.6);
secondKey.rotation.y = Math.PI / 2;

// Third key
var fourthGeometry = new THREE.BoxGeometry(0.1, 0.13, 0.8);
    
var thirdKey = new THREE.Mesh(fourthGeometry, keyMaterial);

thirdKey.position.set(5.85, 1.5, -0.45);
thirdKey.rotation.y = Math.PI / 2;

// Fourth key
var fifthGeometry = new THREE.BoxGeometry(0.1, 0.13, 0.8);
    
var fourthKey = new THREE.Mesh(fifthGeometry, keyMaterial);

fourthKey.position.set(5.85, 1.5, -0.3);
fourthKey.rotation.y = Math.PI / 2;

// Fifth key
var sixthGeometry = new THREE.BoxGeometry(0.1, 0.13, 0.8);
    
var fifthKey = new THREE.Mesh(sixthGeometry, keyMaterial);

fifthKey.position.set(5.85, 1.5, -0.15);
fifthKey.rotation.y = Math.PI / 2;

// Sixth key
var seventhGeometry = new THREE.BoxGeometry(0.1, 0.13, 0.8);
    
var sixthKey = new THREE.Mesh(seventhGeometry, keyMaterial);

sixthKey.position.set(5.85, 1.5, 0);
sixthKey.rotation.y = Math.PI / 2;

// Seventh key
var eigthGeometry = new THREE.BoxGeometry(0.1, 0.13, 0.8);
    
var seventhKey = new THREE.Mesh(eigthGeometry, keyMaterial);

seventhKey.position.set(5.85, 1.5, 0.15);
seventhKey.rotation.y = Math.PI / 2;

// Eight key
var ninthGeometry = new THREE.BoxGeometry(0.1, 0.13, 0.8);
    
var eightKey = new THREE.Mesh(ninthGeometry, keyMaterial);

eightKey.position.set(5.85, 1.5, 0.3);
eightKey.rotation.y = Math.PI / 2;

// Ninth key
var tenthGeometry = new THREE.BoxGeometry(0.1, 0.13, 0.8);
    
var ninthKey = new THREE.Mesh(tenthGeometry, keyMaterial);

ninthKey.position.set(5.85, 1.5, 0.45);
ninthKey.rotation.y = Math.PI / 2;

// Tenth key
var eleventhGeometry = new THREE.BoxGeometry(0.1, 0.13, 0.8);
    
var tenthKey = new THREE.Mesh(eleventhGeometry, keyMaterial);

tenthKey.position.set(5.85, 1.5, 0.6);
tenthKey.rotation.y = Math.PI / 2;

// Eleventh key
var twelvthGeometry = new THREE.BoxGeometry(0.1, 0.13, 0.8);
    
var eleventhKey = new THREE.Mesh(twelvthGeometry, keyMaterial);

eleventhKey.position.set(5.85, 1.5, 0.75);
eleventhKey.rotation.y = Math.PI / 2;

// First leg
var thirteenthGeometry = new THREE.BoxGeometry(0.3, 2, 2);

var firstLeg = new THREE.Mesh(thirteenthGeometry, outerMaterial);

firstLeg.position.set(6.45, 1, 0);

// Second leg
var fourteenthGeometry = new THREE.BoxGeometry(0.9, 1.05, 1.6);

var secondLeg = new THREE.Mesh(fourteenthGeometry, outerMaterial);

secondLeg.position.set(6, 0.525, 0);


pianoObjects.add(outerBoxWithHole);

// Keys additure
pianoObjects.add(firstKey);
pianoObjects.add(secondKey);
pianoObjects.add(thirdKey);
pianoObjects.add(fourthKey);
pianoObjects.add(fifthKey);
pianoObjects.add(sixthKey);
pianoObjects.add(seventhKey);
pianoObjects.add(eightKey);
pianoObjects.add(ninthKey);
pianoObjects.add(tenthKey);
pianoObjects.add(eleventhKey);

// Leg additure
pianoObjects.add(firstLeg);
pianoObjects.add(secondLeg);

scene.add(pianoObjects);