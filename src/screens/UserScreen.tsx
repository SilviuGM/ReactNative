import React from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";
import UserDetails from "../components/User";
import { useAuth } from "../hooks/AuthContext";

const UserDetailScreen = () => {
    const auth = useAuth();

    return (
        <SafeAreaView style={styles.container}>
            <UserDetails />
            <TouchableOpacity style={styles.logOutButton} onPress={auth.logout}>
                <Text style={styles.logOutText}>Log Out</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    logOutButton: {
        width: "25%",
        height: 40,
        backgroundColor: "#FFFF00",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginBottom: 10,
    },
    logOutText: {
        fontSize: 20,
        color: "#fff",
    },
});

export default UserDetailScreen;

