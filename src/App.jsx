import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Cabecera from "./components/Cabecera";
import BarraLateral from "./components/BarraLateral";
import Banner from "./components/Banner";
import banner from "./assets/banner.png";
import Galeria from "./components/Galeria";
import fotos from "./fotos.json";
import { useState, useEffect } from "react";
import ModalZoom from "./components/ModalZoom";
import Pie from "./components/Titulo/Pie";

const FondoGradiente = styled.div`
  background: linear-gradient(175deg, #041833 4.16%, #04244f 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: 1280px;
  max-width: 100%;
  margin: 0 auto;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;

const ContenidoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const App = () => {
  const [fotosGaleria, setFotosGaleria] = useState(fotos);
  const [fotoSeleccionada, setFotoSeleccionada] = useState(null);
  const [filtro, setFiltro] = useState("");
  const [tag, setTag] = useState(0);

  useEffect(() => {
    const fotosFiltradas = fotos.filter((foto) => {
      const filtroPorTag = !tag || foto.tagId === tag;
      const filtroPorTitulo = !filtro || foto.titulo.toLowerCase().includes(filtro.toLowerCase());
      return filtroPorTag && filtroPorTitulo;
    });
    setFotosGaleria(fotosFiltradas);
  }, [filtro, tag]);

  const alternarFavorito = (foto) => {
    if (foto.id === fotoSeleccionada?.id) {
      setFotoSeleccionada({
        ...fotoSeleccionada,
        favorita: !foto.favorita,
      });
    }

    setFotosGaleria(
      fotosGaleria.map((fotosGaleria) => {
        return {
          ...fotosGaleria,
          favorita: fotosGaleria.id === foto.id ? !foto.favorita : fotosGaleria.favorita,
        };
      })
    );
  };

  return (
    <>
      <FondoGradiente>
        <GlobalStyles />
        <AppContainer>
          <Cabecera filtro={filtro} setFiltro={setFiltro} />
          <MainContainer>
            <BarraLateral />
            <ContenidoGaleria>
              <Banner texto="La gelería más completa de todo el planeta" backgroundImage={banner} />
              <Galeria
                alternarFavorito={alternarFavorito}
                clickFoto={(foto) => setFotoSeleccionada(foto)}
                fotos={fotosGaleria}
                setTag={setTag}
              />
            </ContenidoGaleria>
          </MainContainer>
        </AppContainer>
        <ModalZoom
          alternarFavorito={alternarFavorito}
          cerrar={() => setFotoSeleccionada(null)}
          foto={fotoSeleccionada}
        />
        <Pie />
      </FondoGradiente>
    </>
  );
};

export default App;
