import {
  View,
  Text
} from 'react-native';
import React, {Component}  from 'react';
import styles from '../styles'
import BudgetItemList from './budget-item-list';
import BudgetInput from './budget-input';

export default class SimpleBudget extends Component {

  constructor(props) {
      super(props);
      this.state = {
        data: []
      };
  }

  addItem(item) {
    this.setState({
      data: this.state.data.concat([ item ])
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{color: '#FFFFFF'}}>
            Welcome to my simple budget app.
          </Text>
        </View>
        <BudgetItemList data={this.state.data} />
        <BudgetInput onCreate={this.addItem.bind(this)} />
      </View>
    );
  }
}
