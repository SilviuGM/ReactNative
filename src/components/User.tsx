import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { useAuth } from "../hooks/AuthContext";
import { getProfile } from "../api";

const UserDetails = () => {
    const [id, setId] = useState("Loading...");
    const [email, setEmail] = useState("");
    const [gamesPlayed, setGamesPlayed] = useState("...");
    const [gamesLost, setGamesLost] = useState("...");
    const [gamesWon, setGamesWon] = useState("...");
    const [currentlyPlaying, setCurrentlyPlaying] = useState("...");
    const auth = useAuth();

    useEffect(() => {
        getProfile(auth.token).then((response) => {
            setId(response.user.id);
            setEmail(response.user.email);
            setGamesPlayed(response.gamesPlayed);
            setGamesLost(response.gamesLost);
            setGamesWon(response.gamesWon);
            setCurrentlyPlaying(response.currentlyGamesPlaying);
        });
    }, []);

    return (
        <View style={styles.container}>
            
            <Text style={styles.email}>EMAIL: {email}</Text>
            <Text style={styles.id}>ID: {id}</Text>

            <Text style={styles.games}>Games Played</Text>
            <Text style={styles.value}>{gamesPlayed}</Text>

            <Text style={styles.games}>Games In Progress</Text>
            <Text style={styles.value}>{currentlyPlaying}</Text>

            <Text style={styles.games}>Games Won</Text>
            <Text style={styles.value}>{gamesWon}</Text>

            <Text style={styles.games}>Games Lost</Text>
            <Text style={styles.value}>{gamesLost}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        padding: 10,
    },
    icon: {
        alignSelf: "center",
        margin: 10,
    },
    email: {
        fontSize: 20,
        fontWeight: "bold",
    },
    id: {
        fontSize: 15,
        marginTop: 10,
        marginBottom: 10,
    },
    games: {
        fontSize: 12,
    },
    value: {
        fontSize: 20,
    },
});

export default UserDetails;
