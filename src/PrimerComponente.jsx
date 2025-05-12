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
      <div>
        <h1>{ JSON.stringify(objeto) }</h1>
      </div>
    );
  };
  
