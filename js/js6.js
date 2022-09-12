//SEXTA FIGURA
//ESCENARIO
const scene = new THREE.Scene();
var loader = new THREE.TextureLoader();

/* loader.load("../text/imagen6.jpg", function(texture){
    scene.background = texture;
}); */

//CAMARA
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//RENDER
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//GEOMETRIA
const geometry1 = new THREE.RingGeometry( 1, 5, 32 );

const textureLoader1 = new THREE.TextureLoader();
const matcap1 = textureLoader1.load("/text/imagen6.jpg")

const edges1 = new THREE.EdgesGeometry( geometry1 );
const line1 = new THREE.LineSegments( edges1, new THREE.LineBasicMaterial( { color: 0xF53D00 } ) );
scene.add( line1 );

const material6 = new THREE.MeshMatcapMaterial();
material6.matcap = matcap1;
material6.flatShading = true;

const mesh = new THREE.Mesh( geometry1, material6 );
scene.add( mesh );

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const geometry2 = new THREE.CircleGeometry( 3, 30 );

const textureLoader2 = new THREE.TextureLoader();
const matcap2 = textureLoader2.load("/text/imagen6.jpg")

const edges2 = new THREE.EdgesGeometry( geometry2 );
const line2 = new THREE.LineSegments( edges2, new THREE.LineBasicMaterial( { color: 0xFFE02E } ) );
scene.add( line2 );

const material2 = new THREE.MeshMatcapMaterial();
material2.matcap = matcap2;
material2.flatShading = true;

const circle = new THREE.Mesh( geometry2, material2 );
scene.add( circle );

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

const geometry3 = new THREE.BoxGeometry( 1, 1, 1 );

const textureLoader3 = new THREE.TextureLoader();
const matcap3 = textureLoader3.load("/text/imagen6.jpg")

const edges3 = new THREE.EdgesGeometry( geometry3 );
const line3 = new THREE.LineSegments( edges3, new THREE.LineBasicMaterial( { color: 0x35E853 } ) );
scene.add( line3 );

const material3 = new THREE.MeshMatcapMaterial();
material3.matcap = matcap3;
material3.flatShading = true;

const cube = new THREE.Mesh( geometry3, material3 );
scene.add( cube );

//////////////////////////////////////////////////////////////////////////////////////////////////////////////


const geometry4 = new THREE.ConeGeometry( 1, 5, 10 );

const textureLoader4 = new THREE.TextureLoader();
const matcap4 = textureLoader4.load("/text/imagen6.jpg")

const edges4 = new THREE.EdgesGeometry( geometry4 );
const line4 = new THREE.LineSegments( edges4, new THREE.LineBasicMaterial( { color: 0x2E91FF } ) );
scene.add( line4 );

const material4 = new THREE.MeshMatcapMaterial();
material4.matcap = matcap4;
material4.flatShading = true;

const cone = new THREE.Mesh( geometry4, material4 );
scene.add( cone );



let arreglo = [cone, line1, cube, line2, circle, line3, mesh, line4]

const controls = new THREE.DragControls(arreglo, camera, renderer.domElement);

const flycontrols = new THREE.FlyControls(camera, renderer.domElement)
flycontrols.movementSpeed = 50;
flycontrols.reollSpeed = 0.01
flycontrols.autoForward =false
flycontrols.dragToLock = false;

controls.addEventListener("hoveron", function(event){
    event.object.material.wireframe = true;
    event.object.scale.y *= 2;
})

controls.addEventListener("hoveroff", function(event){
    event.object.material.wireframe = false;
    event.object.scale.y /= 2;
})

/* const control = new THREE.PointerLockControls(camera, renderer.domElement)
document.getElementById("btnplay").onclick = () => {
    control.lock()
} */

/* var control = new THREE.OrbitControls(camera, renderer.domElement)
control.minDistance = 3
control.maxDistance = 15 */


cone.position.x = -20;
cube.position.x = -3;
circle.position.x = 0;
mesh.position.x = 15;

line4.position.x = -20;
line3.position.x = -3;
line2.position.x = 0;
line1.position.x = 15;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

cone.position.z = 8;
cube.position.z = 20;
circle.position.z = 10;
mesh.position.z = 5;

line4.position.z = 8;
line3.position.z = 20;
line2.position.z = 10;
line1.position.z = 5;

camera.position.z = 25



//FUNCION
function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
/*     mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
    line1.rotation.x += 0.01
    line1.rotation.y += 0.01 */

    flycontrols.update(0.5)
}

animate();