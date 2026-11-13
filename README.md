# 🧠 UparTrivia Studio — Edición Millonario

**UparTrivia Studio** es una aplicación web interactiva inspirada en la dinámica de *"¿Quién quiere ser millonario?"* (evolución moderna de **TECHMATH**[cite: 9]). Está diseñada para docentes y estudiantes, permitiendo dinamizar el aula mediante competencias de preguntas por niveles de dificultad, uso de comodines estratégicos, gestión de perfiles docentes, carga masiva multiformato y sistema de clasificación en vivo.

---

## ✨ Características Principales

### 🎯 Dinámica de Juego ("¿Quién Quiere Ser Sabio?")
- **Escalera Progresiva de 5 Rondas:** Las preguntas avanzan a través de 5 niveles de dificultad (*Muy Fácil*, *Fácil*, *Intermedia*, *Difícil* y *Muy Difícil*)[cite: 10, 23] con puntajes crecientes (`+500` a `+4,500` puntos por pregunta)[cite: 23].
- **Sistema de Puntaje Asegurado (Pisos Seguros):** Al completar todas las preguntas de una ronda, el estudiante asegura el puntaje acumulado hasta ese momento[cite: 10, 14, 23]. Si falla más adelante, conserva ese piso asegurado[cite: 14, 23].
- **Plantarse / Retirarse:** El jugador puede retirarse voluntariamente en cualquier pregunta para asegurar el 100% de su puntaje actual sin arriesgarlo[cite: 10, 14, 23].
- **Partidas Rápidas o Clásicas:** Configura partidas de **3 preguntas por ronda** (15 en total) o **5 preguntas por ronda** (25 en total)[cite: 10, 14, 23].
- **3 Comodines Estratégicos:**
  1. **50 : 50:** Elimina automáticamente 2 opciones incorrectas.
  2. **Cambiar Pregunta:** Sustituye la pregunta actual por otra del mismo nivel de dificultad.
  3. **Pista del Público:** Simula una gráfica estadística con la tendencia de votos de la audiencia.
- **Visor Inteligente de Imágenes:** Muestra automáticamente ilustraciones de apoyo cuando la pregunta incluye una URL válida y se oculta limpiamente si no lleva imagen o el enlace externo falla.

### 📥 Centro de Carga Masiva Multiformato
Permite crear o ampliar bancos de preguntas pegando texto directamente o subiendo archivos (`.csv`, `.tsv`, `.txt`, `.json`) con plantillas descargables e instrucciones integradas:
1. **Excel / Google Sheets (`.csv` / `.tsv`):** Copia y pega rangos de celdas directamente desde hojas de cálculo (`Pregunta | Correcta | Inc 1 | Inc 2 | Inc 3 | Nivel | URL`).
2. **Texto Plano (`.txt`):** Pega listas rápidas separadas por barras (`|`), punto y coma (`;`) o dos puntos (`:`).
3. **JSON (Moderno y Clásico):** Soporta esquemas de objetos JSON modernos y mantiene retrocompatibilidad directa con la estructura de arreglos `data_` de *TECHMATH*[cite: 18, 19].

### 👨‍🏫 Perfiles Docentes y Modo Mixto
- **Perfiles por Docente:** Cada profesor puede crear su perfil para organizar sus propios bancos de preguntas por asignatura o grado.
- **Modo Temática Única o Modo Mixto:** Juega con un solo banco específico o activa la opción **"Mezclar varias temáticas"** para combinar múltiples bancos en una sola partida general.
- **Portabilidad Total:** Exporta bancos individuales o copias de seguridad completas en formato `.json`.

### 🏆 Ranking Avanzado y Audio Nativo
- **Tabla de Posiciones con Desempate por Tiempo:** Ordena automáticamente de mayor a menor puntaje; en caso de empate en puntos, el menor tiempo empleado obtiene la mejor posición[cite: 14, 24].
- **Filtros Inteligentes:** Filtra el historial por **Temática**, por **Docente** o busca directamente el nombre de un **Jugador**.
- **Efectos de Sonido (`Web Audio API`):** Sintetiza sonidos de selección, acierto, avance de ronda, comodín y error de forma 100% nativa sin depender de archivos `.mp3` externos.
- **Narrador por Voz (`SpeechSynthesis`):** Lectura en voz alta de preguntas y opciones (manual o automática) con selector de voz del navegador y ajuste de velocidad (*Lento*, *Normal*, *Rápido*).
- **Diseño Indigo Studio (Claro / Oscuro + ES / EN):** Interfaz moderna con modo claro/oscuro y traducción instantánea entre Español e Inglés.

---

## 🚀 Instalación y Uso

La aplicación funciona de forma **100% cliente** (sin servidores ni instalación de dependencias):

1. Clona este repositorio o descarga los archivos del proyecto:
   ```bash
   git clone [https://github.com/kevinluisfl/preguntas-y-respuestas.git](https://github.com/kevinluisfl/preguntas-y-respuestas.git)