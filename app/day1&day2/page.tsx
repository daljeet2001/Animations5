import Button from "../components/Button";
import PremiumButton from "../components/PremiumButton";
// Button + Micro-interaction System
export default function Page(){
    return(
        <div className="flex items-center justify-center bg-[#FFFFE4] h-screen gap-5">
            <Button children="Click me" variants="primary"/>
             <Button children="Not me" variants="secondary"/>
              <Button children="maybe me" variants="ghost"/>
              <PremiumButton children="login"/>

        </div>
    )
}