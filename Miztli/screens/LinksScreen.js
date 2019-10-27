import React, {Component} from 'react';
import { View } from 'react-native';
import QRScannerView from 'react-native-qrcode-scanner-view';

export default class DefaultScreen extends Component {

    renderTitleBar = () => <Text style={{color:'white',textAlign:'center',padding:16}}>Title</Text>

    renderMenu = () => <Text style={{color:'white',textAlign:'center',padding:16}}>Menu</Text>

    barcodeReceived = (event) => { console.log('Type: ' + event.type + '\nData: ' + event.data) };

    render() {
        return (
           <View style={{flex:1}}>
            <QRScannerView
                onScanResult={ this.barcodeReceived }
                renderHeaderView={ this.renderTitleBar }
                renderFooterView={ this.renderMenu }
                scanBarAnimateReverse={ true } />
           </View>
        )
    }
}