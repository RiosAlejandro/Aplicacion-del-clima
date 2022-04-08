import { IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const City: React.FC = () =>{
    return(

        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Selecciona la región</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position='fixed'>Ciudad</IonLabel>
                                <IonInput value='text'></IonInput>
                            </IonItem>
                            <IonItem>
                                <IonLabel position='fixed'>Provincia</IonLabel>
                                <IonInput value='text'></IonInput>
                            </IonItem>
                            <IonItem>
                                <IonLabel position='fixed'>País</IonLabel>
                                <IonInput value='text'></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
    ;
};

export default City;
