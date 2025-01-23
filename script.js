document.addEventListener("DOMContentLoaded", () => {
    // Update footer dates
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    document.getElementById("currentYear").textContent = currentYear;
    document.getElementById("lastModified").textContent = lastModified;

    // Calculate and display wind chill
    const temperature = 10; // °C
    const windSpeed = 5; // km/h

    const calculateWindChill = (temp, wind) => {
        if (temp <= 10 && wind > 4.8) {
            return (
                13.12 +
                0.6215 * temp -
                11.37 * Math.pow(wind, 0.16) +
                0.3965 * temp * Math.pow(wind, 0.16)
            ).toFixed(1);
        }
        return "N/A";
    };

    const windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById("windChill").textContent = windChill;
});
