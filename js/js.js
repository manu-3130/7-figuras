//PRIMERA FIGURA
//ESCENARIO
const scene = new THREE.Scene();
var loader = new THREE.TextureLoader();

loader.load("../text/imagen1.jpg", function(texture){
    scene.background = texture;
});

//CAMARA
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//RENDER
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//GEOMETRIA
const x = 0, y = 0;

//LLADO IMAGEN
const heartShape = new THREE.Shape();

//SE LE APLICA TEXTURA
const textureLoader = new THREE.TextureLoader();
const matcap = textureLoader.load("/text/imagen1.jpg")

//FIGURA
heartShape.moveTo( x + 5, y + 5 );
heartShape.bezierCurveTo( x + 5, y + 5, x + 4, y, x, y );
heartShape.bezierCurveTo( x - 6, y, x - 6, y + 7,x - 6, y + 7 );
heartShape.bezierCurveTo( x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19 );
heartShape.bezierCurveTo( x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7 );
heartShape.bezierCurveTo( x + 16, y + 7, x + 16, y, x + 10, y );
heartShape.bezierCurveTo( x + 7, y, x + 5, y + 5, x + 5, y + 5 );

//LINEAS
const geometry = new THREE.ShapeGeometry( heartShape );
const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line );

//TEXTURA
const material1 = new THREE.MeshMatcapMaterial();
material1.matcap = matcap;
material1.flatShading = true;

//LLAMADO DE LA TEXTURA
const mesh = new THREE.Mesh( geometry, material1 ) ;
scene.add( mesh );

camera.position.z = 25;
camera.position.x = -10;

//FUNCION
function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
    mesh.rotation.x += 0.02;
    mesh.rotation.y += 0.02;
    line.rotation.x += 0.02
    line.rotation.y += 0.02
}





animate();