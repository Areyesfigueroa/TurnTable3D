
//SCENE
var scene = new THREE.Scene();

//CAMERA
var camera = new THREE.PerspectiveCamera(75, 
    window.innerWidth/window.innerHeight, .1, 1000); 

//Move camera back.
camera.position.z = 5;

//RENDERER
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//LIGHTS
var light = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light);

var light2 = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light2);

//MODEL
var loader = new THREE.JSONLoader();
loader.load('Models/monkey.json', handle_load);

var monkeyMesh;
function handle_load(geometry, materials)
{
    var material = new THREE.MeshNormalMaterial();
    monkeyMesh = new THREE.Mesh(geometry, material);
    scene.add(monkeyMesh);
}

//RENDER LOOP
render();


function render()
{
    //Animation Code goes here. Updates every page refresh.
    renderer.render(scene, camera);

    if(monkeyMesh)
    {
        monkeyMesh.rotate.x += 0.1;
    }
    requestAnimationFrame(render);

}



