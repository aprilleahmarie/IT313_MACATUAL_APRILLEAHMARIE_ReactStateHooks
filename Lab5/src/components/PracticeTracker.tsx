import { Button, StyleSheet, Text, View } from 'react-native';

export default function PracticeTracker({ solved, onSolve, onReset }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Practice Tracker</Text>
      <Text style={styles.countText}>Solved: {solved}</Text>

      {/* Conditional Rendering: Show message when solved >= 5 */}
      {solved >= 5 && (
        <Text style={styles.congratsText}>Great job!</Text>
      )}

      <View style={styles.buttonContainer}>
        {/* Event handlers passed as direct function references */}
        <Button title="Solve +1" onPress={onSolve} />
        <Button title="Reset" onPress={onReset} color="#d9b8ff" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    backgroundColor: '#ododod',
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  countText: {
    fontSize: 22,
    marginBottom: 8,
  },
  congratsText: {
    fontSize: 16,
    color: 'd9b8ff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
  },
});