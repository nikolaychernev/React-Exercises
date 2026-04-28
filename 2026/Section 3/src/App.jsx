import {useState} from "react";

import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import TabButton from "./components/TabButton/TabButton";
import {CORE_CONCEPTS, EXAMPLES} from "./data.js";

function App() {
    const [selectedButton, setSelectedButton] = useState();

    function handleSelect(selectedButton) {
        setSelectedButton(selectedButton);
    }

    let tabContent = <p>Please select a topic.</p>;

    if (selectedButton) {
        tabContent = (
            <div id={"tab-content"}>
                <h3>{EXAMPLES[selectedButton].title}</h3>
                <p>{EXAMPLES[selectedButton].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedButton].code}</code>
                </pre>
            </div>
        )
    }

    return (
        <div>
            <Header/>
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        {CORE_CONCEPTS.map(c => (
                            <CoreConcept key={c.title} {...c}/>)
                        )}
                    </ul>
                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        {Object.keys(EXAMPLES).map(key => (
                            <TabButton key={key} isSelected={selectedButton === key} onSelect={() => handleSelect(key)}>{EXAMPLES[key].title}</TabButton>)
                        )}
                    </menu>
                    {tabContent}
                </section>
            </main>
        </div>
    );
}

export default App;
