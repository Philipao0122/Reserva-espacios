import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'my-app';



  availableSpaces = [
    { title: "Sala de Reuniones A", capacity: "20", eventType: "Reunión", date: "2023-04-15" },
    { title: "Espacio de Taller", capacity: "50", eventType: "Taller", date: "2023-05-05" },
    { title: "Sala de Conferencias", capacity: "100", eventType: "Conferencia", date: "2023-06-10" },
    { title: "Cancha de Baloncesto", capacity: "10", eventType: "Partido de Baloncesto", date: "2023-09-03" },
    { title: "Piscina", capacity: "30", eventType: "Natación", date: "2023-09-05" },
    { title: "Gimnasio", capacity: "20", eventType: "Entrenamiento", date: "2023-09-07" },
    { title: "Sala de Juegos", capacity: "15", eventType: "Juegos de Mesa", date: "2023-09-09" },
    { title: "Sala de Estudio Comunal", capacity: "10", eventType: "Estudio en Grupo", date: "2023-09-11" },
    { title: "Sala de Meditación", capacity: "8", eventType: "Meditación", date: "2023-09-13" },
    { title: "Galpon", capacity: "50", eventType: "Fiesta", date: "2023-09-13" }
    
  ];

  

  filteredSpaces = [...this.availableSpaces];
  showResults = false;  // Bandera que controla la visibilidad de las cards

  filters = {
    date: '',
    capacity: '',
    eventType: ''
  };

  ngOnInit() {
    // Inicializamos los espacios disponibles al principio
    this.filteredSpaces = [...this.availableSpaces];
  }

  // Método que aplica todos los filtros combinados
  applyFilters() {
    this.filteredSpaces = this.availableSpaces.filter(space => {
      const dateMatch = this.filters.date ? space.date === this.filters.date : true;
      const capacityMatch = this.filters.capacity ? Number(space.capacity) >= Number(this.filters.capacity) : true;
      const eventTypeMatch = this.filters.eventType ? space.eventType === this.filters.eventType : true;
      return dateMatch && capacityMatch && eventTypeMatch;
    });

    // Activamos la bandera para mostrar los resultados
    this.showResults = true;
  }

  // Método que maneja el cambio de filtros
  handleFilterChange(filterKey: keyof typeof this.filters, event: any) {
    this.filters[filterKey] = event.target.value;
  }

  // Método que se ejecuta cuando el usuario presiona el botón de búsqueda
  search() {
    this.applyFilters();  // Aplicamos los filtros cuando el usuario presiona el botón
  }
  showLoginPopup = false;
  username = '';
  password = '';


  login() {
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    
    if (this.username && this.password) {
      console.log('Usuario:', this.username);
      console.log('Contraseña:', this.password);
      this.showLoginPopup = false; // Cierra el pop-up
    } else {
      console.error('Faltan datos de inicio de sesión');
    }
  }
  
}
