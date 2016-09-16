import {
  View,
  Text
} from 'react-native';
import React, {Component} from 'react';
import styles from '../styles';


export default class BudgetItem extends Component {
  render() {
    return (
      <View style={styles.box}>
        <Text style={styles.budgetItem}>
          {this.props.data.item}
        </Text>
        <Text style={styles.budgetItem}>
          {this.props.data.cost}
       </Text>
      </View>
    );
  }
}
