import { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, View } from 'react-native';
import PracticeTracker from '../components/PracticeTracker';
import Stopwatch from '../components/Stopwatch';
import { useStopwatch } from '../hooks/useStopwatch';

export default function LabScreen() {
  // State 1: Solved practice count
  const [solved, setSolved] = useState<number>(0);

  // State 2: Stopwatch running status
  const [isRunning, setIsRunning] = useState<boolean>(false);

  // Consume Custom Hook
  const seconds = useStopwatch(isRunning);

  // Event handlers using functional update form
  const handleSolve = () => {
    setSolved((prev) => prev + 1);
  };

  const handleReset = () => {
    setSolved(0);
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Sibling Component 1 */}
      <PracticeTracker
        solved={solved}
        onSolve={handleSolve}
        onReset={handleReset}
      />

      {/* Sibling Component 2 */}
      <Stopwatch seconds={seconds} isRunning={isRunning} />

      {/* Timer Controls */}
      <View style={styles.controls}>
        <Button title="Start Timer" onPress={handleStart} disabled={isRunning} />
        <Button title="Stop Timer" onPress={handleStop} color="#d32f2f" disabled={!isRunning} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
});