
import * as THREE from 'three';
import css from './css/style.css';
//import fluidFrag from './shaders/fluidFrag.js';
import advection from './shaders/advection.js';
import poisson1 from './shaders/pressurePoisson1.js';
import poisson2 from './shaders/pressurePoisson2.js';
import projection from './shaders/projection.js';
import finalFrag from './shaders/finalFrag.js';
import vertex from './shaders/vertex.js';
import imgMobile from './hippoSqrd.jpeg';
import imgDesktop from './hippoLg.jpeg';

export default class Main
{
  constructor()
  {
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.mouse = {x: this.width / 2, y: this.height / 2};

    // if screen is larger than tablet we will index 1 to select larger img
    this.screenSize = (this.width < 768) ? 0 : 1;

    this.img = [ new THREE.TextureLoader().load(imgMobile), new THREE.TextureLoader().load(imgDesktop) ];

    // parameters for fluid simulation
    this.dt = 2.0;
    this.dx = 1.0;
    this.nu = 0.00001;

    this.animate = this.animate.bind(this);
    this.scene_setup();
    this.buffer_texture_setup();

    document.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = this.height - e.clientY;
    })

    document.addEventListener('mousedown', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = this.height - e.clientY;
      this.mouse.z = 1.0
    })

    document.addEventListener('mouseup', (e) => {
      this.mouse.z = 0.0
    })

    // mobile events
    document.addEventListener('touchmove', (e) => {
      //this.mouse.x = e.clientX;
      this.mouse.x = e.changedTouches[0].clientX;
      this.mouse.y = this.height - e.changedTouches[0].clientY;
    })

    document.addEventListener('touchstart', (e) => {
      this.mouse.x = e.changedTouches[0].clientX;
      this.mouse.y = this.height - e.changedTouches[0].clientY;
      this.mouse.z = 1.0;
    })

    document.addEventListener('touchend', (e) => {
      this.mouse.z = 0.0;
    })

    this.animate();
  }

  scene_setup(){
		//This is the basic scene setup
		this.scene = new THREE.Scene();

		//Note that we're using an orthographic camera here rather than a prespective
		this.camera = new THREE.OrthographicCamera( this.width / - 2, this.width / 2, this.height / 2, this.height / - 2, 1, 1000 );
		this.camera.position.z = 2;

		this.renderer = new THREE.WebGLRenderer();
		this.renderer.setSize( this.width, this.height );
    this.renderer.setPixelRatio(document.devicePixelRatio)
		document.body.appendChild( this.renderer.domElement );
  }


  buffer_texture_setup(){
		//Create buffer scene
		this.advectionScene = new THREE.Scene();
		this.p1Scene = new THREE.Scene();
    this.p2Scene = new THREE.Scene();
		this.projectionScene = new THREE.Scene();


    this.pass1 = new THREE.WebGLRenderTarget( this.width, this.height,
      // each pass needs these setting or simulation will not work, im guessing the pixel to pixel length is off and all the passes become unstable
      {
        minFilter: THREE.LinearFilter,
        magFilter: THREE.LinearFilter,
        format: THREE.RGBAFormat,
        type: THREE.FloatType,
        stencilBuffer: false
      });

    this.pass2 = new THREE.WebGLRenderTarget( this.width, this.height,
      {
        minFilter: THREE.LinearFilter,
        magFilter: THREE.LinearFilter,
        format: THREE.RGBAFormat,
        type: THREE.FloatType,
        stencilBuffer: false
      });

    this.pass3 = new THREE.WebGLRenderTarget( this.width, this.height,
      {
        minFilter: THREE.LinearFilter,
        magFilter: THREE.LinearFilter,
        format: THREE.RGBAFormat,
        type: THREE.FloatType,
        stencilBuffer: false
      });

    this.pass4 = new THREE.WebGLRenderTarget( this.width, this.height,
    {
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      format: THREE.RGBAFormat,
      type: THREE.FloatType,
      stencilBuffer: false
    });


    this.advectionMaterial = new THREE.ShaderMaterial( {
			uniforms: {
			 bufferTexture: { type: "t", value: null },
			 res : {type: 'v2',value:new THREE.Vector2(this.width,this.height)},//Keeps the resolution
       mouse: { type: 'v2', value: new THREE.Vector4(0, 0, 0, 0)},
       iTime: { type: 'f', value: 0.0},
       dt: { value: this.dt},
       dx: { value: this.dx},
       nu: { value: this.nu}
			},
      vertexShader: vertex.vertex,
			fragmentShader: advection.advection
		} );

    this.p1Material = new THREE.ShaderMaterial( {
      uniforms: {
       bufferTexture: { type: "t", value: null },
       res : {type: 'v2',value:new THREE.Vector2(this.width,this.height)},//Keeps the resolution
       dt: { value: this.dt},
       dx: { value: this.dx},
       nu: { value: this.nu}
      },
      vertexShader: vertex.vertex,
      fragmentShader: poisson1.poisson1
    } );

    this.p2Material = new THREE.ShaderMaterial( {
      uniforms: {
       bufferTexture: { type: "t", value: null },
       res : {type: 'v2',value:new THREE.Vector2(this.width,this.height)},//Keeps the resolution
       dt: { value: this.dt},
       dx: { value: this.dx},
       nu: { value: this.nu}
      },
      vertexShader: vertex.vertex,
      fragmentShader: poisson2.poisson2
    } );

    this.projectionMaterial = new THREE.ShaderMaterial( {
      uniforms: {
       bufferTexture: { type: "t", value: null },
       res : {type: 'v2',value:new THREE.Vector2(this.width,this.height)},//Keeps the resolution
       dt: { value: this.dt},
       dx: { value: this.dx},
       nu: { value: this.nu}
      },
      vertexShader: vertex.vertex,
      fragmentShader: projection.projection
    } );

    this.renderedMaterial = new THREE.ShaderMaterial( {
      uniforms: {
       bufferTexture: { type: "t", value: null},
       imgTexture: { type: "t", value: this.img[this.screenSize]},
       res : {type: 'v2',value:new THREE.Vector2(this.width,this.height)},//Keeps the resolution
      },
      vertexShader: vertex.vertex,
      fragmentShader: finalFrag.finalFrag
    } );

		this.plane = new THREE.PlaneBufferGeometry( this.width, this.height );

		this.bufferAdvection = new THREE.Mesh( this.plane, this.advectionMaterial );
		this.bufferP1 = new THREE.Mesh( this.plane, this.p1Material );
		this.bufferP2 = new THREE.Mesh( this.plane, this.p2Material );
		this.bufferProjection = new THREE.Mesh( this.plane, this.projectionMaterial );

    this.advectionScene.add(this.bufferAdvection);
    this.p1Scene.add(this.bufferP1);
    this.p2Scene.add(this.bufferP2);
    this.projectionScene.add(this.bufferProjection);

    this.finalMesh = new THREE.Mesh(this.plane, this.renderedMaterial);

    this.scene.add(this.finalMesh)

  }


  		//Render everything!
  		animate() {
  		  requestAnimationFrame( this.animate );

  		  this.advectionMaterial.uniforms.mouse.value.x = this.mouse.x;
  		  this.advectionMaterial.uniforms.mouse.value.y = this.mouse.y;
  		  this.advectionMaterial.uniforms.mouse.value.z = this.mouse.z;

  		  //this.advectionMaterial.uniforms.mouse.value.w = 1.0;

        // rendering the render targets to the scenes
        this.renderer.setRenderTarget(this.pass1);
        this.renderer.render(this.advectionScene, this.camera);
        this.renderer.setRenderTarget(null);
        this.renderer.clear();

        this.renderer.setRenderTarget(this.pass2);
        this.renderer.render(this.p1Scene, this.camera);
        this.renderer.setRenderTarget(null);
        this.renderer.clear();

        this.renderer.setRenderTarget(this.pass3);
        this.renderer.render(this.p2Scene, this.camera);
        this.renderer.setRenderTarget(null);
        this.renderer.clear();

        this.renderer.setRenderTarget(this.pass4);
        this.renderer.render(this.projectionScene, this.camera);
        this.renderer.setRenderTarget(null);
        this.renderer.clear();

        // as we enter the rendered pass to the shaders the will execute and now we can switch the texture and chain them together to preserve state
        this.advectionMaterial.uniforms.bufferTexture.value = this.pass4.texture;
        this.p1Material.uniforms.bufferTexture.value = this.pass1.texture;
        this.p2Material.uniforms.bufferTexture.value = this.pass2.texture;
        this.projectionMaterial.uniforms.bufferTexture.value = this.pass3.texture;

        // now we use this material as the final texture to render to the screen
        this.renderedMaterial.uniforms.bufferTexture.value = this.pass4.texture;

  		  this.renderer.render( this.scene, this.camera );
  		}


}

new Main();
