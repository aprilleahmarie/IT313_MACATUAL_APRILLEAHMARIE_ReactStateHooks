import { StyleSheet, Text, View } from 'react-native';

// Define props interface ABOVE the function
interface StopwatchProps {
  seconds: number;
  isRunning: boolean;
}

export default function Stopwatch({ seconds, isRunning }: StopwatchProps) {
  // Format seconds into MM:SS format
  const formatTime = (totalSeconds: number): string => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    const pad = (num: number) => (num < 10 ? `0${num}` : `${num}`);
    return `${pad(mins)}:${pad(secs)}`;
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Lab Timer</Text>
      <Text style={styles.timerDisplay}>{formatTime(seconds)}</Text>

      {/* Conditional status display */}
      <Text style={[styles.statusText, isRunning ? styles.running : styles.paused]}>
        {isRunning ? 'Running...' : 'Paused'}
      </Text>
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
  timerDisplay: {
    fontSize: 36,
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },
  statusText: {
    fontSize: 16,
    marginTop: 5,
    fontWeight: '600',
  },
  running: {
    color: '#2e7d32',
  },
  paused: {
    color: '#ododod',
  },
});