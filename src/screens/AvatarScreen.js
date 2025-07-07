import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { imagePaths } from '../themes/ImagePath';

export default function AvatarScreen({ route, navigation }) {
  const { setSelectedAvatar } = route.params;

  const avatars = [
    imagePaths.avatar1,
    imagePaths.avatar2,
    imagePaths.avatar3,
    imagePaths.avatar3,
    imagePaths.avatar2,
    imagePaths.avatar1,
    imagePaths.avatar2,
    imagePaths.avatar1,
    imagePaths.avatar3,
  ];

  return (
    <View style={styles.avatarScreen}>
      <Text style={styles.avatarTitle}>CHOOSE YOUR LOOK</Text>
      <Text style={styles.avatarSubtitle}>You can customize it later.</Text>
      <View style={styles.avatarGrid}>
        {avatars.map((avatar, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              setSelectedAvatar(avatar);
              navigation.goBack();
            }}
          >
            <Image source={ avatar } style={styles.avatarCircle} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  avatarScreen: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: '#cceeff',
  },
  avatarTitle: { fontSize: 22, fontWeight: 'bold' },
  avatarSubtitle: { marginBottom: 20, color: '#555' },
  avatarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
  },
  avatarCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    margin: 10,
  },
});
