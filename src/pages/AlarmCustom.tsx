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
  IonSelect,
  IonItemDivider,
  IonInput,
} from '@ionic/react';
import './Home.css';

const AlarmCustom: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [text, setText] = useState<string>();
  const [tone, setTone] = useState<string>('alarm tone 1');
  const [length, setLength] = useState<number>();
  const [days, setDays] = useState<string[]>([]);
  const [touchless, setTouchless] = useState<boolean>();
  const [note, setNote] = useState<boolean>();

  useIonViewWillEnter(() => {
    const msgs = getMessages();
    setMessages(msgs);
  });

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  const saveAlarm = () => {

  }

  const [selected, setSelected] = useState<string>('biff');


  return (
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
        <div className="media-screen-body">
          <IonItem className="page-title">
            <IonLabel>Customize Alarm</IonLabel>
          </IonItem>

          <IonList>

            <IonItem>
              <IonLabel>Days</IonLabel>
              <IonSelect value={days} placeholder="Days" multiple={true} onIonChange={e => setDays(e.detail.value)}>
                <IonSelectOption>Sunday</IonSelectOption>
                <IonSelectOption>Monday</IonSelectOption>
                <IonSelectOption>Tuesday</IonSelectOption>
                <IonSelectOption>Wednesday</IonSelectOption>
                <IonSelectOption>Thursday</IonSelectOption>
                <IonSelectOption>Friday</IonSelectOption>
                <IonSelectOption>Saturday</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonLabel>Time</IonLabel>
            <IonDatetime presentation="time" minuteValues="0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55"> </IonDatetime>

            <IonItem>
              <IonLabel>Touchless Alarm</IonLabel>
              <IonCheckbox checked={touchless} onIonChange={e => setTouchless(e.detail.checked)} />
            </IonItem>

            <IonItem>
              <IonInput disabled={!touchless} type="number" value={length} placeholder="Enter Length of the Auto Alarm" onIonChange={e => setLength(parseInt(e.detail.value!, 10))}></IonInput>Seconds
            </IonItem>

            <IonItem>
              <IonLabel>Audio</IonLabel>
              <IonSelect value={tone} placeholder="Select your Alarm Sound" onIonChange={e => setTone(e.detail.value)}>
                <IonSelectOption>Audio Tone 1</IonSelectOption>
                <IonSelectOption>Audio Tone 2</IonSelectOption>
                <IonSelectOption>Audio Tone 3</IonSelectOption>
                <IonSelectOption>Audio Tone 4</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonLabel>Note:</IonLabel>
            <IonItem>
              <IonTextarea value={text} onIonChange={e => setText(e.detail.value!)}></IonTextarea>
            </IonItem>

            <IonItem>
              <IonLabel>Show Note With Alarm</IonLabel>
              <IonCheckbox checked={note} onIonChange={e => setNote(e.detail.checked)} />
            </IonItem>
          </IonList>
        </div>
          <IonFooter className="footer-content">
            <IonButton onClick={e => saveAlarm()} className="big-button">Create Alarm</IonButton>
          </IonFooter>
      </IonContent>
    </IonPage>
  );

};
export default AlarmCustom;