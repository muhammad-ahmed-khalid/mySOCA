import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '@Component/AppHeader';
import H2 from '@Component/Headings/H2';
import Metrics from '@Utility/Metrics';
import {Colors, Fonts} from '@Theme/index';
import H6 from '@Component/Headings/H6';
import ButtonView from '@Component/ButtonView';
import {EmailNewIcon, FacebookIcon, InstaIcon, PhoneNumberNewIcon, TikTokIcon, TwitterIcon, WorldIcon, YoutubeIcon} from '@Asset/logo';
import H5 from '@Component/Headings/H5';

const About = () => {
  return (
    <View style={{backgroundColor: '#1A182c', flex: 1}}>
      <Header title="About Us" />
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingVertical: Metrics.scale(23),
        }}>
        <AboutInfo />
        <ContactInfo />
        <SocialLinks />
      </ScrollView>
    </View>
  );
};

const AboutInfo = () => {
  return (
    <View>
      <View style={{marginBottom: Metrics.scale(20)}}>
        <H2 text="Get to Know Us" style={styles.totalGamePlayedTitle} />
        <H6
          style={styles.infoText}
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren"
        />
        <H6
          style={styles.infoText}
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren"
        />
      </View>
      <View style={{marginBottom: Metrics.scale(20)}}>
        <H2 text="Our Vision" style={styles.totalGamePlayedTitle} />
        <H6
          style={styles.infoText}
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren"
        />
      </View>
    </View>
  );
};

const ContactInfo = () => {
  return (
    <View >
      <H2 text="Contact Info" style={styles.totalGamePlayedTitle} />
      <IconWithText icon={<WorldIcon />} text="https:www.ktntv.tv"/>
      <IconWithText icon={<EmailNewIcon />} text="info@ktntv.com"/>
      <IconWithText icon={<PhoneNumberNewIcon />} text="1 234 234 112"/>
    </View>
  );
};

const SocialLinks = () => {
  return (
    <View style={{marginTop: Metrics.scale(20)}}>
      <H2 text="Social Links" style={styles.totalGamePlayedTitle} />
      <View style={{flexDirection: 'row'}}>
      <ButtonView style={styles.iconWrapper}>
        <TwitterIcon />
      </ButtonView>
      <ButtonView style={styles.iconWrapper}>
        <InstaIcon />
      </ButtonView>
      <ButtonView style={styles.iconWrapper}>
        <FacebookIcon />
      </ButtonView>
      <ButtonView style={styles.iconWrapper}>
        <YoutubeIcon />
      </ButtonView>
      <ButtonView style={styles.iconWrapper}>
        <TikTokIcon />
      </ButtonView>
      </View>
    </View>
  );
};

const IconWithText = ({icon, text, action}: any) => {
  return (
    <ButtonView onPress={action} style={styles.iconWithTextWrapper}>
      <View style={{width: 22}}>
        {icon && icon}
      </View>
      <H5 text={text} style={styles.iconText}/>
    </ButtonView>
  )
}

export default About;

const styles = StyleSheet.create({
  totalGamePlayedTitle: {
    ...Fonts.SemiBold(Fonts.Size.xSmall, '#98D8FA'),
    marginBottom: Metrics.scale(13),
  },
  infoText: {
    ...Fonts.Medium(Fonts.Size.xSmall, Colors.Colors.WHITE),
    lineHeight: 17,
  },
  iconWrapper:{
    marginRight: Metrics.scale(12)
  },
  iconText:{
    ...Fonts.Medium(Fonts.Size.xSmall, Colors.Colors.WHITE),
  },
  iconWithTextWrapper:{
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Metrics.scale(12)
  }
});
