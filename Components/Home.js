import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

class Home extends React.Component {
     
    render() {
        // Accéder à la prop navigation pour la navigation
        const { navigation } = this.props;

        return (
            <View style={styles.container}>
                <View style={styles.redView} />
                <Button
                    title="Aller à la page 2"
                    onPress={() => navigation.navigate('Details')}  // Naviguer vers l'écran "Details"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    redView: {
        width: 200,  // Ajuster la taille pour qu'elle ne prenne pas tout l'écran
        height: 200,
        backgroundColor: '#f00',  // Rouge
        marginBottom: 20,  // Espace entre la vue et le bouton
    }
});

export default Home;
