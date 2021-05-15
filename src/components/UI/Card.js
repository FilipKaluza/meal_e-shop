
import { Card } from 'antd';


const AntCard = (props) => {

    return(
        <Card > {props.children} </Card>
    );
};

export default AntCard;