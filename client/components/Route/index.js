import React from "react";
import { Route, HashRouter, Switch } from "react-router-dom";
import AllPages from './importAllPages'


const CustomRouting = () => {
    return (
        <HashRouter>
            <div>
                <Switch>
                    <Route exact path="/" component={AllPages.Home} />
                    <Route path="/faqs" component={AllPages.FAQs} />
                    <Route path="/postOrders" component={AllPages.PostOrders} />
                    <Route path="/addEditOrder" component={AllPages.AddEditOrder} />
                    <Route path="/login" component={AllPages.UserLogin} />
                    <Route path="/forgotPassword" component={AllPages.UserForgotPassword} />
                    <Route path="/profile" component={AllPages.UserProfile} />
                    <Route path="/register" component={AllPages.UserRegister} />
                    <Route path="/settings" component={AllPages.UserSettings} />
                    <Route path="/termsofuser" component={AllPages.TermsOfUser} />
                    <Route path="/strategydetail" component={AllPages.StrategyDetail} />
                    <Route component={AllPages.Error404} />
                </Switch>
            </div>
        </HashRouter>
    );
};
export default CustomRouting;


