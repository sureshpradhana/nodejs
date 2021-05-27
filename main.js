/*
const three = require('three');
const scene = new three.Scene();
// Option 2: Import just the parts you need.
console.log(three)
*/
//const THREE = require('three');
const THREE =require('three');
//creatig a scene
const scene = new THREE.Scene();
//visible object is called mesh
//we are going to create a red cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

//camera
const size = {
  width: 800,
  height: 600,
};
const camera = new THREE.PerspectiveCamera(75, size.width / size.height);
camera.position.z = 3;
scene.add(camera);
//renderer
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});renderer.setSize(size.width,size.height)
renderer.render(scene, camera);
