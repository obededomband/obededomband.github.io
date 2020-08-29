const shakeState = {
    DORMANT: 0,
    SHAKING: 1,
    FLIPPED: 2
}

var wait = ms => new Promise((r, j)=>setTimeout(r, ms))

var FlipService = function(element){
    this.element = element;
    this.state = shakeState.DORMANT;
}
FlipService.prototype.UpdateClass = function(){
    console.log("Why must I update?");
    switch(this.state){
        case shakeState.DORMANT:
            this.StartShaking();
            break;
        case shakeState.SHAKING:
            this.Flip();
            break;
        case shakeState.FLIPPED:
            this.GoDormant();
            break;
    }
}
FlipService.prototype.StartShaking = function(){
    console.log("I can't stay still");
    this.state = shakeState.SHAKING;
    $(this.element).addClass("shakeElement");
    setTimeout(function(){this.UpdateClass()}.bind(this), 1000);
}
FlipService.prototype.Flip = function(){
    console.log("Is this how you should feel?")
    this.state = shakeState.FLIPPED;
    $(this.element).removeClass("shakeElement");
    $(this.element).addClass("flipElement");
    setTimeout(function(){this.UpdateClass()}.bind(this), 1000);
}
FlipService.prototype.GoDormant = function(){
    console.log("Just let me sleep");
    this.state = shakeState.DORMANT;
    $(this.element).removeClass("flipElement");
    setTimeout(function(){this.UpdateClass()}.bind(this), 3000);
}
FlipService.prototype.Run = function(){
    console.log("This is where we start...");
    setTimeout(function(){this.UpdateClass()}.bind(this), 3000);
}