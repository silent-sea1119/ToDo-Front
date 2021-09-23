import './style.css';

export default function Modal(props){
    return(
        <>
            <div className="overlay"></div>
            <div className="modal">
                <div className="modal-conteiner">
                    {props.children}
                </div>
            </div>
        </>
   )
}
