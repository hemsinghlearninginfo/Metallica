import React from "react";
import { Route, HashRouter } from "react-router-dom";
import AllPages from './importAllPages'


const CustomRouting = () => {
    return (
        <HashRouter>
            <div>
                <Route exact path="/" component={AllPages.Home} />
                <Route path="/faqs" component={AllPages.FAQs} />
                <Route path="/contact" component={AllPages.Contact} />
            </div>
        </HashRouter>
    );
};
export default CustomRouting;

