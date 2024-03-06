//https://www.patreon.com/posts/33008649
//https://threejs-journey.com/

import { OrbitControls } from "https://unpkg.com/three@0.112/examples/jsm/controls/OrbitControls.js";


//Variables for setup

let container;
let renderer;
let scene;
let controls;

function minion3js() {
  container = document.querySelector(".mario");

  //Create scene
  scene = new THREE.Scene();

  const sizes =  {
    width: window.innerWidth,
    height: window.innerHeight
  }
  //Camera setup
  const camera = new THREE.PerspectiveCamera( 60, sizes.width / sizes.height, .01, 100)
  camera.position.set (8,3,10)

  const ambient = new THREE.AmbientLight(0xffffff, 2);
  scene.add(ambient);

  const light = new THREE.DirectionalLight(0xffffff, 2);
  light.position.set(20, 80, 100);
  scene.add(light);
  //Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  container.appendChild(renderer.domElement);

  //Load Model
  let loader = new THREE.GLTFLoader();
  loader.load("./mario/scene.gltf", function(gltf) {
    scene.add(gltf.scene);

  });

  // controls
  controls = new OrbitControls( camera, renderer.domElement );


controls.enableDamping = true
controls.enablePan = false
controls.enableZoom = true
controls.autoRotate = true
controls.autoRotateSpeed = .1


console.log(controls)

const loop = () => {
  controls.update()
  renderer.render (scene,camera);
  window.requestAnimationFrame(loop)
}

loop()
}

minion3js();
