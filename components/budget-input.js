import Button from 'react-native-button';
import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
} from 'react-native'
import styles from '../styles';

export default class BudgetInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      item: '',
      cost: ''
    }
  }

  createItem() {
    this.props.onCreate({
      item: this.state.item,
      cost: this.state.cost,
      time: new Date()
    })
  }

  render() {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
        <View style={{flex: 1}}>
          <TextInput placeholder="What did you buy?"
                     blurOnSubmit={true}
                     onChangeText={(text) => this.setState({item: text})} />
          <TextInput placeholder="How much was it?"
                     blurOnSubmit={true}
                     onChangeText={(text) => this.setState({cost: text})} />
        </View>
        <Button containerStyle={styles.button}
                style={{fontSize: 40, paddingBottom: 3, color: '#FFFFFF' }}
                onPress={() => this.createItem()}>
          +
        </Button>
     </View>
    );
  }
}
