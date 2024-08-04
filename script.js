document.addEventListener("DOMContentLoaded", function() {
    var ball = document.getElementById('ball');
    var mouseX = 0;
    var mouseY = 0;
    var ballX = 0;
    var ballY = 0;
    var speed = 0.1; // Adjust speed (lower is slower)

    function updatePosition() {
        var deltaX = mouseX - ballX;
        var deltaY = mouseY - ballY;
        ballX += deltaX * speed;
        ballY += deltaY * speed;
        ball.style.left = ballX + 'px';
        ball.style.top = ballY + 'px';
        requestAnimationFrame(updatePosition);
    }

    document.addEventListener("mousemove", function(event) {
        mouseX = event.pageX;
        mouseY = event.pageY;
    });

    updatePosition();

    // Add event listener for button click
    var button = document.getElementById('cta-button');
    button.addEventListener('click', function() {
        // Redirect to the desired URL
        window.location.href = 'https://astracc.mysellix.io'; // Replace with your desired URL
    });
});