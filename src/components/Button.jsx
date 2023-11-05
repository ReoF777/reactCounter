import BootStrapButton from 'react-bootstrap/Button';

export default function Button(props){
    return(
        <BootStrapButton onClick={props.onClick}>
            {props.text}
        </BootStrapButton>
    )
}