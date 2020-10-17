// startStarsOnBody comes from space-back-canvas.js
startStarsOnBody();

function setParallax(id = '', option = { invert: true }) {
    if (!id) throw 'error on set parallax id';
    var scene = document.getElementById(id);
    // var parallaxInstance = new Parallax(scene);
    const inputElement = new Parallax(scene,  {
        hoverOnly: false,
        invertY: option.invert,
        invertX: option.invert,
        clipRelativeInput: true
      });
      inputElement.friction(0.05, 0.05);
}

[{ id: 'logo_', invert: false }, { id: 'astronault_', invert: true }, { id: 'moon_', invert: false }].forEach(v => setParallax(v.id, { invert: v.invert }));