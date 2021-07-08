import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, 
    ActivityIndicator, FlatList, Image, TouchableWithoutFeedback } from 'react-native';

export default function Homepage({navigation}){
    const [dataLoading, finishLoading] = useState(true);
    const [newsData, setData] = useState([]);

    useEffect(() =>{
    fetch('https://newsapi.org/v2/everything?q=tech&apiKey=6235474e21cb4baebd0b5eeebf2dcb22')    
        .then((response) => response.json())
        .then((json) => setData(json.articles))
        .catch((error) => console.error(error))
        .finally(() => finishLoading(false));
    }, []);

    const storyItem = ({item}) =>{
        return(
            <TouchableWithoutFeedback
                onPress={() =>
                            navigation.navigate('News', {url: item.url})
                }
            >
                <View style={styles.listings}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Image
                        style={styles.thumbnail}
                        source={{uri: item.urlToImage}}
                    />
                    <Text style={styles.blurb}>{item.description}</Text>    
                </View>    
            </TouchableWithoutFeedback>
        );
    };

    return (
        <View style={styles.container}>
            {dataLoading ? <ActivityIndicator/> : (
                <FlatList
                    data={newsData}
                    renderItem={storyItem}
                    keyExtractor={(item) => item.url}
                />    
            )}
        </View>    
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginTop: 90,
    },
    thumbnail: {
        height: 200,
        width: '100%',
        resizeMode: 'stretch',
        marginBottom: 10
    },
    listings: {
        paddingTop: 15,
        paddingBottom: 25,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        paddingBottom: 10,
        fontWeight: 'bold'
    },
    blurb: {
        fontStyle: 'italic'
    }
});
