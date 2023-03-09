import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/Navigations/StackNavigation.jsx';

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}


