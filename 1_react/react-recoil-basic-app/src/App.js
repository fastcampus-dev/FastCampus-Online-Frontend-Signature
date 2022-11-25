import { atom, selector } from 'recoil';
import './App.css';
import CharacterCount from './components/CharacterCount';
import TextInput from './components/TextInput';

export const textState = atom({
  key: 'textState',
  default: '',
})
export const charCountState = selector({
  key: 'charCountState',
  get: ({get}) => {
    const test = get(textState)

    return test.length;
  }
})

function App() {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  );
}

export default App;
