import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3499dc',
    height: '100%',
    width: '100%',
    paddingTop: 20,
    paddingHorizontal: 30,
    paddingBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  loginForm: {
    backgroundColor: '#d9eaf8',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
  },

  header: {
    fontSize: 24,
    color: 'black',
    marginBottom: 10,
  },

  input: {
    backgroundColor: 'white',
    paddingLeft: 10,
    color: 'black',
    borderRadius: 5,
  },

  passwordContainer: {
    position: 'relative',
    width: '100%',
  },

  passwordIcon: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{translateY: -45}],
    width: 20,
    height: 20,
  },

  loginButton: {
    backgroundColor: '#2096f3',
    paddingVertical: 5,
    borderRadius: 5,
  },

  loginButtonText: {
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 20,
    textAlign: 'center',
  },

  marginBot: {
    marginBottom: 10,
  },
});

export default styles;
