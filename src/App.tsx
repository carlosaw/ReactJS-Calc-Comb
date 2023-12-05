import { MouseEvent, useState } from 'react';
import './App.css';

import { Input } from './components/Input';

function App() {
    const [gasolinePrice, setGasolinePrice] = useState<number>(0);
    const [etanolPrice, setEtanolPrice] = useState<number>(0);

    const handleCalcButton = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        let diff = etanolPrice / gasolinePrice;

        if (gasolinePrice <= 0 || etanolPrice <= 0) {
            alert("Valores não numéricos ou zero. Verifique e tente novamente.")
        } else if (diff > 0.7) {
            alert(`O cálculo será igual a ${diff.toFixed(2)}. Portanto, compensa mais abastecer com gasolina.`);
        } else {
            alert(`O cálculo será igual a ${diff.toFixed(2)}. Portanto, compensa mais abastecer com etanol.`);
        }

        setEtanolPrice(0);
        setGasolinePrice(0);
    }

    return (
        <>
            <div className="general-area">
                <div className="fuel-image">
                    <img src="combustivel.png" alt="" />
                </div>
                <div className="fuel-form">
                    Você sabe com qual combustível compensa mais abastecer seu carro? <br />
                    Utilize a calculadora abaixo:
                </div>

                <div className="fuel-fields">
                    <Input
                        title="Preço - litro etanol (R$):"
                        value={etanolPrice}
                        onChange={e => setEtanolPrice(parseFloat(e.target.value))}
                    />
                    <Input
                        title="Preço - litro gasolina (R$):"
                        value={gasolinePrice}
                        onChange={e => setGasolinePrice(parseFloat(e.target.value))}
                    />
                </div>
                <button onClick={handleCalcButton}>Calcular</button>
            </div>
        </>
    );
}

export default App;
