import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, Button, Alert } from "react-native";

export default function App() {
  return (
    <ScrollView style={styles.screen}>
      {/* Header */}
      <View style={styles.headerBox}>
        <Text style={styles.groupTitle}>OOTD Everyday</Text>
        <Text style={styles.groupSubtitle}>
          Fit check! 🧥 You know we’ll hype you up.
        </Text>
      </View>

      {/* Stats Row */}
      <View style={styles.statsRow}>
        <Text style={styles.stat}>53 Posts</Text>
        <Text style={styles.stat}>12 Members</Text>
        <Text style={styles.stat}>1 Admin</Text>
      </View>

      {/* Grid */}
      <View style={styles.grid}>
        {Array.from({ length: 9 }).map((_, i) => (
          <Image
            key={i}
            style={styles.gridImage}
            source={{ uri: `https://picsum.photos/200?random=${i}` }}
          />
        ))}
      </View>

      {/* Alert Button */}
      <View style={styles.alertButton}>
        <Button
          title="Alert"
          onPress={() => Alert.alert("Alert Button pressed")}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  headerBox: {
    marginBottom: 20,
  },
  groupTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#111827",
  },
  groupSubtitle: {
    fontSize: 16,
    color: "#374151",
    marginTop: 4,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  stat: {
    fontSize: 14,
    fontWeight: "600",
    color: "#4B5563",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  gridImage: {
    width: "30%",
    height: 100,
    borderRadius: 8,
    marginBottom: 10,
  },
  alertButton: {
    marginTop: 40,
    marginBottom: 60,
  },
});
