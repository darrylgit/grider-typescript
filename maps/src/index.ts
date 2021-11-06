/// <reference types="@types/google.maps" />
// import { User } from './User';
// import { Company } from './Company';
import { CustomMap } from './CustomMap';
import { User } from './User';

// const user = new User();
// const company = new Company();

// console.log(user);
// console.log(company);
const user = new User();
const customMap = new CustomMap('map');

customMap.addUserMarker(user);
