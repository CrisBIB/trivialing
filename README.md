![image](https://github.com/CrisBIB/trivialing/blob/main/src/Images/README/Portrait.png)

[Trivialis](https://crisbib.github.io/trivialing/#/) es un trivial de números que retará tu conocimiento, tu cultura general ¡y también tu lógica! [READY TO QUIZ?](https://crisbib.github.io/trivialing/#/quizpage)

## Descripción y funcionamiento

Es una SPA con una página de inicio básica (_landing page_), con el nombre, el logo y un botón _READY TO QUIZ?_, que al hacer click lleva a la página del juego (_quiz page_). Esta segunda página es el componente principal, el cual alberga el resto de componentes, así como sus estados, haciendo que el flujo de la app mantenga una lógica ordenada y coherente. Cuando se monta, se hace una llamada al API de [Numbers API](http://numbersapi.com/#42)

El juego consta de 10 preguntas, cuya respuesta siempre es un número. Se ofrecen cuatro posibles opciones y 15 segundos para responder. En la parte superior, se puede ver un marcador que señala el número de pregunta en el que estamos, así cómo una barra de progreso que cambia de color cada 5 segundos, y que sirve de indicador del tiempo restante. Una vez finalizado el tiempo, la barra de progreso se reinicia, la respuesta correcta aparece debajo de las opciones y se indica el resultado (_acierto, fallo u omisión_) en el panel de resultados, en la parte inferior de la página.

Para pasar a la siguiente pregunta, hay que hacer click en el botón _Next question_. Si se prefiere, se puede responder la pregunta antes de que finalicen los 15 segundos, haciendo click en el botón _Confirm answer_. Estos botones de deshabilitan alternativamente, dependiendo de si la pregunta está o no activa para responder. Al llegar a la décima pregunta, los botones desaparecen, y debajo del panel de resultados aparece el botón _Play again_, que lleva de vuelta a la _landing page_ cuando se hace click sobre él.

## Próximas iteraciones

El factor tiempo siempre es determinante, y siete días me han permitido llegar a este grado de desarrollo, pero no completar el proyecto al 100%.

Como puntos de mejora para sucesivas iteraciones, identifico:

1.  Implementación de test por cada componente, con [JEST](https://jestjs.io/) y [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).
2.  Persistencia en el estado del juego, de modo que al recargar la página todo continue donde se quedó.
3.  Restructuración de la lógica que permita comprobar si la respuesta dada es la correcta, y que se refleje en el panel de resultados, para que se haga de manera global y no en un único componente. Esto permitirá aaceder a los resultados en cualquier momento.
4.  Diseño responsive para más variedad de tamaños de pantalla.
5.  README más elaborado.

## Estructura

```
TRIVIALING
├── docs
├── publicnode_modules
├── public
├── src
│ ├── Components
│ │ ├── AnswerList.js
│ │ ├── App.js
│ │ ├── ButtonPlayAgain.js
│ │ ├── Buttons.js
│ │ ├── CorrectInput.js
│ │ ├── Counter.js
│ │ ├── Footer.js
│ │ ├── Header.js
│ │ ├── LandingPage.js
│ │ ├── Question.js
│ │ ├── QuizPage.js
│ │ ├── RandonInputs.js
│ │ └── TimeLine.js
│ ├── Images
│ ├── Services
│ │ ├── Api.js
│ │ └── LocalStorage.js
│ ├── Styles
│ │ ├── App.scss
│ │ ├── index.scss
│ │ └── time.scss
│ └── index.js
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

## Instalación

Si quieres instalar y ejecutar el proyecto completo, sigue los siguientes pasos:

1. Clona este repositorio
2. Entra en la carpeta raíz `src`
3. Ejecuta en la terminal `npm install` para instalar las dependencias y `npm install --save styled-components` para instalar la librería Styled Components
4. Lanza el proyecto con `npm start`

## Herramientas de desarrollo

![React](https://img.shields.io/badge/-React-%2361DAFB?logo=react&logoColor=white)
![HTML5](https://img.shields.io/badge/-HTML5-%23E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/-CSS3-%231572B6?logo=css3&logoColor=white)
![Bootstrap](https://img.shields.io/badge/-Bootstrap-%237952B3?logo=bootstrap&logoColor=white)
![Gulp](https://img.shields.io/badge/-Gulp-%23CF4647?logo=Gulp&logoColor=white)
![VSCode](https://camo.githubusercontent.com/31d79cd7978fd59e2cfb1cb2b91279ae0b4fcfdd3a3e86741eaddcb145987948/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d5653253230436f64652d3030374143432e7376673f7374796c653d666c6174266c6162656c266c6f676f3d76697375616c2d73747564696f2d636f6465266c6f676f436f6c6f723d7768697465)
