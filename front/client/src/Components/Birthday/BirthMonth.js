export function obtenerNombreMes(numeroMes) {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June', 
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
  
    return months[numeroMes - 1];
  }