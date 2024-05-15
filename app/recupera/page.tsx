'use client';
import { useState, useEffect } from 'react';

const Contador = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    // Carregar o tempo inicial do localStorage
    const savedTime = localStorage.getItem('contadorTime');
    if (savedTime) {
      setTime(parseInt(savedTime, 10));
    }

    // Iniciar o intervalo para incrementar o tempo
    let interval: NodeJS.Timeout | null = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          const newTime = prevTime + 1;
          localStorage.setItem('contadorTime', newTime.toString()); // Salvar o tempo no localStorage
          return newTime;
        });
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval as NodeJS.Timeout);
    }
    return () => clearInterval(interval as NodeJS.Timeout);
  }, [isActive, time]);

  const formatTime = (time: number) => {
    const getSeconds = `0${time % 60}`.slice(-2);
    const minutes = Math.floor(time / 60);
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const hours = Math.floor(time / 3600);
    const getHours = `0${hours % 24}`.slice(-2);
    const days = Math.floor(time / (3600 * 24));
    const getDays = `0${days % 30}`.slice(-2);
    const months = Math.floor(time / (3600 * 24 * 30));
    const getMonths = `0${months}`.slice(-2);

    return `${getMonths} meses, ${getDays} dias, ${getHours}:${getMinutes}:${getSeconds}`;
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
    localStorage.setItem('contadorTime', '0'); // Resetar o tempo no localStorage
    setIsActive(true);
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-center bg-cover bg-no-repeat" style={{ backgroundImage: "url('/background.jpg')" }}>
      <h1 className="text-3xl mb-4 text-white">Estamos a {formatTime(time)} sem stalkear</h1>
      <button 
        onClick={handleReset} 
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
      >
        Resetar
      </button>
    </div>
  );
};

export default Contador;
