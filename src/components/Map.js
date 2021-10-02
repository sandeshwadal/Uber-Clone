import React, { useEffect, useRef } from 'react'
import { View, StyleSheet } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import { useDispatch, useSelector } from 'react-redux';
import { selectDestination, selectStart, setTravelTime } from '../reducers/rootReducer';
import MapViewDirections from 'react-native-maps-directions';
import { MAPS_API_KEY } from '@env'

const Map = () => {
    const start = useSelector(selectStart)
    const destination = useSelector(selectDestination)
    const mapRef = useRef(null)
    const dispatch = useDispatch()
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

    useEffect(async () => {
        const getTravelTime = async () => {
            const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${start.description}&destinations=${destination.description}&key=${MAPS_API_KEY}`
            fetch(url)
                .then(data => data.json())
                .then((res) => {
                    dispatch(setTravelTime(res.rows[0].elements[0]))
                })
        }

        getTravelTime()
    }, [start, destination, MAPS_API_KEY])

    return (

        <View style={{ flex: 1 }}>
            <MapView
                showsScale={true}
                cacheEnabled={true}
                ref={mapRef}
                style={styles.map}
                region={{
                    latitude: start.location.lat,
                    longitude: start.location.lng,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                }}
            >

                {start && destination && (
                    <MapViewDirections origin={start.description}
                        destination={destination.description}
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
                        latitude: start.location.lat,
                        longitude: start.location.lng
                    }}
                        title={'Start'}
                        description={start.description}
                        identifier="start" >

                    </Marker>
                )}
                {destination?.location && (
                    <Marker coordinate={{
                        latitude: destination.location.lat,
                        longitude: destination.location.lng
                    }}
                        title={'Destination'}
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
