import {EXAMPLES} from "../../data";
import TabButton from "../TabButton/TabButton";
import {useState} from "react";
import Section from "../Section/Section";
import Tabs from "../Tabs/Tabs";

export default function Examples() {
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
        <Section title="Examples" id="examples">
            <Tabs buttons={
                Object.keys(EXAMPLES).map(key => (
                    <TabButton key={key} isSelected={selectedButton === key} onSelect={() => handleSelect(key)}>{EXAMPLES[key].title}</TabButton>)
                )}>
                {tabContent}
            </Tabs>
        </Section>
    );
}