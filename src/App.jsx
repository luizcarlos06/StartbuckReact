import React, { useState } from "react"
import { Container, Circulo, Image, Conteudo, CaixaTexto, StyledSpan, StyleSpan, Button, CaixaImagem, Menu } from './styles'
import Logo from './assets/logo.png'
import Sorvete from './assets/img1.png'
import Sorvete2 from './assets/img2.png'
import Sorvete3 from './assets/img3.png'
import Thumb1 from './assets/thumb1.png'
import Thumb2 from './assets/thumb2.png'
import Thumb3 from './assets/thumb3.png'

function App() {
  const [backgroundColor, setBackgroundColor] = useState();
  let [backgroundImage, setBackgroundImage] = useState(Sorvete);
  let [backgroundImage1, setBackgroundImage1] = useState(Sorvete);
  let [backgroundImage2, setBackgroundImage2] = useState(Sorvete2);
  let [backgroundImage3, setBackgroundImage3] = useState(Sorvete3);



  const handleClick = () => {
    setBackgroundColor('#017143');
    setBackgroundImage(backgroundImage1);
  }
  const handleClick2 = () => {
    setBackgroundColor('#eb7495');
    setBackgroundImage(backgroundImage2);
  }
  const handleClick3 = () => {
    setBackgroundColor('#d752b1');
    setBackgroundImage(backgroundImage3);
  }


  return (
    <Container>
      <Circulo className="circulo" style={{ backgroundColor }} />
      <Image alt="Logo-Imagem" src={Logo} />
      <Conteudo>

        <CaixaTexto>
          <h2>It's not just Coffe <br />
            It's <StyledSpan> StarBucks  </StyledSpan> in <StyleSpan>ReactJS</StyleSpan> </h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet exercitationem maxime nobis at nemo ex illum sed, quo quis in quos enim iure dignissimos ducimus odio labore sequi omnis dicta.</p>
          <Button>Deixe o seu Like!</Button>
        </CaixaTexto>

        <CaixaImagem >
          <img src={backgroundImage} />
        </CaixaImagem>

      </Conteudo>

      <Menu>
        <img src={Thumb1} alt="Sorvete-1" onClick={handleClick}/>
        <img src={Thumb2} alt="Sorvete-2" onClick={handleClick2}/>
        <img src={Thumb3} alt="Sorvete-3" onClick={handleClick3} />
      </Menu>
    </Container>
  )
}

export default App
