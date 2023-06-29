import { View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    round: {
        width: 10,
        height: 10,
        borderRadius: '50%',
        backgroundColor: '#5FC2BA',
        marginRight: 2
    }
})

const ImagesCarouselBoutons = () => {
    return (
        <View style={{
            margin: 15,
            flexDirection: 'row',
            justifyContent: 'center'
        }}>
            <View style={styles.round}/>
            <View style={styles.round}/>
            <View style={styles.round}/>
            <View style={styles.round}/>
            <View style={styles.round}/>
        </View>
    );
};

export default ImagesCarouselBoutons;