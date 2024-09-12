/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './style';

function App(): React.JSX.Element {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const handleVisiblePassword = () => {
    setIsVisible(!isVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginForm}>
        <Text style={styles.header}>Đăng Nhập</Text>

        <TextInput
          style={[styles.input, styles.marginBot]}
          placeholder="Tên đăng nhập"
        />

        <View style={styles.passwordContainer}>
          <TextInput
            secureTextEntry={isVisible}
            style={[styles.input, styles.marginBot]}
            placeholder="Mật khẩu"
          />

          <TouchableOpacity onPress={handleVisiblePassword}>
            <Image
              style={styles.passwordIcon}
              source={
                isVisible
                  ? require('../../assets/visibility.png')
                  : require('../../assets/visibility_off.png')
              }
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default App;
