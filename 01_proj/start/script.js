function updateClock(){
    // get the element
    const timeElement = document.getElementById("time");
    const dateElement = document.getElementById("date");

    // get the current time details
    const date = new Date();
    const getSeconds = date.getSeconds().toString().padStart(2,"0");
    const getMinutes = date.getMinutes().toString().padStart(2,"0");
    const getHours = date.getHours() & 12 || 12;
    const ampm = date.getHours() >= 12 ? "PM" : "AM";


    timeElement.textContent = `${getHours}:${getMinutes}:${getSeconds} ${ampm}`;

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
    // undefined means it uses browsers default current locale
    dateElement.textContent = date.toLocaleDateString(undefined, options);

}

setInterval(updateClock,1000);
updateClock();