import {Linking, View} from 'react-native';
import * as StoreReview from 'react-native-store-review';
import style from './styles';
import SettingButton from '../../components/SettingsButton';
import {useSelector} from 'react-redux';

const SettingsPage = () => {
  const {isSubs} = useSelector((state: any) => state.app);

  return (
    <View style={style.container}>
      {isSubs && (
        <View style={style.header}>
          <SettingButton text={'Limitless Membership'} onPress={() => {}} />
        </View>
      )}
      <View style={style.content}>
        <SettingButton
          index={0}
          text={'Contact Us'}
          onPress={() => Linking.openURL('mailto:....')}
        />
        <SettingButton
          index={1}
          text={'Rate Us'}
          onPress={() => StoreReview.requestReview()}
        />
        <SettingButton
          index={2}
          text={'Terms of Use'}
          onPress={() => Linking.openURL('')}
        />
        <SettingButton
          index={3}
          text={'Privacy Policy'}
          hasBorder={false}
          onPress={() => Linking.openURL('')}
        />
      </View>
    </View>
  );
};

export default SettingsPage;
