import './style.css';

export default function DayTime(){
    const Day = () => {
      const now = new Date();
      const days = ['Domingo','Segunda-Feira','Terça-Feira','Quarta-Feira','Quinta-Feira','Sexta-Feira','Sábado'];
      const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
      return (
        <>
          <figcaption>{days[now.getDay()]}</figcaption>
          <p>{now.getDay()} de {months[now.getMonth()]} - {now.getFullYear()}</p>
        </>
      );
    }
    return(
        <figure className="Container">
          <img src={'./montainBackground.png'} alt="Montanha background"/>
          <Day/>
        </figure>
    );
}
