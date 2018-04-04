$(document).ready(function () {

    particlesJS("particles-js", {"particles":{"number":{"value":220,"density":{"enable":true,density_auto:true,"value_area":2500}},"color":{"value":"#fed136"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":5,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#6c6c64","opacity":0.4,"width":1},"move":{"enable":true,"speed":1.5,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"window","events":{"onhover":{"enable":true,"mode":"grab"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});

    let app = document.getElementById('app');

    let typewriter = new Typewriter(app, {
        loop: true
    });

    typewriter.changeSettings({typingSpeed:55}).typeString('Javascripter !')
        .pauseFor(500)
        .deleteChars(14)
        .typeString('Pythonist !')
        .pauseFor(500)
        .deleteChars(11)
        .typeString('Sport Coder !')
        .pauseFor(500)
        .deleteChars(13)
        .typeString('Web Dev !')
        .pauseFor(500)
        .deleteChars(9)
        .typeString('Tech Geek !')
        .start()
});