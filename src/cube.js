import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { python, java, cpp, nextjs, docker, javascript, database, react_logo} from './assets/index';

export default function createCube(containerElement) {
  // Only proceed if we have a container
  if (!containerElement) return null;
  
  // Clear previous content if any
  containerElement.innerHTML = '';
  
  // Create scene
  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#212428');
  
  // Create camera
  const camera = new THREE.PerspectiveCamera(75, 200 / 200, 0.1, 1000);
  camera.position.z = 2;
  
  // Create renderer with alpha for glass effect
  const renderer = new THREE.WebGLRenderer({ 
    antialias: true,
    alpha: true 
  });
  renderer.setSize(250, 250);
  renderer.setClearColor(0x000000, 0);
  containerElement.appendChild(renderer.domElement);
  
  // Create controls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.25;
  
  // Create cube with slightly larger size for better logo display
  const geometry = new THREE.BoxGeometry(1.1, 1.1, 1.1);
  
  // Load textures with a loading manager to track progress
  const loadingManager = new THREE.LoadingManager();
  const textureLoader = new THREE.TextureLoader(loadingManager);
  
  // Create materials with glass-like effect
  const createGlassMaterial = (textureUrl) => {
    const texture = textureLoader.load(textureUrl);
    texture.colorSpace = THREE.SRGBColorSpace;
    
    return new THREE.MeshPhysicalMaterial({
      map: texture,
      transparent: true,
      opacity: 0.95,
      metalness: 1.0,
      roughness: 0.1,
      envMapIntensity: 45.0,
      clearcoat: 10.0,
      clearcoatRoughness: 0.1,
      side: THREE.DoubleSide
    });
  };
  
  // Create materials for each face
  const materials = [
    createGlassMaterial(react_logo),  // Right face
    createGlassMaterial(python),      // Left face
    createGlassMaterial(docker),      // Top face
    createGlassMaterial(nextjs),      // Bottom face
    createGlassMaterial(java),        // Front face
    createGlassMaterial(cpp)          // Back face
  ];
  
  // Create cube mesh
  const cube = new THREE.Mesh(geometry, materials);
  scene.add(cube);
  
  // Add ambient light for base illumination
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);
  
  // Add directional light for highlights
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(5, 5, 5);
  scene.add(directionalLight);
  
  // Add point light for more dynamic lighting
  const pointLight = new THREE.PointLight(0xffffff, 1);
  pointLight.position.set(-5, 5, 5);
  scene.add(pointLight);
  
  // Create environment map for reflections
  const cubeRenderTarget = new THREE.WebGLCubeRenderTarget(256);
  cubeRenderTarget.texture.type = THREE.HalfFloatType;
  
  const cubeCamera = new THREE.CubeCamera(0.1, 10, cubeRenderTarget);
  scene.add(cubeCamera);
  
  // Create animation function
  let animationId = null;
  
  const animate = () => {
    animationId = requestAnimationFrame(animate);
    
    // Update the cube rotation
    cube.rotation.y += 0.002;
    
    // Update the environment map periodically for reflections
    if (Math.random() > 0.95) {
      cube.visible = false;
      cubeCamera.update(renderer, scene);
      cube.visible = true;
      
      materials.forEach(material => {
        material.envMap = cubeRenderTarget.texture;
      });
    }
    
    controls.update();
    renderer.render(scene, camera);
  };
  
  // Start animation
  animate();
  
  // Provide cleanup function
  const cleanup = () => {
    if (animationId) {
      cancelAnimationFrame(animationId);
    }
    
    if (cube) {
      scene.remove(cube);
      geometry.dispose();
      materials.forEach(material => {
        if (material.map) material.map.dispose();
        if (material.envMap) material.envMap.dispose();
        material.dispose();
      });
    }
    
    // Clean up lights
    scene.remove(ambientLight);
    scene.remove(directionalLight);
    scene.remove(pointLight);
    
    // Clean up environment mapping
    cubeRenderTarget.dispose();
    
    controls.dispose();
    renderer.dispose();
    
    if (containerElement.contains(renderer.domElement)) {
      containerElement.removeChild(renderer.domElement);
    }
  };
  
  // Return cleanup function to be called when the component is unmounted or the container is removed
  return cleanup;
}