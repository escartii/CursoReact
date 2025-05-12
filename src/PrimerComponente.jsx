import PropTypes from 'prop-types';
export const PrimerComponente = ({titulo, subtitulo = 'Seccion de Props'}) => {
    return (
      <>
        <h1> {titulo} </h1>
        <h2> {subtitulo} </h2>
      </>
    );
};
  
PrimerComponente.PropTypes = {
    titulo: PropTypes.string.isRequired,
    subtitulo: PropTypes.number.isRequired
}