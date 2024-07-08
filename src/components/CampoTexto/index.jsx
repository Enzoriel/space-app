import styled from "styled-components";

const CampoTextoEstilos = styled.div`
  display: flex;
  align-items: center;
  .buscar {
    position: absolute;
    right: 30px;
    width: 30px;
  }
  input {
    box-sizing: border-box;
    margin: 0 20px 0 0;
    color: white;
    outline: none;
    width: 566px;
    border: 2px solid #c98cf1;
    border-radius: 10px;
    background-color: transparent;
    padding: 10px;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
  }
`;

const CampoTexto = (props) => {
  return (
    <CampoTextoEstilos>
      <input type="text" placeholder="¿Qué estás buscando?"></input>
      <img className="buscar" src="img/search.png" alt="Busqueda" {...props} />
    </CampoTextoEstilos>
  );
};

export default CampoTexto;
