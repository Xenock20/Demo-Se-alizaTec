import { BtnInicio } from './../components/components-home-demo/boton/boton';

const HomeDemo = () => {
  return (
    <div className='home-demo'>
      <div className="box-inicio animate__animated animate__fadeInUp">
        <div className="init">
          <img src="/src/assets/logo.png" alt="" />
          <h1 className="title">Comenzamos</h1>
          <div className="botones">
            <BtnInicio name="Iniciar Demo" estilo="btn1-inicio" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDemo;
