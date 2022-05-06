import MessageListItem from '../components/MessageListItem';
import { useState, useRef } from 'react';
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
    IonButtons,
    IonModal,
    useIonModal,
    IonSelect,
    IonSelectOption,
    IonItem,
    IonInput,
    IonLabel,
    IonSegment,
    IonItemGroup,
    IonSegmentButton
} from '@ionic/react';
import './Home.css';

const ScreenMenu: React.FC = () => {
    
  const [messages, setMessages] = useState<Message[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [type, setType] = useState<Number>();
  const [goal, setGoal] = useState<string>();
  const [goals, setGoals] = useState<string>();
  const [goalType, setGoalType] = useState<string>();

  useIonViewWillEnter(() => {
    const msgs = getMessages();
    setMessages(msgs);
    setGoals('1');
    
    setGoalType('1');
  });

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  const saveData = () => {
    setShowModal(false);
    //this.modalContoller.dismiss();
  }
  const setVisible = (selectedValue: string, compareValue: string): boolean => {
    let val = true;
    if(selectedValue == compareValue){
      val = false;
    }
    return val;
  };
  const selector = useRef(null);

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

        <IonButton onClick={e => setShowModal(true)} className="big-button">Add a New Goal</IonButton>

        <IonModal isOpen={showModal} swipeToClose={true}>
          <IonSelect value={type} placeholder="Goal Type" multiple={false} onIonChange={e => setType(e.detail.value)}>
            <IonSelectOption>Lucidity</IonSelectOption>
            <IonSelectOption>Dream</IonSelectOption>
            <IonSelectOption>Dream Quality</IonSelectOption>
            <IonSelectOption>Recall</IonSelectOption>
            <IonSelectOption>Other</IonSelectOption>
          </IonSelect>
          <IonItem class="journal-title">
            <IonInput maxlength={30} inputmode="text" placeholder = "Goal" value={goal} onIonChange={e => setGoal(e.detail.value!)}></IonInput>
          </IonItem>
          <IonButton onClick={e => saveData()} className="big-button" >Save</IonButton>
          <IonButton className="big-button" onClick={e => setShowModal(false)}>Cancel</IonButton>
        </IonModal>

        <IonButton href="#" className="big-button">Archive Goals</IonButton>

        <IonItemGroup class="tabs">
        <IonSegment ref={selector} scrollable = {true} onIonChange={e => setGoalType(e.detail.value)} value={goalType}>
          <IonSegmentButton value='1' >
            <IonLabel>Current Goals</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value='2'>
            <IonLabel>Previous Goals</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value='3'>
            <IonLabel>Completed Goals</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value='4'>
            <IonLabel>Incomplete Goals</IonLabel>
          </IonSegmentButton>
        </IonSegment>
        </IonItemGroup>

        <IonItemGroup class="tabs">
        <IonSegment ref={selector} scrollable = {true} onIonChange={e => setGoals(e.detail.value)} value={goals}>
          <IonSegmentButton value='1' >
            <IonLabel>Lucidity</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value='2'>
            <IonLabel>Dream</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value='3'>
            <IonLabel>Dream Quality</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value='4'>
            <IonLabel>Recall</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value='5'>
            <IonLabel>Other</IonLabel>
          </IonSegmentButton>
        </IonSegment>
        </IonItemGroup>

        <IonList hidden={setVisible('1', goals!)}>
          <IonLabel className="dream-sign-info">Your goals related to lucid practice and getting lucid.</IonLabel>
          <IonItem>

          </IonItem>
        </IonList>

        <IonList hidden={setVisible('2', goals!)}>
          <IonLabel className="dream-sign-info">Your goals for things you want to experience inside of dreams.</IonLabel>
          <IonItem>

          </IonItem>
        </IonList>

        <IonList hidden={setVisible('3', goals!)}>
          <IonLabel className="dream-sign-info">Your goals pretaining to dream quality such as control and dream length.</IonLabel>
          <IonItem>

          </IonItem>
        </IonList>

        <IonList hidden={setVisible('4', goals!)}>
          <IonLabel className="dream-sign-info">Your goals related to remembering dreams and dream signs.</IonLabel>
          <IonItem>

          </IonItem>
        </IonList>

        <IonList hidden={setVisible('5', goals!)}>
          <IonLabel className="dream-sign-info">Other goals you want to record.</IonLabel>

        </IonList>
        
        <IonFooter className="footer-content">
        </IonFooter>
      </IonContent>
    </IonPage>

);
};

export default ScreenMenu;