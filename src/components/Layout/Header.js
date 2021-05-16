import HeaderCartButton from "./HeaderCartButton";

import MealsImg from "../../assets/images/meals.jpg";

const Header = ({onShowCart}) => {

    return(
        <>
            <header className="Header">
                <h1> ReactMeals </h1>
                <HeaderCartButton onClick={onShowCart} />
            </header>
            <div className="Main-image">
                <img src={MealsImg} alt="MealsImg" />
            </div>
        </>
    );
};

export default Header;