import React, {useState} from 'react';
import {StyleSheet, View, Button} from 'react-native';
import {THEME} from '../theme';
import {AppCard} from '../components/ui/AppCard';
import {EditModal} from '../components/EditModal';
import {AppTextBold} from '../components/ui/AppTextBold';
import {AppButton} from '../components/ui/AppButton';

import Icon from 'react-native-vector-icons/FontAwesome';

export const TodoScreen = ({goBack, todo, onRemove, onSave}) => {
  const [modal, setModal] = useState(false)

  const saveHandler = title => {
    onSave(todo.id, title);
    setModal(false);
  }

  return (
    <View>
      <EditModal value={todo.title} visible={modal} onCancel={() => setModal(false)} onSave={saveHandler}
      />

      <AppCard style={styles.card}>
        <AppTextBold style={styles.title}>{todo.title}</AppTextBold>
        <AppButton onPress={() => setModal(true)} ><Icon name='edit' size={20} color="#fff" /></AppButton>
      </AppCard>

      <View style={styles.buttons}>
        <View style={styles.button}>
          <AppButton onPress={goBack} color={THEME.GRAY_COLOR}><Icon name='backward' size={20} color="#fff" /></AppButton>
        </View>
        <View style={styles.button}>
          <AppButton color={THEME.DANGER_COLOR} onPress={() =>onRemove(todo.id)}><Icon name='trash' size={20} color="#fff" /></AppButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: '40%'
  },
  title: {
    fontSize: 20,
  },
  card: {
    marginBottom: 20,
    padding: 15,
  }
});
