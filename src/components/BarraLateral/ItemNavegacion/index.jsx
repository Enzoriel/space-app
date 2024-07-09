import styled from "styled-components";

const ItemListaEstilizado = styled.li``;

const ItemNavegacion = ({ children, iconoActivo, iconoInactivo, activo = false }) => {
  return (
    <ItemListaEstilizado>
      <img src={activo ? iconoActivo : iconoInactivo} alt="Icono" />
      {children}
    </ItemListaEstilizado>
  );
};

export default ItemNavegacion;
