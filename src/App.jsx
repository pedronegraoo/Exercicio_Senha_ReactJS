import style from "./style/app.module.css";
import useSenha from "./hooks/useSenha";
import useBtnCopy from "./hooks/useBtnCopy";
import InputSize from "./components/input/InputSize";
import ButtonCopy from "./components/buttons/ButtonCopy";
import ButtonGenerate from "./components/buttons/ButtonGenerate";
import CustomInputSize from "./components/input/showInputSize";
import { useState } from "react";

function App() {
  const { senha, passwordRandom, size, sizePasswordRandom } = useSenha();
  const { textBtn, setTextBtn, copySenha } = useBtnCopy(senha);
  const [showInputSize, setShowInputSize] = useState(false);

  const passwordSize = showInputSize ? size : 8;

  return (
    <div className={style.container}>
      <h1>TESTANDO ATUALIZAÇÃO</h1>
      <h1>Gerador de senhas</h1>

      <div className={style.showInputSize}>
        <label htmlFor="showInputSize">Customizar tamanho da senha: </label>
        <CustomInputSize
          showInputSize={showInputSize}
          setShowInputSize={setShowInputSize}
        />
      </div>

      {showInputSize ? (
        <div className={style.sizePass}>
          <label htmlFor="passwordSize">Tamanho: </label>
          <InputSize size={size} sizePasswordRandom={sizePasswordRandom} />
        </div>
      ) : null}

      <div className={style.allBtns}>
        <ButtonGenerate
          passwordRandom={passwordRandom}
          setTextBtn={setTextBtn}
          size={passwordSize}
        />

        <ButtonCopy textBtn={textBtn} copySenha={copySenha} />
      </div>

      <span className={style.senha}>{senha}</span>
    </div>
  );
}

export default App;
