import {useState} from "react";

import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import TabButton from "./components/TabButton/TabButton";
import {CORE_CONCEPTS, EXAMPLES} from "./data.js";

function App() {
    const [selectedButton, setSelectedButton] = useState('components');

    function handleSelect(selectedButton) {
        setSelectedButton(selectedButton);
    }

    return (
        <div>
            <Header/>
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        <CoreConcept {...CORE_CONCEPTS[0]}/>
                        <CoreConcept {...CORE_CONCEPTS[1]}/>
                        <CoreConcept {...CORE_CONCEPTS[2]}/>
                        <CoreConcept {...CORE_CONCEPTS[3]}/>
                    </ul>
                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
                        <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
                        <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
                        <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
                    </menu>
                    <div id={"tab-content"}>
                        <h3>{EXAMPLES[selectedButton].title}</h3>
                        <p>{EXAMPLES[selectedButton].description}</p>
                        <pre>
                            <code>{EXAMPLES[selectedButton].code}</code>
                        </pre>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;
