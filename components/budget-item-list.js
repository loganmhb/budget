import { ListView } from 'react-native';
import styles from '../styles';
import BudgetItem from './budget-item';
import React, {Component} from 'react';

export default class BudgetItemList extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds.cloneWithRows(this.props.data)
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(newProps.data)
    });
  }

  render() {
    return (
      <ListView contentContainerStyle={styles.container}
                dataSource={this.state.dataSource}
                enableEmptySections={true}
      renderRow={(rowData) => {
        return( <BudgetItem data={rowData} /> )
      }} />
    );
  }
}
