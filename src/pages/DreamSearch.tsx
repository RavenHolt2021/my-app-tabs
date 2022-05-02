import DreamListItem from '../components/MessageListItem';
import { useState } from 'react';
import {get, set} from '../data/IonicStorage';
import { Message, getMessages, Dream, getDreams } from '../data/messages';
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
    IonDatetime,
    IonItemGroup
} from '@ionic/react';
import './Home.css';
import { chatboxSharp } from 'ionicons/icons';

const ScreenMenu: React.FC = () => {
    
  const [messages, setMessages] = useState<Message[]>([]);
  //const [dreams, setDreams] = useState([]);
  const [tags, setTags] = useState<string>();
  const [title, setTitle] = useState<string>();
  const [fragment, setFragment] = useState<string>();
  const [today, setToday] = useState<string>();
  const [dateStart, setDateStart] = useState<string>();
  const [dateEnd, setDateEnd] = useState<string>();

  const [searching, setSearching] = useState<boolean>(false);

  const [foundDreams, setFoundDreams] = useState<Dream[]>([]);

  var taglist: String[] = [

  ];



  const dreams = getDreams();
  const searchDreams = () => {
    setFoundDreams(foundDreams.splice(0));
    var nsfw = false;
    console.log("searching");
    if(tags != ""){
      console.log("tags not empty");
      taglist = [];
      const chars = Array.from(tags!);
      var tagWIP = "";
      chars.forEach((c, i) => {
        if(chars[i] != ',' && ( chars[i] != ' ' || tagWIP != "")){
          tagWIP += chars[i];
        }
        else if(chars[i] == ','){
          taglist.push(tagWIP);
          if(tagWIP == "nsfw" || tagWIP == "NSFW"){
            nsfw = true;
          }
          tagWIP = "";
        }
      })
      taglist.push(tagWIP);
    }
    var isGood = true;
    for(const dream of dreams){
      
      for(const dreamTag of dream.tags){
        if((dreamTag == "nsfw" || dreamTag == "NSFW") && nsfw == false){
          isGood = false;
        }
      }
      
      console.log("in Dream Loop");
      isGood = true;
      if((dateEnd != today || dateStart != today) && isGood == true){
        console.log("checking Date");
        if(dream.date > dateEnd! || dream.date < dateStart!){
          isGood = false;
          console.log("Bad Date");
        }
      }
      if(title != "" && isGood == true){
        console.log("checking title");
        if(dream.title != title!){
          isGood = false;
          console.log("title bad");
        }
      }
      if(tags != "" && isGood == true){
        console.log("checking tags");
        for(const tag of taglist){
          var tagGood = false;
          for(const dreamTag of dream.tags){
            if(dreamTag == tag){
              tagGood = true;
              console.log("good tag");
            }
          }
          if(tagGood == false){
            isGood = false;
            console.log("tags bad");
          }
        }
      }
      if(fragment != "" && isGood == true){
        console.log("checking fragment");
        const Dreamchars = Array.from(dream.dreamText);
        const Fragchars = Array.from(fragment!);
        var match;
        var trueMatch = false;
        Dreamchars.forEach((c, i) => {
          if(Dreamchars[i] == Fragchars[0]){
            match = true;
            Fragchars.forEach((f, j) => {
              if(Dreamchars[i + j] != Fragchars[j]){
                match = false;
              }
            })
            if(match == true){
              trueMatch = true;
            }
          }
        })
        if(trueMatch == false){
          console.log("fragment is Good");
          isGood = false;
        }
      }

      if(isGood == true){
        setFoundDreams(foundDreams.concat(dream));
        console.log(isGood);
      }
    }
    setSearching(true);
  };

  const clearSearch = () => {
    setTags("");
    setTitle("");
    setFragment("");
    setDateStart(today);
    setDateEnd(today);
    setFoundDreams(foundDreams.splice(0));
    setSearching(false);
  };

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

    setTags("");
    setTitle("");
    setFragment("");
    setDateEnd(nowDay);
    setDateStart(nowDay);
    setToday(nowDay);
    setFoundDreams(foundDreams.splice(0));
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

        <IonItemGroup hidden={searching}>
        <IonItem className="page-title">
          <IonLabel>Search Dreams</IonLabel>
        </IonItem>

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
            <IonDatetime presentation="date" min={'2022-04-29'} max={dateEnd} value={dateStart} onIonChange={e => setDateStart(e.detail.value!)}></IonDatetime>{/*Need to set minimum date*/}
          </IonItem>
          <IonItem>
            <IonLabel position = "stacked">
              To . . .
            </IonLabel>
          <IonDatetime presentation="date" min={dateStart} max={today} value={dateEnd} onIonChange={e => setDateEnd(e.detail.value!)}></IonDatetime>

          </IonItem>
        </IonItem>
        
        <IonButton className="big-button" onClick = {e => searchDreams()}>Search</IonButton>
        <IonButton className="big-button" onClick = {e => clearSearch()}>Clear</IonButton>
        </IonItemGroup>

        <IonItemGroup hidden={!searching}>
          <IonList>
            { dreams && foundDreams.map(m => <DreamListItem key={m.id} dream={m} />)}
          </IonList>
          <IonButton className="big-button" onClick = {e => setSearching(false)}>Return</IonButton>
        </IonItemGroup>
        
        <IonFooter className="footer-content">
        </IonFooter>
      </IonContent>
    </IonPage>

);
};

export default ScreenMenu;