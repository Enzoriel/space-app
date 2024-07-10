import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Cabecera from "./components/Cabecera";
import BarraLateral from "./components/BarraLateral";
import Banner from "./components/Banner";
import banner from "./assets/banner.png";

const FondoGradiente = styled.div`
  background: linear-gradient(175deg, #041833 4.16%, #04244f 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`;

function App() {
  return (
    <>
      <FondoGradiente>
        <GlobalStyles />
        <Cabecera />
        <BarraLateral />
        <Banner texto="La gelería más completa de todo el planeta" backgroundImage={banner} />
      </FondoGradiente>
    </>
  );
}

export default App;
