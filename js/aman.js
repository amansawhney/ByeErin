/**
 * Created by amansawhney on 6/30/17.
 */
var colorTime = 0,
    waveTheta = 0,
    maxCount = 100,
    colorIncrement = -12,
    waveIncrement = 0.1,
    xPos = [ -2, -1, 0, 1, 2 ],
    yPos = [ -2, -1, 0, 1, 2 ],
    props = {};

var getTextShadow = function( x, y, hue ) {
    return ', ' + x + 'px ' + y + 'px hsl(' + hue + ', 100%, 50%)';
};

var animate = function() {
    var shadows = '0 0 transparent',
        hue0 = colorTime % 360,
        i, j, x, y,
        iLen = xPos.length,
        jLen = yPos.length;

    // outline
    for ( i = 0; i < iLen; i++ ) {
        x = xPos[i];
        for ( j = 0; j < jLen; j++ ) {
            y = yPos[j];
            shadows += getTextShadow( x, y, hue0 );
        }
    }

    // renders rainbow river
    for ( i = 1; i < maxCount; i++ ) {
        var normI = i / maxCount,
            hue = ( normI * 360 * 2 + colorTime ) % 360;
        x = ~~( ( Math.sin( normI * Math.PI * 2 + waveTheta ) - Math.sin( waveTheta ) )  * 50 );
        y = i * 3;
        shadows += getTextShadow( x, y, hue );
    }

    props.groovy.style.textShadow = shadows;
    colorTime += colorIncrement;
    waveTheta += waveIncrement;
    setTimeout( animate, 30 );
};

var init = function() { props.groovy = document.getElementById('groovy');

    setTimeout( animate, 1 );

};

window.addEventListener( 'DOMContentLoaded', init, false);