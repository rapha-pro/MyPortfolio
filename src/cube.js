import * as THREE from "three";
import {html, css, python, java, javascript, react_logo, tailwind} from "./assets/index";
import WebGL from 'three/addons/capabilities/WebGL.js';

export default function Cube() {
  const geometry = new THREE.BoxGeometry();
  const texture1 = new THREE.TextureLoader().load(tailwind);
  const texture2 = new THREE.TextureLoader().load(python);
  const texture3 = new THREE.TextureLoader().load(html);
  const texture4 = new THREE.TextureLoader().load(javascript);
  const texture5 = new THREE.TextureLoader().load(react_logo);
  const texture6 = new THREE.TextureLoader().load(css);

  const textureUrls = [];

  textureUrls.push(new THREE.MeshBasicMaterial({ map: texture1 }));
  textureUrls.push(new THREE.MeshBasicMaterial({ map: texture4 }));
  textureUrls.push(new THREE.MeshBasicMaterial({ map: texture3 }));
  textureUrls.push(new THREE.MeshBasicMaterial({ map: texture6 }));
  textureUrls.push(new THREE.MeshBasicMaterial({ map: texture5 }));
  textureUrls.push(new THREE.MeshBasicMaterial({ map: texture2 }));

  const cube = new THREE.Mesh(geometry, textureUrls);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, 100 / 100, 0.1, 1000);
  camera.position.z = 2;

  scene.background = new THREE.Color('#212428');
  scene.add(cube);

  return { cube, scene, camera };
}
