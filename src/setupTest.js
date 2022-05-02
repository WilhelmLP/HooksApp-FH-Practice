import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { createSerializer } from "enzyme-to-json";
 
Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: "deep" })); //|shallow

//**Si se queire usar enzyme en el package.json se usa esta versión de React */
// "dependencies": {
//     "@testing-library/jest-dom": "^5.16.3",
//     "@testing-library/react": "^12.1.4",
//     "@testing-library/user-event": "^13.5.0",
//     "react": "^18.0.0",
//     "react-dom": "^18.0.0",
//   }
// A
// "dependencies": {
//     "@testing-library/jest-dom": "^5.16.3",
//     "@testing-library/react": "^12.1.4",
//     "@testing-library/user-event": "^13.5.0",
//     "react": "^17.0.2",
//     "react-dom": "^17.0.2",
//   }
