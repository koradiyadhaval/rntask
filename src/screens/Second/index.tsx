import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, View } from 'react-native';
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
import { EducationViewItem } from '../../component/AppItemviews/EducationViewItem';

export const Second = () => {

    const [Data, setData] = useState<CandidateInterface | null>();

    useEffect(() => {

        setData(getCandidate());
    }, [])

    return (
        <AppSafeAreaView style={styles.SafeareaViewStyle}>
            <AppCardView style={styles.MainView}>


                <AppView style={styles.childAppView}>

                    <TitleView text={english.label_education_Info}  >

                    </TitleView>
                    <FlatList data={Data?.education}
                        extraData={Data?.education}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => {

                            return (<EducationViewItem item={item}></EducationViewItem>)
                        }}
                    >

                    </FlatList>

                </AppView>


            </AppCardView>

        </AppSafeAreaView>
    )
}