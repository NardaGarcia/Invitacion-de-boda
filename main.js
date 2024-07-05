// Establece la fecha límite de la cuenta regresiva (puedes cambiar esta fecha)
const endDate = new Date('October 14, 2040 16:59:50').getTime();

// Actualiza el contador cada segundo
const timer = setInterval(function() {
  // Obtiene la fecha y hora actual
  const now = new Date().getTime();
  
  // Encuentra la distancia entre la fecha límite y la fecha y hora actual
  const distance = endDate - now;
  
  // Calcula los meses, días, horas, minutos y segundos restantes
  const months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30));
  const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Muestra el resultado en los elementos HTML<<s
  document.getElementById('months').innerText = formatTime(months);
  document.getElementById('days').innerText = formatTime(days);
  document.getElementById('hours').innerText = formatTime(hours);
  document.getElementById('minutes').innerText = formatTime(minutes);
  document.getElementById('seconds').innerText = formatTime(seconds);
  
  // Si la cuenta regresiva ha terminado, detiene el contador
  if (distance < 0) {
    clearInterval(timer);
    document.querySelector('.countdown-container').innerHTML = "<h2>Countdown Finished!</h2>";
  }
}, 1000); // Actualiza cada segundo

// Función para dar formato al tiempo con dos dígitos (agrega ceros a la izquierda si es necesario)
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}