import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { AppSafeAreaView } from '../../component/AppSafeAreaView';
import { AppView } from '../../component/AppView';
import { styles } from './style';
import { AppCardView } from '../../component/AppCardView';
import { CandidateIntroView } from '../../component/CandidateIntroView';
import { CandidateDetailsView } from '../../component/CandidateDetailsView';
import { CandidateInterface, getCandidate } from '../../TypesAndInterfaces/CandidateInterface';
import { AppScrollView } from '../../component/AppScrollView';
import { TextView } from '../../component/TextView';
import { TitleView } from '../../component/TitleView';
import english from '../../Util/string/english/index.json';

export const Second = () => {
    
    const [Data, setData] = useState<CandidateInterface | null>();
  
    useEffect(() => {

        setData(getCandidate());
    }, [])

     return (
        <AppSafeAreaView style={styles.SafeareaViewStyle}>
            <AppCardView style={styles.MainView}>
                <ScrollView   style={{ flex: 1 }}>

                    <AppView style={styles.childAppView}>

                        <TitleView text={english.label_education_Info}  >

                        </TitleView>


                    </AppView>

                </ScrollView>

            </AppCardView>


        </AppSafeAreaView>
    )
}