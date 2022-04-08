import { IonButton, IonButtons, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonFabButton, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonPopover, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { add } from 'ionicons/icons';

const Home: React.FC = () =>{

    return(
        <IonPage>
            <IonHeader className='ion-text-center'>
                <IonToolbar>
                    <IonTitle>App clima!</IonTitle>
                    <IonButtons slot='end'>
                        <IonButton id="nested-button">{/**es el id que escucha el popover para funcionar */}
                            <IonIcon icon={add} />
                        </IonButton>
                        <IonPopover trigger="nested-button" dismissOnSelect={true} animated={true} >{/*la propiedad trigger es la que abre el popover a traves de un id*/} 
                            <IonContent>
                                <IonList>
                                    <IonItem routerLink='/ubicacion' routerDirection='none' button={true} detail={false}>
                                        <IonLabel>Localidad</IonLabel>
                                    </IonItem>
                                    <IonItem button={true} detail={false}>
                                        <IonLabel>Cerrar</IonLabel>
                                    </IonItem>
                                </IonList >
                            </IonContent >
                        </IonPopover >
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonCard>
                                <IonCardHeader>
                                    <IonCardSubtitle>localidad</IonCardSubtitle>
                                    <IonCardTitle>temperatura</IonCardTitle>
                                </IonCardHeader>
                                <img />
                            </IonCard>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );

};

export default Home;