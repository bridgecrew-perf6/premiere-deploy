import React, { useState } from "react";
import SubMenuComp from "../component/SubMenuComp";
import Liste from "./Liste";
import Tableaux from "../Tableaux";



const DashboardPage = () => {
    const [toto, setToto] = useState('tableaux');

    function AffichePageDash() {

        switch (toto){
            case 'liste':return <Liste />;
            case 'tableaux':return <Tableaux />;
                
            default: <Tableaux />
        }
    }

    return (
        <>
            <SubMenuComp modifyParentStateValue={setToto} />
                <div key="liste" className="page-content p-5" id="content"><AffichePageDash /> </div>
                
        </>
    )
}

export default DashboardPage;