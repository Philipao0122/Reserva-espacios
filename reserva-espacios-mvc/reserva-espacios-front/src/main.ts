import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module'; // Importa el módulo raíz

// Función para arrancar la aplicación usando el módulo raíz 'AppModule'
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
