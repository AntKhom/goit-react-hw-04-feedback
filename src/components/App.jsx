import { useState } from 'react'
import Statstics from './Statistics';
import Buttons from './Buttons';
import Section from './Section';
import Notification from './Notification';

const App = () => {
    // state = {
    //     Good: 0,
    //     Neutral: 0,
    //     Bad: 0,
    //     isVoteed: false,
    // };
    
    const [Good, setGood] = useState(0);
    const [Neutral, setNeutral] = useState(0);
    const [Bad, setBad] = useState(0);
    const [isVoteed, setIsVoteed] = useState(false);

    const onLeaveFeedback = (e) => {
        if (e.target.innerText === 'Good') {
            setGood(prevState => prevState + 1)
        };
        if (e.target.innerText === 'Neutral') {
            setNeutral(prevState => prevState + 1)
        };
        if (e.target.innerText === 'Bad') {
            setBad(prevState => prevState + 1)
        };
        setIsVoteed(prevState => true);
        // const option = e.target.innerText;
        // return {
        //     [option]: prevState[option] + 1,
        //     isVoteed:true
        //  };
    };

    const countTotalFeedback = () => {
        // const { Good, Neutral, Bad } = this.state;
        return Good + Neutral + Bad;
    }
    const countPositiveFeedbackPercentage = () => {
        // const { Good, Neutral, Bad } = this.state;
        const total = Good + Neutral + Bad;
        if (total === 0) {
            return 0;
        }
        return Math.round((Good / total) * 100);
     }
        
    return <div>
        <Section title="Please leave feadback">
           <Buttons options={['Good', 'Neutral', 'Bad']}
            onLeaveFeedback={onLeaveFeedback}
        />
        </Section>
                       
        {(isVoteed) ? <Section title="Statistics">
            <Statstics
                good={Good}
                neutral={Neutral}
                bad={Bad}
                total={countTotalFeedback()}
                positivePercentage={countPositiveFeedbackPercentage()}
            />
        </Section> : <Notification message="There is no feedback" />}   
    </div>

}

export default App;

