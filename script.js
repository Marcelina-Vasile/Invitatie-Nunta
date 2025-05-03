
        const weddingDate = new Date("July 13, 2025 15:00:00").getTime();
        
        // Update the countdown every 1 second
        const countdown = setInterval(function() {
            // Get today's date and time
            const now = new Date().getTime();
            
            // Find the distance between now and the wedding date
            const distance = weddingDate - now;
            
            // Time calculations for days, hours, minutes and seconds
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            // Display the result
            document.getElementById("days").innerHTML = days < 10 ? "0" + days : days;
            document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
            document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
            document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;
            
            // If the countdown is finished, display zeros
            if (distance < 0) {
                clearInterval(countdown);
                document.getElementById("days").innerHTML = "00";
                document.getElementById("hours").innerHTML = "00";
                document.getElementById("minutes").innerHTML = "00";
                document.getElementById("seconds").innerHTML = "00";
            }
        }, 1000);
