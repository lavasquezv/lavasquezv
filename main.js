function init() {
    console.log(THREE);
    var scene = new THREE.Scene();
    
    scene.fog = new THREE.FogExp2(0xffffff, 0.1);
    
    var box = getBox (1, 1, 1);
    var pointLight = getPointLight(1);
    var ambientLight = getAmbientLight(0.5);
    
    pointLight.position.y = 2;
    
    
    scene.add(box);
    scene.add(pointLight);
    scene.add(ambientLight);
    
    
    var camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth/window.innerHeight,
    1,
    1000
    );
    camera.position.z = 5;
    camera.position.x = 1;
    camera.position.y = 2;
    
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor('rgb(120, 120, 120)');
    document.getElementById('webgl').appendChild(renderer.domElement);
    
    var controls = new THREE.OrbitControls(camera, renderer.domElement);
    
    update(renderer, scene, camera, controls);
    
    return scene;
}
    
    function getBox(w, h, d) {
        var geometry = new THREE.BoxGeometry(w, h, d);
        var material = new THREE.MeshPhongMaterial({
            color: 'rgb(120, 120, 120)'
        });

        var mesh = new THREE.Mesh(
            geometry,
            material
        );
        
        return mesh;
    }

    function getPointLight(intensity){
        var light = new THREE.PointLight(0xffffff, intensity);
        
        return light;
    }

    function getAmbientLight(intensity) {
        var light = new THREE.AmbientLight('rgb(255, 255, 255)', intensity);
        
        return light;
        
    }
    
    function update(renderer, scene, camera, controls) {
        renderer.render(
            scene,
            camera
        );
        
        controls.update();
        
        requestAnimationFrame(function(){
            update(renderer, scene, camera, controls);
        })
    }


var scene = init();