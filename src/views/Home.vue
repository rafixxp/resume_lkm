<template>
  <!-- Hero Section -->
  <section class="hero-section min-h-screen flex items-center justify-center relative overflow-hidden">
    <div id="threejs-canvas" class="absolute inset-0 z-0"></div>
    <div class="container mx-auto px-4 pt-10 md:px-8 lg:px-16 relative z-10">
      <div class="text-center max-w-5xl mx-auto">
        <div class="fade-up inline-block">
          <span class="text-xs font-semibold tracking-widest text-white uppercase border border-blue-400/30 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full mb-6 inline-block">
            🚀 Welcome to Kelompok 13
          </span>
        </div>
        
        <h1 class="fade-up delay-1 text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-600 leading-tight mb-6">
          Kobarkan Semangat
          <span class="text-gray-800">Kepemimpinan</span>
        </h1>
        
        <p class="fade-up delay-2 text-gray-300 text-lg sm:text-xl leading-relaxed mb-10 max-w-3xl mx-auto">
          Jelajahi lebih lanjut materi kepemimpinan pada website ini
        </p>
 
        <div class="fade-up delay-3 flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <router-link to="/materi" class="bg-gray-800 hover:bg-gray-700 text-white font-semibold px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg">
            <span class="flex items-center gap-2">
              Mulai Jelajahi Materi
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </span>
          </router-link>
        </div>
      </div>
    </div>
  </section>

  <!-- Team Section -->
  <!-- <section class="py-20">
    <div class="container mx-auto px-4 md:px-8 lg:px-16">
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl font-bold text-dark mb-4">
          Tim Kami
        </h2>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">
         Ada beberapa orang dibalik proses development
        </p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div class="tool-card group text-black relative bg-white rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
          <div class="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-blue-900/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div class="relative z-10 text-center">
            <div class="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">GitHub</h3>
            <p class="text-gray-400 text-sm">Version control & collaboration platform</p>
          </div>
        </div>

        <div class="tool-card group text-black relative bg-white rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
          <div class="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-blue-900/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div class="relative z-10 text-center">
            <div class="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none">
                <path d="M12 1L24 22H0L12 1Z" fill="#000000"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Vercel</h3>
            <p class="text-gray-400 text-sm">Powerful code editor & IDE</p>
          </div>
        </div>

        <div class="tool-card group text-black relative bg-white rounded-2xl p-8 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105">
          <div class="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-orange-900/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div class="relative z-10 text-center">
            <div class="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-git" viewBox="0 0 16 16">
                <path d="M15.698 7.287 8.712.302a1.03 1.03 0 0 0-1.457 0l-1.45 1.45 1.84 1.84a1.223 1.223 0 0 1 1.55 1.56l1.773 1.774a1.224 1.224 0 0 1 1.267 2.025 1.226 1.226 0 0 1-2.002-1.334L8.58 5.963v4.353a1.226 1.226 0 1 1-1.008-.036V5.887a1.226 1.226 0 0 1-.666-1.608L5.093 2.465l-4.79 4.79a1.03 1.03 0 0 0 0 1.457l6.986 6.986a1.03 1.03 0 0 0 1.457 0l6.953-6.953a1.03 1.03 0 0 0 0-1.457"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Git</h3>
            <p class="text-gray-400 text-sm">Distributed version control system</p>
          </div>
        </div>

        <div class="tool-card group text-black relative bg-white rounded-2xl p-8 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105">
          <div class="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-green-900/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div class="relative z-10 text-center">
            <div class="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-javascript" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zM9.053 7.596v3.127l-.007 1.752q0 .498-.186.752t-.556.263q-.342 0-.528-.234-.185-.234-.185-.684v-.175H6.37v.185q0 .665.253 1.113.255.45.703.674.44.225 1.016.225.88 0 1.406-.498.527-.498.527-1.485l.007-1.752V7.596zm3.808-.108q-.585 0-1.006.244a1.67 1.67 0 0 0-.634.674 2.1 2.1 0 0 0-.225.996q0 .753.293 1.182.303.42.967.732l.469.215q.438.186.625.43.185.244.185.635 0 .478-.166.703-.156.224-.527.224-.361.001-.547-.244-.186-.243-.205-.752h-1.162q.02.996.498 1.524.479.527 1.386.527.909 0 1.417-.518.507-.517.507-1.484 0-.81-.332-1.289t-1.045-.79l-.449-.196q-.39-.166-.556-.381-.166-.214-.166-.576 0-.4.165-.596.177-.195.508-.195.361 0 .508.234.156.234.176.703h1.123q-.03-.976-.498-1.484-.47-.518-1.309-.518"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Node.js</h3>
            <p class="text-gray-400 text-sm">JavaScript runtime for server-side</p>
          </div>
        </div>
      </div>
    </div>
  </section> -->
  
  <!-- Tools Section -->
  <section class="py-20">
    <div class="container mx-auto px-4 md:px-8 lg:px-16">
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl font-bold text-dark mb-4">
          Teknologi yang Kami Gunakan
        </h2>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">
         Beberapa tools yang digunakan dalam proses development
        </p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <!-- GitHub -->
        <div class="tool-card group text-black relative bg-white rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
          <div class="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-blue-900/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div class="relative z-10 text-center">
            <div class="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">GitHub</h3>
            <p class="text-gray-400 text-sm">Version control & collaboration platform</p>
          </div>
        </div>

        <!-- VS Code -->
        <div class="tool-card group text-black relative bg-white rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
          <div class="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-blue-900/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div class="relative z-10 text-center">
            <div class="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none">
                <path d="M12 1L24 22H0L12 1Z" fill="#000000"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Vercel</h3>
            <p class="text-gray-400 text-sm">Powerful code editor & IDE</p>
          </div>
        </div>

        <!-- Git -->
        <div class="tool-card group text-black relative bg-white rounded-2xl p-8 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105">
          <div class="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-orange-900/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div class="relative z-10 text-center">
            <div class="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-git" viewBox="0 0 16 16">
                <path d="M15.698 7.287 8.712.302a1.03 1.03 0 0 0-1.457 0l-1.45 1.45 1.84 1.84a1.223 1.223 0 0 1 1.55 1.56l1.773 1.774a1.224 1.224 0 0 1 1.267 2.025 1.226 1.226 0 0 1-2.002-1.334L8.58 5.963v4.353a1.226 1.226 0 1 1-1.008-.036V5.887a1.226 1.226 0 0 1-.666-1.608L5.093 2.465l-4.79 4.79a1.03 1.03 0 0 0 0 1.457l6.986 6.986a1.03 1.03 0 0 0 1.457 0l6.953-6.953a1.03 1.03 0 0 0 0-1.457"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Git</h3>
            <p class="text-gray-400 text-sm">Distributed version control system</p>
          </div>
        </div>

        <!-- Node.js -->
        <div class="tool-card group text-black relative bg-white rounded-2xl p-8 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105">
          <div class="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-green-900/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div class="relative z-10 text-center">
            <div class="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-javascript" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zM9.053 7.596v3.127l-.007 1.752q0 .498-.186.752t-.556.263q-.342 0-.528-.234-.185-.234-.185-.684v-.175H6.37v.185q0 .665.253 1.113.255.45.703.674.44.225 1.016.225.88 0 1.406-.498.527-.498.527-1.485l.007-1.752V7.596zm3.808-.108q-.585 0-1.006.244a1.67 1.67 0 0 0-.634.674 2.1 2.1 0 0 0-.225.996q0 .753.293 1.182.303.42.967.732l.469.215q.438.186.625.43.185.244.185.635 0 .478-.166.703-.156.224-.527.224-.361.001-.547-.244-.186-.243-.205-.752h-1.162q.02.996.498 1.524.479.527 1.386.527.909 0 1.417-.518.507-.517.507-1.484 0-.81-.332-1.289t-1.045-.79l-.449-.196q-.39-.166-.556-.381-.166-.214-.166-.576 0-.4.165-.596.177-.195.508-.195.361 0 .508.234.156.234.176.703h1.123q-.03-.976-.498-1.484-.47-.518-1.309-.518"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Node.js</h3>
            <p class="text-gray-400 text-sm">JavaScript runtime for server-side</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import * as THREE from 'three'

let animationId = null
let renderer = null
let particleLayers = []
let pointLights = []

const initThreeJS = () => {
  const container = document.getElementById('threejs-canvas')
  if (!container) return

  // Scene setup
  const scene = new THREE.Scene()
  
  // Camera setup
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )
  camera.position.z = 8

  // Renderer setup
  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(window.devicePixelRatio)
  container.appendChild(renderer.domElement)

  // Elegant particle system with multiple layers
  const createParticleLayer = (count, size, colorRange, speedMultiplier) => {
    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const velocities = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      // Create spherical distribution
      const radius = Math.random() * 15 + 5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = radius * Math.cos(phi)

      // Elegant colors (blue to purple gradient)
      const hue = 0.6 + Math.random() * 0.15 // Blue to purple
      const saturation = 0.6 + Math.random() * 0.4
      const lightness = 0.4 + Math.random() * 0.3
      const color = new THREE.Color()
      color.setHSL(hue, saturation, lightness)
      
      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b

      // Orbital velocities
      velocities[i * 3] = (Math.random() - 0.5) * 0.001 * speedMultiplier
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.001 * speedMultiplier
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.001 * speedMultiplier
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    const material = new THREE.PointsMaterial({
      size: size,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    })

    return {
      mesh: new THREE.Points(geometry, material),
      velocities: velocities
    }
  }

  // Create multiple particle layers for depth
  const layer1 = createParticleLayer(300, 0.03, [0.6, 0.75], 0.5)
  const layer2 = createParticleLayer(200, 0.05, [0.65, 0.8], 0.8)
  const layer3 = createParticleLayer(100, 0.08, [0.7, 0.85], 1.2)

  scene.add(layer1.mesh)
  scene.add(layer2.mesh)
  scene.add(layer3.mesh)

  // Add subtle ambient lighting
  const ambientLight = new THREE.AmbientLight(0x404080, 0.3)
  scene.add(ambientLight)

  // Add glowing point lights
  const pointLight1 = new THREE.PointLight(0x6080ff, 1, 20)
  pointLight1.position.set(10, 5, 10)
  scene.add(pointLight1)

  const pointLight2 = new THREE.PointLight(0x8060ff, 1, 20)
  pointLight2.position.set(-10, -5, -10)
  scene.add(pointLight2)

  // Store references for animation
  particleLayers = [layer1, layer2, layer3]
  pointLights = [pointLight1, pointLight2]

  // Handle window resize
  const handleResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  }
  window.addEventListener('resize', handleResize)

  // Elegant animation loop
  const animate = () => {
    animationId = requestAnimationFrame(animate)

    const time = Date.now() * 0.001

    // Animate each particle layer with different patterns
    particleLayers.forEach((layer, index) => {
      const positions = layer.mesh.geometry.attributes.position.array
      const velocities = layer.velocities

      for (let i = 0; i < positions.length; i += 3) {
        // Orbital motion
        const x = positions[i]
        const y = positions[i + 1]
        const z = positions[i + 2]

        const radius = Math.sqrt(x * x + y * y + z * z)
        const theta = Math.atan2(y, x)
        const phi = Math.acos(z / radius)

        const newTheta = theta + velocities[i] * (index + 1)
        const newPhi = phi + velocities[i + 1] * (index + 1) * 0.5

        positions[i] = radius * Math.sin(newPhi) * Math.cos(newTheta)
        positions[i + 1] = radius * Math.sin(newPhi) * Math.sin(newTheta)
        positions[i + 2] = radius * Math.cos(newPhi)

        // Add subtle pulsing
        const pulseFactor = 1 + Math.sin(time * 2 + i * 0.01) * 0.02
        positions[i] *= pulseFactor
        positions[i + 1] *= pulseFactor
        positions[i + 2] *= pulseFactor
      }

      layer.mesh.geometry.attributes.position.needsUpdate = true

      // Rotate entire layer
      layer.mesh.rotation.x += 0.0002 * (index + 1)
      layer.mesh.rotation.y += 0.0003 * (index + 1)
    })

    // Animate lights
    pointLights.forEach((light, index) => {
      light.intensity = 1 + Math.sin(time * 2 + index) * 0.3
      light.position.x = Math.sin(time * 0.5 + index) * 15
      light.position.y = Math.cos(time * 0.3 + index) * 8
    })

    // Subtle camera movement
    camera.position.x = Math.sin(time * 0.1) * 2
    camera.position.y = Math.cos(time * 0.15) * 1
    camera.lookAt(0, 0, 0)

    renderer.render(scene, camera)
  }

  animate()
}

onMounted(() => {
  initThreeJS()
})

onBeforeUnmount(() => {
  if (animationId) {
    cancelAnimationFrame(animationId)
  }
  if (renderer) {
    renderer.dispose()
  }
})
</script>

<style scoped>
  :root {
    --blue: #2563EB;
    --blue-light: #EFF6FF;
    --dark: #0f172a;
    --mid: #475569;
    --soft: #94a3b8;
    --bg: #f8fafc;
    --card-radius: 16px;
  }

  body {
    font-family: 'DM Sans', sans-serif;
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
    color: var(--dark);
    margin: 0;
  }

  h1, h2, h3, h4, .logo-text {
    font-family: 'Sora', sans-serif;
  }

  /* Hero Section */
  .hero-section {
    min-height: 100vh;
    position: relative;
    overflow: hidden;
  }

  #threejs-canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  /* Animations */
  .fade-up {
    opacity: 0;
    transform: translateY(30px);
    animation: fadeUp 0.8s ease forwards;
  }

  .fade-up.delay-1 {
    animation-delay: 0.2s;
  }

  .fade-up.delay-2 {
    animation-delay: 0.4s;
  }

  .fade-up.delay-3 {
    animation-delay: 0.6s;
  }

  .fade-up.delay-4 {
    animation-delay: 0.8s;
  }

  @keyframes fadeUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Tool Cards */
  .tool-card {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .tool-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }

  /* Feature Cards */
  .feature-card {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .feature-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }

  /* Container */
  .container {
    max-width: 1280px;
    margin: 0 auto;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .hero-section {
      padding: 2rem 1rem;
    }
    
    .fade-up h1 {
      font-size: 2.5rem;
    }
    
    .tool-card, .feature-card {
      transform: none;
    }
  }

  /* Smooth Scroll */
  html {
    scroll-behavior: smooth;
  }

  /* Custom Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #1e293b;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #2563EB, #7c3aed);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(135deg, #1d4ed8, #6d28d9);
  }

  /* Button Hover Effects */
  button {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  button:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  /* Text Selection */
  ::selection {
    background: rgba(37, 99, 235, 0.3);
    color: white;
  }

  /* Focus States */
  button:focus,
  a:focus {
    outline: 2px solid #2563EB;
    outline-offset: 2px;
  }
</style>