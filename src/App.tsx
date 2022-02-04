import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Journal from './pages/Journal';
import JournalMenu from './pages/JournalMenu';
import ViewMessage from './pages/ViewMessage';
import LucidMenu from './pages/LucidMenu';
import AlarmMenu from './pages/AlarmMenu';
import SettingsMenu from './pages/SettingsMenu';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>

        <Route path="/" exact={true}>
          <Redirect to="/home" />
        </Route>
        <Route path="/home" exact={true}>
          <Home />
        </Route>

        <Route path="/journal" exact={true}>
          <Journal />
        </Route>

        <Route path="/alarmmenu" exact={true}>
          <AlarmMenu />
        </Route>

        <Route path="/settingsmenu" exact={true}>
          <SettingsMenu />
        </Route>

        <Route path="/lucidmenu" exact={true}>
          <LucidMenu />
        </Route>

        <Route path="/journalmenu" exact={true}>
          <JournalMenu />
        </Route>

        <Route path="/message/:id">
           <ViewMessage />
        </Route>
        
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
