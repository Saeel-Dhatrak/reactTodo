import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";
import ThirdComponent from "./ThirdComponent";
import FourthComponent from "./FourthComponent";
import LearningJavascript from "./LearningJavascript";

export default function LearningComponent() {
    return (
    <div className="LearningComponent">
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <ThirdComponent/>
        <FourthComponent/>
        <LearningJavascript></LearningJavascript>
    </div>
    );
}