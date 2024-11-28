import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, StyleSheet, Button } from 'react-native';
import AboutUsFooter from '../components/AboutUsFooter';

const AboutUs = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>

        {/* Welcome Section */}
        <View style={styles.welcomeSection}>
          <View style={styles.textBlock}>
            <Text style={styles.heading}>Welcome to Our Family!</Text>
            <Text style={styles.description}>
              At our company, we don't just offer services – we create lifelong connections. Since 1999,
              we've been dedicated to helping individuals and families find their perfect homes.
            </Text>
            <Text style={styles.description}>
              Let us take the stress out of the process and bring the joy of homeownership closer to you.
            </Text>
            <Button title="Let's Connect!" onPress={() => {}} color="#007bff" />
          </View>
          <Image source={require('../assets/images/MeetingRoom.jpg')} style={styles.image} />
        </View>

        {/* Core Values Section */}
        <View style={styles.valuesSection}>
          <Text style={styles.sectionHeading}>Our Core Values</Text>
          <View style={styles.valuesContent}>
            {values.map((value, index) => (
              <View key={index} style={styles.valueBlock}>
                <Text style={styles.valueTitle}>{value.title}</Text>
                <Text style={styles.valueDescription}>{value.description}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Meet the Team Section */}
        <View style={styles.teamSection}>
          <Text style={styles.sectionHeading}>Meet the Team</Text>
          {teamMembers.map((member, index) => (
            <View key={index} style={styles.teamMember}>
              <Image source={member.image} style={styles.teamImage} />
              <Text style={styles.teamName}>{member.name}</Text>
              <Text style={styles.teamRole}>{member.role}</Text>
            </View>
          ))}
        </View>

        {/* Footer Section */}
        <AboutUsFooter />
      </ScrollView>
    </SafeAreaView>
  );
};

const values = [
  { title: 'Integrity', description: 'We uphold the highest standards of integrity in every project we undertake.' },
  { title: 'Commitment', description: 'We are committed to meeting our clients\' goals with professionalism and excellence.' },
  { title: 'Innovation', description: 'We constantly innovate to provide solutions that make the real estate process seamless.' },
];

const teamMembers = [
  { name: 'John Doe', role: 'CEO', image: require('../assets/images/CEO.jpg') },
  { name: 'Jane Smith', role: 'Manager', image: require('../assets/images/manager.jpg') },
  { name: 'Alice Brown', role: 'Agent', image: require('../assets/images/agent.jpg') },
  { name: 'Michael White', role: 'Consultant', image: require('../assets/images/consultant.jpg') },
];

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#ffffff' },
  container: { flex: 1 },
  
  welcomeSection: {
    padding: 20,
    flexDirection: 'column',
    alignItems: 'center',
  },
  textBlock: { marginBottom: 20 },
  heading: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  description: { fontSize: 14, color: '#4a4a4a', marginBottom: 10 },
  image: { width: '100%', height: 200, borderRadius: 10, marginTop: 20 },
  valuesSection: {
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  sectionHeading: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  valuesContent: { flexDirection: 'column', alignItems: 'center' },
  valueBlock: { marginVertical: 10, alignItems: 'center' },
  valueTitle: { fontSize: 16, fontWeight: 'bold', color: '#007bff' },
  valueDescription: { fontSize: 14, textAlign: 'center', color: '#666' },
  teamSection: { padding: 20 },
  teamMember: { alignItems: 'center', marginBottom: 20 },
  teamImage: { width: 100, height: 100, borderRadius: 50 },
  teamName: { fontSize: 16, fontWeight: 'bold', marginTop: 10 },
  teamRole: { fontSize: 14, color: '#666' },
});

export default AboutUs;
