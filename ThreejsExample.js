

//Set up the scene and viewing frostum with the camera. 
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75,
 window.innerWidth/window.innerHeight, 0.1, 1000);

//WebGL renders our scene. Set the size and add the webgl canvas to the body. 
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//Create our geometry
var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({color: 0x00ff00});
var cube = new THREE.Mesh(geometry, material);

//add to our scene. at position 0,0,0
scene.add(cube);

//Move camera back by 5 units. 
camera.position.z = 5;

//Render our scene every possible frame.
function animate()
{
    //Calls method every page refresh while we are on it. 
    requestAnimationFrame(animate);

    //Actual Animation code goes here. 
    cube.rotation.x += 0.1;
    cube.rotation.y += 0.1;

    //Render after all positions within the scene have been set. 
    renderer.render(scene, camera);
}

//function Call.
animate();