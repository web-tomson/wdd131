const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

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
  