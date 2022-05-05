import MessageListItem from '../components/MessageListItem';
import { useState, useRef } from 'react';
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
    IonAccordion,
    IonAccordionGroup,
    IonModal,
    IonNote,
    IonItemGroup
} from '@ionic/react';
import './Home.css';
import '../components/MessageListItem.css';
import { chatboxSharp } from 'ionicons/icons';

const ScreenMenu: React.FC = () => {


  const accordionGroupRef = useRef (null);
  const closeAccordion = () => {
    // if (accordionGroupRef.current){
    //   accordionGroupRef.current.value=undefined;
    // }
  }
    
  const [messages, setMessages] = useState<Message[]>([]);
  const [tags, setTags] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [fragment, setFragment] = useState<string>("");
  const [today, setToday] = useState<string>();
  const [dateStart, setDateStart] = useState<string>();
  const [dateEnd, setDateEnd] = useState<string>();
  const [searching, setSearching] = useState<boolean>(false);

  const [foundDreams, setFoundDreams] = useState<Dream[]>([]);

  const [dateEndShort, setDateEndShort] = useState<string>("");
  const [dateStartShort, setDateStartShort] = useState<string>("");
  const [showDreamW, setShowDreamW] = useState<boolean>(false);

  const [dream, setDream] = useState<Dream>({
    title: "",
    lucid: 0,
    dreamText: "",
    tags: [],
    date: "",
    id: "",
  });

  var taglist: String[] = [

  ];

  
  const dreams = getDreams();

  function getImage(type: number): string {
    var image = "../assets/icon/empty-star-transparent.png";
    if (type == 0) {
      image = "../assets/icon/empty-star-transparent.png";
    }
    else if (type == 1) {
      image = "../assets/icon/fullstar-transparent.png";
    }
    else {
      image = "../assets/icon/halfstar-transparent.png";
    }
    return image;
  }

  const toTags = (dream: Dream) => {
    var tagString = "";
    for(const tag in dream.tags){
      tagString = tagString + dream.tags[tag] + ", ";
    }
    return tagString;
  };
  
interface DreamListItemProps{
  dream: Dream;
}

  const DreamListItem: React.FC<DreamListItemProps> = ({ dream }) => {
    return(
      <IonButton class="none" onClick = {e => showDream(dream)}>
      <IonItem>
        <div slot="start" className="dot dot-unread"></div>
        <IonLabel>
          <p>
            {dream.title}
            <span className="date">
              <IonNote>{dream.date}</IonNote>
            </span>
          </p>
          <h2>{dream.dreamText}</h2>
          <p>
            {(toTags(dream))}
            <span className="date">
            <img className="star-button" src={getImage(dream.lucid)}/></span>
          </p>
        </IonLabel></IonItem>
      </IonButton>
    );
  };

  const showDream = (dreamGot: Dream) => {
    setDream(dreamGot);
    setShowDreamW(true);
  }

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
    setDateStart(today!);
    setDateEnd(today!);
    setFoundDreams(foundDreams.splice(0));
    setSearching(false);
  };

  useIonViewWillEnter(() => {
    setSearching(false);
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
    var dayString;
    var day = date.getDate();
    
    if(day < 10){
      dayString = '0' + day.toString();
    }
    else{
      dayString = day.toString();
    }
    const nowDay = (date.getFullYear().toString() + '-' + monthOfYearString + '-' + dayString);

    setDateEnd(nowDay);
    setDateStart(nowDay);
    setToday(nowDay);
  });

  const getDate = (date: string, start: boolean) => {
    var shortDate: string = "";
    for(var i = 0; i < 10; i++){
      shortDate.concat(date[i]);
    }
    if(start == true){
      setDateStartShort(shortDate);
      setDateStart(date);
    }
    else{
      setDateEnd(date);
      setDateEndShort(shortDate);
    }
  }
  const toDate = (date: string):string => {
 //   date = date.substr(0, 10); //Cannot Read properties of undefined 
    return date;
  }
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
        <IonItem className="page-title">
          <IonLabel className="page-banner">Search Dreams</IonLabel>
        </IonItem>
          <IonContent hidden={searching}>
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
            <IonAccordionGroup>
              <IonAccordion>
                <IonItem slot="header"><IonLabel>From... {toDate(dateStart!)}</IonLabel>
                </IonItem>
                <IonItem slot="content">
                  <IonDatetime className="date-info" presentation="date" min={'2022-03-29'} max={dateEnd} value={dateStart} onIonChange={e => getDate(e.detail.value!, true)}></IonDatetime>{/*Need to set minimum date*/}
                </IonItem>
              </IonAccordion>
            </IonAccordionGroup>
            <IonAccordionGroup>
              <IonAccordion>
                <IonItem slot="header"><IonLabel>To... {toDate(dateEnd!)}</IonLabel>
                </IonItem>
                <IonItem slot="content">
                  <IonDatetime className="date-info" presentation="date" min={dateStart} max={today} value={dateEnd} onIonChange={e => getDate(e.detail.value!, false)}></IonDatetime>
                </IonItem>
              </IonAccordion>
            </IonAccordionGroup>
        
            <IonButton className="big-button" onClick = {e => searchDreams()}>Search</IonButton>
            <IonButton className="big-button" onClick = {e => clearSearch()}>Clear</IonButton>
          </IonContent>

        <IonItemGroup hidden={!searching}>
          <IonList>
            { dreams && foundDreams.map(m => <DreamListItem key={m.id} dream={m} />)}
          </IonList>
          <IonButton className="big-button" onClick = {e => setSearching(false)}>Return</IonButton>
        </IonItemGroup>

        <IonModal isOpen={showDreamW} swipeToClose={true}>
          <IonItemGroup class="journal-dream">
            <IonItem class="journal-title">
              <p>{dream!.title}</p>
              <p className="star-button"><img src={getImage(dream!.lucid)}/></p>
            </IonItem>
            <IonItem class="journal-entry">
              <p className="ion-text-wrap" >{dream!.dreamText}</p>
            </IonItem>
            <IonItem class="journal-tags">
              <p className="ion-text-wrap">{toTags(dream!)}</p>
            </IonItem>
            <IonButton className="big-button" onClick = {e => setShowDreamW(false)}>Return</IonButton>
          </IonItemGroup>
        </IonModal>
        
        <IonFooter className="footer-content">
        </IonFooter>
      </IonContent>
    </IonPage>

);
};

export default ScreenMenu;