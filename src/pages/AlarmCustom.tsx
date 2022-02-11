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
  IonBackButton,
  IonDatetime,
  IonCheckbox,
  IonPicker,
  IonTextarea,
  IonSelectOption,
  IonRadioGroup,
  IonListHeader,
  IonLabel,
  IonItem,
  IonRadio,
} from '@ionic/react';
import './Home.css';

const AlarmCustom: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
  
    useIonViewWillEnter(() => {
      const msgs = getMessages();
      setMessages(msgs);
    });
  
    const refresh = (e: CustomEvent) => {
      setTimeout(() => {
        e.detail.complete();
      }, 3000);
    };
    const[selected, setSelected] = useState<string>('biff');
  return(
    <IonPage id="home-page">
    <IonHeader className="header">
        <IonToolbar>
          <IonButton slot="start">
            <IonBackButton className="back-track"></IonBackButton>
          </IonButton>
          <IonTitle className="title-bar">
          Lucid Companion
          </IonTitle>
        </IonToolbar>
      </IonHeader>
        <IonContent className="page-background" fullscreen>
            <IonRefresher slot="fixed" onIonRefresh={refresh}>
                <IonRefresherContent></IonRefresherContent>
            </IonRefresher>
            <IonDatetime presentation = "time" minuteValues = "0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55"> </IonDatetime>
            <IonList>
                <IonRadioGroup value={selected} onIonChange={ e=> setSelected(e.detail.value)}>
                    <IonListHeader>
                        <IonLabel>Biff</IonLabel>
                    </IonListHeader>

                    <IonItem>
                        <IonLabel>Griff</IonLabel>
                        <IonRadio slot ="start" value="griff" />
                    </IonItem>
                </IonRadioGroup>
            </IonList>
            <IonDatetime presentation ="time">Touchless Time</IonDatetime>
            <IonSelectOption>Audio</IonSelectOption>
            <IonTextarea>note</IonTextarea>

            <IonFooter className="footer-content">
                <IonButton href="#" className="big-button">Create Alarm</IonButton>
                this page is broken? why won't it show anything?
            </IonFooter>
        </IonContent>
    </IonPage>
  );
    
};
export default AlarmCustom;