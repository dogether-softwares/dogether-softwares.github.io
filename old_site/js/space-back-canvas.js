function startStarsOnBody() {
    (function () {
        var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
                window.setTimeout(callback, 1000 / 60);
            };
        window.requestAnimationFrame = requestAnimationFrame;
      })();
  
      // Terrain stuff.
      var background = document.createElement('canvas'),
          bgCtx = background.getContext("2d"), width = 500, height = 500
          width = window.innerWidth
          height = window.innerHeight
          background.width = width;
          background.height = height;
  
  
      // Second canvas used for the stars
      bgCtx.fillStyle = '#e39400';
      bgCtx.fillRect(0, 0, width, height);
  
      // stars
      function Star(options) {
          this.size = Math.random() * 2;
          this.speed = Math.random() * .05;
          this.x = options.x;
          this.y = options.y;
      }
  
      Star.prototype.reset = function () {
          this.size = Math.random() * 2;
          this.speed = Math.random() * 1;
          this.x = width;
          this.y = Math.random() * height;
      }
  
      Star.prototype.update = function () {
          this.x -= this.speed;
          if (this.x < 0) {
              this.reset();
          } else {
              bgCtx.fillRect(this.x, this.y, this.size, this.size);
          }
      }
  
      function ShootingStar() {
          this.reset();
      }
  
      ShootingStar.prototype.reset = function () {
          this.x = Math.random() * width;
          this.y = 0;
          this.len = (Math.random() * 80) + 10;
          this.speed = (Math.random() * 10) + 6;
          this.size = (Math.random() * 1) + 0.1;
          // this is used so the shooting stars arent constant
          this.waitTime = new Date().getTime() + (Math.random() * 3000) + 500;
          this.active = false;
      }
  
      ShootingStar.prototype.update = function () {
          if (this.active) {
              this.x -= this.speed;
              this.y += this.speed;
              if (this.x < 0 || this.y >= height) {
                  this.reset();
              } else {
                  bgCtx.lineWidth = this.size;
                  bgCtx.beginPath();
                  bgCtx.moveTo(this.x, this.y);
                  bgCtx.lineTo(this.x + this.len, this.y - this.len);
                  bgCtx.stroke();
              }
          } else {
              if (this.waitTime < new Date().getTime()) {
                  this.active = true;
              }
          }
      }
      
      var entities = [];
  
      for (var i = 0; i < height * 1.5; i++) {
            entities.push({type: 'star', value: new Star({
              x: Math.random() * width,
              y: Math.random() * height
            })});
          }
          width = window.innerWidth
          height = window.innerHeight
          background.width = width;
          background.height = height;
  
      setInterval(() => {
  
        if (width != window.innerWidth || height != window.innerHeight) {
          entities = entities.filter( t => t && t.type !== 'star' );
    
          for (var i = 0; i < height * 3; i++) {
            entities.push({type: 'star', value: new Star({
              x: Math.random() * width,
              y: Math.random() * height
            })});
          }
          width = window.innerWidth
          height = window.innerHeight
          background.width = width;
          background.height = height;
        }
  
      }, 100);
      
      // init the stars
      
      // Add 2 shooting stars that just cycle.
      entities.push({type: 'shotstar' , value: new ShootingStar()});
      entities.push({type: 'shotstar' , value: new ShootingStar()});
      entities.push({type: 'shotstar' , value: new ShootingStar()});
      entities.push({type: 'shotstar' , value: new ShootingStar()});
      entities.push({type: 'shotstar' , value: new ShootingStar()});
      entities.push({type: 'shotstar' , value: new ShootingStar()});
      //animate background
      function animate() {
      
      bgCtx.fillStyle = '#03056b';
      bgCtx.fillRect(0, 0, width, height);
      bgCtx.fillStyle = '#ffffff';
          bgCtx.strokeStyle = '#ffffff';
  
          var entLen = entities.length;
  
          while (entLen--) {
              entities[entLen].value.update();
            }
            requestAnimationFrame(animate);
        }
    
      animate();

    setInterval(() => {
        document.body.style.background = 'url(' + background.toDataURL() + ')';
    },0)
}
  