import PaintingList from "./components/PaintingList"
import data from "./data.json"
import Section from "./components/Section";

export default function App() {
    return (
        <div>
            <Section title='TOP of the week'>
                <PaintingList items={data} />
            </Section>
            <Section />
            {/**/}
        </div>);
}

