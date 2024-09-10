import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
 
  styleUrls: ['./app.component.css'],
 
})
export class AppComponent implements OnInit {
  title = 'my-app';
  availableSpaces = [
    { title: "Sala de Reuniones A", capacity: "20", eventType: "Reunión", date: "15 de abril de 2023" },
    { title: "Espacio de Taller", capacity: "50", eventType: "Taller", date: "5 de mayo de 2023" },
    { title: "Sala de Conferencias", capacity: "100", eventType: "Conferencia", date: "10 de junio de 2023" },
    { title: "Cancha de Baloncesto", capacity: "10", eventType: "Partido de Baloncesto", date: "3 de septiembre de 2023" },
    { title: "Piscina", capacity: "30", eventType: "Natación", date: "5 de septiembre de 2023" },
    { title: "Gimnasio", capacity: "20", eventType: "Entrenamiento", date: "7 de septiembre de 2023" },
    { title: "Sala de Juegos", capacity: "15", eventType: "Juegos de Mesa", date: "9 de septiembre de 2023" },
    { title: "Sala de Estudio Comunal", capacity: "10", eventType: "Estudio en Grupo", date: "11 de septiembre de 2023" },
    { title: "Sala de Meditación", capacity: "8", eventType: "Meditación", date: "13 de septiembre de 2023" }
  ];
  login(): void {
    // Aquí debes implementar la lógica para el login
    console.log('Login button clicked!');
  }

  filters = {
    date: '',
    capacity: '',
    eventType: ''
  };

  filteredSpaces = [...this.availableSpaces];

  ngOnInit() {
    this.applyFilters();
  }

  applyFilters() {
    this.filteredSpaces = this.availableSpaces.filter(space => {
      const dateMatch = this.filters.date ? space.date === this.filters.date : true;
      const capacityMatch = this.filters.capacity ? Number(space.capacity) >= Number(this.filters.capacity) : true;
      const eventTypeMatch = this.filters.eventType ? space.eventType === this.filters.eventType : true;
      return dateMatch && capacityMatch && eventTypeMatch;
    });
  }

  handleFilterChange(type: 'date' | 'capacity' | 'eventType', event: Event) {
    const target = event.target as HTMLInputElement | HTMLSelectElement;
    this.filters[type] = target.value;
    this.applyFilters();
  }
}
