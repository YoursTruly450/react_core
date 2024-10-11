import { useState } from 'react';
import { CORE_CONCEPTS } from './data';

import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept/CoreConcept';
import TabButton from './components/TabButton/TabButton';

export const App = () => {
  const [selectedContent, setselectedContent] = useState('Please click button');

  const onClickHandler = (selectedTab) => {
    // selectedTab => 'components', 'jsx', 'props', 'state'
    setselectedContent(selectedTab);
  };

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => onClickHandler('components')}>Components</TabButton>
            <TabButton onSelect={() => onClickHandler('jsx')}>Jsx</TabButton>
            <TabButton onSelect={() => onClickHandler('props')}>Props</TabButton>
            <TabButton onSelect={() => onClickHandler('state')}>State</TabButton>
          </menu>
          {selectedContent}
        </section>
      </main>
    </div>
  );
}

export default App;