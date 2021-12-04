import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Unmounting from '../../pages/Unmounting';
import Updating from '../../pages/Updating';
import Mounting from '../../pages/Mounting';


const PageRoute = () => {
    return (
        <Switch>
            <Route path="/mounting">
                <Mounting/>
            </Route>
            <Route path="/updating">
                <Updating/>
            </Route>
            <Route path="/unmounting">
                <Unmounting/>
            </Route>

        </Switch>


    );

};

export default PageRoute;
