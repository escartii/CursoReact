const string = "esto es un texto";
const numero = 123;
const array = ["curso de react", "youtube", 4];
const boolean = true;
const funcion = () => 1+1 
const objeto = { nombre: "Curso de JavaScript", duracion: 8 }
const fecha = new Date()

// primerComponente.jsx
// para que se ejecute una función hay que poner paréntesis
// para pasar un objeto hay que usar JSON.stringify
export const PrimerComponente = () => {
    return (
        // Fragmento (debe de estar dentro de un padre)
      <>
        <h1>variables en JSX</h1>
        <h4> Variable tipo String:</h4> <p> {string}</p>
        <h4> Variable tipo numero:</h4> <p> {numero}</p>
        <h4> Variable tipo array:</h4> <p> {array}</p>
        <h4> Variable tipo boolean:</h4> <p> {boolean}</p>
        <h4> Variable tipo funcion:</h4> <p> {string}</p>
        <h4> Variable tipo string:</h4> <p> {funcion()}</p>
      </>
    );
  };
  
