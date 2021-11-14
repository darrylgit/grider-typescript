import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('eefaDEFAefmzp');
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(-11);
linkedList.add(25);
linkedList.add(50);
linkedList.add(-5);
linkedList.add(3);
linkedList.sort();
linkedList.print();
