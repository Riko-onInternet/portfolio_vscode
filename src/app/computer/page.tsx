"use client";

import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { useEffect } from 'react';

export default function Computer() {
  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('scene-container')?.appendChild(renderer.domElement);

    // Illuminazione
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Pavimento
    const floorGeometry = new THREE.PlaneGeometry(10, 10);
    const floorMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x333333,
      roughness: 0.8 
    });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = -Math.PI / 2;
    scene.add(floor);

    // Carica il modello del tavolo
    const tableLoader = new GLTFLoader();
    tableLoader.load(
      '/models/victorian_style_tabledesk.glb',
      function (gltf) {
        const table = gltf.scene;
        table.scale.set(0.005, 0.005, 0.005);
        table.position.set(0, 1, 0);
        table.rotation.y = Math.PI / 2;
        scene.add(table);

        const box = new THREE.Box3().setFromObject(table);
        const size = box.getSize(new THREE.Vector3());
        console.log('Dimensioni tavolo:', size);
      }
    );

    // Carica il modello del computer
    const computerLoader = new GLTFLoader();
    computerLoader.load(
      '/models/old-pc/source/PSX_PC.glb',
      function (gltf) {
        const computer = gltf.scene;
        computer.scale.set(0.5, 0.5, 0.5);
        computer.position.set(0, 0.7, 0); // Posizionalo sul tavolo
        scene.add(computer);
      }
    );

    camera.position.set(0, 1, 6);
    camera.lookAt(0, 1, 0);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      document.getElementById('scene-container')?.removeChild(renderer.domElement);
    };
  }, []);

  return <div id="scene-container" className="w-full h-screen" />;
}