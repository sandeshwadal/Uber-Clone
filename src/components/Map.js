import React, { useEffect, useRef } from 'react'
import { View, StyleSheet } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import { useSelector } from 'react-redux';
import { selectDestination, selectStart } from '../reducers/rootReducer';
import MapViewDirections from 'react-native-maps-directions';
import { MAPS_API_KEY } from '@env'

const Map = () => {
    const start = useSelector(selectStart)
    const destination = useSelector(selectDestination)
    
    const mapRef = useRef(null)
    useEffect(() => {
        mapRef.current.fitToSuppliedMarkers(['start', 'destination'], {
            EdgePadding: {
                top: 50,
                right: 50,
                bottom: 50,
                left: 50
            }
        })
    }, [start, destination])

    
    return (
        <View style={{ flex: 1 }}>
            <MapView
                ref={mapRef}
                style={styles.map}
                region={{
                    latitude: start.location.latitude,
                    longitude: start.location.longitude,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                }}
            >

                {start && destination && (
                    <MapViewDirections origin={start.location}
                        destination={destination.location}
                        apikey={MAPS_API_KEY}
                        strokeWidth={3}
                        strokeColor='black'
                        onError={(error) => {
                            console.log('MapViewDirections', error);
                        }} >

                    </MapViewDirections>
                )}
                {start?.location && (
                    <Marker coordinate={{
                        latitude: start.location.latitude,
                        longitude: start.location.longitude
                    }}
                        title={'Start'}
                        description={start.description}
                        identifier="start" >

                    </Marker>
                )}
                {destination?.location && (
                    <Marker coordinate={{
                        latitude: destination.location.latitude,
                        longitude: destination.location.longitude
                    }}
                        title={'destination'}
                        description={start.description}
                        identifier="destination" >

                    </Marker>
                )}
            </MapView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});
export default Map
