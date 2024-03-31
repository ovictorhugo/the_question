import { useState } from 'react';
import { Button } from "../components/ui/button";

export function Home() {
    const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
const [count, setCount] = useState(0)
    const handleMoveButton = () => {
        const randomX = Math.random() * ((window.innerWidth - 200) / 2); // Limitar posição x para que o botão não ultrapasse a tela
        const randomY = Math.random() * ((window.innerHeight - 200)/ 2) // Limitar posição y para que o botão não ultrapasse a tela
        setButtonPosition({ x: randomX, y: randomY });

        setCount(count + 1)
    };
  
    return(
        <div className="h-screen flex-col w-full  flex items-center justify-center ">
            <div className="p-8 border border-gray-300 rounded-xl relative">
                <p className="mb-4 text-2xl font-medium">Coloque sua pergunta aqui</p>

                <div className="flex gap-4 relative">
                    
                    <div className={` ${count > 0 && ('absolute m-0')}`} style={{  top: buttonPosition.y, left: buttonPosition.x }}>
                        <Button onClick={handleMoveButton}>Não</Button>
                    </div>

                    <Button>Sim</Button>
                </div>
            </div>
        </div>
    )
}
