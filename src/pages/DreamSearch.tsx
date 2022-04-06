import MessageListItem from '../components/MessageListItem';
import { useState } from 'react';
import { Message, getMessages } from '../data/messages';
import {
    IonContent,
    IonHeader,
    IonList,
    IonPage,
    IonRefresher,
    IonRefresherContent,
    IonTitle,
    IonFooter,
    IonButton,
    IonToolbar,
    useIonViewWillEnter,
    useIonViewDidEnter,
    IonBackButton,
    IonButtons,
    IonItem,
    IonTextarea,
    IonLabel,
    IonDatetime
} from '@ionic/react';
import './Home.css';

const ScreenMenu: React.FC = () => {
    
  const [messages, setMessages] = useState<Message[]>([]);
  const [tags, setTags] = useState<string>();
  const [title, setTitle] = useState<string>();
  const [fragment, setFragment] = useState<string>();
  const [today, setToday] = useState<string>();
  const [dateStart, setDateStart] = useState<string>();
  const [dateEnd, setDateEnd] = useState<string>();

  useIonViewWillEnter(() => {

    var date = new Date();
    var monthOfYearInt = date.getMonth();
    var monthOfYearString;
    monthOfYearInt = monthOfYearInt + 1;
    if(monthOfYearInt < 10){
      monthOfYearString = '0' + monthOfYearInt.toString();
    }
    else{
      monthOfYearString = monthOfYearInt.toString();
    }
    var nowDay = (date.getFullYear().toString() + '-' + monthOfYearString + '-' + date.getDate().toString());

    setDateEnd(nowDay);
    setDateStart(nowDay);
    setToday(nowDay);
  });

  useIonViewWillEnter(() => {
    const msgs = getMessages();
  });

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

return(
    <IonPage id="home-page">
    <IonHeader className="header">
        <IonToolbar>
          <IonButtons className="back-track" slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle className="title-bar">
          Lucid Companion
          </IonTitle>
          <IonButtons className="back-2-home" slot="end">
            <IonButton routerLink="/home">Home</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="page-background" fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonItem>
          <IonLabel>
            Search by Tag
          </IonLabel>
          <IonTextarea value={tags} placeholder="separate tags with commas" onIonChange={e => setTags(e.detail.value!)}></IonTextarea>
        </IonItem>
        <IonItem>
          <IonLabel>
            Search by Title
          </IonLabel>
          <IonTextarea value={title} placeholder="enter the full title of your dream" onIonChange={e => setTitle(e.detail.value!)}></IonTextarea>
        </IonItem>
        <IonItem>
          <IonLabel>
            Search by Content
          </IonLabel>
          <IonTextarea value={fragment} placeholder="enter an exact quote from your dream" onIonChange={e => setFragment(e.detail.value!)}></IonTextarea>
        </IonItem>
        <IonItem>
          <IonItem>
            <IonLabel position = "stacked">
              From . . .
            </IonLabel>
            <IonDatetime presentation="date" max={dateEnd} value={dateStart} onIonChange={e => setDateStart(e.detail.value!)}></IonDatetime>{/*Need to set minimum date*/}
          </IonItem>
          <IonItem>
            <IonLabel position = "stacked">
              To . . .
            </IonLabel>
          <IonDatetime presentation="date" min={dateStart} max={today} value={dateEnd} onIonChange={e => setDateEnd(e.detail.value!)}></IonDatetime>

          </IonItem>
        </IonItem>
        
        <IonButton href="#" className="big-button">Search</IonButton>
        
        <IonFooter className="footer-content">
        </IonFooter>
      </IonContent>
    </IonPage>

);
};

export default ScreenMenu;