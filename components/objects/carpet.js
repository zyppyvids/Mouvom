// Texture setup
var texture = new THREE.TextureLoader().load(carpetTile);

texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set(2, 5);
texture.anisotropy = MAX_ANISOTROPY;

var carpetMaterial = new THREE.MeshPhongMaterial({map: texture});

var carpetGeometry = new THREE.BoxGeometry(3, 0.05, 6);
    
var carpet = new THREE.Mesh(carpetGeometry, carpetMaterial);

// X -> Moves to left-right
// Y -> Moves up-down
// Z -> Moves front-back
carpet.position.set(-4.35, 0, 0);
carpet.receiveShadow = true;
carpet.castShadow = true;

scene.add(carpet);