import { useState } from 'react';
import './App.css';
import Conjugaciones from './components/Conjugaciones';

function App() {
  return (
    <div className='App'>
      <h1 className='tit-prin'>Conjugaciones de Verbos en Español</h1> 
      <p className='parra-prin'>
        Aprende a conjugar los verbos más comunes en español, estudiando los diferentes tiempos verbales, observando ejemplos y modos de uso.
      </p>

      <Conjugaciones
        tiempo="Pasado simple"
        concepto="El pasado simple es un tiempo verbal que se utiliza para expresar acciones que comenzaron y terminaron en un momento específico del pasado. Una característica importante es que no indica si la acción continúa en el presente; su enfoque está completamente en un hecho ya concluido."
        verbos={[
          {
            verbo: "Ir",
            "pri-persona": "YO: Fui",
            "seg-persona": "TU: Fuiste",
            "ter-persona": "ÉL/Ella: Fue",
            "priplu-persona": "NOSOTROS: Fuimos",
            "segplu-persona": "VOSOTROS/USTEDES: Fuisteis/Fueron",
            "terplu-persona": "ELLOS/ELLAS: Fueron",
            ejemplo: "<i>Ejemplo: Ayer fui al cine, Tú fuiste aceptado en la universidad, Él/Ella fue invitada al baile, Nosotros fuimos al cine el sábado, Ustedes/Ellos fueron muy amables ayer.</i>"
          },
          {
            verbo: "Tener",
            "pri-persona": "YO: Tuve",
            "seg-persona": "TU: Tuviste",
            "ter-persona": "ÉL/Ella: Tuvo",
            "priplu-persona": "NOSOTROS: Tuvimos",
            "segplu-persona": "VOSOTROS/USTEDES: Tuvisteis/Tuvieron",
            "terplu-persona": "ELLOS/ELLAS: Tuvieron",
            ejemplo: "<i>Ejemplo: Ayer tuve una reunión, Tú tuviste un examen, Él/Ella tuvo una fiesta, Nosotros tuvimos un buen tiempo, Ustedes/Ellos tuvieron éxito en el proyecto.</i>"
          },
          {
            verbo: "Haber",
            "pri-persona": "YO: Hube",
            "seg-persona": "TU: Hubiste",
            "ter-persona": "ÉL/Ella: Hubo",
            "priplu-persona": "NOSOTROS: Hubimos",
            "segplu-persona": "VOSOTROS/USTEDES: Hubisteis/Hubieron",
            "terplu-persona": "ELLOS/ELLAS: Hubieron",
            ejemplo: "<i>Ejemplo (menos común en uso personal): Ayer hube terminado mi tarea, Tú hubiste visto la película, Él/Ella hubo llegado tarde, Nosotros hubimos completado el proyecto, Ustedes/Ellos hubieron discutido el tema.</i>"
          }
        ]}
      />

      <Conjugaciones
        tiempo="Pretérito perfecto"
        concepto="El pretérito perfecto es un tiempo verbal que se usa para expresar acciones pasadas que tienen una conexión con el presente, como experiencias o hechos recientes. Se forma con el verbo haber + participio."
        verbos={[
          {
            verbo: "Ir",
            "pri-persona": "YO: He ido",
            "seg-persona": "TU: Has ido",
            "ter-persona": "ÉL/Ella: Ha ido",
            "priplu-persona": "NOSOTROS: Hemos ido",
            "segplu-persona": "VOSOTROS/USTEDES: Habéis ido/Han ido",
            "terplu-persona": "ELLOS/ELLAS: Han ido",
            ejemplo: "<i>Ejemplo: Hoy he ido al mercado, Tú has ido a la playa esta semana, Él/Ella ha ido al médico recientemente, Nosotros hemos ido al cine últimamente, Ustedes/Ellos han ido de vacaciones.</i>"
          },
          {
            verbo: "Tener",
            "pri-persona": "YO: He tenido",
            "seg-persona": "TU: Has tenido",
            "ter-persona": "ÉL/Ella: Ha tenido",
            "priplu-persona": "NOSOTROS: Hemos tenido",
            "segplu-persona": "VOSOTROS/USTEDES: Habéis tenido/Han tenido",
            "terplu-persona": "ELLOS/ELLAS: Han tenido",
            ejemplo: "<i>Ejemplo: Hoy he tenido una reunión, Tú has tenido un examen esta semana, Él/Ella ha tenido una fiesta recientemente, Nosotros hemos tenido un buen tiempo últimamente, Ustedes/Ellos han tenido éxito en el proyecto.</i>"
          },
          {
            verbo: "Haber",
            "pri-persona": "YO: He habido",
            "seg-persona": "TU: Has habido",
            "ter-persona": "ÉL/Ella: Ha habido",
            "priplu-persona": "NOSOTROS: Hemos habido",
            "segplu-persona": "VOSOTROS/USTEDES: Habéis habido/Han habido",
            "terplu-persona": "ELLOS/ELLAS: Han habido",
            ejemplo: "<i>Ejemplo (menos común en uso personal): Hoy he habido terminado mi tarea, Tú has habido visto la película, Él/Ella ha habido llegado tarde, Nosotros hemos habido completado el proyecto, Ustedes/Ellos han habido discutido el tema.</i><br><b>Nota:</b> Lo común es usar 'haber' en forma impersonal, como: Ha habido muchas quejas. Han habido varios cambios. (menos aceptado, pero usado coloquialmente)"
          }
        ]}
      />

      <Conjugaciones
        tiempo="Pretérito pluscuamperfecto del subjuntivo"
        concepto="El pluscuamperfecto del subjuntivo se usa para hablar de acciones hipotéticas o no realizadas en el pasado, que ocurrieron antes de otro hecho también pasado. Se forma con el verbo haber en imperfecto del subjuntivo (hubiera o hubiese) + participio."
        verbos={[
          {
            verbo: "Ir",
            "pri-persona": "YO: Hubiera ido",
            "seg-persona": "TU: Hubieras ido",
            "ter-persona": "ÉL/Ella: Hubiera ido",
            "priplu-persona": "NOSOTROS: Hubiéramos ido",
            "segplu-persona": "VOSOTROS/USTEDES: Hubierais ido/Hubieran ido",
            "terplu-persona": "ELLOS/ELLAS: Hubieran ido",
            ejemplo: "<i>Ejemplo: Yo hubiera ido si me lo pedías, tú hubieras ido con gusto, él/ella hubiera ido temprano, nosotros hubiéramos ido a ayudarte, ustedes/ellos hubieran ido sin problema.</i>"
          },
          {
            verbo: "Tener",
            "pri-persona": "YO: Hubiera tenido",
            "seg-persona": "TU: Hubieras tenido",
            "ter-persona": "ÉL/Ella: Hubiera tenido",
            "priplu-persona": "NOSOTROS: Hubiéramos tenido",
            "segplu-persona": "VOSOTROS/USTEDES: Hubierais tenido/Hubieran tenido",
            "terplu-persona": "ELLOS/ELLAS: Hubieran tenido",
            ejemplo: "<i>Ejemplo: Yo hubiera tenido más cuidado, tú hubieras tenido otra oportunidad, él/ella hubiera tenido razón, nosotros hubiéramos tenido tiempo, ustedes/ellos hubieran tenido éxito.</i>"
          },
          {
            verbo: "Haber",
            "pri-persona": "YO: Hubiera habido",
            "seg-persona": "TU: Hubieras habido",
            "ter-persona": "ÉL/Ella: Hubiera habido",
            "priplu-persona": "NOSOTROS: Hubiéramos habido",
            "segplu-persona": "VOSOTROS/USTEDES: Hubierais habido/Hubieran habido",
            "terplu-persona": "ELLOS/ELLAS: Hubieran habido",
            ejemplo: "<i>Ejemplo: Si no fuera por eso, hubiera habido menos conflictos. Si todo salía bien, tú hubieras habido otra opción (raro), él hubiera habido una excusa (no natural), nosotros hubiéramos habido una respuesta (no usual), ustedes hubieran habido más razones (coloquial y poco aceptado).</i><br><b>Nota:</b> El verbo 'haber' en pluscuamperfecto del subjuntivo se usa casi exclusivamente en forma impersonal como 'hubiera habido'. Las otras formas con sujeto suenan poco naturales."
          }
        ]}
      />
      
    </div>
  );
}

export default App;
