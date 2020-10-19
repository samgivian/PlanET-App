import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    ScrollView,
    View
} from 'react-native';
import { Calendar, CalendarList } from 'react-native-calendars';

export default class CalendarsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View>
                <CalendarList
                    current={'2019-10-15'}
                    pastScrollRange={24}
                    futureScrollRange={24}
                    horizontal
                    pagingEnabled
                    
                    style={{ borderBottomWidth: 1, borderBottomColor: 'black'}}
                    markedDates={{
                        '2019-10-23': { selected: true, marked: true },
                        '2019-10-24': { selected: true, marked: true, dotColor: 'green' },
                        '2019-11-25': { marked: true, dotColor: 'red' },
                        '2019-11-26': { marked: true },
                        '2019-10-27': { disabled: true, activeOpacity: 0 }
                    }}
                 //   disabledByDefault={true}
                  //  hideArrows={true}
                />
            </View>

            ///  <ScrollView style={styles.container}>


            ///    <Calendar
            ///      style={styles.calendar}
            ///      current={'2012-05-16'}
            //  minDate={'2012-05-10'}
            //  maxDate={'2012-05-29'}
            ///      firstDay={1}
            ///      markedDates={{
            ///         '2012-05-23': {selected: true, marked: true},
            //         '2012-05-24': {selected: true, marked: true, dotColor: 'green'},
            //         '2012-05-25': {marked: true, dotColor: 'red'},
            //         '2012-05-26': {marked: true},
            ///        '2012-05-27': {disabled: true, activeOpacity: 0}
            //        }}
            // disabledByDefault={true}
            //      hideArrows={true}
            ///       pastScrollRange={24}
            ///       futureScrollRange={24}
            ///       horizontal
            ///       pagingEnabled
            ///       style={{borderBottomWidth: 1, borderBottomColor: 'black'}}
            ///     />
            //   </ScrollView>
        );
    }


}

const styles = StyleSheet.create({
    calendar: {
        borderTopWidth: 1,
        paddingTop: 5,
        borderBottomWidth: 1,
        borderColor: '#eee',
        height: 350
    },
    text: {
        textAlign: 'center',
        borderColor: '#bbb',
        padding: 10,
        backgroundColor: '#eee'
    },
    container: {
        flex: 1,

    }
});