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
  showSignupPopup = false;

  // Variables para datos del formulario de registro
  name = '';
  lastName = '';
  cedula = '';
  email = '';
  password = '';
  telefono = '';

  username = '';
  loginPassword = '';

  // Función para abrir el popup de inicio de sesión
  openLoginPopup() {
    this.showLoginPopup = true;
    this.showSignupPopup = false; // Oculta el formulario de registro si está visible
  }

  // Función para cerrar el popup de inicio de sesión
  closeLoginPopup() {
    this.showLoginPopup = false;
  }

  // Función para abrir el popup de creación de cuenta y ocultar el de inicio de sesión
  openSignupPopup() {
    this.showSignupPopup = true;
    this.showLoginPopup = false; // Oculta el formulario de inicio de sesión si está visible
  }

  // Función para cerrar el popup de creación de cuenta
  closeSignupPopup() {
    this.showSignupPopup = false;
  }

  // Función para manejar el inicio de sesión
  login() {
    console.log('Iniciando sesión:', this.username);
    this.closeLoginPopup();
  }

  // Función para manejar el registro
  register() {
    console.log('Registrando usuario:', this.name, this.lastName, this.cedula, this.email);
    this.closeSignupPopup();
  }
}