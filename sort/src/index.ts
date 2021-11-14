import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('eefaDEFAefmzp');
const charSorter = new Sorter(charactersCollection);
charSorter.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(-10);
linkedList.add(25);
linkedList.add(50);
linkedList.add(-5);
linkedList.add(3);
const linkedListSorter = new Sorter(linkedList);
linkedListSorter.sort();
linkedList.print();
