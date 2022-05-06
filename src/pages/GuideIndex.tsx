import MessageListItem from '../components/MessageListItem';
import { useState } from 'react';
import { Message, getMessages } from '../data/messages';
import {
  IonPage,
  IonContent,
  IonButton,
  useIonViewWillEnter,
  IonApp,
  IonRefresher,
  IonRefresherContent,
  IonHeader,
  IonToolbar,
  IonBackButton,
  IonTitle,
  IonButtons,
  IonModal
} from '@ionic/react';
import './Home.css';
const GuidesIndex: React.FC = () => {

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

    const [showMILD, setShowMILD] = useState<boolean>(false);
    const [showWILD, setShowWILD] = useState<boolean>(false);
    const [showRecall, setShowRecall] = useState<boolean>(false);
    const [showSleep, setShowSleep] = useState<boolean>(false);
    const [showPara, setShowPara] = useState<boolean>(false);
    const [showAvoid, setShowAvoid] = useState<boolean>(false);
    const [showDEILD, setShowDEILD] = useState<boolean>(false);
    const [showSSILD, setShowSSILD] = useState<boolean>(false);
    const [showWBTB, setShowWBTB] = useState<boolean>(false);

return (
    <IonPage id="get-lucid">
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
        <h1 slot = "title">Get Lucid</h1>
        <h2 slot = "header">Techniques</h2>
        <IonButton onClick={e => setShowAvoid(true)} className="big-button">What to Avoid</IonButton>
        <IonButton onClick={e => setShowPara(true)} className="big-button">Sleep Paralysis</IonButton>
        <IonButton onClick={e => setShowSleep(true)} className="big-button">Fall Sleep</IonButton>
        <IonButton onClick={e => setShowRecall(true)} className="big-button">Dream Recall</IonButton>
        <IonButton onClick={e => setShowWILD(true)} className="big-button">WILD</IonButton>
        <IonButton onClick={e => setShowMILD(true)} className="big-button">MILD</IonButton>
        <IonButton onClick={e => setShowDEILD(true)} className="big-button">DEILD</IonButton>
        <IonButton onClick={e => setShowSSILD(true)} className="big-button">SSILD</IonButton>
        <IonButton onClick={e => setShowWBTB(true)} className="big-button">WBTB</IonButton>
      {/* .... etc. Will add more buttons to correspond with number of techniques */}

        <IonModal isOpen={showMILD} swipeToClose={true}>
          <p>MILD is a method of intention setting which uses memories of previous dreams to associate your decision to lucid dream, or recognize when you are dreaming, with your dreams. The goal is that when you are dreaming, you will remember your intention and get lucid. Start by deciding that you will recognize that you are dreaming. Next, imagine a dream that you can remember, go through it as if you are reliving it. Look for any dream signs, or anything anomalous, abnormal, or out of place in any way. While doing this, periodically remind yourself of the decision you made to recognize that you are dreaming. Next, pick a point in the dream and imagine getting lucid, recognizing that you are dreaming and fulfilling your intention for lucidity. Follow it up by imagining doing things you would like to do in a lucid dream and then repeat the process for approximately 15-20 minutes. At some point, you may wish to remind yourself that you will soon be dreaming, such as when you finish and go to bed.
</p>
          <IonButton onClick={e => setShowMILD(false)}>Back</IonButton>
        </IonModal>
        <IonModal isOpen={showAvoid} swipeToClose={true}>
          <p>Waking up when you don’t want to, but besides that, do whatever you want. You may hear of many suggested things to avoid, like “looking in mirrors” or committing suicide in a dream. Take these with a grain of salt: there are no rules in dreaming except the ones you make yourself through expectation, or your strongest associations combined with your emotions at the time. If you expect something scary to happen when you look in a mirror, you may see something scary, but you may also just see your normal self.
</p>
          <IonButton onClick={e => setShowAvoid(false)}>Back</IonButton>
        </IonModal>
        <IonModal isOpen={showPara} swipeToClose={true}>
          <p>Every night when you enter REM sleep your body experiences REM Atonia, a paralysis of the muscles that protects you by preventing you from acting out your dreams. Sleep paralysis disorder is the conscious experience of REM atonia. This means that you are awake but physically incapable of moving your body for a short time. It is sometimes, but not always, accompanied by sensory hallucinations. These hallucinations function much like dream scenes in that the experience is based on your strongest associations and your emotions at the time. Lucid dreaming does not cause sleep paralysis disorder and sleep paralysis is something you do not need to be afraid of. It is an uncommon and harmless condition. A common misconception in the lucid dreaming community is that sleep paralysis is required for some techniques, such as WILD. This is not true, actively trying to induce sleep paralysis is likely to be detrimental to your attempts to lucid dreaming.</p>
          <IonButton onClick={e => setShowPara(false)}>Back</IonButton>
        </IonModal>
        <IonModal isOpen={showSleep} swipeToClose={true}>
          <p>If you're having a hard time falling asleep, start by asking yourself these 3 questions. Am I tired enough to sleep? If not, why? Am I comfortable enough to sleep? Am I thinking too much to fall asleep?
            Not Tired?
            - Avoid drinking coffee, cafinated tea, or sodas close to bed time.
            - Use night mode on your phone at night.
            - Work on your sleep schedule. If you woke up from a complete rest less than 16 hours ago, that may be what is keeping you from being tired.
            - Turn off the lights! Or change other environmental variables that you to what you associate with bedtime.
            
            Not Comfortable?
            - Adjust the lighting to your liking. Nightlight? Blackout curtains? Whatever suits your needs.
            - Get up and stretch! Sometimes you just need to lay down in a new position, stretching can help with this.
            - If you're too hot, sleep under a single sheet and turn your pillow to the cooler side.
            - If you're too cold, pull up your blankets and don't get out! Your body temperature will slowely increase the temperature of the air under the blanket.

            Thinking too much?
            - Write down your worries for tomorrow to worry about.
            - Meditate or pray. Pay attention to your body and the sensations it is experiencing, really slow down and observe.
            - Do that chore that's keeping you up! Are you thiking of a 5 minute thing you need to remember to do? Just Do it so that you may rest.
            - Journal about your thoughts. You can talk to a friend about it in the mrning if you need to.
            - Take in some calming media, especially if you're thinking of something disturbing.

            if none of these can help your case, try repeating "sleep" to yourself until you're asleep.
          </p>
          <IonButton onClick={e => setShowSleep(false)}>Back</IonButton>
        </IonModal>
        <IonModal isOpen={showRecall} swipeToClose={true}>
          <p>Dream recall is an important fundamental of lucid dreaming that is often overlooked. During the recommended sleeping time of 8 hours per night, we dream approximately 5-6 times. Recalling these dreams is an important part of lucid dream training.
In terms of effective recall for lucid dreaming, 1-2 dreams per night is on the lower end, 3-4 dreams is moderate, and 5-6 dreams is advanced. Dream recall is required for techniques such as MILD and the more dreams that you remember, the better your chances of lucid dreaming become. Furthermore, reviewing recorded dreams has distinct benefits including finding commonalities among dreams, learning more about your dreams, and finding dream signs, (anything anomalous, abnormal, or out of place in any way), or regaining lost motivation.
 
There are 4 things you can do to improve dream recall. These are journaling dreams you are able to remember, reviewing recorded dreams before bed, setting intentions to remember dreams before bed, and delving for dreams immediately upon waking up.
</p>
          <IonButton onClick={e => setShowRecall(false)}>Back</IonButton>
        </IonModal>
        <IonModal isOpen={showWILD} swipeToClose={true}>
          <p>WILD is a Lucid Dreaming technique based around falling asleep consciously into a lucid dream, usually during a WBTB. To do the WILD technique, wake up 4-6 hours after going to bed. Next, make sure you are in a comfortable sleeping position. Next, engage a WILD anchor. An anchor for WILD is something you passively keep track of as you are falling asleep, such white noise, music, counting, or imagined imagery. Anchors help to keep your conscious mind active as you fall asleep, but not keep you awake. While doing WILD, you may experience hypnagogic imagery, sounds, vibrations, or other sensations. These are normal, can be ignored, and vary from person to person. If you see a 3D scene begin to form and take on distinct characteristics you can use it to enter a dream directly from WILD. Imagine interacting with the scene with your senses, touching something, holding onto it. If you get to a point where you can physically feel what you are touching, you’ve likely entered the dream, do a reality check. Remember, falling asleep is a major part of WILD.
</p>
          <IonButton onClick={e => setShowWILD(false)}>Back</IonButton>
        </IonModal>
        <IonModal isOpen={showDEILD} swipeToClose={true}>
          <p>DEILD is a WILD method that is used when you wake up naturally from a dream. Once you are awake, keep your eyes closed and visualize a scene with movement, such as getting up out of bed and walking around your room, or simply visualize the dream you just woke from. This results in reentering that dream in a lucid state when done correctly. Keep visualizing the scene until you are in a dream and perform a reality check to solidify in your mind that you are in a dream. This technique works by taking advantage of the relaxed state you are in upon waking from a dream. This method is opportunistic and should not be a primary practice, but it is an easy way to WILD when the opportunity arises. One of the best times to DEILD is upon waking naturally from a lucid dream, this is called DEILD chaining.
</p>
          <IonButton onClick={e => setShowDEILD(false)}>Back</IonButton>
        </IonModal>
        <IonModal isOpen={showSSILD} swipeToClose={true}>
          <p> SSILD is a technique that can induce both WILD and DILD dreams by paying attention to senses during a WBTB awakening. After waking up during WBTB, laydown in a comfortable way, such as on your back, arms and legs apart like a starfish, but whatever is most comfortable for you is fine. For just a few seconds, pay attention to your sense of sight, really take in what you see, or don’t see, on the back of your eyelids, then do the same for what you can hear and then what you can feel, such as the weight of your blanket or the position of your limbs. This is a warm up, do this 4 to 6 times. After this, again cycle through your senses, but this time dedicate about 30 seconds to each sense instead of just a couple. Be sure to go through the longer cycles at least a few times before falling asleep. If you cannot fall asleep during the cycles, perform 4 long cycles total and fall asleep after. If your session of SSILD results in a WILD dream, you’ll likely dream of yourself doing cycles from your bed, perform a reality check to relieve any doubts and enjoy your lucidity to the fullest.
</p>
          <IonButton onClick={e => setShowSSILD(false)}>Back</IonButton>
        </IonModal>
        <IonModal isOpen={showWBTB} swipeToClose={true}>
          <p>Wake back to bed, or WBTB, is a lucid dreaming tool where one wakes up and goes back to bed. Wake up at a time of your choosing after you have gone to bed. A recommended time range is any time between 1.5 hours after falling asleep and 1.5 hours before waking up. The general purpose of WBTB is to raise awareness during the night and more importantly, to provide the opportunity to perform techniques such as WILD and SSILD or to repeat methods such as MILD. You are not limited to just 1 WBTB per night and can do as many as you feel comfortable doing. The trick to a successful WBTB is knowing how long to stay up. If you are a light sleeper and take a longer time than average to fall asleep, a short time spent awake is recommended while if you can fall asleep quickly, you may wish to stay up longer. Timing in the 5-30 minute range is suggested. If you feel tired after repeated nights of WBTBs, consider sleeping earlier or staying in bed later to accommodate for “lost sleeping time”. WBTB is best done with another technique like MILD, WILD, or SSILD as it makes techniques like MILD more effective and is required generally for WILD and SSILD. WBTB is less effective on its own than when paired with other techniques. Practicing dream journaling and other dream recall practices during WBTB is a great way to both improve your recall and to pass the time until you’re ready to perform your technique.</p>
          <IonButton onClick={e => setShowWBTB(false)}>Back</IonButton>
        </IonModal>
    </IonContent>
    </IonPage>
);
};

export default GuidesIndex;