import styled from "styled-components";
import tags from "./tags.json";

const TagTitulo = styled.h3`
  color: #d9d9d9;
  font-size: 20px;
  margin: 0;
`;
const Button = styled.button`
  color: #ffffff;
  background: rgba(217, 217, 217, 0.3);
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding: 12px;
  box-sizing: border-box;
  border: 1px solid transparent;
  &:hover {
    border-color: #c98cf1;
  }
`;

const TagsContainer = styled.div`
  margin: 10px 0;
  display: flex;
  gap: 64px;
  align-items: center;
  margin-top: 56px;
`;

const Div = styled.div`
  display: flex;
  gap: 24px;
  justify-content: end;
`;

const Tag = ({ setTag }) => {
  return (
    <>
      <TagsContainer>
        <TagTitulo>Buscar por tags:</TagTitulo>
        <Div>
          {tags.map((tag) => {
            return (
              <Button key={tag.id} onClick={() => setTag(tag.tag)}>
                {tag.titulo}
              </Button>
            );
          })}
        </Div>
      </TagsContainer>
    </>
  );
};

export default Tag;
