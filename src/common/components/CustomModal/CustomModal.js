import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Modal,
} from 'react-native';
import React from 'react';
import {styles} from './CustomModal.styles';

export default function CustomModal(props) {
  const {show, onOutsidePress, onButtonPress, title, message} = props;

  return (
    <Modal transparent={true} visible={show} onRequestClose={onOutsidePress}>
      <TouchableOpacity style={styles.modal} onPress={onOutsidePress}>
        <TouchableWithoutFeedback>
          <View style={styles.modalContent}>
            {title && <Text style={styles.modalTitle}>{title}</Text>}
            {message && <Text style={styles.modalText}>{message}</Text>}
            <TouchableOpacity
              style={styles.closeButton}
              onPress={onButtonPress}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
}
